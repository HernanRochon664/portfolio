import type { Metadata } from "next";
import { localizedPath, type Locale } from "@/lib/i18n";

export const SITE_URL = "https://hernanrochon.com";

export function alternatesFor(route: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localizedPath(route, locale),
    languages: {
      en: localizedPath(route, "en"),
      es: localizedPath(route, "es"),
      "x-default": localizedPath(route, "en"),
    },
  };
}

export function openGraphLocale(locale: Locale): string {
  return locale === "es" ? "es_ES" : "en_US";
}
