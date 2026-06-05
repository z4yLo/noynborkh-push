"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Бидний тухай" },
  { href: "#services", label: "үйлчилгээ" },
  { href: "#projects", label: "төсөл" },
  { href: "#capacity", label: "хүчин чадал" },
  { href: "#why-us", label: "яагаад бид" },
  { href: "#contact", label: "холбоо барих" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <img src="/apple-icon.png" alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-light tracking-wide text-[#E8D9B5]/70 transition-colors hover:text-[#C8A46B]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C8A46B] transition-all hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="border border-[#C8A46B]/30 bg-[#C8A46B]/10 px-6 py-2.5 text-sm font-light tracking-wide text-[#C8A46B] transition-all hover:bg-[#C8A46B] hover:text-[#111111]"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#E8D9B5] lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass absolute left-0 right-0 top-full lg:hidden"
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-[#2B1B17] py-3 text-sm font-light tracking-wide text-[#E8D9B5]/70 transition-colors hover:text-[#C8A46B]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 border border-[#C8A46B]/30 bg-[#C8A46B]/10 px-6 py-3 text-center text-sm font-light tracking-wide text-[#C8A46B] transition-all hover:bg-[#C8A46B] hover:text-[#111111]"
            >
              Get Quote
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
