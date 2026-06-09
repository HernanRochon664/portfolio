import { labItems } from "@/data/lab"
import { GithubIcon } from "@/components/ui/icons"

export default function LabPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Lab</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Experiments, notebooks and mini-projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {labItems.map((item) => (
          <div
            key={item.slug}
            className="relative rounded-lg border border-border p-4 transition-colors duration-200 hover:border-emerald-500/40"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-sm font-medium">{item.title}</h2>
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="View source on GitHub"
                >
                  <GithubIcon className="size-4" />
                </a>
              )}
            </div>

            <p className="mt-1 text-xs text-muted-foreground">
              {item.description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
