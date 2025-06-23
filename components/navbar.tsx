"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const handleConsultationClick = () => {
    const message = encodeURIComponent(
      "Hi! I would like to book a free consultation for studying abroad. Please let me know your available slots.",
    )
    const phoneNumber = "919876543210"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Global Pathways</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleConsultationClick}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    pathname === item.href ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                onClick={() => {
                  setIsOpen(false)
                  handleConsultationClick()
                }}
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
