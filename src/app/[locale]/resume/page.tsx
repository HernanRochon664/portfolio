import type { Metadata } from "next"
import Image from "next/image"
import { PrintButton } from "./PrintButton"
import { getDictionary } from "@/lib/dictionaries"
import { alternatesFor } from "@/lib/seo"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/i18n"

const sectionHeading =
  "text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-1 mb-3 print:mb-2 print:text-[8.5pt]"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    title: dict.resume.metaTitle,
    description: dict.resume.metaDescription,
    alternates: alternatesFor("/resume", locale),
  }
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale).resume

  return (
    <div className="mx-auto max-w-2xl px-8 py-12 print:px-0 print:py-0">
      <div className="mb-8 flex justify-end print:hidden">
        <PrintButton label={dict.download} />
      </div>

      <header className="mb-10 flex items-center gap-5 print:mb-3 print:gap-4">
        <Image
          src="/images/profile.jpg"
          alt={dict.photoAlt}
          width={240}
          height={240}
          priority
          className={cn(
            "size-24 shrink-0 rounded-full object-cover object-center",
            "ring-2 ring-emerald-500/40 ring-offset-2 ring-offset-background",
            "print:size-[20mm] print:ring-0 print:ring-offset-0",
            "print:border print:border-neutral-300",
          )}
        />

        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight print:text-[19pt] print:leading-tight">
            Hernan Rochon
          </h1>
          <p className="mt-1 text-muted-foreground print:mt-0 print:text-[11pt]">
            {dict.role}
          </p>
          <div className="mt-3 flex flex-col font-mono text-xs leading-relaxed text-muted-foreground print:mt-1 print:text-[8.5pt] print:leading-snug">
            <span>hernan.rochon7@gmail.com · hernanrochon.com</span>
            <span>linkedin.com/in/hernan-rochon · github.com/HernanRochon664</span>
          </div>
        </div>
      </header>

      <section className="mb-8 print:mb-3">
        <h2 className={sectionHeading}>{dict.sections.summary}</h2>
        <p className="text-sm leading-relaxed text-foreground/90 print:text-[10.5pt] print:leading-snug">
          {dict.summary}
        </p>
      </section>

      <section className="mb-8 print:mb-3">
        <h2 className={sectionHeading}>{dict.sections.projects}</h2>
        <div className="flex flex-col gap-5 print:gap-2.5">
          {dict.projects.map((project) => (
            <div key={project.title}>
              <p className="text-sm print:text-[10.5pt]">
                <span className="font-bold">{project.title}</span>
                <span className="text-muted-foreground">
                  {" "}
                  - {project.subtitle}
                </span>
              </p>
              <ul className="mt-1.5 ml-5 list-disc space-y-1 text-sm text-foreground/90 marker:text-muted-foreground print:mt-1 print:space-y-0.5 print:text-[10.5pt]">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-1.5 text-xs text-muted-foreground print:mt-1 print:text-[8.5pt]">
                <span className="font-medium">{dict.stackLabel}</span> {project.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 print:mb-3">
        <h2 className={sectionHeading}>{dict.sections.skills}</h2>
        <div className="flex flex-col gap-1.5 text-sm print:gap-1 print:text-[10.5pt]">
          {Object.entries(dict.skills).map(([key, row]) => (
            <p key={key}>
              <span className="font-bold">{row.label}:</span>{" "}
              <span className="text-foreground/90">{row.values}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mb-8 print:mb-3">
        <h2 className={sectionHeading}>{dict.sections.certifications}</h2>
        <ul className="ml-5 list-disc space-y-1 text-sm text-foreground/90 marker:text-muted-foreground print:space-y-0.5 print:text-[10.5pt]">
          {dict.certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>

      <div className="print:grid print:grid-cols-2 print:gap-8">
        <section className="mb-8 print:mb-0">
          <h2 className={sectionHeading}>{dict.sections.education}</h2>
          <p className="text-sm text-foreground/90 print:text-[10.5pt]">{dict.education}</p>
        </section>

        <section>
          <h2 className={sectionHeading}>{dict.sections.languages}</h2>
          <ul className="flex flex-col gap-1 text-sm text-foreground/90 print:gap-0.5 print:text-[10.5pt]">
            {Object.entries(dict.languages).map(([key, language]) => (
              <li key={key}>
                <span className="font-bold">{language.label}</span> - {language.level}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
