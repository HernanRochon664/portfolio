import type { Localized } from "@/lib/i18n";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Metric {
  label: Localized;
  value: string;
}

export interface ProjectInsight {
  title: Localized;
  description: Localized;
}

export interface ProjectBase {
  slug: string;
  title: string;
  subtitle: Localized;
  description: Localized;
  year: string;
  status: ProjectStatus;
  tags: string[];          // Temático: ¿de qué trata? (filtros, SEO)
  coverImage: string;
  featured: boolean;
}

export interface ProjectCaseStudy extends ProjectBase {
  problem: Localized;
  solution: Localized;
  impact: Localized;
  technologies: string[];  // Stack: ¿con qué fue construido?
  architectureImage?: string;
  gallery?: string[];
  metrics: Metric[];
  challenges: ProjectInsight[];
  lessonsLearned: ProjectInsight[];
  githubUrl?: string;
  demoUrl?: string;
  articleUrl?: string;
}

export interface LabItem {
  slug: string;
  title: Localized;
  description: Localized;
  category: "ml" | "deep-learning" | "llm" | "data-engineering" | "visualization";
  tags: string[];
  date: string;
  status: "completed" | "ongoing";
  githubUrl?: string;
  demoUrl?: string;
}
