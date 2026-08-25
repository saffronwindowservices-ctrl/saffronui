import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import ServicesGrid from "@/sections/ServicesGrid";
import WhyUs from "@/sections/WhyUs";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import ServiceAreas from "@/sections/ServiceAreas";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <ServicesGrid limit={6} />
      <WhyUs />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </>
  );
}
