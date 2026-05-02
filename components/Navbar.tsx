"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Agency
        </h1>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">

          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>

        </div>


        {/* CTA Button Desktop */}
        <Link
          href="/contact"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-lg"
        >
          Get Quote
        </Link>


        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 mt-6 font-medium">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>

          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}