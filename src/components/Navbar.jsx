import { useState, useEffect } from 'react'
import './Navbar.css'
import Button from './Button'
import { scrollToElement } from '../utils/scroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleScroll = (id) => {
    scrollToElement(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{ borderBottomColor: scrolled ? 'rgba(0,255,150,0.15)' : 'rgba(0,255,150,0.08)' }}>
        <a href="#" className="nav-logo">WEBIFY <span>.</span></a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <Button
          variant="nav"
          onClick={() => handleScroll('contact')}
        >
          Start a Project
        </Button>
        <Button
          variant="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          isActive={menuOpen}
          ariaLabel="Toggle menu"
        />
      </nav>

      <div
        className={`mobile-drawer${menuOpen ? ' open' : ''}`}
        style={{ display: menuOpen ? 'flex' : 'none' }}
      >
        <a href="#services" className="drawer-link" onClick={() => handleScroll('services')}>
          Services
        </a>
        <a href="#process" className="drawer-link" onClick={() => handleScroll('process')}>
          Process
        </a>
        <a href="#work" className="drawer-link" onClick={() => handleScroll('work')}>
          Work
        </a>
        <a href="#pricing" className="drawer-link" onClick={() => handleScroll('pricing')}>
          Pricing
        </a>
        <a href="#team" className="drawer-link" onClick={() => handleScroll('team')}>
          Team
        </a>
        <Button
          variant="mobile"
          onClick={() => handleScroll('contact')}
        >
          Start a Project →
        </Button>
      </div>
    </>
  )
}
