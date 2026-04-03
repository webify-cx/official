import './Ticker.css'

const items = [
  'WEB DEVELOPMENT', 'MOBILE APPS', 'AI SOLUTIONS',
  'SaaS PRODUCTS', 'IT CONSULTING', 'RETAINER SUPPORT',
  'WEB DEVELOPMENT', 'MOBILE APPS', 'AI SOLUTIONS',
  'SaaS PRODUCTS', 'IT CONSULTING', 'RETAINER SUPPORT',
]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div className="ticker-item" key={i}>
            {item} <span className="ticker-sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
