import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 pt-10">
      <div className="container-page py-10 sm:py-14">
        <p className="eyebrow mb-4 inline-block rounded-full border border-ink-800/10 bg-white/70 px-4 py-1.5 backdrop-blur-md">
          {eyebrow}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
