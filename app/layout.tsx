import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OSIAR - Sistem OCR Cepat dan Akurat",
  description: "Sistem OCR Cepat dan Akurat untuk Administrasi Modern",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-950 text-white`}>{children}</body>
    </html>
  )
}



import './globals.css'