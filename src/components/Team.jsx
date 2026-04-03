import './Team.css'

const team = [
  {
    initials: 'SK', name: 'Syed Kashan', role: 'CEO · Canada',
    bio: 'Business development, North American client acquisition, and company strategy. Based in Canada — your direct line to the global market.',
    skills: ['Business Dev', 'Strategy', 'North America'],
  },

  {
    initials: 'KI', name: 'Khurram Ikram', role: 'Project Head',
    bio: 'Client communication, timelines, and delivery. Khurram ensures every project is on scope, on budget, and delivered on time. Always.',
    skills: ['Jira', 'Client Success', 'Delivery'],
  },  

  {
    initials: 'SR', name: 'Syed A. Raza', role: 'Head of Development',
    bio: 'Technical lead, code architecture, and quality enforcement. Every line of code that ships passes through Raza\'s review. No shortcuts.',
    skills: ['Next.js', 'Node.js', 'Architecture'],
  },

]

export default function Team() {
  return (
    <section id="team">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">The crew</div>
          <div className="section-title">WHO<br />BUILDS IT</div>
        </div>
        <div className="section-num">06</div>
      </div>

      <div className="team-grid">
        {team.map((m, i) => (
          <div className="team-card reveal" key={i}>
            <div className="team-avatar-wrap">
              <div className="team-avatar-border">
                <div className="team-initials">{m.initials}</div>
              </div>
            </div>
            <div className="team-name">{m.name}</div>
            <div className="team-role">{m.role}</div>
            <div className="team-bio">{m.bio}</div>
            <div className="team-skills">
              {m.skills.map((s, j) => <span className="skill-tag" key={j}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
