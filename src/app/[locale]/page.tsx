import { Hero } from "@/components/home/Hero"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { Skills } from "@/components/home/Skills"
import { LabPreview } from "@/components/home/LabPreview"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/i18n"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <>
      <Hero locale={locale} dict={dict.home.hero} />
      <FeaturedProjects
        locale={locale}
        dict={dict.projects}
        sectionDict={dict.home.featured}
      />
      <Skills dict={dict.home.skills} />
      <LabPreview locale={locale} dict={dict.home.lab} labDict={dict.lab} />
    </>
  )
}
