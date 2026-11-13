import type { ReactNode } from 'react';
import type { Community, Experience, Project, Research, SkillGroup } from '../types';

type LinkVariant = 'is-dark';

function LinkButton({ label, href, variant }: { label: string; href: string; variant?: LinkVariant }) {
  return (
    <a className={'chip-link' + (variant ? ` ${variant}` : '')} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function Points({ items }: { items: ReactNode[] }) {
  return (
    <ul className="points">
      {items.map((pt, i) => (
        <li key={i}>{pt}</li>
      ))}
    </ul>
  );
}

export function ExperienceCard({ x }: { x: Experience }) {
  return (
    <article className="card research-card reveal">
      <div className="eyebrow">
        {x.dates} · {x.location}
      </div>
      <h3 className="card-title">{x.role}</h3>
      <p className="card-org">{x.org}</p>
      {x.tech && <p className="tech-line">{x.tech}</p>}
      <Points items={x.points} />
    </article>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card project-card reveal">
      {p.image ? (
        <div className="project-image">
          <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
        </div>
      ) : (
        <div className="project-image project-image--text">
          <span className="project-mono">{p.name}</span>
        </div>
      )}
      <div className="project-body">
        {p.dates && <div className="eyebrow">{p.dates}</div>}
        <h3 className="card-title">{p.name}</h3>
        {p.tech && <p className="tech-line">{p.tech}</p>}
        <p className="card-text">{p.description}</p>
        <div className="link-row">
          {p.github && <LinkButton label="GitHub" href={p.github} variant="is-dark" />}
          {p.devpost && <LinkButton label="Devpost" href={p.devpost} />}
          {p.demo && <LinkButton label="Live demo" href={p.demo} />}
          {p.website && <LinkButton label="Website" href={p.website} />}
        </div>
      </div>
    </article>
  );
}

export function ResearchCard({ r }: { r: Research }) {
  const hasLinks = Boolean(r.pdf || r.poster);
  return (
    <article className="card research-card reveal">
      <div className="eyebrow">{r.venue}</div>
      <h3 className="card-title">{r.title}</h3>
      {r.points && r.points.length > 0 && <Points items={r.points} />}
      {r.conferences && r.conferences.length > 0 && (
        <div className="conferences">
          <span className="conf-label">Presented at</span>
          <ul className="conf-list">
            {r.conferences.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {hasLinks && (
        <div className="link-row">
          {r.pdf && <LinkButton label="Read paper" href={r.pdf} variant="is-dark" />}
          {r.poster && <LinkButton label="View poster" href={r.poster} />}
        </div>
      )}
    </article>
  );
}

export function CommunityCard({ c }: { c: Community }) {
  return (
    <article className="card community-card reveal">
      {c.org && <div className="eyebrow">{c.org}</div>}
      <h3 className="card-title">{c.title}</h3>
      <Points items={c.points} />
      {c.url && (
        <div className="link-row">
          <LinkButton label="Visit" href={c.url} />
        </div>
      )}
    </article>
  );
}

export function SkillCard({ s }: { s: SkillGroup }) {
  return (
    <article className="card community-card reveal">
      <h3 className="card-title">{s.group}</h3>
      <ul className="focus-tags skill-tags">
        {s.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
