"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"
import { GithubIcon } from "@/components/ui/icons"
import type { Dictionary } from "@/lib/dictionaries"
import { localizedPath, t, type Locale } from "@/lib/i18n"
import { projectStatusClass } from "@/lib/project-status"

export function FeaturedProjects({
  locale,
  dict,
  sectionDict,
}: {
  locale: Locale
  dict: Dictionary["projects"]
  sectionDict: Dictionary["home"]["featured"]
}) {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {sectionDict.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight">{sectionDict.title}</h2>
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-border p-6 md:p-8 transition-colors duration-200 hover:border-emerald-500/40"
            >
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    projectStatusClass[project.status],
                  )}
                >
                  {dict.status[project.status]}
                </span>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {t(project.subtitle, locale)}
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-0">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={metric.value}
                    className={cn(
                      "flex shrink-0 flex-col items-center px-4 first:pl-0",
                      idx < project.metrics.length - 1 &&
                        "border-r border-border pr-4",
                    )}
                  >
                    <span className="text-lg font-bold">{metric.value}</span>
                    <span className="text-xs text-muted-foreground">
                      {t(metric.label, locale)}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mb-6 line-clamp-2 text-sm text-muted-foreground">
                {t(project.description, locale)}
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <Link
                    href={localizedPath(`/projects/${project.slug}`, locale)}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {dict.viewCaseStudy}
                  </Link>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      title={dict.liveDemoTitle}
                    >
                      {dict.liveDemo}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={dict.viewSource}
                    >
                      <GithubIcon className="size-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
