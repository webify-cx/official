import { useState, useEffect } from 'react'
import './InstallPrompt.css'

/**
 * Custom PWA Install Dialog
 * Matches Webify's neon green and hot pink theme
 * Replaces browser default install prompt with branded experience
 */
export default function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA installed successfully')
      setShowPrompt(false)
      setIsInstalled(true)
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for user to respond
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response: ${outcome}`)

    // Reset state
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
  }

  // Don't show if already installed or no prompt available
  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null
  }

  return (
    <div className="install-prompt-overlay">
      <div className="install-prompt-dialog">
        {/* Close button */}
        <button className="install-prompt-close" onClick={handleDismiss}>
          ✕
        </button>

        {/* Header */}
        <div className="install-prompt-header">
          <div className="install-prompt-icon">🚀</div>
          <h2>Install Webify</h2>
        </div>

        {/* Content */}
        <div className="install-prompt-content">
          <p>Add Webify to your device for instant access and offline browsing.</p>
          <ul className="install-benefits">
            <li>⚡ Fast performance with offline support</li>
            <li>📱 Native app-like experience</li>
            <li>💾 No app store downloads needed</li>
            <li>🎨 Seamless dark mode interface</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="install-prompt-actions">
          <button className="install-btn-secondary" onClick={handleDismiss}>
            Maybe Later
          </button>
          <button className="install-btn-primary" onClick={handleInstall}>
            Install App
          </button>
        </div>

        {/* Decorative elements */}
        <div className="install-prompt-glow-1" />
        <div className="install-prompt-glow-2" />
      </div>
    </div>
  )
}
