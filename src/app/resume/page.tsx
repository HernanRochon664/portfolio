import { PrintButton } from "./PrintButton"

const sectionHeading =
  "text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-1 mb-3"

const projects = [
  {
    title: "BizSentinel",
    subtitle: "End-to-end ML platform for e-commerce customer intelligence",
    bullets: [
      "Detects at-risk customers, anomalous transactions and churn signals so SMBs can act before losing revenue — 97,896 customers scored",
      "Implemented privacy-preserving ML with HMAC pseudonymization and differential privacy (ε≤5)",
      "127 unit tests, 82% coverage",
    ],
    stack: "Python, LightGBM, Kedro, MLflow, FastAPI, Docker",
  },
  {
    title: "Hardware Pulse",
    subtitle: "PC hardware price intelligence system",
    bullets: [
      "Helps Uruguayan PC buyers time their purchase and find the cheapest retailer across GPUs, CPUs, SSDs and RAM",
      "Three-tier entity resolution (exact → regex → fuzzy) reconciles inconsistent retailer listings into canonical SKUs, so comparisons are reliable",
    ],
    stack: "Python, BeautifulSoup, SQLite, RapidFuzz, Scikit-learn, Streamlit",
  },
  {
    title: "Music Taste Recommender",
    subtitle: "Business-driven hybrid recommendation engine",
    bullets: [
      "Boosts music discovery without sacrificing relevance — raising genre diversity from 19% to 70% at a 0.89 relevance score, so listeners explore more of the catalog without churning out",
      "Evaluated across 500 simulated users and 5 configurable business strategies",
    ],
    stack: "Python, Sentence-Transformers, Scikit-learn, Streamlit, Hugging Face",
  },
]

const skills = [
  {
    label: "Machine Learning",
    values: "Python, Scikit-learn, LightGBM, Keras, SHAP",
  },
  {
    label: "MLOps & Pipelines",
    values: "Kedro, MLflow, Prefect, Docker, FastAPI",
  },
  {
    label: "Data Engineering",
    values: "pandas, SQLite, PostgreSQL, BeautifulSoup, RapidFuzz",
  },
  {
    label: "Frontend & Visualization",
    values: "Streamlit, Dash",
  },
]

export const metadata = {
  title: "Resume — Hernan Rochon",
  description: "Resume of Hernan Rochon, ML Engineer & Data Scientist.",
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-2xl px-8 py-12">
      <div className="mb-8 flex justify-end">
        <PrintButton />
      </div>

      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Hernan Rochon</h1>
        <p className="mt-1 text-muted-foreground">
          ML Engineer & Data Scientist
        </p>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          hernan.rochon7@gmail.com · linkedin.com/in/hernan-rochon ·
          github.com/HernanRochon664 · portfolio-five-mu-o76n21qfaq.vercel.app
        </p>
      </header>

      <section className="mb-8">
        <h2 className={sectionHeading}>Summary</h2>
        <p className="text-sm leading-relaxed text-foreground/90">
          Self-taught ML Engineer and Data Scientist with hands-on experience
          building end-to-end machine learning systems. Focused on
          production-ready pipelines, model interpretability, and measurable
          impact. Looking for a first professional role as a ML Engineer or Data
          Scientist.
        </p>
      </section>

      <section className="mb-8">
        <h2 className={sectionHeading}>Projects</h2>
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <div key={project.title}>
              <p className="text-sm">
                <span className="font-bold">{project.title}</span>
                <span className="text-muted-foreground">
                  {" "}
                  — {project.subtitle}
                </span>
              </p>
              <ul className="mt-1.5 ml-5 list-disc space-y-1 text-sm text-foreground/90 marker:text-muted-foreground">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-1.5 text-xs text-muted-foreground">
                <span className="font-medium">Stack:</span> {project.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className={sectionHeading}>Skills</h2>
        <div className="flex flex-col gap-1.5 text-sm">
          {skills.map((row) => (
            <p key={row.label}>
              <span className="font-bold">{row.label}:</span>{" "}
              <span className="text-foreground/90">{row.values}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className={sectionHeading}>Certifications</h2>
        <ul className="ml-5 list-disc space-y-1 text-sm text-foreground/90 marker:text-muted-foreground">
          <li>
            Microsoft AI & ML Engineering Professional Certificate — Coursera
            (5 courses)
          </li>
          <li>IBM AI Fundamentals</li>
          <li>
            Udemy: Machine Learning, Deep Learning, MLOps, Web Scraping, Data
            Analysis & Visualization
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className={sectionHeading}>Education</h2>
        <p className="text-sm text-foreground/90">
          Secondary School Diploma, Scientific & Engineering track — 2025
        </p>
      </section>

      <section>
        <h2 className={sectionHeading}>Languages</h2>
        <ul className="flex flex-col gap-1 text-sm text-foreground/90">
          <li>
            <span className="font-bold">Spanish</span> — Native
          </li>
          <li>
            <span className="font-bold">English</span> — B2 Cambridge
            International Certificate
          </li>
        </ul>
      </section>
    </div>
  )
}
