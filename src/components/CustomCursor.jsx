import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animRing)

    const hoverEls = document.querySelectorAll('a, button, .service-card, .work-card, .team-card')
    const onEnter = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)'
      ring.style.borderColor = 'rgba(0,255,150,0.5)'
    }
    const onLeave = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.borderColor = 'rgba(0,255,150,0.4)'
    }
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  // Hide on touch devices
  if ('ontouchstart' in window) return null

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
