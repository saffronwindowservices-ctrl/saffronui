import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { WHY_US } from "@/data/content";

export default function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/70 bg-gradient-to-br from-white via-sky-50 to-cyan-50 p-4 shadow-[0_20px_60px_-24px_rgba(11,31,51,0.28)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_55%)]" />
            <div className="relative rounded-[1.5rem] border border-sky-100/80 bg-white/80 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
                <Sparkles className="h-4 w-4" />
                The finish says it all
              </div>

              <div className="mt-6 rounded-[1.3rem] border border-sky-200/70 bg-sky-950/95 p-6 text-white shadow-[0_26px_60px_-28px_rgba(2,6,23,0.8)]">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Before &amp; after</p>
                <p className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  Bright, balanced, and unmistakably cared for.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.1rem] border border-sky-200/70 bg-sky-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-[0_18px_32px_-22px_rgba(14,165,233,0.5)]">
                  <p className="text-2xl font-semibold text-ink-900">No streaks</p>
                  <p className="mt-2 text-sm leading-6 text-slate">Every pane wiped clean, every frame finished neatly.</p>
                </div>
                <div className="rounded-[1.1rem] border border-sky-200/70 bg-sky-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-[0_18px_32px_-22px_rgba(14,165,233,0.5)]">
                  <p className="text-2xl font-semibold text-ink-900">No stress</p>
                  <p className="mt-2 text-sm leading-6 text-slate">Clear communication from your first call to the final check.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="rounded-[2rem] border border-sky-200/70 bg-white/80 p-6 shadow-[0_18px_60px_-28px_rgba(11,31,51,0.28)] backdrop-blur-xl sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Why homeowners trust us
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              A local team that makes the details feel easy
            </h2>
            <p className="mt-5 text-base leading-8 text-slate">
              We bring calm, precise service to homes and businesses that want their spaces to feel brighter without the usual hassle.
            </p>

            <ul className="mt-8 space-y-3">
              {WHY_US.map((item, index) => {
                const Icon = item.icon;
                const detail = [
                  "Skilled, dependable crews with a careful eye for the small details.",
                  "Thoughtful products and methods that respect your home and the environment.",
                  "Clear scheduling, easy communication, and a punctual arrival every time.",
                  "Friendly service backed by a promise to make it right if needed.",
                  "Straightforward pricing and no pressure, just honest value.",
                ][index];

                return (
                  <li
                    key={item.label}
                    className="group flex items-start gap-3 rounded-[1rem] border border-sky-100/80 bg-sky-50/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_18px_30px_-22px_rgba(14,165,233,0.45)]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink-800">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate">{detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_48px_-20px_rgba(14,165,233,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
