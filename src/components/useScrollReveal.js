import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 3) * 0.12 + 's'
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
