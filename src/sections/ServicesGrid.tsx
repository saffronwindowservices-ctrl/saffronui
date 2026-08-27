import { ArrowRight, BadgeCheck, Check, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SERVICES } from "@/data/content";

interface ServicesGridProps {
  limit?: number;
  showDetails?: boolean;
}

interface ServiceCardProps {
  service: (typeof SERVICES)[number];
  showDetails?: boolean;
}

function ServiceCard({ service, showDetails = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-sky-200/70 bg-white/80 shadow-[0_20px_46px_-28px_rgba(11,31,51,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_28px_60px_-32px_rgba(14,165,233,0.35)] active:translate-y-0">
      <div className={`relative overflow-hidden border-b border-sky-200/70 bg-gradient-to-br ${service.image}`}>
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="inline-flex items-center rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm backdrop-blur">
            {service.badge ?? "Popular"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/80 px-2 py-1 text-[11px] font-semibold text-sky-700 shadow-sm backdrop-blur">
            <Star className="h-3 w-3 fill-current" />
            {service.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex min-h-[150px] items-center justify-center px-4 pb-4 pt-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-white/70 bg-white/75 text-sky-700 shadow-[0_18px_30px_-22px_rgba(14,165,233,0.6)] backdrop-blur transition-transform duration-300 group-hover:scale-[1.04]">
            <Icon className="h-9 w-9" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-600">{service.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-ink-900">{service.title}</h3>
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate">{service.description}</p>

        {showDetails && (
          <ul className="mt-4 space-y-2">
            {service.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2 text-sm text-ink-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Check className="h-3 w-3" />
                </span>
                {detail}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700">
            <ShieldCheck className="h-3 w-3" />
            Insured
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-sky-700">
            <Clock3 className="h-3 w-3" />
            Fast reply
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-sky-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate/70">Starting at</p>
            <p className="mt-1 text-2xl font-semibold text-ink-900">{service.price}</p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-sm font-semibold text-sky-700">
            <BadgeCheck className="h-4 w-4" />
            {service.rating.toFixed(1)} / 5
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_38px_-20px_rgba(14,165,233,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0"
          >
            Get quote
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2.5 text-sm font-semibold text-sky-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0"
          >
            See details
          </Link> */}
        </div>
      </div>
    </article>
  );
}

export default function ServicesGrid({ limit, showDetails = false }: ServicesGridProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="container-page">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Service catalog
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Tailored cleaning plans for homes, storefronts, and recurring care.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 p-2 shadow-[0_12px_32px_-24px_rgba(11,31,51,0.3)] backdrop-blur">
            {[
              { label: "Insured crews", icon: ShieldCheck },
              { label: "Fast response", icon: Clock3 },
              { label: "Satisfaction guarantee", icon: BadgeCheck },
            ].map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 60}>
              <ServiceCard service={service} showDetails={showDetails} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
