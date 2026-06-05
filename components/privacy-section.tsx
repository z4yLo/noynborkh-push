"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="relative bg-[#111111] py-24 px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-[#C8A46B]/5 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="mb-12">
          <h2 className="mb-2 text-4xl font-bold tracking-wider text-[#E8D9B5] md:text-5xl">
            Нууцлалын Бодлого
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#C8A46B] to-transparent" />
        </div>

        <div className="space-y-6 text-[#E8D9B5]/70">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#E8D9B5]">Нашаа танилцуулах</h3>
            <p className="leading-relaxed">
              Ноён Борх ХХК ("Бид", "Нас", "Манай") компани таны хувийн мэдээллийг хэрхэн цуглуулж, 
              ашигладаг, хүлээлгүүлдэг болохыг тайлбарлахын тулд энэ нууцлалын бодлого ("Бодлого") 
              өртөө. Энэ бодлого нь манай вэбсайт, мобайл программ болон бусад онлайн үйлчилгээний 
              хэрэглэгчдэд хамаатай.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#E8D9B5]">Цуглуулж буй мэдээлэл</h3>
            <p className="leading-relaxed mb-3">Бид дараах төрлийн мэдээллийг цуглуулж болно:</p>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>Нэр, имэйл хаяг, утасны дугаар зэрэг үйлчлүүлэгчийн мэдээлэл</li>
              <li>Вэбсайт ашигласны түүх, хандалтын логнууд</li>
              <li>Төхөөрөмжийн мэдээлэл (IP хаяг, браузер төрөл, ОС)</li>
              <li>Нөгөө нэмэлт мэдээлэл таны сайтыг сайжруулахад туслах</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#E8D9B5]">Мэдээллийг яаж ашигладаг</h3>
            <p className="leading-relaxed mb-3">Таны мэдээллийг дараах зорилгоор ашигладаг:</p>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>Үйлчилгээ үзүүлэх ба сайжруулах</li>
              <li>Таны хүсэлт, асуулта хариулах</li>
              <li>Вэбсайтын үр ашгийг сайжруулах</li>
              <li>Маркетинг ба зар сурталчилгааны зорилгоор (таны зөвшөөрөлтэй)</li>
              <li>Хууль ёсны шаардлага хангах</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#E8D9B5]">Мэдээллийн хүлээлгүүлэлт</h3>
            <p className="leading-relaxed">
              Бид таны хувийн мэдээллийг гуравдагч этгээдэд ("Үйлчилгээ үзүүлэгчид", "түнш" гэх мэт) 
              дараах нөхцөлтэй солилцодог: Үйлчилгээний хэрэгцээнд нийцүүлэн, үйлчилгээ сайжруулахын тулд, 
              хууль ёсны заалтыг нэмэлтээр сахин.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#E8D9B5]">Сүүлийн засвал</h3>
            <p className="leading-relaxed">
              Энэ нууцлалын бодлого шинэчлэгдэх боломжтой. Таныг чухал өөрчлөлтүүдийн тухай мэдэгдэх 
              болно. Энэ хуудсыг жигд үзэлгэвэл хамгийн сүүлийн хэмжээлтэй байна.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-[#E8D9B5]">Холбоо барих</h3>
            <p className="leading-relaxed">
              Нууцлалын тухай асуулт, хүсэлт байвал бидэнтэй холбоо барина уу:{" "}
              <a
                href="mailto:info@noyonborkh.mn"
                className="text-[#C8A46B] hover:text-[#E8D9B5] transition-colors"
              >
                info@noyonborkh.mn
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link
            href="/#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#C8A46B] to-[#D4B570] text-[#111111] font-semibold rounded hover:shadow-lg hover:shadow-[#C8A46B]/20 transition-all"
          >
            Үндсэн хуудас
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
