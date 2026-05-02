import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 py-16">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Agency
          </h2>

          <p className="mt-4 text-sm">
            We build modern websites that help businesses grow faster.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>


        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>E-commerce Solutions</li>
          </ul>
        </div>


        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Email: info@agency.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">

        © {new Date().getFullYear()} Agency. All rights reserved.

      </div>

    </footer>
  );
}