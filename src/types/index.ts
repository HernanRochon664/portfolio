export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Metric {
  label: string;
  value: string;
}

export interface ProjectInsight {
  title: string;
  description: string;
}

export interface ProjectBase {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  status: ProjectStatus;
  tags: string[];          // Temático: ¿de qué trata? (filtros, SEO)
  coverImage: string;
  featured: boolean;
}

export interface ProjectCaseStudy extends ProjectBase {
  problem: string;
  solution: string;
  impact: string;
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
  title: string;
  description: string;
  category: "ml" | "deep-learning" | "llm" | "data-engineering" | "visualization";
  tags: string[];
  date: string;
  status: "completed" | "ongoing";
  githubUrl?: string;
  demoUrl?: string;
}
