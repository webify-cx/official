import './Process.css'

const steps = [
  { num: '01', name: 'Discovery Call', desc: '30-minute Zoom where we understand your goals, market, and pain points. We ask the hard questions so we can build the right thing.' },
  { num: '02', name: 'Proposal', desc: 'Custom proposal within 48 hours. Scope, timeline, pricing — no hidden costs. We send a 2-page contract, you sign via DocuSign.' },
  { num: '03', name: 'Build & Sprint', desc: '2-week sprints with Monday planning and Friday demos. You get weekly progress reports and a dedicated Slack channel.' },
  { num: '04', name: 'Ship & Support', desc: 'Full QA before every delivery. Source code + documentation handed off. 30 days of free support post-launch.' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-br" />

      <div className="section-header reveal">
        <div>
          <div className="section-tag">How we work</div>
          <div className="section-title">THE<br />PROCESS</div>
        </div>
        <div className="section-num">03</div>
      </div>

      <div className="process-grid">
        {steps.map((s, i) => (
          <div className="process-step reveal" key={i}>
            <div className="step-num">{s.num}</div>
            <div className="step-marker">{s.num}</div>
            <div className="step-name">{s.name}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
