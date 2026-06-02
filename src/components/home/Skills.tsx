const skillGroups = [
  { category: "Machine Learning", skills: ["Python", "Scikit-learn", "LightGBM", "PyTorch", "SHAP"] },
  { category: "MLOps & Pipelines", skills: ["Kedro", "MLflow", "Prefect", "Docker", "FastAPI"] },
  { category: "Data Engineering", skills: ["pandas", "SQLite", "PostgreSQL", "BeautifulSoup"] },
  { category: "Frontend & Viz", skills: ["Streamlit", "Dash"] },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            TECHNICAL SKILLS
          </p>
          <h2 className="text-3xl font-bold tracking-tight">What I work with</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border p-6"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {group.category}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {group.skills.map((skill) => (
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
