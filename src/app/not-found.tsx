import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center">
      <p className="text-8xl font-bold text-emerald-500 font-mono">404</p>
      <h1 className="mt-6 text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10 flex items-center gap-6">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View projects
        </Link>
      </div>
    </div>
  )
}
