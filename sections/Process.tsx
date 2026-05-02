
import Reveal from "@/components/Reveal";
import { section } from "framer-motion/m";
export default function Process() {
  const steps = [
    "Discovery",
    "Planning",
    "Design",
    "Development",
    "Launch",
    "Support",
  ];

  return (
    <section className="py-20 px-10">

      <h2 className="text-4xl font-bold text-center">
        Our Process
      </h2>

      <Reveal>s

      <div className="grid md:grid-cols-6 gap-6 mt-12 text-center">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl"
          >
            <p className="font-semibold">{step}</p>
          </div>
        ))}

      </div>
        </Reveal>

    </section>
  );
}