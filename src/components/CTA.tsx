import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-vintage-dark text-center text-white relative"
    >
      <h2 className="text-4xl font-bold mb-6">
        Siap Bangun Website atau Aplikasi Impianmu?
      </h2>
      <p className="text-lg mb-8">
        Hubungi kami sekarang dan wujudkan ide kreatifmu bersama Ralta!
      </p>
      <a
        href="https://wa.me/62895624560304"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
      >
        <FaWhatsapp className="text-2xl" />
        Chat via WhatsApp
      </a>
    </section>
  );
}
