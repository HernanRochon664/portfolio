"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Lab", href: "/lab" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "#", external: true },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-foreground"
        >
          HR
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1">
          {mounted ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              disabled
            >
              <Moon className="size-4" />
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/HernanRochon664"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
