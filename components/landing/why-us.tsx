import { getTranslations } from "next-intl/server";
import {
  Building2,
  Zap,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export default async function WhyUs() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-32 bg-sc-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-sc-on-surface mb-20 text-center">
          {t("WhyUs.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">
          <div className="md:col-span-8 bg-sc-surface-low rounded-[2rem] p-12 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Building2 className="h-28 w-28" />
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 relative z-10">
              {t("WhyUs.designTitle")}
            </h3>
            <p className="text-sc-on-surface-variant text-lg max-w-md relative z-10">
              {t("WhyUs.designDesc")}
            </p>
          </div>

          <div className="md:col-span-4 bg-sc-green/10 border border-sc-green/20 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center group">
            <div className="w-20 h-20 rounded-full bg-sc-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="h-9 w-9 text-sc-green" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-2 text-sc-green">
              {t("WhyUs.speedTitle")}
            </h3>
            <p className="text-sc-on-surface-variant">
              {t("WhyUs.speedDesc")}
            </p>
          </div>

          <div className="md:col-span-4 bg-sc-surface-high rounded-[2rem] p-12 flex flex-col justify-between group">
            <Smartphone className="h-9 w-9 text-sc-green mb-8" />
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2">
                {t("WhyUs.responsiveTitle")}
              </h3>
              <p className="text-sc-on-surface-variant">
                {t("WhyUs.responsiveDesc")}
              </p>
            </div>
          </div>

          <div className="md:col-span-8 bg-sc-surface-mid rounded-[2rem] p-12 flex items-center justify-between group overflow-hidden">
            <div className="max-w-sm">
              <h3 className="font-headline text-3xl font-bold mb-4">
                {t("WhyUs.conversionTitle")}
              </h3>
              <p className="text-sc-on-surface-variant text-lg">
                {t("WhyUs.conversionDesc")}
              </p>
            </div>
            <div className="hidden lg:block transform translate-x-10">
              <TrendingUp className="h-40 w-40 text-sc-surface-highest" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
