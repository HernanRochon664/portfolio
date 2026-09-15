import type { Metadata } from "next"
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
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
    alternates: alternatesFor("/contact", locale),
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return <div>{dict.contact.title}</div>
}
