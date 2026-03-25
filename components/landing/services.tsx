import { getTranslations } from "next-intl/server";
import { Globe, MousePointerClick, ShoppingBag } from "lucide-react";

export default async function Services() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-32 bg-sc-surface-low" id="servicios">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-sc-on-surface mb-6">
              {t("Services.title")}
            </h2>
            <p className="text-sc-on-surface-variant text-lg leading-relaxed">
              {t("Services.description")}
            </p>
          </div>
          <div className="hidden md:block h-[2px] w-24 bg-sc-green mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-10 bg-sc-surface-mid rounded-3xl hover:bg-sc-surface-high transition-all duration-500 ease-out-expo hover:scale-[1.02] border border-sc-outline-variant/10">
            <div className="w-14 h-14 bg-sc-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sc-green transition-colors duration-500">
              <Globe className="h-7 w-7 text-sc-green group-hover:text-sc-on-green" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              {t("Services.websitesTitle")}
            </h3>
            <p className="text-sc-on-surface-variant leading-relaxed">
              {t("Services.websitesDesc")}
            </p>
          </div>

          <div className="group p-10 bg-sc-surface-mid rounded-3xl hover:bg-sc-surface-high transition-all duration-500 ease-out-expo hover:scale-[1.02] border border-sc-outline-variant/10">
            <div className="w-14 h-14 bg-sc-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sc-green transition-colors duration-500">
              <MousePointerClick className="h-7 w-7 text-sc-green group-hover:text-sc-on-green" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              {t("Services.landingTitle")}
            </h3>
            <p className="text-sc-on-surface-variant leading-relaxed">
              {t("Services.landingDesc")}
            </p>
          </div>

          <div className="group p-10 bg-sc-surface-mid rounded-3xl hover:bg-sc-surface-high transition-all duration-500 ease-out-expo hover:scale-[1.02] border border-sc-outline-variant/10">
            <div className="w-14 h-14 bg-sc-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sc-green transition-colors duration-500">
              <ShoppingBag className="h-7 w-7 text-sc-green group-hover:text-sc-on-green" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              {t("Services.ecommerceTitle")}
            </h3>
            <p className="text-sc-on-surface-variant leading-relaxed">
              {t("Services.ecommerceDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
