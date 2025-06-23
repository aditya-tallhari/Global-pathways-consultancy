"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in studying abroad and would like to book a free consultation. When are you available?",
    )
    const phoneNumber = "919876543210"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
    setIsVisible(false)
  }

  const handleCallClick = () => {
    window.open("tel:+919876543210", "_self")
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        className="fixed bottom-24 left-6 z-40 max-w-sm"
      >
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 shadow-2xl text-white overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-white/80 hover:text-white z-10"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Free Consultation Available!</span>
                </div>

                <p className="text-sm mb-4 opacity-90">
                  Book your free consultation now and get expert guidance for your study abroad journey.
                </p>

                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white flex-1"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 flex-1"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
