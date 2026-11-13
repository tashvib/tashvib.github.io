import type { ReactNode } from 'react';

export interface Experience {
  role: string;
  org: string;
  dates: string;
  location: string;
  tech?: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
  dates?: string;
  tech?: string;
  /** Path under public/, e.g. "assets/foo.jpg" */
  image?: string;
  github?: string;
  devpost?: string;
  demo?: string;
  website?: string;
}

export interface Conference {
  name: string;
  url?: string;
}

export interface Research {
  title: string;
  venue: string;
  points?: string[];
  conferences?: Conference[];
  pdf?: string;
  poster?: string;
}

export interface Community {
  title: string;
  org?: string;
  url?: string;
  /** JSX allowed, e.g. <>Led <strong>2</strong> camps</> */
  points: ReactNode[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}
