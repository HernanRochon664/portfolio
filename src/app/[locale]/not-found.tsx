"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getDictionary } from "@/lib/dictionaries"
import { defaultLocale, isLocale, localizedPath } from "@/lib/i18n"

export default function NotFound() {
  const segment = usePathname().split("/")[1] ?? ""
  const locale = isLocale(segment) ? segment : defaultLocale
  const dict = getDictionary(locale)

  return (
    <div className="mx-auto max-w-2xl px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center">
      <p className="text-8xl font-bold text-emerald-500 font-mono">404</p>
      <h1 className="mt-6 text-2xl font-semibold">{dict.notFound.title}</h1>
      <p className="mt-3 text-muted-foreground">{dict.notFound.description}</p>
      <div className="mt-10 flex items-center gap-6">
        <Link
          href={localizedPath("/", locale)}
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {dict.notFound.goHome}
        </Link>
        <Link
          href={localizedPath("/projects", locale)}
          className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {dict.notFound.viewProjects}
        </Link>
      </div>
    </div>
  )
}
