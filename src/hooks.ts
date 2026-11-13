import { useEffect, useState } from 'react';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Rotating typewriter text. The first phrase is shown immediately. */
export function useTypewriter(phrases: string[], { typing = 70, deleting = 35, pause = 2600 } = {}): string {
  const [text, setText] = useState(phrases[0] ?? '');

  useEffect(() => {
    if (phrases.length < 2 || prefersReducedMotion()) return;

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let mode: 'typing' | 'deleting' = 'deleting';
    let timer: number;

    const tick = () => {
      const current = phrases[phraseIndex];
      if (mode === 'typing') {
        if (charIndex < current.length) {
          setText(current.slice(0, ++charIndex));
          timer = window.setTimeout(tick, typing);
        } else {
          mode = 'deleting';
          timer = window.setTimeout(tick, pause);
        }
      } else if (charIndex > 0) {
        setText(current.slice(0, --charIndex));
        timer = window.setTimeout(tick, deleting);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        mode = 'typing';
        timer = window.setTimeout(tick, typing * 4);
      }
    };

    timer = window.setTimeout(tick, pause);
    return () => window.clearTimeout(timer);
  }, [phrases, typing, deleting, pause]);

  return text;
}

/** Fades in every `.reveal` element as it scrolls into view. */
export function useRevealOnScroll(): void {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((i) => i.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);
}

/** Returns the id of the section currently under the header, plus whether the page has scrolled. */
export function useScrollSpy(ids: string[]): { activeId: string; scrolled: boolean } {
  const [activeId, setActiveId] = useState(ids[0] ?? '');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const offset = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      // at the very bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) current = ids[ids.length - 1];
      setActiveId(current);
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return { activeId, scrolled };
}
