import Image from "next/image";
import ContactCTA from "@/sections/ContactCTA";

export default function PortfolioPage() {

  const projects = [
    {
      title: "Corporate Business Website",
      category: "Web Development",
      image: "/projects/project1.jpg",
    },
    {
      title: "E-Commerce Store",
      category: "Online Store",
      image: "/projects/project2.jpg",
    },
    {
      title: "Startup Landing Page",
      category: "UI/UX Design",
      image: "/projects/project3.jpg",
    },
    {
      title: "Healthcare Website",
      category: "Website Design",
      image: "/projects/project1.jpg",
    },
    {
      title: "Education Platform",
      category: "Web Application",
      image: "/projects/project2.jpg",
    },
    {
      title: "Restaurant Website",
      category: "Business Website",
      image: "/projects/project3.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 text-center bg-gray-50">

        <h1 className="text-5xl font-bold">
          Our Portfolio
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore some of the websites and digital experiences
          we’ve crafted for our clients.
        </p>

      </section>


      {/* Projects Grid */}
      <section className="py-24 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={350}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <p className="text-sm text-gray-500">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold mt-2">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <ContactCTA />

    </>
  );
}