"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { key: "home", href: "#" },
  { key: "services", href: "#servicios" },
  { key: "process", href: "#proceso" },
  { key: "projects", href: "#proyectos" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contacto" },
] as const;

export default function Navbar() {
  const t = useTranslations("Nav");
  const tLocale = useTranslations("Locale");
  const locale = useLocale();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-sc-surface/80 backdrop-blur-xl border-b border-sc-green/10 shadow-2xl shadow-black/40">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tighter text-sc-text-high">
          SteelClover
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-headline font-medium text-sm tracking-tight text-sc-text-high/70 hover:text-sc-green transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Right side: language + CTA */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-sc-text-high/70 hover:bg-white/10 transition-colors cursor-pointer"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {tLocale(locale)}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-full mt-1 min-w-32 rounded-xl border border-white/10 bg-sc-surface-lowest py-1 shadow-lg z-50">
                {routing.locales.map((loc) => (
                  <li key={loc}>
                    <button
                      type="button"
                      onClick={() => {
                        router.replace("/", { locale: loc });
                        setLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-white/10 cursor-pointer ${
                        locale === loc
                          ? "text-sc-green"
                          : "text-sc-on-surface-variant"
                      }`}
                    >
                      {tLocale(loc)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CTA button (desktop) */}
          <a
            href="#contacto"
            className="hidden md:block bg-sc-green text-sc-on-green px-6 py-2.5 rounded-lg font-headline font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(97,249,177,0.3)]"
          >
            {t("cta")}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-sc-text-high p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-sc-surface/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-headline font-medium text-base text-sc-text-high/70 hover:text-sc-green transition-colors py-2"
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-sc-green text-sc-on-green px-6 py-3 rounded-lg font-headline font-bold text-sm mt-4"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  );
}
