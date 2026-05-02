"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-gray-50 to-gray-200">

      <div className="max-w-5xl text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          We Build Websites That
          <span className="text-black"> Grow Your Business</span>
        </motion.h1>


        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Professional website development, UI/UX design and digital
          solutions to help your business scale faster online.
        </motion.p>


        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
          </Link>

          <Link
            href="/portfolio"
            className="border border-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
          >
            View Our Work
          </Link>
        </motion.div>


        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-gray-500 text-sm"
        >
          Trusted by startups, agencies & growing businesses
        </motion.p>

      </div>

    </section>
  );
}