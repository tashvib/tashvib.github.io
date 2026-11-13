import type { ReactNode } from 'react';
import { CommunityCard, ExperienceCard, ProjectCard, ResearchCard, SkillCard } from './components/Cards';
import { community, experience, focusTags, projects, research, skills, typingPhrases } from './data';
import { useRevealOnScroll, useScrollSpy, useTypewriter } from './hooks';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'community', label: 'Community' },
  { id: 'skills', label: 'Skills' },
] as const;

const NAV_IDS = NAV.map((n) => n.id);

function Section({ id, title, sub, className, children }: {
  id: string;
  title: string;
  sub: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>{title}</h2>
          <p className="section-sub">{sub}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  const typed = useTypewriter(typingPhrases);
  const { activeId, scrolled } = useScrollSpy(NAV_IDS);
  useRevealOnScroll();

  return (
    <>
      <header className={'site-header' + (scrolled ? ' scrolled' : '')}>
        <div className="header-inner">
          <a className="brand" href="#about">
            Tashvi Bansal
          </a>
          <nav className="site-nav" aria-label="Sections">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={activeId === n.id ? 'active' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="wrap">
            <span className="badge">Seeking Summer 2027 internships</span>
            <h1 className="greeting">Hi, I'm Tashvi.</h1>
            <p className="typing" aria-label="Computer Engineering student, researcher, developer">
              <span>{typed}</span>
              <span className="cursor" aria-hidden="true">
                |
              </span>
            </p>
            <p className="about-me">
              First-year Georgia Tech Computer Engineering student seeking a Summer 2027 internship in AI/ML hardware
              acceleration, digital design, or explainable AI. Brings experience in Large Language Model (LLM) reasoning
              research, neurosymbolic AI, SystemVerilog design, and iOS development, with strengths in technical
              communication and collaborative research. Co-authored a paper on LLM faithfulness in legal reasoning,
              accepted to the AI4Law and AI for Math workshops at ICML 2026, and presented neurosymbolic AI research at
              Advances in Cognitive Systems at Georgia Tech.
            </p>

            <ul className="focus-tags" aria-label="Focus areas">
              {focusTags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                See my work
              </a>
              <a className="btn btn-ghost" href="assets/Tashvi_Bansal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/tashvi-bansal-b1ab52267"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn-ghost" href="https://github.com/tashvib" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <Section id="experience" title="Experience" sub="Research labs and engineering teams I've worked with." className="stack">
          {experience.map((x) => (
            <ExperienceCard key={x.role} x={x} />
          ))}
        </Section>

        <Section id="projects" title="Projects" sub="Things I've designed, built and shipped." className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </Section>

        <Section id="research" title="Research" sub="Papers, posters and the conferences where I presented them." className="stack">
          {research.map((r) => (
            <ResearchCard key={r.title} r={r} />
          ))}
        </Section>

        <Section id="community" title="Community" sub="Teaching and tutoring." className="community-grid">
          {community.map((c) => (
            <CommunityCard key={c.title} c={c} />
          ))}
        </Section>

        <Section id="skills" title="Skills" sub="Languages, hardware and tools I work with." className="skills-grid">
          {skills.map((s) => (
            <SkillCard key={s.group} s={s} />
          ))}
        </Section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} Tashvi Bansal</p>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
