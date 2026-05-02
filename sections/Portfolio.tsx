"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Portfolio() {

  const projects = [
    {
      title: "Business Website",
      category: "Web Development",
      image: "/projects/project1.jpg",
    },
    {
      title: "E-Commerce Store",
      category: "E-Commerce",
      image: "/projects/project2.jpg",
    },
    {
      title: "Startup Landing Page",
      category: "UI/UX Design",
      image: "/projects/project3.jpg",
    },
  ];

  return (
    <section className="py-24 px-6">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">

        <h2 className="text-4xl font-bold">
          Our Recent Work
        </h2>

        <p className="text-gray-600 mt-4">
          Explore some of our recent projects delivered for startups
          and growing businesses.
        </p>

      </div>


      {/* Portfolio Grid */}
      <Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >

            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="w-full h-72 object-cover"
            />


            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm mt-2">
                {project.category}
              </p>

              <Link
                href="/portfolio"
                className="mt-4 border px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                View Project
              </Link>

            </div>

          </motion.div>

        ))}

      </div>
        </Reveal>
    </section>
  );
}