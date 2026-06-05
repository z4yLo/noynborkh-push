"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Phone, Clock, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

// Хүсэлт хүлээж авах имэйл хаяг — энд солих боломжтой
const CONTACT_EMAIL = "info@noynborkh.mn"

const contactInfo = [
  {
    icon: MapPin,
    label: "Хаяг",
    value: "Улаанбаатар, Монгол\nБаянзүрх дүүрэг, Аж үйлдвэрийн бүс",
  },
  {
    icon: Phone,
    label: "Утас",
    value: "+976 7000 1234\n+976 9911 2345",
  },
  {
    icon: Mail,
    label: "Имэйл",
    value: "info@noynborkh.mn\nsales@noynborkh.mn",
  },
  {
    icon: Clock,
    label: "Ажлын цаг",
    value: "Даваа - Баасан: 08:00 - 18:00\nБямба: 09:00 - 14:00",
  },
]

const SERVICE_LABELS: Record<string, string> = {
  "steel-structures": "Ган бүтээц",
  "metal-fabrication": "Тусгай металл боловсруулалт",
  "industrial-construction": "Аж үйлдвэрийн барилга",
  "facade-solutions": "Металл фасадны шийдэл",
  other: "Бусад",
}

const contactSchema = z.object({
  name: z.string().min(2, "Нэр доод тал нь 2 тэмдэгт байх ёстой"),
  email: z.string().email("Зөв имэйл хаяг оруулна уу"),
  phone: z
    .string()
    .min(6, "Утасны дугаар буруу байна")
    .max(20, "Утасны дугаар хэт урт байна"),
  service: z.string().min(1, "Үйлчилгээ сонгоно уу"),
  message: z
    .string()
    .min(10, "Зурвас доод тал нь 10 тэмдэгт байх ёстой")
    .max(2000, "Зурвас хэт урт байна"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const serviceLabel = SERVICE_LABELS[values.service] ?? values.service

      const subject = `[Вэбсайт] ${serviceLabel} — ${values.name}`
      const body = [
        `Нэр: ${values.name}`,
        `Имэйл: ${values.email}`,
        `Утас: ${values.phone}`,
        `Үйлчилгээ: ${serviceLabel}`,
        "",
        "Төслийн дэлгэрэнгүй:",
        values.message,
      ].join("\n")

      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      // Хэрэглэгчийн мэйл аппликейшнийг нээх
      window.location.href = mailto

      toast.success("Имэйл аппликейшн нээгдэж байна", {
        description: `Зурвасыг шалгаад "Илгээх" товчийг даран ${CONTACT_EMAIL} рүү явуулна уу.`,
        duration: 6000,
      })
      reset()
    } catch (err) {
      console.error(err)
      toast.error("Имэйл аппликейшн нээгдсэнгүй", {
        description: `Шууд ${CONTACT_EMAIL} рүү бичнэ үү.`,
      })
    } finally {
      // Бага зэргийн саатал — товч хэт хурдан буцаж эрэгтэхгүйн тулд
      setTimeout(() => setIsSubmitting(false), 500)
    }
  }

  const inputBase =
    "w-full border bg-[#111111] px-4 py-3 text-[#E8D9B5] placeholder-[#E8D9B5]/30 transition-colors focus:outline-none disabled:opacity-50"
  const inputOk = "border-[#2B1B17] focus:border-[#C8A46B]/50"
  const inputErr = "border-red-500/60 focus:border-red-500"

  return (
    <section id="contact" className="relative bg-[#0D0D0D] py-32">
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-light uppercase tracking-[0.3em] text-[#C8A46B]">
            Холбогдох
          </span>
          <h2 className="text-balance text-4xl font-bold text-[#E8D9B5] sm:text-5xl">
            Холбоо барих
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[#E8D9B5]/60">
            Төслөө ярилцахад бэлэн үү? Манай баг таны аж үйлдвэрийн
            хэрэгцээнд тохирсон шийдлийг олоход туслахад бэлэн.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50"
                  >
                    Бүтэн нэр
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.name}
                    className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                    placeholder="Таны нэр"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50"
                  >
                    Имэйл хаяг
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                    className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50"
                >
                  Утасны дугаар
                </label>
                <input
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.phone}
                  className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
                  placeholder="+976 ..."
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50"
                >
                  Сонирхож буй үйлчилгээ
                </label>
                <select
                  id="service"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.service}
                  className={`${inputBase} ${errors.service ? inputErr : inputOk}`}
                  {...register("service")}
                >
                  <option value="">Үйлчилгээ сонгох</option>
                  <option value="steel-structures">Ган бүтээц</option>
                  <option value="metal-fabrication">Тусгай металл боловсруулалт</option>
                  <option value="industrial-construction">Аж үйлдвэрийн барилга</option>
                  <option value="facade-solutions">Металл фасадны шийдэл</option>
                  <option value="other">Бусад</option>
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-light uppercase tracking-wider text-[#E8D9B5]/50"
                >
                  Төслийн дэлгэрэнгүй
                </label>
                <textarea
                  id="message"
                  rows={5}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
                  placeholder="Төслийнхөө талаар бидэнд хэлнэ үү..."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 bg-[#C8A46B] py-4 text-sm font-medium uppercase tracking-wider text-[#111111] transition-all hover:bg-[#E8D9B5] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Нээгдэж байна...
                  </>
                ) : (
                  "Мессеж илгээх"
                )}
              </button>

              {/* Backup link — JS унтраатай эсвэл mailto handler байхгүй үед */}
              <p className="text-center text-xs text-[#E8D9B5]/40">
                Эсвэл шууд{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[#C8A46B] underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                рүү бичнэ үү
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="border border-[#2B1B17] bg-[#111111] p-5 transition-all hover:border-[#C8A46B]/30"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center border border-[#C8A46B]/20 bg-[#C8A46B]/5">
                    <info.icon className="h-4 w-4 text-[#C8A46B]" />
                  </div>
                  <div className="mb-1 text-xs font-light uppercase tracking-wider text-[#C8A46B]">
                    {info.label}
                  </div>
                  <div className="whitespace-pre-line text-sm text-[#E8D9B5]/70">
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Real Map (Google Maps embed, no API key required) */}
            <div className="relative aspect-video overflow-hidden border border-[#2B1B17]">
              <iframe
                title="Ноён Борх — Улаанбаатар, Баянзүрх дүүрэг"
                src="https://www.google.com/maps?q=Bayanzurkh+industrial+area+Ulaanbaatar+Mongolia&hl=mn&z=13&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full grayscale invert-[0.85] hue-rotate-180"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 border border-[#C8A46B]/20 bg-[#111111]/85 px-3 py-2 backdrop-blur-sm">
                <div className="text-xs font-light text-[#C8A46B]">
                  Улаанбаатар, Баянзүрх дүүрэг
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
