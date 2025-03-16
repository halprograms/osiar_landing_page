"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LogIn, Menu, UserPlus, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm border-b border-blue-900/50 shadow-sm transition-all duration-300 ${
        scrolled ? "bg-blue-950/95 py-2" : "bg-blue-950/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="OSIAR Logo" width={85} height={30} className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("latar-belakang")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Latar Belakang
          </button>
          <button
            onClick={() => scrollToSection("integrasi")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Integrasi
          </button>
          <button
            onClick={() => scrollToSection("cara-kerja")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Cara Kerja
          </button>
          <button
            onClick={() => scrollToSection("validasi")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Perbandingan
          </button>
          <button
            onClick={() => scrollToSection("testimoni")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Testimoni
          </button>
          <button
            onClick={() => scrollToSection("scan-dokumen")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Demo
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="text-blue-100 hover:text-white transition-colors"
          >
            Kontak
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-100 hover:text-white hover:bg-blue-800/50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="ghost"
            className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-300 flex items-center gap-2 px-4 rounded-lg"
          >
            <LogIn className="w-4 h-4" />
            <span>Log In</span>
          </Button>
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 px-4 rounded-lg border border-orange-500/20">
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-950/95 border-b border-blue-900/50 py-4 px-4 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("latar-belakang")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Latar Belakang
            </button>
            <button
              onClick={() => scrollToSection("integrasi")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Integrasi
            </button>
            <button
              onClick={() => scrollToSection("cara-kerja")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Cara Kerja
            </button>
            <button
              onClick={() => scrollToSection("validasi")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Perbandingan
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("scan-dokumen")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-blue-100 hover:text-white transition-colors py-2"
            >
              Kontak
            </button>
            <div className="flex gap-3 pt-2">
              <Button
                variant="ghost"
                className="text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-300 flex items-center gap-2 px-4 rounded-lg"
              >
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </Button>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 px-4 rounded-lg border border-orange-500/20">
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

