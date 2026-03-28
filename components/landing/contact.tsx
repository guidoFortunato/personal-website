import { getTranslations } from "next-intl/server";
import WaitlistForm from "@/components/waitlist-form";

export default async function Contact() {
  const t = await getTranslations();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="contacto">
      <div className="absolute inset-0 bg-sc-green/5" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-sc-on-surface mb-6">
              {t("Contact.title")}
            </h2>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              <div className="text-center space-y-4">

                <p className="text-slate-400  leading-relaxed">
                  {t("Form.description")}
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
