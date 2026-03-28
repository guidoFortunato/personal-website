import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import WhyUs from "@/components/landing/why-us";
import Process from "@/components/landing/process";
// import Projects from "@/components/landing/projects";
import FAQ from "@/components/landing/faq";
import Contact from "@/components/landing/contact";
import Footer from "@/components/footer";

export default async function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      {/* <Projects /> */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
