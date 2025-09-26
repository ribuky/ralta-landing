export default function Footer() {
  return (
    <footer className="bg-vintage-dark text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Ralta Logo" className="w-15 h-10" />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-vintage-light">
            Tentang
          </a>
          <a href="#services" className="hover:text-vintage-light">
            Layanan
          </a>
          <a href="#portfolio" className="hover:text-vintage-light">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-vintage-light">
            Testimoni
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} Ralta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
