"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Clock, Shield, Sparkles, ThumbsUp, Wrench } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "ISO гэрчилгээтэй чанар",
    description: "Олон улсын хүлээн зөвшөөрөгдсөн чанарын удирдлагын систем нь тогтвортой шилдэг чанарыг баталгаажуулдаг.",
  },
  {
    icon: Clock,
    title: "Цаг хугацаандаа хүргэлт",
    description: "Хатуу төслийн менежмент, хуваарь нь цаг тухайд нь дуусгахыг баталгаажуулдаг.",
  },
  {
    icon: Shield,
    title: "Аюулгүй байдал нэн тэргүүнд",
    description: "Бидний баг болон таны төслийг хамгаалах тэг буултгүй аюулгүй байдлын дүрэм.",
  },
  {
    icon: Wrench,
    title: "Мэргэжлийн ур чадвар",
    description: "Хэдэн арван жилийн нийлбэр туршлагатай өндөр ур чадвартай гагнуурчид, металл боловсруулагчид.",
  },
  {
    icon: Sparkles,
    title: "Дээд зэрэглэлийн материал",
    description: "Итгэмжлэгдсэн нийлүүлэгчдээс зөвхөн хамгийн өндөр зэрэглэлийн ган, материал.",
  },
  {
    icon: ThumbsUp,
    title: "Үйлчлүүлэгчийн сэтгэл ханамж",
    description: "Итгэлцэл, ил тод байдал, онцгой үр дүнд суурилсан урт хугацааны түншлэл.",
  },
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="relative bg-[#111111] py-32">
      {/* Decorative Lines */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C8A46B]/10 to-transparent" />
      <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C8A46B]/10 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
            Яагаад биднийг сонгох вэ
          </span>
          <h2 className="text-balance text-4xl font-bold text-[#E8D9B5] sm:text-5xl">
            Ноён Борхын ялгаатай байдал
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[#E8D9B5]/60">
            Бид уламжлалт Монголын хөдөлмөрч зан чанарыг орчин үеийн инженерийн 
            шилдэг чанартай хослуулан хүлээлтээс давсан үр дүнд хүрдэг.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group relative"
            >
              <div className="relative border border-[#2B1B17] bg-gradient-to-br from-[#1B1412]/50 to-transparent p-6 transition-all duration-300 hover:border-[#C8A46B]/30">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-[#C8A46B]/20 bg-[#C8A46B]/5 transition-all group-hover:border-[#C8A46B]/40 group-hover:bg-[#C8A46B]/10">
                  <reason.icon className="h-5 w-5 text-[#C8A46B]" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-[#E8D9B5] transition-colors group-hover:text-[#C8A46B]">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#E8D9B5]/50">
                  {reason.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A46B] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 border border-[#C8A46B]/20 bg-gradient-to-r from-[#2B1B17] via-[#1B1412] to-[#2B1B17] p-8 text-center lg:p-12"
        >
          <h3 className="mb-4 text-2xl font-bold text-[#E8D9B5]">
            Төслөө эхлүүлэхэд бэлэн үү?
          </h3>
          <p className="mx-auto mb-8 max-w-xl text-[#E8D9B5]/60">
            Ноён Борх хэрхэн таны аж үйлдвэрийн алсын харааг нарийвчлалтай 
            инженеринг, давтагдашгүй ур чадвараар хэрэгжүүлэхийг ярилцъя.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C8A46B] px-8 py-4 text-sm font-medium uppercase tracking-wider text-[#111111] transition-all hover:bg-[#E8D9B5]"
          >
            Үнэгүй үнийн санал авах
          </a>
        </motion.div>
      </div>
    </section>
  )
}
