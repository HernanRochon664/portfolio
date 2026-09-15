import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

const LOCALE_HEADER = "x-locale";

function withLocaleHeader(request: NextRequest, locale: Locale) {
  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, locale);
  return headers;
}

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  const pathname =
    url.pathname.length > 1 && url.pathname.endsWith("/")
      ? url.pathname.slice(0, -1)
      : url.pathname;

  const first = pathname.split("/")[1] ?? "";

  if (isLocale(first)) {
    if (first !== defaultLocale) {
      return NextResponse.next({
        request: { headers: withLocaleHeader(request, first) },
      });
    }
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/") {
    const preferred = request.cookies.get(LOCALE_COOKIE)?.value;
    if (preferred && isLocale(preferred) && preferred !== defaultLocale) {
      url.pathname = `/${preferred}`;
      return NextResponse.redirect(url, 307);
    }
  }

  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url, {
    request: { headers: withLocaleHeader(request, defaultLocale) },
  });
}

export const config = {
  matcher: ["/((?!_next/|opengraph-image|.*\\.).*)"],
};
