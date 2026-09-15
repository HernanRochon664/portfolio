"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, locales, localizedPath, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const bare = stripLocale(usePathname());

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-md border border-border p-0.5"
    >
      {locales.map((target) => (
        <Link
          key={target}
          href={localizedPath(bare, target)}
          hrefLang={target}
          aria-current={target === locale ? "true" : undefined}
          onClick={() => {
            document.cookie = `${LOCALE_COOKIE}=${target};path=/;max-age=31536000;samesite=lax`;
          }}
          className={cn(
            "rounded-sm px-1.5 py-0.5 font-mono text-[11px] font-medium uppercase transition-colors",
            target === locale
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {target}
        </Link>
      ))}
    </div>
  );
}
