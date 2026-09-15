import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import { GithubIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"
import { alternatesFor } from "@/lib/seo"
import { localizedPath, t, type Locale } from "@/lib/i18n"
import { projectStatusClass } from "@/lib/project-status"
import type { ProjectInsight } from "@/types"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: t(project.subtitle, locale),
    alternates: alternatesFor(`/projects/${slug}`, locale),
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const dict = getDictionary(locale).projects

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href={localizedPath("/projects", locale)}
        className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {dict.back}
      </Link>

      <header className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
              projectStatusClass[project.status],
            )}
          >
            {dict.status[project.status]}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t(project.subtitle, locale)}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-0">
          {project.metrics.map((metric, idx) => (
            <div
              key={metric.value}
              className={cn(
                "flex shrink-0 flex-col items-center px-4 first:pl-0",
                idx < project.metrics.length - 1 && "border-r border-border pr-4",
              )}
            >
              <span className="text-lg font-bold">{metric.value}</span>
              <span className="text-xs text-muted-foreground">
                {t(metric.label, locale)}
              </span>
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
                  {dict.viewOnGithub}
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={dict.liveDemoTitle}
                >
                  {dict.liveDemo}
                </a>
              </Button>
            )}
          </div>
        )}
      </header>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          {dict.sections.problem}
        </h2>
        <p className="leading-relaxed text-foreground/90">
          {t(project.problem, locale)}
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          {dict.sections.solution}
        </h2>
        <p className="leading-relaxed text-foreground/90">
          {t(project.solution, locale)}
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          {dict.sections.impact}
        </h2>
        <p className="leading-relaxed text-foreground/90">
          {t(project.impact, locale)}
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          {dict.sections.challenges}
        </h2>
        <div className="flex flex-col gap-6">
          {project.challenges.map((challenge) => (
            <InsightBlock
              key={challenge.title.en}
              insight={challenge}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mt-12 mb-3 border-b border-border pb-2 text-xl font-semibold">
          {dict.sections.lessons}
        </h2>
        <div className="flex flex-col gap-6">
          {project.lessonsLearned.map((lesson) => (
            <InsightBlock key={lesson.title.en} insight={lesson} locale={locale} />
          ))}
        </div>
      </section>
    </article>
  )
}

function InsightBlock({
  insight,
  locale,
}: {
  insight: ProjectInsight
  locale: Locale
}) {
  return (
    <div>
      <h3 className="text-base font-semibold">{t(insight.title, locale)}</h3>
      <p className="mt-1 leading-relaxed text-muted-foreground">
        {t(insight.description, locale)}
      </p>
    </div>
  )
}
