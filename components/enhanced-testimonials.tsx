"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    country: "Canada",
    university: "University of Toronto",
    course: "Computer Science",
    image: "/placeholder.svg?height=100&width=100",
    text: "Global Pathways made my dream of studying in Canada a reality. Their guidance was invaluable throughout the entire process. From university selection to visa approval, they were with me every step of the way.",
    rating: 5,
    year: "2023",
  },
  {
    name: "Rahul Patel",
    country: "Australia",
    university: "University of Melbourne",
    course: "Business Administration",
    image: "/placeholder.svg?height=100&width=100",
    text: "Excellent service! They helped me secure admission and a scholarship at my dream university. The team is professional, knowledgeable, and truly cares about student success.",
    rating: 5,
    year: "2023",
  },
  {
    name: "Ananya Singh",
    country: "UK",
    university: "Imperial College London",
    course: "Engineering",
    image: "/placeholder.svg?height=100&width=100",
    text: "Professional, reliable, and supportive throughout my entire application journey. I couldn't have done it without their expert guidance and constant support.",
    rating: 5,
    year: "2024",
  },
  {
    name: "Arjun Kumar",
    country: "USA",
    university: "Stanford University",
    course: "Data Science",
    image: "/placeholder.svg?height=100&width=100",
    text: "The team at Global Pathways is simply amazing. They helped me get into my dream university with a full scholarship. Their expertise in the US admission process is unmatched.",
    rating: 5,
    year: "2024",
  },
]

export default function EnhancedTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const handleShareStory = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in studying abroad and would love to hear more success stories. Can you share some recent student experiences?",
    )
    const phoneNumber = "919876543210"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-yellow-700 font-medium">Student Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dreams Turned Into
            <span className="block text-blue-500">Reality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who achieved their international education goals with our guidance and support.
          </p>
        </motion.div>

        <div className="relative">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-12"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Testimonial Content */}
                    <div>
                      <Quote className="h-12 w-12 text-blue-400 mb-6" />
                      <div className="flex justify-start mb-6">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>
                      <div className="space-y-2">
                        <p className="font-bold text-gray-800 text-xl">{testimonials[currentTestimonial].name}</p>
                        <p className="text-blue-500 font-medium text-lg">{testimonials[currentTestimonial].course}</p>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>
                            {testimonials[currentTestimonial].university}, {testimonials[currentTestimonial].country}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">Class of {testimonials[currentTestimonial].year}</p>
                      </div>
                    </div>

                    {/* Student Image and Stats */}
                    <div className="text-center">
                      <div className="relative inline-block mb-8">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto">
                          <img
                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">✓</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-2xl p-4">
                          <div className="text-2xl font-bold text-blue-600">100%</div>
                          <div className="text-sm text-gray-600">Visa Success</div>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-4">
                          <div className="text-2xl font-bold text-green-600">6 Months</div>
                          <div className="text-sm text-gray-600">Process Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTestimonial(index)
                setIsAutoPlaying(false)
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-600 mb-8">Join thousands of students who achieved their dreams with our guidance.</p>
          <Button
            onClick={handleShareStory}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
