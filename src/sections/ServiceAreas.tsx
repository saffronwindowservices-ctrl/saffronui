import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { BRAND, SERVICE_AREAS } from "@/data/content";

export default function ServiceAreas() {
  return (
    <section className="bg-white/60 py-24 backdrop-blur-sm dark:bg-ink-800/30">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <p className="eyebrow mb-3">Coverage</p>
          <h2 className="text-3xl font-semibold text-ink-800 dark:text-cloud sm:text-4xl">
            Proudly serving Ontario and nearby communities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate dark:text-ink-100">
            {BRAND.serviceArea}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-2 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="glass-panel flex items-center gap-3 px-5 py-4"
              >
                <MapPin className="h-5 w-5 shrink-0 text-sky-600 dark:text-glass" />
                <span className="font-medium text-ink-800 dark:text-cloud">{area}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
