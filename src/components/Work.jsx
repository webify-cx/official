import './Work.css'

const projects = [
  {
    bg: 'wc1', deco: 'WEB',
    type: 'Web Platform', name: 'HealthTrack Pro',
    tags: ['Next.js', 'Healthcare EMR', '$12,000'],
  },
  {
    bg: 'wc2', deco: 'APP',
    type: 'Mobile App', name: 'SwiftDeliver',
    tags: ['React Native', 'Logistics', '$18,000'],
  },
  {
    bg: 'wc3', deco: 'SaaS',
    type: 'SaaS Product', name: 'InvoiceNinja PK',
    tags: ['Supabase', 'Stripe', '$22,000'],
  },
  {
    bg: 'wc4', deco: 'AI',
    type: 'AI Automation', name: 'RetailBot 360',
    tags: ['Python', 'LLM Integration', '$15,000'],
  },
]

export default function Work() {
  return (
    <section id="work">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">Our work</div>
          <div className="section-title">SELECTED<br />PROJECTS</div>
        </div>
        <div className="section-num">04</div>
      </div>

      <div className="work-grid">
        {projects.map((p, i) => (
          <div className="work-card reveal" key={i}>
            <div className={`work-card-bg ${p.bg}`} />
            <div className="work-card-grid" />
            <div className="work-card-overlay" />
            <div className="work-deco">{p.deco}</div>
            <div className="work-card-arrow">↗</div>
            <div className="work-card-content">
              <div className="work-type">{p.type}</div>
              <div className="work-name">{p.name}</div>
              <div className="work-tag-row">
                {p.tags.map((t, j) => <span className="work-tag" key={j}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
