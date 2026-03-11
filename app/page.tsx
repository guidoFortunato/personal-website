import LazyParticles from "@/components/lazy-particles";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <>
      {/* Interactive particle background */}
      <LazyParticles />

      {/* Gradient mesh overlay */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <section className="glass-card w-full max-w-md p-8 md:p-10 rounded-3xl transition-all duration-500 hover:border-white/20">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Join the waitlist
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leave your email and I&apos;ll notify you when the project
                launches.
              </p>
            </div>

            {/* Form */}
            <WaitlistForm />
          </div>
        </section>
      </main>
    </>
  );
}
