"use client"

import { motion } from "framer-motion"
import { GoldParticles } from "./gold-particles"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]" />
        
        {/* Industrial Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A46B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Mountain Silhouette */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-64 w-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#C8A46B"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        
        {/* Abstract Lines */}
        <div className="absolute left-1/4 top-1/4 h-96 w-px bg-gradient-to-b from-transparent via-[#C8A46B]/20 to-transparent" />
        <div className="absolute right-1/4 top-1/3 h-64 w-px bg-gradient-to-b from-transparent via-[#C8A46B]/10 to-transparent" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-[#C8A46B]/5 via-transparent to-[#C8A46B]/5" />
      </div>

      {/* Gold Particles */}
      <GoldParticles />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block border border-[#C8A46B]/30 bg-[#C8A46B]/5 px-4 py-1.5 text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
            Монголын тэргүүлэгч аж үйлдвэрийн түнш
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 text-balance"
        >
          <span className="text-gradient-gold block text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            Noyn Borkh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-pretty text-lg font-light leading-relaxed text-[#E8D9B5]/70 sm:text-xl"
        >
          Дээд зэрэглэлийн металл боловсруулалт ба аж үйлдвэрийн шийдэл
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href="#projects"
            className="group flex items-center gap-3 bg-[#C8A46B] px-8 py-4 text-sm font-medium uppercase tracking-wider text-[#111111] transition-all hover:bg-[#E8D9B5]"
          >
            Төслүүд харах
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="group flex items-center gap-3 border border-[#C8A46B]/30 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-wider text-[#E8D9B5] transition-all hover:border-[#C8A46B] hover:text-[#C8A46B]"
          >
            <Play className="h-4 w-4" />
            Холбоо барих
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-light uppercase tracking-[0.2em] text-[#E8D9B5]/50">
Гүйлгэх
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-12 w-px bg-gradient-to-b from-[#C8A46B] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
