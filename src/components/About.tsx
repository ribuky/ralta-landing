"use client";

import { motion } from "framer-motion";
import Reveal from "@/utils/Reveal";
import { Award, Rocket, Headphones, Users } from "lucide-react";

const highlights = [
  {
    icon: <Award className="w-6 h-6 text-retroGreen" />,
    title: "Berpengalaman",
    desc: "Tim dengan pengalaman di berbagai proyek digital.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-retroGreen" />,
    title: "Inovatif",
    desc: "Selalu menghadirkan solusi kreatif dan modern.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-retroGreen" />,
    title: "Support 24/7",
    desc: "Kami siap membantu kapan pun kamu butuh.",
  },
  {
    icon: <Users className="w-6 h-6 text-retroGreen" />,
    title: "Kolaboratif",
    desc: "Bekerja sama dengan klien untuk hasil terbaik.",
  },
];

// Variants untuk animasi container & child
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // jeda antar item
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-retroGreen text-cream"
    >
      {/* Left Illustration */}
      <motion.div
        className="mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/dummy.png"
          alt="About Ralta"
          className="w-72 md:w-[350px] rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right Content */}
      <div className="max-w-xl">
        <Reveal>
          <h2 className="text-4xl font-retro mb-4">Tentang Ralta</h2>
          <p className="font-vintage text-lg leading-relaxed mb-4">
            Ralta hadir untuk membantu bisnis dan brand kamu berkembang melalui
            solusi digital. Kami mengembangkan website, aplikasi mobile, dan
            aplikasi desktop dengan sentuhan desain vintage modern yang unik dan
            berkelas.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-vintage text-lg leading-relaxed mb-6">
            Fokus kami adalah memberikan hasil yang responsif, cepat, dan mudah
            digunakan, dengan dukungan penuh untuk kebutuhan digitalmu.
          </p>
        </Reveal>

        {/* Highlights dengan animasi stagger */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-3"
            >
              <div className="bg-cream p-2 rounded-full">{h.icon}</div>
              <div>
                <h4 className="font-retro text-lg">{h.title}</h4>
                <p className="text-sm font-vintage text-cream/80">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <Reveal delay={0.6}>
          <a
            href="https://wa.me/62895624560304"
            target="_blank"
            className="inline-block mt-8 bg-cream text-retroGreen px-6 py-3 rounded-xl font-retro shadow-md hover:bg-cream/90 transition"
          >
            Hubungi Kami
          </a>
        </Reveal>
      </div>
    </section>
  );
}
