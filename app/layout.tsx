import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Global Pathways - Study Abroad Consultancy",
  description:
    "Your trusted partner for international education. Expert guidance for studying abroad, visa assistance, and university admissions.",
  keywords: "study abroad, international education, visa assistance, university admissions, education consultancy",
  authors: [{ name: "Global Pathways" }],
  openGraph: {
    title: "Global Pathways - Study Abroad Consultancy",
    description:
      "Your trusted partner for international education. Expert guidance for studying abroad, visa assistance, and university admissions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Pathways - Study Abroad Consultancy",
    description:
      "Your trusted partner for international education. Expert guidance for studying abroad, visa assistance, and university admissions.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
