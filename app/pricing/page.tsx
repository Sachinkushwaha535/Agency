import ContactCTA from "@/sections/ContactCTA";

export default function PricingPage() {

  const plans = [
    {
      name: "Starter Website",
      price: "₹15,000",
      features: [
        "Up to 5 Pages Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Delivery in 5–7 Days"
      ]
    },

    {
      name: "Business Website",
      price: "₹35,000",
      features: [
        "Up to 12 Pages Website",
        "Custom UI Design",
        "Advanced SEO Optimization",
        "Speed Optimization",
        "Admin Panel Support",
        "Delivery in 10–14 Days"
      ]
    },

    {
      name: "Custom Website",
      price: "Contact Us",
      features: [
        "Unlimited Pages",
        "Fully Custom Design",
        "Advanced Features Integration",
        "E-commerce / Dashboard Options",
        "Priority Support",
        "Flexible Delivery Timeline"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 text-center bg-gray-50">

        <h1 className="text-5xl font-bold">
          Pricing Plans
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Flexible website packages designed for startups,
          businesses and growing brands.
        </p>

      </section>


      {/* Pricing Cards */}
      <section className="py-24 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {plans.map((plan, index) => (

            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-10 hover:shadow-xl transition"
            >

              <h2 className="text-2xl font-bold">
                {plan.name}
              </h2>

              <p className="text-3xl font-semibold mt-4">
                {plan.price}
              </p>


              <ul className="mt-6 space-y-3 text-gray-600">

                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}

              </ul>


              <button className="mt-8 w-full bg-black text-white py-3 rounded-lg">
                Get Started
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <ContactCTA />

    </>
  );
}