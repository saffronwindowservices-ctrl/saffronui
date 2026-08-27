import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND, HERO_BADGES } from "@/data/content";
import sampleImage from "../../src/logo.jpeg";
// const sampleImage = `data:image/svg+xml;utf8,${encodeURIComponent(
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900"><rect width="800" height="900" rx="48" fill="#f7fbff" /><rect x="80" y="120" width="640" height="620" rx="40" fill="#ffffff" stroke="#dceefc" stroke-width="10" /><rect x="140" y="180" width="520" height="500" rx="24" fill="url(#g)" /><rect x="180" y="250" width="440" height="360" rx="18" fill="#ffffff" opacity="0.95" /><rect x="210" y="280" width="180" height="220" rx="10" fill="#ecf8ff" /><rect x="410" y="280" width="160" height="220" rx="10" fill="#dff3ff" /><path d="M180 560h440" stroke="#8ecff0" stroke-width="8" stroke-linecap="round" /><circle cx="620" cy="220" r="42" fill="#2e90d9" opacity="0.2" /><circle cx="580" cy="230" r="20" fill="#2e90d9" opacity="0.35" /><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#eaf7ff" /><stop offset="100%" stop-color="#c7e9fb" /></linearGradient></defs></svg>`
// )}`;

interface TrustPillProps {
  icon: LucideIcon;
  label: string;
}

function TrustPill({ icon: Icon, label }: TrustPillProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/75 px-3 py-2 text-sm font-medium text-ink-700 backdrop-blur">
      <Icon className="h-4 w-4 shrink-0 text-sky-600" />
      {label}
    </div>
  );
}

function FloatingStat({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[1.2rem] border border-white/70 bg-white/80 p-4 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <p className="mt-3 text-lg font-semibold text-ink-900">{subtitle}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.97)_0%,rgba(240,249,255,0.9)_40%,rgba(255,255,255,0.95)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_55%)]" />
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/75 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-[0_12px_32px_-18px_rgba(14,165,233,0.55)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {BRAND.tagline}
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[0.95] text-ink-900 sm:text-5xl lg:text-6xl">
            See your property in a new light.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-700 sm:text-xl">
            Professional window cleaning that brings clarity, calm, and curb appeal back to homes and storefronts with a polished finish every time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-[0_18px_48px_-20px_rgba(14,165,233,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Get free quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/80 bg-white/75 px-6 py-3.5 font-semibold text-ink-900 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <Phone className="h-4 w-4 text-sky-600" />
              Call now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {HERO_BADGES.map((badge) => (
              <TrustPill key={badge} icon={CheckCircle2} label={badge} />
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <FloatingStat title="Rated" subtitle="4.9/5 from local clients" icon={Star} />
            <FloatingStat title="Experience" subtitle="3+ years of detail-led service" icon={ShieldCheck} />
            <FloatingStat title="Response" subtitle="Same-week visits available" icon={Clock3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-[1.65rem] border border-sky-100/80 bg-[linear-gradient(135deg,#f8fcff_0%,#eaf7ff_100%)] p-3 sm:p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_45%)]" />
              <img
                src={sampleImage}
                alt="A premium illustration of spotless windows with bright, polished glass"
                className="relative h-full w-full rounded-[1.2rem] object-cover"
                loading="eager"
              />

              {/* <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm backdrop-blur"
              >
                Before & after
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.45 }}
                className="absolute right-4 top-4 rounded-[1rem] border border-sky-200/70 bg-sky-950/95 px-4 py-3 text-white shadow-lg"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-200">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Trusted local care
                </div>
                <p className="mt-2 text-xl font-semibold">4.9/5</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="absolute bottom-4 left-4 rounded-[1rem] border border-white/80 bg-white/85 p-4 shadow-lg backdrop-blur"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <Clock3 className="h-4 w-4 text-sky-600" />
                  Same-week availability
                </div>
                <p className="mt-2 text-sm leading-6 text-slate">
                  Flexible booking and clear updates from first call to final walkthrough.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -left-4 top-10 hidden rounded-[1.2rem] border border-sky-200/70 bg-white/80 p-4 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur lg:block"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">
              <ShieldCheck className="h-4 w-4" />
              Fully insured
            </div>
            <p className="mt-2 text-lg font-semibold text-ink-900">Careful crews, every visit</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="absolute -bottom-6 right-4 hidden rounded-[1.2rem] border border-sky-200/70 bg-white/80 p-4 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur lg:block"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">
              <Sparkles className="h-4 w-4" />
              Detail-first finish
            </div>
            <p className="mt-2 text-lg font-semibold text-ink-900">Frames, sills, and glass all shine</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
