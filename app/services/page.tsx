"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Award, MessageCircle, Plane, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const handleConsultationClick = () => {
  const message = encodeURIComponent(
    "Hi! I would like to book a free consultation for studying abroad. Please let me know your available slots.",
  )
  const phoneNumber = "919876543210"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, "_blank")
}

const services = [
  {
    icon: BookOpen,
    title: "Admission Counseling",
    description: "Comprehensive guidance for university applications worldwide",
    features: [
      "University selection based on your profile",
      "Application strategy development",
      "Document preparation assistance",
      "Interview preparation",
      "Application tracking and follow-up",
    ],
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Complete support for student visa applications",
    features: [
      "Visa documentation guidance",
      "Application form assistance",
      "Interview preparation",
      "Financial documentation support",
      "Post-visa approval guidance",
    ],
    color: "from-indigo-400 to-indigo-500",
  },
  {
    icon: GraduationCap,
    title: "University Shortlisting",
    description: "Find the perfect universities that match your goals",
    features: [
      "Personalized university recommendations",
      "Course compatibility analysis",
      "Ranking and reputation assessment",
      "Location and lifestyle guidance",
      "Cost analysis and budgeting",
    ],
    color: "from-purple-400 to-purple-500",
  },
  {
    icon: MessageCircle,
    title: "SOP & LOR Guidance",
    description: "Professional assistance with application essays",
    features: [
      "Statement of Purpose writing",
      "Letter of Recommendation guidance",
      "Essay editing and proofreading",
      "Personal statement development",
      "Application essay strategy",
    ],
    color: "from-pink-400 to-pink-500",
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Help you find and secure funding opportunities",
    features: [
      "Scholarship research and identification",
      "Application assistance",
      "Merit-based scholarship guidance",
      "Need-based aid applications",
      "External funding opportunities",
    ],
    color: "from-green-400 to-green-500",
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefings",
    description: "Prepare for your journey abroad",
    features: [
      "Cultural orientation sessions",
      "Accommodation guidance",
      "Banking and finance setup",
      "Health insurance assistance",
      "Airport pickup arrangements",
    ],
    color: "from-orange-400 to-orange-500",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Free consultation to understand your goals and assess your profile",
  },
  {
    step: "02",
    title: "Profile Evaluation",
    description: "Comprehensive evaluation of your academic and professional background",
  },
  {
    step: "03",
    title: "University Selection",
    description: "Shortlist universities and programs that match your profile and goals",
  },
  {
    step: "04",
    title: "Application Process",
    description: "Complete application assistance including documentation and submissions",
  },
  {
    step: "05",
    title: "Visa Support",
    description: "Comprehensive visa application support and interview preparation",
  },
  {
    step: "06",
    title: "Pre-Departure",
    description: "Final preparations and guidance for your journey abroad",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for every step of your study abroad journey. From university selection to visa
              approval, we're with you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure your success at every stage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your study abroad goals and create a personalized plan for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleConsultationClick}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Service Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
