"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fallback for SSR
  if (!mounted) {
    return (
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="pl-4 md:pl-8 lg:pl-12">
              <h1 className="text-5xl font-bold mb-4">OSIAR</h1>
              <p className="text-blue-200 mb-8">
                Sistem OCR Cepat dan Akurat
                <br />
                untuk Administrasi Modern
              </p>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6 text-lg text-white">
                Coba Demo <span className="ml-2 inline-block">→</span>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/data-processing-illustration.svg"
                alt="Data Processing Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Add the scroll functions inside the HeroSection component before the return statement
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pl-4 md:pl-10 lg:pl-16"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
              Solusi Otomatisasi Dokumen
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              OSIAR
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-lg">
              Sistem OCR <span className="font-semibold">Cepat, Tepat, dan Otomatis</span> untuk administrasi modern.
              Tingkatkan efisiensi dan akurasi dalam pengolahan dokumen Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-6 text-lg rounded-xl shadow-lg shadow-orange-600/20 transition-all hover:shadow-xl hover:shadow-orange-600/30 text-white"
                onClick={() => scrollToSection("scan-dokumen")}
              >
                Coba Demo <span className="ml-2 inline-block font-bold">→</span>
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-100 hover:bg-blue-900/30 px-8 py-6 text-lg rounded-xl"
                onClick={() => scrollToSection("latar-belakang")}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[450px] md:h-[550px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-2xl mx-auto">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/data-processing-illustration.svg"
                    alt="Data Processing Illustration"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Animated elements */}
                <motion.div
                  className="absolute top-1/4 right-0 w-16 h-16 bg-blue-500/10 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-1/4 left-0 w-12 h-12 bg-indigo-500/10 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats or features highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-blue-900/40 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/50"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-1">99%</h3>
            <p className="text-blue-300 text-sm">Akurasi</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-1">10x</h3>
            <p className="text-blue-300 text-sm">Lebih Cepat</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
            <p className="text-blue-300 text-sm">Support</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
            <p className="text-blue-300 text-sm">Klien</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

