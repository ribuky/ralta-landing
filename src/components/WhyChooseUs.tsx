"use client";

import { motion } from "framer-motion";
import { Star, Zap, ShieldCheck, ThumbsUp } from "lucide-react";

const reasons = [
  {
    title: "Desain Unik",
    description:
      "Menghadirkan desain vintage modern yang membuat brand kamu tampil beda.",
    icon: <Star className="w-8 h-8 text-mustard" />,
  },
  {
    title: "Cepat & Responsif",
    description:
      "Website dan aplikasi dibuat dengan performa optimal dan tampilan yang responsif di semua device.",
    icon: <Zap className="w-8 h-8 text-mustard" />,
  },
  {
    title: "Aman & Andal",
    description:
      "Menggunakan teknologi terbaru untuk memastikan keamanan dan stabilitas.",
    icon: <ShieldCheck className="w-8 h-8 text-mustard" />,
  },
  {
    title: "Mudah Digunakan",
    description:
      "User experience yang ramah pengguna, sehingga lebih mudah dioperasikan.",
    icon: <ThumbsUp className="w-8 h-8 text-mustard" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="min-h-screen px-6 md:px-20 py-20 bg-cream text-brown"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-retro mb-4">Kenapa Memilih Ralta?</h2>
        <p className="font-vintage text-lg text-brown/80 max-w-2xl mx-auto">
          Kami memberikan lebih dari sekadar layanan digital. Ralta hadir untuk
          menjadi solusi terbaik bagi kebutuhan bisnismu.
        </p>
      </motion.div>

      {/* Reason Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div>{reason.icon}</div>
            <div>
              <h3 className="text-xl font-retro mb-2">{reason.title}</h3>
              <p className="font-vintage text-brown/80">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
