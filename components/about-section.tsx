"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative bg-[#111111] py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#1B1412]/30 to-[#111111]" />
      
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
              Бидний тухай
            </span>
            <h2 className="mb-8 text-balance text-4xl font-bold leading-tight text-[#E8D9B5] sm:text-5xl">
              Инженерийн шилдэг чанар{" "}
              <span className="text-gradient-gold">2008</span>-аас
            </h2>
            <div className="space-y-6 text-pretty text-[#E8D9B5]/70">
              <p className="text-lg leading-relaxed">
                Ноён Борх нь Монголын тэргүүлэх металл боловсруулалтын компани бөгөөд 
                уламжлалт урлагийг орчин үеийн аж үйлдвэрийн технологитой хослуулан 
                онцгой үр дүнд хүрдэг.
              </p>
              <p className="leading-relaxed">
                Нарийвчлалтай инженеринг, чанартай материалд тавих бидний амлалт нь 
                улс даяарх томоохон барилгын төслүүд, уул уурхайн үйлдвэрүүд, 
                архитектурын хөгжүүлэлтийн итгэлийг олж авсан.
              </p>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "15+", label: "Жил" },
                { value: "500+", label: "Төсөл" },
                { value: "50+", label: "Ажилтан" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border-l border-[#C8A46B]/30 pl-4"
                >
                  <div className="text-gradient-gold text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Decorative Frame */}
              <div className="absolute -left-4 -top-4 h-32 w-32 border-l-2 border-t-2 border-[#C8A46B]/30" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 border-b-2 border-r-2 border-[#C8A46B]/30" />
              
              {/* Image Placeholder with Industrial Pattern */}
              <div className="relative h-full w-full bg-gradient-to-br from-[#2B1B17] to-[#1B1412]">
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C8A46B' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-6xl font-bold text-[#C8A46B]/20">NB</div>
                    <div className="text-xs font-light uppercase tracking-[0.3em] text-[#E8D9B5]/30">
                      Үүсгэсэн 2008
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass absolute -bottom-6 -left-6 p-6"
            >
              <div className="text-xs font-light uppercase tracking-wider text-[#C8A46B]">
                ISO Гэрчилгээтэй
              </div>
              <div className="mt-1 text-2xl font-bold text-[#E8D9B5]">
                9001:2015
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
