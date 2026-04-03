import { useState } from 'react'
import './Pricing.css'
import Button from './Button'
import { scrollToElement } from '../utils/scroll'

const plans = [
  {
    tier: 'Starter', price: '3,000', cycle: 'one-time · web project',
    features: [
      'Custom website (5–8 pages)',
      'Mobile responsive design',
      'SEO fundamentals + meta tags',
      'Contact form + Google Analytics',
      'Vercel hosting setup',
      '30-day post-launch support',
    ],
    cta: 'Get a Quote', featured: false,
  },
  {
    tier: 'Growth', price: '8,000', cycle: 'one-time · full-stack product',
    badge: 'Most Popular',
    features: [
      'Full-stack web app or mobile app',
      'Custom backend + database',
      'Authentication + user dashboard',
      'Payment integration (Stripe)',
      'API integrations + admin panel',
      'Deployment + CI/CD pipeline',
      '60-day post-launch support',
    ],
    cta: 'Start Building', featured: true,
  },
  {
    tier: 'Retainer', price: '2,500', cycle: 'per month · ongoing',
    features: [
      '40 dedicated dev hours/month',
      'Priority response within 4 hours',
      'Weekly strategy call (Fridays)',
      'Bug fixes + feature requests',
      'Monthly performance reports',
      'Dedicated Slack channel',
    ],
    cta: 'Become a Client', featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">Investment</div>
          <div className="section-title">STRAIGHT<br />PRICING</div>
        </div>
        <div className="section-num">05</div>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <div className={`pricing-card reveal${p.featured ? ' featured' : ''}`} key={i}>
            {p.badge && <div className="pricing-badge">{p.badge}</div>}
            <div className="pricing-tier">{p.tier}</div>
            <div className="pricing-price"><span>$</span>{p.price}</div>
            <div className="pricing-cycle">{p.cycle}</div>
            <div className="pricing-divider" />
            <ul className="pricing-features">
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <Button
              variant={p.featured ? 'pricing-primary' : 'pricing-outline'}
              onClick={() => scrollToElement('contact')}
            >
              {p.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
