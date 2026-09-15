import type { Metadata } from "next"
import { labItems } from "@/data/lab"
import { GithubIcon } from "@/components/ui/icons"
import { getDictionary } from "@/lib/dictionaries"
import { alternatesFor } from "@/lib/seo"
import { t, type Locale } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.lab.metaTitle,
    description: dict.lab.metaDescription,
    alternates: alternatesFor("/lab", locale),
  }
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">{dict.lab.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{dict.lab.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {labItems.map((item) => (
          <div
            key={item.slug}
            className="relative rounded-lg border border-border p-4 transition-colors duration-200 hover:border-emerald-500/40"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-sm font-medium">{t(item.title, locale)}</h2>
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={dict.lab.viewSource}
                >
                  <GithubIcon className="size-4" />
                </a>
              )}
            </div>

            <p className="mt-1 text-xs text-muted-foreground">
              {t(item.description, locale)}
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
