"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Dictionary } from "@/lib/dictionaries";
import { localizedPath, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "projects", href: "/projects" },
  { key: "lab", href: "/lab" },
  { key: "about", href: "/about" },
  { key: "resume", href: "/resume" },
] as const;

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary["nav"] }) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();
  const pathname = stripLocale(usePathname());

  return (
    <header className="no-print sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-2 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-0">
        <div className="flex items-center justify-between sm:contents">
          <Link
            href={localizedPath("/", locale)}
            className="font-mono text-sm font-bold tracking-tight text-emerald-500 sm:order-1"
          >
            HR
          </Link>

          <div className="flex items-center gap-1 sm:order-3">
            <LanguageSwitcher locale={locale} label={dict.language} />
            {mounted ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={dict.toggleTheme}
              >
                {theme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </Button>
            ) : (
              <Button variant="ghost" size="icon" aria-label={dict.toggleTheme} disabled>
                <Moon className="size-4" />
              </Button>
            )}
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/HernanRochon664"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.github}
              >
                <GithubIcon className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <nav className="flex items-center justify-center gap-5 sm:order-2 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={localizedPath(link.href, locale)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {dict[link.key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
