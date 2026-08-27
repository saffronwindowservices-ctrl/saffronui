import { ArrowRight, BadgeCheck, CalendarClock, Check, Clock3, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import Stats from "@/sections/Stats";
import WhyUs from "@/sections/WhyUs";
import ServiceAreas from "@/sections/ServiceAreas";
import CTA from "@/sections/CTA";
import Process from "@/sections/Process";

const trustBadges = [
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: CalendarClock, label: "Same-week slots" },
  { icon: Leaf, label: "Eco-friendly care" },
  { icon: Star, label: "5-star service" },
];

const storyTimeline = [
  {
    year: "2023",
    title: "One ladder, one truck",
    detail: "Started with purified water, a neighbourhood list, and a standard no one would compromise.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2025",
    title: "First 500 homes",
    detail: "Word of mouth turned small jobs into a repeatable service people could trust.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "Today",
    title: "A crew and a standard",
    detail: "Still local. Still referral-driven. Still no sales-heavy approach, just clean work done well.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

const steps = [
  {
    step: "01",
    title: "Request a quote",
    time: "2 min",
    description: "Tell us about your home, business, or service goals.",
    href: "/contact?service=quote",
  },
  {
    step: "02",
    title: "Pick a visit",
    time: "Same-week slots",
    description: "We confirm timing, arrival window, and what is included.",
    href: "/contact?service=schedule",
  },
  {
    step: "03",
    title: "Enjoy the view",
    time: "Relax",
    description: "Our crew handles the rest while you enjoy a clearer space.",
    href: "/contact?service=final",
  },
];

function StoryTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const storyRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const items = storyRefs.current.filter(Boolean) as HTMLElement[];
    if (!items.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveIndex(Number(visible.target.getAttribute("data-index")) || 0);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.6, 0.9],
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Our story</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">Built on referrals, not hype.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-sky-200 via-sky-300 to-transparent md:block" />

          <div className="space-y-10 md:space-y-14">
            {storyTimeline.map((beat, index) => {
              const isActive = prefersReducedMotion || activeIndex === index;
              const imageLeft = index % 2 === 0;

              return (
                <article
                  key={beat.year}
                  ref={(el) => {
                    storyRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`story-beat transition-all duration-500 ${isActive ? "opacity-100" : "opacity-55"}`}
                >
                  <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <div className={imageLeft ? "md:order-1" : "md:order-2"}>
                      <div className="relative overflow-hidden rounded-[1.75rem] border border-sky-200/70 bg-gradient-to-br from-sky-100 via-white to-cyan-50 p-3 shadow-[0_24px_70px_-32px_rgba(11,31,51,0.28)]">
                        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/70">
                          <img
                            src={beat.image}
                            alt={beat.title}
                            className="h-[280px] w-full object-cover md:h-[330px]"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-950/70 via-sky-900/20 to-transparent p-4">
                            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                              {beat.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                      <div className="rounded-[1.5rem] border border-sky-200/70 bg-white/80 p-5 shadow-[0_18px_50px_-28px_rgba(11,31,51,0.28)] backdrop-blur-xl sm:p-6">
                        <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-700">
                          {beat.year}
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">{beat.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate sm:text-base">{beat.detail}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <blockquote className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-sky-200/70 bg-sky-950 px-6 py-8 text-center text-white shadow-[0_28px_80px_-36px_rgba(2,6,23,0.75)] sm:px-10">
          <p className="text-lg leading-8 text-sky-50 sm:text-2xl">
            “We started with one ladder and one promise: do the job right, and make it easy to trust us again.”
          </p>
        </blockquote>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Saffron Window Cleaning"
        title="A local team that turns routine cleaning into a smoother, calmer experience"
        description="We started Saffron Window Cleaning to bring a genuinely local, detail-first standard to window cleaning — and that's still the whole job today."
      />

      <Stats />
      <StoryTimeline />

      {/* <section className="pb-24"> */}
        {/* <div className="container-page"> */}
          {/* <div className="mb-8 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl">A simple booking flow, built to remove friction.</h2>
          </div> */}
<Process/>
          {/* <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ step, title, time, description, href }, index) => (
              <RevealOnScroll key={step} delay={index * 80}>
                <Link
                  to={href}
                  className="group block rounded-[1.5rem] border border-sky-200/70 bg-white/80 p-5 text-left shadow-[0_18px_50px_-28px_rgba(11,31,51,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_58px_-30px_rgba(14,165,233,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">{step}</span>
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {time}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate">{description}</p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                    {index === 0 ? "Start your quote" : "Learn more"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* <section className="pb-24">
        <div className="container-page">
          <div className="rounded-[2rem] border border-sky-200/70 bg-white/80 p-6 shadow-[0_18px_50px_-28px_rgba(11,31,51,0.28)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {[
                { value: "2+", label: "Years" },
                { value: "100+", label: "Homes cleaned" },
                { value: "92%", label: "Repeat clients" },
                { value: "0 ads", label: "Referral driven" },
              ].map((item) => (
                <div key={item.label} className="min-w-[150px] rounded-[1.15rem] border border-sky-200/70 bg-sky-50/60 px-4 py-3">
                  <div className="text-2xl font-semibold text-ink-900">{item.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <WhyUs />
      <ServiceAreas />
      <CTA />
    </>
  );
}
