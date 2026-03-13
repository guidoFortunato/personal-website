"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const tLocale = useTranslations("Locale");
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-20 flex justify-end pt-[max(0.75rem,env(safe-area-inset-top))] pr-[max(1rem,env(safe-area-inset-right))] pl-3 pb-3 sm:pl-4 sm:pb-4"
    >
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 touch-manipulation"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={t("language")}
        >
          <span className="max-w-22 sm:max-w-none truncate">
            {tLocale(locale)}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <ul
            role="listbox"
            className="absolute right-0 top-full mt-1 min-w-40 max-w-[calc(100vw-2rem)] rounded-xl border border-white/10 bg-[#0a0a0a] py-1 shadow-lg"
          >
            {routing.locales.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === loc}
                  onClick={() => {
                    router.replace("/", { locale: loc });
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${
                    locale === loc ? "bg-white/10 text-white" : "text-slate-300"
                  }`}
                >
                  {tLocale(loc)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
