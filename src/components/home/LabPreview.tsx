import Link from "next/link"
import { labItems } from "@/data/lab"
import { GithubIcon } from "@/components/ui/icons"
import type { Dictionary } from "@/lib/dictionaries"
import { localizedPath, t, type Locale } from "@/lib/i18n"

export function LabPreview({
  locale,
  dict,
  labDict,
}: {
  locale: Locale
  dict: Dictionary["home"]["lab"]
  labDict: Dictionary["lab"]
}) {
  const previewItems = labItems.slice(0, 3)

  return (
    <section id="lab" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {dict.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight">{dict.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {previewItems.map((item) => (
            <div
              key={item.slug}
              className="relative rounded-lg border border-border p-4 transition-colors duration-200 hover:border-emerald-500/40"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium">{t(item.title, locale)}</h3>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={labDict.viewSource}
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

        <div className="mt-8 text-center">
          <Link
            href={localizedPath("/lab", locale)}
            className="text-sm font-medium text-primary hover:underline"
          >
            {dict.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
