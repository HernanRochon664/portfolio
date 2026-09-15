export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export type Localized<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
}

export function localizedPath(pathname: string, locale: Locale): string {
  const bare = stripLocale(pathname);
  if (locale === defaultLocale) return bare;
  return bare === "/" ? `/${locale}` : `/${locale}${bare}`;
}

export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
