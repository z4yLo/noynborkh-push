"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const footerLinks = {
  company: [
    { label: "Бидний тухай", href: "#about" },
    { label: "Манай баг", href: "#" },
    { label: "Ажлын байр", href: "#" },
    { label: "Мэдээ", href: "#" },
  ],
  services: [
    { label: "Ган бүтээц", href: "#services" },
    { label: "Металл боловсруулалт", href: "#services" },
    { label: "Аж үйлдвэрийн барилга", href: "#services" },
    { label: "Фасадны шийдэл", href: "#services" },
  ],
  resources: [
    { label: "Төслүүд", href: "#projects" },
    { label: "Гэрчилгээ", href: "#" },
    { label: "Түгээмэл асуулт", href: "#" },
    { label: "Дэмжлэг", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-[#111111] pt-20">
      {/* Top Border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A46B]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-[#C8A46B]/30 bg-gradient-to-br from-[#2B1B17] to-[#1B1412]">
                  <span className="text-gradient-gold text-xl font-bold">NB</span>
                </div>
                <div>
                  <div className="text-lg font-bold tracking-wider text-[#E8D9B5]">
                    НОЁН БОРХ ХХК
                  </div>
                  <div className="text-xs font-light tracking-wider text-[#C8A46B]">
                    Металл боловсруулалт
                  </div>
                </div>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#E8D9B5]/50">
              Монголын тэргүүлэх дээд зэрэглэлийн ган боловсруулалт ба аж үйлдвэрийн 
              барилгын компани, 2008 оноос хойш шилдэг чанарыг хүргэж байна.
            </p>
            <div className="flex gap-4">
              {["Facebook", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-[#2B1B17] bg-[#1B1412] text-xs text-[#E8D9B5]/50 transition-all hover:border-[#C8A46B]/30 hover:text-[#C8A46B]"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C8A46B]">
              Компани
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8D9B5]/50 transition-colors hover:text-[#E8D9B5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C8A46B]">
              Үйлчилгээ
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8D9B5]/50 transition-colors hover:text-[#E8D9B5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#C8A46B]">
              Нөөц
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8D9B5]/50 transition-colors hover:text-[#E8D9B5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2B1B17] py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="text-xs text-[#E8D9B5]/40">
              © {new Date().getFullYear()} Ноён Борх ХХК. Бүх эрх хуулиар хамгаалагдсан.
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-[#E8D9B5]/40 transition-colors hover:text-[#E8D9B5]"
              >
                Нууцлалын бодлого
              </Link>
              <Link
                href="#"
                className="text-xs text-[#E8D9B5]/40 transition-colors hover:text-[#E8D9B5]"
              >
                Үйлчилгээний нөхцөл
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
