import Services from "@/sections/Services";
import Process from "@/sections/Process";
import ContactCTA from "@/sections/ContactCTA";
import WhyChooseUs from "@/sections/WhyChooseUs";

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 text-center bg-gray-50">

        <h1 className="text-5xl font-bold">
          Our Services
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide complete website development and digital solutions
          tailored to help your business grow online.
        </p>

      </section>

      <Services />

      <WhyChooseUs />

      <Process />

      <ContactCTA />
    </>
  );
}