import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import { GithubIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import type { ProjectInsight, ProjectStatus } from "@/types"

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  completed: {
    label: "Completed",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  planned: {
    label: "Planned",
    className: "bg-muted text-muted-foreground",
  },
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.subtitle,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const status = statusConfig[project.status]

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/projects"
        className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to projects
      </Link>

      <header className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
              status.className,
            )}
          >
            {status.label}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center gap-0">
          {project.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={cn(
                "flex shrink-0 flex-col items-center px-4 first:pl-0",
                idx < project.metrics.length - 1 && "border-r border-border pr-4",
              )}
            >
              <span className="text-lg font-bold">{metric.value}</span>
              <span className="text-xs text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="size-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Free tier — may have cold start"
                >
                  ↗ Live demo
                </a>
              </Button>
            )}
          </div>
        )}
      </header>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          The Problem
        </h2>
        <p className="leading-relaxed text-foreground/90">{project.problem}</p>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          The Solution
        </h2>
        <p className="leading-relaxed text-foreground/90">{project.solution}</p>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          Impact
        </h2>
        <p className="leading-relaxed text-foreground/90">{project.impact}</p>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          Engineering Challenges
        </h2>
        <div className="flex flex-col gap-6">
          {project.challenges.map((challenge) => (
            <InsightBlock key={challenge.title} insight={challenge} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          Lessons Learned
        </h2>
        <div className="flex flex-col gap-6">
          {project.lessonsLearned.map((lesson) => (
            <InsightBlock key={lesson.title} insight={lesson} />
          ))}
        </div>
      </section>
    </article>
  )
}

function InsightBlock({ insight }: { insight: ProjectInsight }) {
  return (
    <div>
      <h3 className="text-base font-semibold">{insight.title}</h3>
      <p className="mt-1 leading-relaxed text-muted-foreground">
        {insight.description}
      </p>
    </div>
  )
}
