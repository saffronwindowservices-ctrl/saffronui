import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { BRAND } from "@/data/content";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_45%)]" />

      <div className="container-page relative z-10 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready for Crystal Clear Windows?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sky-50/90">
            Request a free, no-obligation quote from your local Ontario
            window cleaning team.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="btn-amber">
              Get Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              <Phone className="h-4 w-4" />
              Call Today
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
