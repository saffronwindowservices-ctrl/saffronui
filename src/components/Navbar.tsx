import { useEffect, useState } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Droplet } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-800/10 bg-white/80 backdrop-blur-lg shadow-glass dark:border-white/10 dark:bg-ink-900/80"
          : "bg-transparent"
      }`}
    >
  <nav className="container-page flex h-25 items-center justify-between">
  <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
    <img
      src="/FinalLogo.png"
      alt={`${BRAND.name} logo`}
      className="h-16 w-auto object-contain"
    />

          <span className={scrolled ? "text-ink-800 dark:text-cloud" : "text-ink-800 dark:text-cloud"}>
            {BRAND.name.toUpperCase()}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-sky-600 dark:text-glass"
                    : "text-ink-700 hover:text-sky-600 dark:text-cloud/80 dark:hover:text-glass"
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={BRAND.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-800 dark:text-cloud"
          >
            <Phone className="h-4 w-4 text-sky-600 dark:text-glass" />
            {BRAND.phone}
          </a>
          <Link to="/contact" className="btn-primary">
            Get Free Quote
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-800/15 bg-white/70 text-ink-800 backdrop-blur-md dark:border-white/15 dark:bg-white/5 dark:text-cloud"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-800/10 bg-white/95 backdrop-blur-lg dark:border-white/10 dark:bg-ink-900/95 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-sky-50 text-sky-700 dark:bg-white/10 dark:text-glass"
                      : "text-ink-700 hover:bg-ink-800/5 dark:text-cloud/80 dark:hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <a
              href={BRAND.phoneHref}
              className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-ink-800 dark:text-cloud"
            >
              <Phone className="h-4 w-4 text-sky-600 dark:text-glass" />
              {BRAND.phone}
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
