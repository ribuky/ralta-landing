"use client";

import Reveal from "@/utils/Reveal";
import { Laptop, Smartphone, Monitor, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Website",
    description:
      "Website responsif dan modern dengan desain vintage untuk meningkatkan kehadiran digital bisnismu.",
    icon: <Laptop className="w-10 h-10 text-brown transition-transform duration-300 group-hover:scale-110" />,
    tech: ["React", "Next.js", "Tailwind CSS", "Laravel", "Flask"],
    types: ["Company Profile", "E-commerce", "Blog", "Portfolio", "Web App"],
    duration: "2-6 minggu",
    priceRange: "Mulai dari Rp 150.000",
  },
  {
    title: "Mobile App",
    description:
      "Aplikasi mobile berbasis Android/iOS dengan performa tinggi dan desain yang elegan.",
    icon: <Smartphone className="w-10 h-10 text-brown transition-transform duration-300 group-hover:scale-110" />,
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    types: ["Aplikasi Bisnis", "E-commerce", "Sosial Media", "Game"],
    duration: "4-10 minggu",
    priceRange: "Mulai dari Rp 300.000",
  },
  {
    title: "Desktop App",
    description:
      "Aplikasi desktop yang powerful dan mudah digunakan untuk berbagai kebutuhan bisnismu.",
    icon: <Monitor className="w-10 h-10 text-brown transition-transform duration-300 group-hover:scale-110" />,
    tech: ["Electron", "Qt", "JavaFX", "WPF"],
    types: ["Aplikasi Bisnis", "Alat Produktivitas", "Game"],
    duration: "3-8 minggu",
    priceRange: "Mulai dari Rp 250.000",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen px-6 md:px-20 py-20 bg-cream text-brown"
    >
      <div className="text-center mb-12">
        <Reveal>
          <h2 className="text-4xl font-retro mb-4 font-semibold">Layanan Kami</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-vintage text-lg text-brown/80 max-w-2xl mx-auto">
            Ralta menyediakan berbagai solusi digital untuk mendukung kebutuhan
            bisnis kamu dengan gaya vintage modern yang elegan.
          </p>
        </Reveal>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="group p-6 rounded-2xl shadow-md bg-white hover:bg-amber-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-retro mb-3">{s.title}</h3>
              <p className="font-vintage text-brown/80 mb-4">{s.description}</p>

              {/* Tech */}
              <div className="text-left w-full mb-3">
                <h4 className="font-semibold text-brown">Teknologi:</h4>
                <ul className="space-y-1 mt-1">
                  {s.tech.map((t, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-brown/80 font-vintage"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Types */}
              <div className="text-left w-full mb-3">
                <h4 className="font-semibold text-brown">Jenis:</h4>
                <ul className="space-y-1 mt-1">
                  {s.types.map((t, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-brown/80 font-vintage"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration & Price */}
              <div className="mt-auto w-full text-left font-vintage text-brown/80">
                <p>
                  <span className="font-semibold">Durasi:</span> {s.duration}
                </p>
                <p>
                  <span className="font-semibold">Harga:</span> {s.priceRange}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
