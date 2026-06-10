"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"
import { GithubIcon } from "@/components/ui/icons"

const statusConfig: Record<string, { label: string; className: string }> = {
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

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            FEATURED PROJECTS
          </p>
          <h2 className="text-3xl font-bold tracking-tight">Selected work</h2>
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((project, index) => {
            const status = statusConfig[project.status]
            return (
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
                      status.className,
                    )}
                  >
                    {status.label}
                  </span>
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  {project.subtitle}
                </p>

                <div className="mb-4 flex flex-wrap items-center gap-0">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={cn(
                        "flex shrink-0 flex-col items-center px-4 first:pl-0",
                        idx < project.metrics.length - 1 &&
                          "border-r border-border pr-4",
                      )}
                    >
                      <span className="text-lg font-bold">{metric.value}</span>
                      <span className="text-xs text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mb-6 line-clamp-2 text-sm text-muted-foreground">
                  {project.description}
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
                      href={`/projects/${project.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      View case study →
                    </Link>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        title="Free tier — may have cold start"
                      >
                        ↗ Live demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="View source on GitHub"
                      >
                        <GithubIcon className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
