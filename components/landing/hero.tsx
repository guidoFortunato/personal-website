import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sc-green/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-sc-green-container/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sc-surface-high border border-sc-outline-variant/30 text-sc-green text-xs font-bold tracking-[0.1em] uppercase mb-8">
            {t("Hero.badge")}
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold text-sc-on-surface leading-[1.1] tracking-tight mb-8">
            {t("Hero.title1")}
            <span className="text-sc-green italic">
              {t("Hero.titleAccent1")}
            </span>
            {t("Hero.titleMid")}
            <span className="text-sc-green">{t("Hero.titleAccent2")}</span>
          </h1>
          <p className="text-sc-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            {t("Hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contacto"
              className="text-center bg-sc-green text-sc-on-green px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(97,249,177,0.2)]"
            >
              {t("Hero.ctaPrimary")}
            </a>
            <a
              href="#proyectos"
              className="text-center bg-sc-surface-high text-sc-green px-10 py-5 rounded-xl font-bold text-lg hover:bg-sc-surface-highest transition-all duration-300"
            >
              {t("Hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
