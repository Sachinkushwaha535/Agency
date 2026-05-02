"use client";

import {
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import Reveal from "@/components/Reveal";

import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      icon: <FaCode size={28} />,
      title: "Website Development",
      desc: "Custom fast & scalable websites tailored to your business needs",
    },
    {
      icon: <FaPaintBrush size={28} />,
      title: "UI/UX Design",
      desc: "Modern and engaging user experiences that convert visitors",
    },
    {
      icon: <FaSearch size={28} />,
      title: "SEO Optimization",
      desc: "Improve Google rankings and increase organic traffic",
    },
    {
      icon: <FaShoppingCart size={28} />,
      title: "E-Commerce Solutions",
      desc: "Complete online store setup with secure payment integration",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto">

        <h2 className="text-4xl font-bold">
          Our Services
        </h2>

        <p className="text-gray-600 mt-4">
          We provide complete digital solutions to help your business
          grow online and reach more customers.
        </p>

      </div>


      {/* Services Grid */}
      <Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">

        {services.map((service, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition"
          >

            {/* Icon */}
            <div className="text-black mb-4 flex justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm">
              {service.desc}
            </p>

          </motion.div>

        ))}

      </div>
      </Reveal>

    </section>
  );
}