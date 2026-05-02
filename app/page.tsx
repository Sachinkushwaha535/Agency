import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Portfolio from "@/sections/Portfolio";
import ContactCTA from "@/sections/ContactCTA";
import Testimonials from "@/sections/Testimonials";
import TrustedClients from "@/sections/TrustedClients"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedClients />
      <Services />
      <Process />
      <Portfolio />
        <Testimonials />
      <ContactCTA />
    </>
  );
}