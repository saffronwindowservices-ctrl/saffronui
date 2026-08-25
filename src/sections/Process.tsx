import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section className="bg-white/60 py-24 backdrop-blur-sm dark:bg-ink-800/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="A simple path to crystal-clear windows"
          align="center"
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent dark:via-sky-700 lg:block"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <RevealOnScroll key={step.step} delay={i * 90} className="relative text-center">
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 bg-cloud text-sky-600 dark:border-sky-700 dark:bg-ink-900 dark:text-glass">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-mono text-xs tracking-widest text-sky-500 dark:text-glass">
                  {step.step}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink-800 dark:text-cloud">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate dark:text-ink-100">
                  {step.description}
                </p>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
