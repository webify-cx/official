import './Hero.css'
import Button from './Button'
import { scrollToElement } from '../utils/scroll'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-left">
        <div className="hero-status">
          <div className="status-dot" />
          <span>Available for new projects</span>
        </div>

        <div className="hero-title">
          WE<br />BUILD<br />
          <span className="accent">WEBS</span>
          <span className="stroke">ITE</span>
        </div>

        <div className="hero-divider" />

        <p className="hero-sub">
          Webify crafts digital experiences that hit hard and load fast. No templates, no fluff — just raw, purposeful code built to dominate your market.
        </p>

        <div className="hero-actions">
          <Button
            variant="primary"
            onClick={() => scrollToElement('contact')}
          >
            Launch a Project →
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToElement('work')}
          >
            View Work
          </Button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-terminal">
          <div className="terminal-bar">
            <div className="t-dot t-red" />
            <div className="t-dot t-yellow" />
            <div className="t-dot t-green" />
            <span className="terminal-title">webify.sh</span>
          </div>
          <div className="terminal-body">
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> git init webify-project</span></div>
            <div className="t-output">Initialized empty Git repository</div>
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> npm install magic</span></div>
            <div className="t-output">Installing <span className="t-highlight">world-class-design</span>...</div>
            <div className="t-output">Installing <span className="t-highlight">bulletproof-code</span>...</div>
            <div className="t-output">Installing <span className="t-highlight">seo-dominance</span>...</div>
            <div className="t-output t-error">✗ installing-mediocrity — <span style={{ color: 'var(--text-mute)' }}>NOT FOUND</span></div>
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> npm run build</span></div>
            <div className="t-output"><span className="t-highlight">✓ Build complete</span> in 1.2s</div>
            <div className="t-output"><span className="t-highlight">✓ Performance score: 100</span></div>
            <div className="t-output"><span className="t-highlight">✓ Your competitors are already scared</span></div>
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cursor" /></div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item"><span className="stat-num">50+</span><span className="stat-label">Projects</span></div>
          <div className="stat-item"><span className="stat-num">3X</span><span className="stat-label">Avg ROI</span></div>
          <div className="stat-item"><span className="stat-num">24H</span><span className="stat-label">Response</span></div>
        </div>
      </div>
    </section>
  )
}
