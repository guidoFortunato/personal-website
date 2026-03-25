import { getTranslations } from "next-intl/server";

const FAQ_KEYS = ["1", "2", "3", "4"] as const;

export default async function FAQ() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-32 bg-sc-surface-low" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-sc-on-surface mb-16 text-center">
          {t("FAQ.title")}
        </h2>
        <div className="space-y-4">
          {FAQ_KEYS.map((key) => (
            <div
              key={key}
              className="bg-sc-surface-mid rounded-2xl p-6 border border-sc-outline-variant/5"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none font-headline text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {t(`FAQ.q${key}`)}
                  <svg
                    className="h-5 w-5 shrink-0 text-sc-on-surface-variant group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sc-on-surface-variant leading-relaxed">
                  {t(`FAQ.a${key}`)}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
