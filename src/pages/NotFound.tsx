import { Link } from "react-router-dom";
import { Droplet, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 text-center">
      <div>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-600 dark:bg-white/10 dark:text-glass">
          <Droplet className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-ink-900 dark:text-white">
          404 — Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-slate dark:text-ink-100">
          The page you're looking for has been wiped clean. Let's get you back to a clear view.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
