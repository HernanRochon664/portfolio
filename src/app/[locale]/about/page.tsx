import type { Metadata } from "next"
import { ExternalLink, Mail } from "lucide-react"
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons"
import { getDictionary } from "@/lib/dictionaries"
import { alternatesFor } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: alternatesFor("/about", locale),
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale).about
  const practices = Object.entries(dict.practices)

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">{dict.title}</h1>

      <div className="mt-8 flex flex-col gap-4 text-foreground/90 leading-relaxed">
        <p>
          {dict.bio.originBefore}
          <em>{dict.bio.originEmphasis}</em>
          {dict.bio.originAfter}
        </p>
        <p>{dict.bio.intro}</p>
        <p>{dict.bio.values}</p>
        <p>{dict.bio.looking}</p>
      </div>

      <div className="mt-12">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {dict.practicesTitle}
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {practices.map(([key, item]) => (
            <div key={key} className="flex items-start gap-3">
              <span className="mt-0.5 text-emerald-500">▸</span>
              <div>
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-sm text-muted-foreground"> - {item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <a
          href="https://github.com/HernanRochon664"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hernan-rochon/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="size-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:hernan.rochon7@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="size-4" />
          <span>Email</span>
        </a>
        <a
          href="https://hernanrochon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="size-4" />
          <span>hernanrochon.com</span>
        </a>
      </div>
    </div>
  )
}
