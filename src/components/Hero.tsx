"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 px-6 md:px-20 bg-cream"
    >
      {/* Left Content */}
      <motion.div
        className="max-w-xl space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-retro text-brown leading-tight">
          Bangun Website, Mobile App, dan Desktop App
        </h1>
        <p className="text-lg text-brown/80 font-vintage">
          Dengan sentuhan vintage modern untuk bisnis dan brand kamu.
        </p>
        <a
          href="https://wa.me/62895624560304"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brown text-cream px-6 py-3 rounded-xl font-vintage text-lg hover:bg-retroGreen transition"
        >
          Chat via WhatsApp
        </a>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/hero-illustration.png"
          alt="Ralta Hero Illustration"
          className="w-80 md:w-[400px] rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
