import { useTranslations } from "next-intl";
import { Share2, Globe, AtSign } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-sc-surface w-full pb-16 px-8 border-t border-sc-surface-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        {/* <div className="col-span-1">
          <span className="text-2xl font-black text-sc-text-high mb-4 block">
            SteelClover
          </span>
          <p className="text-sc-text-high/50 font-headline text-sm leading-relaxed">
            {t("Footer.tagline")}
          </p>
        </div> */}

        {/* Navigation */}
        {/* <div className="col-span-1">
          <h4 className="text-sc-text-high font-bold mb-6 text-sm uppercase tracking-widest">
            {t("Footer.navTitle")}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#"
              >
                {t("Nav.home")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#servicios"
              >
                {t("Nav.services")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#proceso"
              >
                {t("Nav.process")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#proyectos"
              >
                {t("Nav.projects")}
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Legal */}
        {/* <div className="col-span-1">
          <h4 className="text-sc-text-high font-bold mb-6 text-sm uppercase tracking-widest">
            {t("Footer.legalTitle")}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#"
              >
                {t("Footer.terms")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sc-text-high/50 hover:text-sc-green transition-colors duration-200 text-sm"
                href="#"
              >
                {t("Footer.privacy")}
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Social */}
        {/* <div className="col-span-1">
          <h4 className="text-sc-text-high font-bold mb-6 text-sm uppercase tracking-widest">
            {t("Footer.socialTitle")}
          </h4>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 rounded-full bg-sc-surface-mid flex items-center justify-center text-sc-text-high/50 hover:text-sc-green hover:bg-sc-surface-high transition-all"
              href="#"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </Link>
            <Link
              className="w-10 h-10 rounded-full bg-sc-surface-mid flex items-center justify-center text-sc-text-high/50 hover:text-sc-green hover:bg-sc-surface-high transition-all"
              href="#"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              className="w-10 h-10 rounded-full bg-sc-surface-mid flex items-center justify-center text-sc-text-high/50 hover:text-sc-green hover:bg-sc-surface-high transition-all"
              href="#"
              aria-label="Email"
            >
              <AtSign className="h-5 w-5" />
            </Link>
          </div>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-sc-outline-variant/10 text-center">
        <p className="text-sc-text-high/50 font-headline text-sm leading-relaxed">
          © {new Date().getFullYear()} SteelClover.{" "}
          <br className="block md:hidden" />{" "}
          <span className="ml-1">{t("Footer.copyright")}</span>
        </p>
      </div>
    </footer>
  );
}
