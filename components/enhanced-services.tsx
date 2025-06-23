"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Award, MessageCircle, Plane, GraduationCap, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: BookOpen,
    title: "Admission Counseling",
    description: "Expert guidance for university applications worldwide",
    features: ["University Selection", "Application Strategy", "Document Preparation"],
    color: "from-blue-400 to-blue-500",
    popular: true,
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Complete support for student visa applications",
    features: ["Documentation", "Interview Prep", "Application Support"],
    color: "from-indigo-400 to-indigo-500",
    popular: false,
  },
  {
    icon: GraduationCap,
    title: "University Shortlisting",
    description: "Find the perfect universities that match your goals",
    features: ["Personalized Recommendations", "Course Analysis", "Cost Assessment"],
    color: "from-purple-400 to-purple-500",
    popular: false,
  },
  {
    icon: MessageCircle,
    title: "SOP & LOR Guidance",
    description: "Professional assistance with application essays",
    features: ["Statement Writing", "Essay Editing", "Personal Statements"],
    color: "from-pink-400 to-pink-500",
    popular: false,
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Help you find and secure funding opportunities",
    features: ["Scholarship Research", "Application Help", "Merit-based Aid"],
    color: "from-green-400 to-green-500",
    popular: true,
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefings",
    description: "Prepare for your journey abroad",
    features: ["Cultural Orientation", "Accommodation", "Banking Setup"],
    color: "from-orange-400 to-orange-500",
    popular: false,
  },
]

export default function EnhancedServices() {
  const handleServiceClick = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in your ${serviceName} service. Can you provide more details and pricing information?`,
    )
    const phoneNumber = "919876543210"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-700 font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive Study Abroad
            <span className="block text-blue-500">Consulting Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional guidance and support at every stage of your international education journey, from initial
            consultation to successful enrollment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h3>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation and let our experts guide you through the best path for your study abroad goals.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hi! I'm not sure which service I need for studying abroad. Can you help me understand my options?",
                )
                const phoneNumber = "919876543210"
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
                window.open(whatsappUrl, "_blank")
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
