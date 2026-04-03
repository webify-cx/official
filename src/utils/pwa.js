/**
 * PWA Utilities for Webify
 * Handles PWA registration, service worker management, and installation
 */

/**
 * Register service worker for PWA functionality
 * @returns {Promise<ServiceWorkerRegistration|null>}
 */
export const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Workers are not supported in this browser')
    return null
  }

  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/',
    })
    console.log('Service Worker registered successfully:', registration)
    return registration
  } catch (error) {
    console.error('Service Worker registration failed:', error)
    return null
  }
}

/**
 * Unregister service worker (for debugging/cleanup)
 * @returns {Promise<boolean>}
 */
export const unregisterServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    return false
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations()
    for (const registration of registrations) {
      await registration.unregister()
      console.log('Service Worker unregistered')
    }
    return true
  } catch (error) {
    console.error('Error unregistering Service Worker:', error)
    return false
  }
}

/**
 * Check if app is installed (running as PWA)
 * @returns {boolean}
 */
export const isAppInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches
}

/**
 * Check if PWA installation is supported
 * @returns {boolean}
 */
export const isInstallSupported = () => {
  return !isAppInstalled() && 'beforeinstallprompt' in window
}

/**
 * Request notification permission for PWA
 * @returns {Promise<NotificationPermission>}
 */
export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.warn('Notifications are not supported in this browser')
    return 'denied'
  }

  try {
    const permission = await Notification.requestPermission()
    return permission
  } catch (error) {
    console.error('Error requesting notification permission:', error)
    return 'denied'
  }
}

/**
 * Send a notification from the PWA
 * @param {string} title - Notification title
 * @param {object} options - Notification options
 */
export const sendNotification = (title, options = {}) => {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    console.warn('Notifications are not supported')
    return
  }

  if (Notification.permission !== 'granted') {
    console.warn('Notification permission not granted')
    return
  }

  navigator.serviceWorker.ready.then((registration) => {
    registration.showNotification(title, {
      icon: '/favicon-192.png',
      badge: '/favicon-192.png',
      ...options,
    })
  })
}

/**
 * Update service worker (useful for app updates)
 * @returns {Promise<void>}
 */
export const updateServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    return
  }

  try {
    const registration = await navigator.serviceWorker.ready
    await registration.update()
    console.log('Checked for Service Worker updates')
  } catch (error) {
    console.error('Error updating Service Worker:', error)
  }
}

/**
 * Clear all caches (useful for debugging)
 * @returns {Promise<boolean>}
 */
export const clearAllCaches = async () => {
  try {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map((name) => caches.delete(name)))
    console.log('All caches cleared')
    return true
  } catch (error) {
    console.error('Error clearing caches:', error)
    return false
  }
}

/**
 * Get cache storage info
 * @returns {Promise<object>}
 */
export const getCacheInfo = async () => {
  try {
    if (!('storage' in navigator) || !('estimate' in navigator.storage)) {
      return null
    }

    const estimate = await navigator.storage.estimate()
    return {
      usage: estimate.usage,
      quota: estimate.quota,
      percentage: Math.round((estimate.usage / estimate.quota) * 100),
    }
  } catch (error) {
    console.error('Error getting cache info:', error)
    return null
  }
}

/**
 * Handle service worker updates
 * Shows notification when update is ready
 */
export const handleServiceWorkerUpdate = (registration) => {
  if (!registration.waiting) return

  // Send message to waiting service worker to skip waiting
  const listenInstallingState = () => {
    registration.installing.addEventListener('statechange', () => {
      if (registration.installing.state === 'installed') {
        // A new service worker is ready - notify user
        console.log('Service Worker update available')
        sendNotification('App Update Available', {
          body: 'A new version is ready. Refresh to update.',
          tag: 'app-update',
          requireInteraction: false,
        })
      }
    })
  }

  if (registration.installing) {
    listenInstallingState()
  } else {
    registration.addEventListener('updatefound', listenInstallingState)
  }
}
