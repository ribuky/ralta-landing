"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Website Toko Kopi",
    image: "/dummy.png",
  },
  {
    title: "Aplikasi Mobile Edukasi",
    image: "/dummy.png",
  },
  {
    title: "Dashboard Desktop",
    image: "/dummy.png",
  },
  {
    title: "Landing Page Retro",
    image: "/dummy.png",
  },
  {
    title: "Aplikasi Mobile Travel",
    image: "/dummy.png",
  },
  {
    title: "Website Restoran Vintage",
    image: "/dummy.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen px-6 md:px-20 py-20 bg-retroGreen text-cream"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-retro mb-4">Portfolio</h2>
        <p className="font-vintage text-lg max-w-2xl mx-auto">
          Beberapa hasil karya yang telah kami buat untuk klien dengan berbagai
          kebutuhan digital.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="relative rounded-xl overflow-hidden shadow-lg bg-white text-brown group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition"
            />

            {/* Overlay saat hover */}
            {/* <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
              <a
                href="#"
                target="_blank"
                className="bg-cream text-retroGreen px-4 py-2 rounded-lg font-retro shadow hover:bg-cream/90"
              >
                Lihat Demo
              </a>
              <a
                href="#"
                className="bg-retroGreen text-cream px-4 py-2 rounded-lg font-retro shadow hover:bg-retroGreen/90"
              >
                Detail
              </a>
            </div> */}

            <div className="p-4">
              <h3 className="text-xl font-retro">{item.title}</h3>
              <p className="text-sm text-brown/70">
                Next.js, Tailwind, Laravel
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
