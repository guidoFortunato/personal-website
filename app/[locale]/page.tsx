import LazyParticles from "@/components/lazy-particles";
import WaitlistForm from "@/components/waitlist-form";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Form");

  return (
    <>
      <LazyParticles />
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      <main className="relative z-10 flex flex-col items-center min-h-screen px-4 py-20 justify-center">
        <section className="glass-card w-full max-w-xl p-6 sm:p-8 md:p-10 rounded-3xl transition-all duration-500 hover:border-white/20">
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                {t("title")}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("description")}
              </p>
            </div>
            <WaitlistForm />
          </div>
        </section>
      </main>
    </>
  );
}
