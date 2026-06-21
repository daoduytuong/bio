import { useEffect, useState } from 'react'
import { Icon } from './components/Icons.jsx'
import { profile, socials, projects, skills, education, contact } from './data.js'

function useTheme() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Đổi giao diện sáng/tối">
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  )
}

/* --- Place link helper (text + optional map link) ------------------------ */
function Place({ data }) {
  if (data.href) {
    return (
      <a className="place-link" href={data.href} target="_blank" rel="noreferrer">
        {data.label}
        <span className="map-tag">bản đồ ↗</span>
      </a>
    )
  }
  return <span>{data.label}</span>
}

/* --- Tiles --------------------------------------------------------------- */
function HeroTile() {
  return (
    <section className="tile tile-hero reveal">
      <div className="hero-top">
        <div className="avatar-wrap">
          <div className="avatar-glow" />
          <div className="avatar">
            {profile.avatar
              ? <img src={profile.avatar} alt={profile.name} />
              : <span>{profile.initials}</span>}
          </div>
        </div>
        <span className="badge"><span className="badge-dot" /> Online</span>
      </div>

      <h1 className="name">{profile.name}</h1>
      <p className="role">{profile.role}</p>
      <p className="tagline">{profile.tagline}</p>
      <p className="bio">{profile.bio}</p>
    </section>
  )
}

function LocationTile() {
  return (
    <section className="tile tile-loc reveal" style={{ animationDelay: '0.08s' }}>
      <div className="tile-head"><Icon name="pin" size={18} /> Vị trí</div>
      <div className="loc-row">
        <span className="loc-key">Sống tại</span>
        <Place data={profile.living} />
      </div>
      <div className="loc-row">
        <span className="loc-key">Quê</span>
        <Place data={profile.hometown} />
      </div>
      {profile.hometown.detail && (
        <p className="loc-note">{profile.hometown.detail}</p>
      )}
    </section>
  )
}

function EducationTile() {
  return (
    <section className="tile tile-edu reveal" style={{ animationDelay: '0.16s' }}>
      <div className="tile-head"><Icon name="cap" size={18} /> Học vấn</div>
      <ul className="timeline">
        {education.map((e) => (
          <li key={e.school} className="timeline-item">
            <span className="timeline-dot" />
            <div>
              <a className="edu-school" href={e.href} target="_blank" rel="noreferrer">
                {e.school} <span className="map-tag">bản đồ ↗</span>
              </a>
              <div className="edu-detail">
                {e.detail}
                {e.year && <span className="edu-year">{e.year}</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProjectTile({ p, delay }) {
  return (
    <article className="tile tile-proj reveal" style={{ animationDelay: `${delay}s` }}>
      <div className="proj-top">
        <span className="proj-emoji" style={{ background: p.gradient }}>{p.emoji}</span>
        <span className="proj-tag">{p.tag}</span>
      </div>
      <h3 className="proj-name">{p.name}</h3>
      <p className="proj-desc">{p.description}</p>
      <div className="stack">
        {p.stack.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
      <div className="proj-links">
        {p.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={l.primary ? 'link-primary' : 'link-ghost'}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            {l.label}{l.primary && <Icon name="arrow" size={15} />}
          </a>
        ))}
      </div>
    </article>
  )
}

function SocialsTile() {
  return (
    <section className="tile tile-social reveal" style={{ animationDelay: '0.24s' }}>
      <div className="tile-head">Kết nối</div>
      <div className="social-grid">
        {socials.map((s) => (
          <a
            key={s.label}
            className="social-btn"
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            style={{ '--accent': s.accent }}
          >
            <span className="social-ic"><Icon name={s.icon} size={20} /></span>
            <span className="social-meta">
              <span className="social-label">{s.label}</span>
              <span className="social-handle">{s.handle}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function SkillsTile() {
  return (
    <section className="tile tile-skills reveal" style={{ animationDelay: '0.3s' }}>
      <div className="tile-head">Kỹ năng</div>
      <div className="skills">
        {skills.map((s) => <span key={s} className="skill-chip">{s}</span>)}
      </div>
    </section>
  )
}

function ContactTile() {
  return (
    <section className="tile tile-contact reveal" style={{ animationDelay: '0.36s' }}>
      <h2 className="contact-heading">{contact.heading}</h2>
      <p className="contact-text">{contact.text}</p>
      <a className="contact-btn" href={`mailto:${contact.email}`}>
        <Icon name="mail" size={18} /> {contact.email}
      </a>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <ThemeToggle />

      <main className="container">
        <div className="bento">
          <HeroTile />
          <LocationTile />
          <EducationTile />
          {projects.map((p, i) => (
            <ProjectTile key={p.name} p={p} delay={0.2 + i * 0.08} />
          ))}
          <SocialsTile />
          <SkillsTile />
          <ContactTile />
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {profile.name} · Made with React + Vite 🐔</p>
        </footer>
      </main>
    </div>
  )
}
