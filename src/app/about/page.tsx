import { ExternalLink, Mail } from "lucide-react"
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons"

const practices = [
  { title: "Testing", description: "pytest with coverage reporting — 127 tests, 82% coverage in BizSentinel" },
  { title: "Experiment tracking", description: "MLflow for model registry, metrics and artifact versioning" },
  { title: "Containerization", description: "Docker and docker-compose for reproducible environments" },
  { title: "CI/CD", description: "GitHub Actions for automated linting, type checking and test runs" },
  { title: "Type safety", description: "Pydantic data contracts, Pyright static analysis across all projects" },
  { title: "Reproducibility", description: "uv for environment management, YAML configs, documented decisions" },
  { title: "Git discipline", description: "Conventional commits and feature branches" },
  { title: "Documentation", description: "Architecture docs, decision logs and AGENTS.md in every project" },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <div className="mt-8 flex flex-col gap-4 text-foreground/90 leading-relaxed">
        <p>
          I&apos;m Hernan Rochon, a Data Scientist and ML Engineer based in
          Uruguay. I build end-to-end machine learning systems with a focus on
          production readiness, interpretability and measurable impact.
        </p>
        <p>
          My work spans the full ML lifecycle — from data pipelines and feature
          engineering to model training, evaluation and deployment. I care about
          systems that are reproducible, testable and honest about their
          limitations.
        </p>
        <p>
          I&apos;m currently looking for my first professional role as a Data
          Scientist or ML Engineer. I&apos;m open to remote opportunities.
        </p>
      </div>

      <div className="mt-12">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          HOW I BUILD
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {practices.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 text-emerald-500">▸</span>
              <div>
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-sm text-muted-foreground"> — {item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <a
          href="https://github.com/HernanRochon664"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hernan-rochon/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="size-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:hernan.rochon7@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="size-4" />
          <span>Email</span>
        </a>
        <a
          href="https://portfolio-five-mu-o76n21qfaq.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="size-4" />
          <span>Portfolio</span>
        </a>
      </div>
    </div>
  )
}
