export default function WhyChooseUs() {

  const points = [
    "Modern responsive website design",
    "SEO-friendly development structure",
    "Fast loading optimized performance",
    "Conversion-focused UI/UX strategy",
    "Affordable pricing plans",
    "Reliable ongoing support",
  ];

  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Why Choose Us
        </h2>

        <p className="text-gray-600 mt-4">
          We combine strategy, design and technology to deliver
          high-performing digital experiences.
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">

        {points.map((point, index) => (

          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-sm"
          >
            {point}
          </div>

        ))}

      </div>

    </section>
  );
}