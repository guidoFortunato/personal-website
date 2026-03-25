import { getTranslations } from "next-intl/server";

const PROCESS_STEPS = [
  { num: "01", titleKey: "step1Title", descKey: "step1Desc", active: true },
  { num: "02", titleKey: "step2Title", descKey: "step2Desc", active: false },
  { num: "03", titleKey: "step3Title", descKey: "step3Desc", active: false },
  { num: "04", titleKey: "step4Title", descKey: "step4Desc", active: false },
];

export default async function Process() {
  const t = await getTranslations();

  return (
    <section
      className="py-24 md:py-32 bg-sc-surface-low relative overflow-hidden"
      id="proceso"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-sc-on-surface mb-20">
          {t("Process.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] bg-sc-outline-variant/30" />

          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 relative z-10 ${
                  step.active
                    ? "bg-sc-surface-highest border-4 border-sc-green"
                    : "bg-sc-surface-highest border-4 border-sc-outline-variant/30"
                }`}
              >
                <span
                  className={`font-bold ${
                    step.active
                      ? "text-sc-green"
                      : "text-sc-on-surface-variant"
                  }`}
                >
                  {step.num}
                </span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">
                {t(`Process.${step.titleKey}`)}
              </h4>
              <p className="text-sc-on-surface-variant text-sm leading-relaxed">
                {t(`Process.${step.descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
