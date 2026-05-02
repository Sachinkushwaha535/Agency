"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Reveal from "@/components/Reveal";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      message:
        "They built our website exactly how we imagined. Professional, fast and highly recommended!",
    },
    {
      name: "Neha Verma",
      role: "E-commerce Owner",
      message:
        "Our online store performance improved massively after redesign. Amazing experience working together.",
    },
    {
      name: "Amit Patel",
      role: "Business Consultant",
      message:
        "Very smooth workflow and great communication. Delivered before deadline!",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">

        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 mt-4">
          Trusted by businesses across industries for reliable
          website and digital solutions.
        </p>

      </div>


      {/* Cards */}
      <Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
          >

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 mb-4">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>


            {/* Message */}
            <p className="text-gray-600 text-sm">
              "{item.message}"
            </p>


            {/* Client Info */}
            <div className="mt-6">

              <h4 className="font-semibold">
                {item.name}
              </h4>

              <p className="text-gray-500 text-sm">
                {item.role}
              </p>

            </div>

          </motion.div>

        ))}

      </div>
        </Reveal>
    </section>
  );
}