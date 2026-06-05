"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Оюу толгой аж үйлдвэрийн цогцолбор",
    category: "Уул уурхайн дэд бүтэц",
    year: "2023",
    description: "Уул уурхайн үйл ажиллагаанд зориулсан том хэмжээний ган бүтээцийн үйлдвэрлэл.",
  },
  {
    title: "Улаанбаатар төв цамхаг",
    category: "Арилжааны барилга",
    year: "2023",
    description: "25 давхар барилгын дээд зэрэглэлийн металл фасад ба бүтээцийн ган.",
  },
  {
    title: "Эрдэнэт боловсруулах үйлдвэр",
    category: "Аж үйлдвэрийн байгууламж",
    year: "2022",
    description: "Боловсруулах тоног төхөөрөмжийн бүрэн үйлдвэрлэл, угсралт.",
  },
  {
    title: "Засгийн газрын цогцолборын засвар",
    category: "Төрийн дэд бүтэц",
    year: "2022",
    description: "Архитектурын металл хальс, сэргээн засварлалтын ажил.",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative bg-[#111111] py-32">
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
              Портфолио
            </span>
            <h2 className="text-balance text-4xl font-bold text-[#E8D9B5] sm:text-5xl">
              Онцлох төслүүд
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-light tracking-wide text-[#C8A46B] transition-colors hover:text-[#E8D9B5]"
          >
            Бүх төсөл харах
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden border border-[#2B1B17] bg-gradient-to-br from-[#1B1412] to-[#0D0D0D] transition-all duration-500 hover:border-[#C8A46B]/40"
            >
              {/* Project Image Placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B1B17] to-[#1B1412]">
                  {/* Pattern */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A46B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl font-bold text-[#C8A46B]/10 transition-all group-hover:scale-110 group-hover:text-[#C8A46B]/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111111]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 border border-[#C8A46B]/30 bg-[#C8A46B]/10 px-6 py-3 text-sm font-light tracking-wide text-[#C8A46B]">
                    Төсөл харах
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-light uppercase tracking-wider text-[#C8A46B]">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#E8D9B5]/40">{project.year}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#E8D9B5] transition-colors group-hover:text-[#C8A46B]">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#E8D9B5]/50">
                  {project.description}
                </p>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#C8A46B] to-[#E8D9B5] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
