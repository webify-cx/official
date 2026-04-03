/**
 * Service Worker for Webify PWA
 * Handles offline functionality, caching, and background tasks
 */

const CACHE_VERSION = 'webify-v1'
const RUNTIME_CACHE = 'webify-runtime'
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
]

// Install: Cache essential files
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...')
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('[SW] Caching static assets')
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Some assets failed to cache:', err)
        return Promise.resolve()
      })
    }).then(() => self.skipWaiting())
  )
})

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_VERSION && name !== RUNTIME_CACHE)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name)
            return caches.delete(name)
          })
      )
    }).then(() => self.clients.claim())
  )
})

// Helper: Safe clone and cache
const safeCacheResponse = (cache, request, response) => {
  try {
    // Only cache if response is OK and cloneable
    if (response && response.status === 200 && response.clone) {
      cache.put(request, response.clone()).catch((err) => {
        console.warn(`[SW] Failed to cache ${request.url}:`, err)
      })
    }
  } catch (err) {
    console.warn(`[SW] Error caching response for ${request.url}:`, err)
  }
}

// Fetch: Network-first strategy with cache fallback
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return
  }

  // HTML: Network-first, cache fallback
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses asynchronously
          if (response.status === 200) {
            caches.open(RUNTIME_CACHE).then((cache) => {
              safeCacheResponse(cache, request, response)
            })
          }
          return response
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request).then((cached) => {
            return cached || caches.match('/index.html')
          })
        })
    )
    return
  }

  // CSS/JS: Cache-first, network fallback (for performance)
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.open(RUNTIME_CACHE)
        .then((cache) => {
          return cache.match(request).then((cached) => {
            if (cached) {
              return cached
            }
            // Not in cache, fetch from network
            return fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  safeCacheResponse(cache, request, response)
                }
                return response
              })
              .catch(() => {
                return new Response('/* Offline - resource unavailable */', {
                  status: 503,
                  headers: new Headers({ 'Content-Type': 'text/plain' }),
                })
              })
          })
        })
        .catch(() => {
          return new Response('Cache access failed', {
            status: 503,
            headers: new Headers({ 'Content-Type': 'text/plain' }),
          })
        })
    )
    return
  }

  // Images/Fonts: Cache-first, network fallback
  if (request.destination === 'image' || request.destination === 'font') {
    event.respondWith(
      caches.open(RUNTIME_CACHE)
        .then((cache) => {
          return cache.match(request).then((cached) => {
            if (cached) {
              return cached
            }
            // Not in cache, fetch from network
            return fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  safeCacheResponse(cache, request, response)
                }
                return response
              })
              .catch(() => {
                if (request.destination === 'image') {
                  return new Response(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="#111" width="100" height="100"/></svg>',
                    {
                      headers: new Headers({ 'Content-Type': 'image/svg+xml' }),
                    }
                  )
                }
                return new Response('Offline', {
                  status: 503,
                  headers: new Headers({ 'Content-Type': 'text/plain' }),
                })
              })
          })
        })
        .catch(() => {
          return new Response('Cache access failed', {
            status: 503,
          })
        })
    )
    return
  }

  // Default: Network-first with cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses asynchronously
        if (response.status === 200) {
          caches.open(RUNTIME_CACHE).then((cache) => {
            safeCacheResponse(cache, request, response)
          })
        }
        return response
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(request)
      })
  )
})

// Message handling for skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
