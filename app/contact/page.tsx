"use client";

import { useState } from "react";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white shadow-xl rounded-xl p-10"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>


        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
          required
        />


        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded mb-4"
          rows={5}
          onChange={handleChange}
          required
        />


        <button className="w-full bg-black text-white py-3 rounded">
          Send Message
        </button>

      </form>

    </section>
  );
}