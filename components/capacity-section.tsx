"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Factory, Ruler, Users, Zap } from "lucide-react"

const capacities = [
  {
    icon: Factory,
    value: "15,000",
    unit: "м²",
    label: "Үйлдвэрийн талбай",
    description: "Орчин үеийн үйлдвэрлэл",
  },
  {
    icon: Zap,
    value: "5,000",
    unit: "тонн",
    label: "Жилийн хүчин чадал",
    description: "Ган боловсруулалт жилд",
  },
  {
    icon: Ruler,
    value: "50м",
    unit: "хамгийн их",
    label: "Хамгийн урт хэмжээ",
    description: "Нэг хэсэг үйлдвэрлэл",
  },
  {
    icon: Users,
    value: "150+",
    unit: "",
    label: "Мэргэжлийн ажилтан",
    description: "Гэрчилгээтэй мэргэжилтнүүд",
  },
]

const equipment = [
  "CNC плазмаар зүсэх систем",
  "Автомат гагнуурын станц",
  "Хүнд даацын кран систем (50T)",
  "Нарийвчлалтай нугалах машин",
  "Хайрга цацах танхим",
  "Будгийн танхим",
]

export function CapacitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="capacity" className="relative bg-[#0D0D0D] py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-1/2 w-1/3 bg-gradient-to-br from-[#C8A46B]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-gradient-to-tl from-[#C8A46B]/5 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
            Бидний чадавх
          </span>
          <h2 className="text-balance text-4xl font-bold text-[#E8D9B5] sm:text-5xl">
            Үйлдвэрийн хүчин чадал
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[#E8D9B5]/60">
            Ямар ч хэмжээ, нарийн төвөгтэй төслийг хэрэгжүүлэх орчин үеийн 
            тоног төхөөрөмжөөр тоноглосон дэвшилтэт үйлдвэр.
          </p>
        </motion.div>

        {/* Capacity Stats */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capacities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative border border-[#2B1B17] bg-[#111111] p-6 text-center transition-all hover:border-[#C8A46B]/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-[#C8A46B]/20 bg-[#C8A46B]/5">
                <item.icon className="h-5 w-5 text-[#C8A46B]" />
              </div>
              
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="text-gradient-gold text-4xl font-bold">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-sm font-light text-[#C8A46B]">
                    {item.unit}
                  </span>
                )}
              </div>
              
              <div className="mb-1 text-sm font-medium text-[#E8D9B5]">
                {item.label}
              </div>
              <div className="text-xs text-[#E8D9B5]/50">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-[#2B1B17] bg-gradient-to-br from-[#1B1412] to-[#111111] p-8 lg:p-12"
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-[#E8D9B5]">
            Дэвшилтэт тоног төхөөрөмж
          </h3>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="h-1.5 w-1.5 bg-[#C8A46B]" />
                <span className="text-sm text-[#E8D9B5]/70">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
