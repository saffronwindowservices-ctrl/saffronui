import { Link } from "react-router-dom";
import { Droplet, Phone, Mail, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS, SERVICE_AREAS } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-800/10 bg-cloud-dim dark:border-white/10 dark:bg-ink-950">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
                    {/* <span className="flex h-12 w-12 items-center justify-center overflow-hidden">
    <img
      src="../../public/logo_outline.png"
      alt={`${BRAND.name} logo`}
      className="h-full w-full object-cover"
    />
  </span> */}
  <img
    src="/FinalLogo.png"
    alt={`${BRAND.name} logo`}
    className="h-16 w-auto object-contain"
  />
            {BRAND.name.toUpperCase()}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate dark:text-ink-100">
            Professional window cleaning for Ontario &amp; nearby communities.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Navigate</h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-ink-700 transition-colors hover:text-sky-600 dark:text-cloud/80 dark:hover:text-glass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-ink-700 dark:text-cloud/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-sky-600 dark:text-glass" />
              <a href={BRAND.phoneHref} className="hover:text-sky-600 dark:hover:text-glass">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-sky-600 dark:text-glass" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-sky-600 dark:hover:text-glass">
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-glass" />
              <span>{BRAND.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Service Area</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-ink-700 dark:text-cloud/80">
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800/10 py-6 dark:border-white/10">
        <p className="container-page text-center text-xs text-slate dark:text-ink-200">
          © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
