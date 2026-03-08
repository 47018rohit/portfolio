import React from 'react';
import { CONTENT } from '@/data/portfolio';
import './InfoPanel.css';

export default function InfoPanel({ zoneId, onClose }) {
  if (!zoneId) return null;
  const data = CONTENT[zoneId];
  if (!data) return null;

  return (
    <div className="panel-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="panel-box">
        <button className="panel-close" onClick={onClose}>[ close ]</button>
        <div className="panel-tag">{data.tag}</div>
        <h1 className="panel-title">{data.title}</h1>

        {zoneId === 'about'      && <AboutContent data={data} />}
        {zoneId === 'experience' && <ExperienceContent data={data} />}
        {zoneId === 'skills'     && <SkillsContent data={data} />}
        {zoneId === 'projects'   && <ProjectsContent data={data} />}
        {zoneId === 'contact'    && <ContactContent data={data} />}
      </div>
    </div>
  );
}

function AboutContent({ data }) {
  return (
    <>
      <p className="bio">{data.bio}</p>
      <div className="about-grid">
        {data.cards.map((c, i) => (
          <div className="about-card" key={i}>
            <label>{c.label}</label>
            {c.href
              ? <p><a href={c.href} target="_blank" rel="noreferrer">{c.value}</a></p>
              : <p>{c.value}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

function ExperienceContent({ data }) {
  return (
    <div className="exp-list">
      {data.jobs.map((j, i) => (
        <div className="exp-item" key={i}>
          <div className="exp-header">
            <div>
              <div className="exp-role">{j.role}</div>
              <div className="exp-company">{j.company} · {j.location}</div>
            </div>
            <div className="exp-date">{j.period}</div>
          </div>
          <ul className="exp-bullets">
            {j.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SkillsContent({ data }) {
  return (
    <div className="skills-wrap">
      {data.sections.map((s, i) => (
        <React.Fragment key={i}>
          <div className="skills-section">
            <h3>{s.label}</h3>
            <div className="skill-tags">
              {s.items.map((item, j) => (
                <span key={j} className={`skill-tag${s.hot ? ' hot' : ''}`}>{item}</span>
              ))}
            </div>
          </div>
          {i < data.sections.length - 1 && <div className="divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProjectsContent({ data }) {
  return (
    <div className="projects-list">
      {data.list.map((p, i) => (
        <div className="project-item" key={i}>
          <div className="project-name">{p.name}</div>
          <div className="project-date">{p.period}</div>
          <p className="project-desc">{p.desc}</p>
          <div className="project-tech">
            {p.tech.map((t, j) => <span key={j}>{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactContent({ data }) {
  return (
    <>
      <p className="bio">{data.bio}</p>
      <div className="contact-links">
        {data.links.map((l, i) => (
          <a key={i} className="contact-link" href={l.href} target="_blank" rel="noreferrer">
            <span className="c-icon">{l.icon}</span>
            <div>
              <span className="c-label">{l.label}</span>
              <span className="c-value">{l.value}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
