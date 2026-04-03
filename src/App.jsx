import './styles/global.css'
import { useEffect } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import InstallPrompt from './components/InstallPrompt'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './components/useScrollReveal'
import { updateServiceWorker } from './utils/pwa'
import { ThemeProvider } from './contexts/ThemeContext'

export default function App() {
  useScrollReveal()

  useEffect(() => {
    // Check for service worker updates periodically
    const updateInterval = setInterval(() => {
      updateServiceWorker()
    }, 60000) // Check every 60 seconds

    return () => clearInterval(updateInterval)
  }, [])

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <>
          <ThemeToggle />
          <InstallPrompt />
          <CustomCursor />
          <Navbar />
          <Hero />
          <Ticker />
          <Services />
          <Process />
          <Work />
          <Pricing />
          <Team />
          <Contact />
          <Footer />
        </>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
