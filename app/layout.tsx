import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import { Montserrat } from "next/font/google"
import "./globals.css"

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "ShortlistOn - Get Seen by Employers",
  description: "Skip the endless apply-wait-ghost loop. ShortlistOn helps serious candidates get noticed by employers.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
