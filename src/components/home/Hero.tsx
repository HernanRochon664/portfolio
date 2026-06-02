import { Button } from "@/components/ui/button"

const techTags = ["Python", "PyTorch", "scikit-learn", "MLflow"]

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="flex animate-fade-in flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Data Scientist & ML Engineer
        </h1>

        <p className="max-w-[600px] leading-relaxed text-muted-foreground">
          Building production ML systems with a focus on interpretability and
          measurable impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#">Download Resume</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
