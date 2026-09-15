import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-border py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          HR &middot; {currentYear}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/HernanRochon664"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.github}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hernan-rochon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.linkedin}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href="mailto:hernan.rochon7@gmail.com"
            aria-label={dict.email}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
