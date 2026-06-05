"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Hammer, HardHat, Layers } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Ган бүтээц",
    description:
      "Арилжааны барилга, аж үйлдвэрийн байгууламж, дэд бүтцийн төслүүдэд зориулсан тусгай зориулалтын ган хүрээ.",
  },
  {
    icon: Hammer,
    title: "Тусгай металл боловсруулалт",
    description:
      "Металл эд анги, угсралт, тусгай тоног төхөөрөмжийг нарийвчлалтай үйлдвэрлэл.",
  },
  {
    icon: HardHat,
    title: "Аж үйлдвэрийн барилга",
    description:
      "Суурийн ажлаас эцсийн хүртэлх бүрэн хэмжээний аж үйлдвэрийн барилга угсралтын үйлчилгээ.",
  },
  {
    icon: Layers,
    title: "Металл фасадны шийдэл",
    description:
      "Гоо зүй, бат бөх, гүйцэтгэлийг хослуулсан архитектурын металл хальс болон фасадны систем.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative bg-[#0D0D0D] py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,164,107,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,164,107,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
            Бидний үйлчилгээ
          </span>
          <h2 className="text-balance text-4xl font-bold text-[#E8D9B5] sm:text-5xl">
            Аж үйлдвэрийн шилдэг чанар
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[#E8D9B5]/60">
            Хамгийн өндөр шаардлага хангахад зориулсан иж бүрэн металл боловсруулалт 
            ба аж үйлдвэрийн барилгын үйлчилгээ.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden border border-[#2B1B17] bg-gradient-to-br from-[#1B1412] to-[#111111] p-8 transition-all duration-500 hover:border-[#C8A46B]/30"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C8A46B]/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-[#C8A46B]/20 bg-[#C8A46B]/5 transition-all group-hover:border-[#C8A46B]/40 group-hover:bg-[#C8A46B]/10">
                  <service.icon className="h-6 w-6 text-[#C8A46B]" />
                </div>
                
                <h3 className="mb-4 text-xl font-semibold text-[#E8D9B5] transition-colors group-hover:text-[#C8A46B]">
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[#E8D9B5]/60">
                  {service.description}
                </p>
                
                {/* Decorative Line */}
                <div className="mt-6 h-px w-12 bg-[#C8A46B]/30 transition-all group-hover:w-full group-hover:bg-[#C8A46B]/50" />
              </div>
              
              {/* Corner Accent */}
              <div className="absolute -bottom-1 -right-1 h-8 w-8 border-b border-r border-[#C8A46B]/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
