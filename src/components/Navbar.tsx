"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-cream shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-brown.png"
            alt="Ralta Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        {/* <Link href="/" className="text-2xl font-retro text-brown">
          Ralta
        </Link> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-vintage">
          <Link href="#about" className="hover:text-retroGreen text-brown">Tentang</Link>
          <Link href="#services" className="hover:text-retroGreen text-brown">Layanan</Link>
          <Link href="#portfolio" className="hover:text-retroGreen text-brown">Portfolio</Link>
          <Link href="#contact" className="hover:text-retroGreen text-brown">Kontak</Link>
        </div>

        {/* CTA WhatsApp */}
        <a
          href="https://wa.me/62895624560304"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-brown text-cream px-4 py-2 rounded-lg hover:bg-retroGreen transition"
        >
          Pesan via WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brown focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cream px-4 pb-3 space-y-2 font-vintage">
          <Link href="#about" className="block hover:text-retroGreen text-brown">Tentang</Link>
          <Link href="#services" className="block hover:text-retroGreen text-brown">Layanan</Link>
          <Link href="#portfolio" className="block hover:text-retroGreen text-brown">Portfolio</Link>
          <Link href="#contact" className="block hover:text-retroGreen text-brown">Kontak</Link>
          <a
            href="https://wa.me/62895624560304"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-brown text-cream text-center px-4 py-2 rounded-lg hover:bg-retroGreen transition"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
