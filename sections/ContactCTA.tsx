import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24 px-10 bg-black text-white text-center">

      <h2 className="text-4xl font-bold">
        Ready to Build Something Amazing?
      </h2>

      <p className="mt-4 text-gray-300 max-w-xl mx-auto">
        Let’s discuss your project and create a website that helps
        your business grow faster.
      </p>

      <Link href="/contact">
        <button className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Free Consultation
        </button>
      </Link>

    </section>
  );
}