import "./globals.css"
import { Comfortaa } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"

const comfortaa = Comfortaa({ subsets: ["latin"] })

export const metadata = {
  title: "Virtual Forensic Psychiatric Services - Dr. Gloria M Kardong",
  description:
    "Dr. Gloria M Kardong provides expert psychiatric consultation and evaluation, specializing in medicolegal consultation for attorneys.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} bg-white text-base`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
