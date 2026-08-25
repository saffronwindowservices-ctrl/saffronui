import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Sparkles, Star, BadgeCheck } from "lucide-react";
import { STATS } from "@/data/content";

function AnimatedStat({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isNumeric = !Number.isNaN(Number(stat.value.replace(/[^0-9.]/g, "")));

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01, rotate: -0.8 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-sky-200/70 bg-white/70 p-5 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, 12, 0], y: [0, -6, 0] }}
        transition={{ duration: 8 + index * 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_58%)]"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-transparent opacity-70" />

      <div className="relative flex items-start justify-between gap-3">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { rotate: 6, scale: 1.04 }}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-sm"
        >
          <Sparkles className="h-5 w-5" />
        </motion.div>
        <div className="rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
          Verified
        </div>
      </div>

      <div className="relative mt-6">
        {isNumeric ? (
          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 + 0.15 }}
            className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink-900 sm:text-5xl"
          >
            {stat.value}
          </motion.p>
        ) : (
          <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink-900 sm:text-5xl">
            {stat.value}
          </p>
        )}
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-slate">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-sky-100 bg-[linear-gradient(120deg,rgba(248,252,255,0.98),rgba(240,249,255,0.9),rgba(255,255,255,0.95))] py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-[0_12px_32px_-16px_rgba(14,165,233,0.55)] backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted by homeowners and businesses
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Credibility that feels as polished as the finish itself.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate">
            From first quote to final walkthrough, our team brings precision, consistency, and a calm experience that homeowners and business owners remember.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat, index) => (
            <AnimatedStat key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-3.5 py-2 text-sm font-medium text-ink-700 backdrop-blur">
            <Star className="h-4 w-4 text-amber-500" />
            5-star rated by local clients
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-3.5 py-2 text-sm font-medium text-ink-700 backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-emerald-500" />
            Satisfaction guaranteed
          </div>
        </motion.div>
      </div>
    </section>
  );
}
