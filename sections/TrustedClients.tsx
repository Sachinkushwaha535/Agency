import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function TrustedClients() {

  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
  ];

  return (
    <section className="py-16 px-6 bg-white">

      {/* Heading */}
      <div className="text-center mb-10">

        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Trusted by growing brands
        </p>

      </div>


      {/* Logos Row */}
      <Reveal>
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">

        {logos.map((logo, index) => (

          <Image
            key={index}
            src={logo}
            alt="client logo"
            width={120}
            height={60}
            className="opacity-70 hover:opacity-100 transition"
          />

        ))}

      </div>
      </Reveal>

    </section>
  );
}