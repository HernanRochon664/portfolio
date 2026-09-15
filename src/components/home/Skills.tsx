import type { Dictionary } from "@/lib/dictionaries"

const skillGroups = {
  ml: ["Python", "Scikit-learn", "LightGBM", "Keras", "SHAP"],
  mlops: ["Kedro", "MLflow", "Prefect", "Docker", "FastAPI"],
  data: ["pandas", "SQLite", "PostgreSQL", "BeautifulSoup", "Linux"],
  frontend: ["Streamlit", "Dash"],
} as const

export function Skills({ dict }: { dict: Dictionary["home"]["skills"] }) {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {dict.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight">{dict.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {(Object.keys(skillGroups) as (keyof typeof skillGroups)[]).map((key) => (
            <div
              key={key}
              className="rounded-lg border border-border p-6 transition-colors duration-200 hover:border-emerald-500/40"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {dict.groups[key]}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {skillGroups[key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
