import type { ProjectStatus } from "@/types";

export const projectStatusClass: Record<ProjectStatus, string> = {
  completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "in-progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  planned: "bg-muted text-muted-foreground",
};
