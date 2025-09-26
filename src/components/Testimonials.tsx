import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Owner UMKM",
    feedback:
      "Ralta berhasil bikin website bisnis saya tampil profesional. Pelanggan jadi lebih mudah memesan.",
  },
  {
    name: "Siti Rahma",
    role: "Startup Founder",
    feedback:
      "Tim Ralta sangat komunikatif dan hasil aplikasinya sesuai ekspektasi. Mantap!",
  },
  {
    name: "Budi Santoso",
    role: "Freelancer",
    feedback:
      "Aplikasi desktop yang dibuat membantu pekerjaan saya jadi lebih efisien. Recommended banget!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-vintage-light text-center">
      <h2 className="text-4xl font-bold text-brown mb-10">Apa Kata Mereka?</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg border border-vintage-dark"
          >
            <FaQuoteLeft className="text-vintage-dark text-3xl mb-4 mx-auto" />
            <p className="text-gray-700 italic mb-4">{t.feedback}</p>
            <h3 className="font-bold text-brown">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
