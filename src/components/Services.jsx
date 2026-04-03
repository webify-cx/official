import './Services.css'

const services = [
  {
    icon: 'WEB', name: 'Web Development',
    tags: ['Next.js', 'React', 'Tailwind'],
    desc: 'Custom websites and web apps built from scratch. Blazing fast, SEO-optimized, and built to convert visitors into clients.',
    price: '$3,000 – $15,000 per project',
  },
  {
    icon: 'APP', name: 'Mobile Apps',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    desc: 'Cross-platform mobile apps that feel native. From MVP to full product — designed for users who demand speed and beauty.',
    price: '$5,000 – $25,000 per project',
  },
  {
    icon: 'A/I', name: 'AI Solutions',
    tags: ['Chatbots', 'Automation', 'ML'],
    desc: 'Intelligent automation that saves hours daily. Custom chatbots, AI workflows, and machine learning built for your business.',
    price: '$5,000 – $30,000 per project',
  },
  {
    icon: 'SaaS', name: 'SaaS Products',
    tags: ['Supabase', 'Stripe', 'Full Stack'],
    desc: 'From idea to launch. We design and build your SaaS product end-to-end — subscription billing, dashboards, the works.',
    price: '$10,000 – $50,000 per project',
  },
  {
    icon: 'CON', name: 'IT Consulting',
    tags: ['Architecture', 'Tech Strategy', 'Audit'],
    desc: 'Stop guessing which tech to use. We audit your stack, define your architecture, and map your digital roadmap with precision.',
    price: '$80 – $150 per hour',
  },
  {
    icon: '24/7', name: 'Retainer Support',
    tags: ['Monthly Hours', 'Priority', 'Always On'],
    desc: 'Your dedicated tech partner on call. Monthly dev hours, priority bug fixes, updates, and strategy reviews every Friday.',
    price: '$1,500 – $5,000 per month',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">What we do</div>
          <div className="section-title">OUR<br />SERVICES</div>
        </div>
        <div className="section-num">02</div>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card reveal" key={i}>
            <div className="service-card-top" />
            <div className="service-icon">{s.icon}</div>
            <div className="service-name">{s.name}</div>
            <div className="service-tags">
              {s.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
            </div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-price">{s.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
