"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileCheck, BarChart2, Award, CheckCircle, TrendingUp } from "lucide-react"

export default function WhySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("why-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const statsItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  const features = [
    {
      title: "ATS Optimization",
      description: "Ensure your resume passes through Applicant Tracking Systems with keyword optimization.",
      icon: FileCheck,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Job-Specific Analysis",
      description: "Get personalized recommendations based on the specific job descriptions you're applying to.",
      icon: BarChart2,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Stand Out",
      description: "Receive actionable feedback to make your resume stand out to both algorithms and hiring managers.",
      icon: Award,
      color: "bg-green-100 text-green-700"
    }
  ]

  return (
    <section id="why-section" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use Our ATS Resume Checker?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            75% of resumes are rejected by ATS before a human ever sees them. Don't let yours be one of them.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap -mx-4 justify-center"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="w-full md:w-1/3 px-4 mb-8"
              variants={item}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-lg py-10 px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={statsItem}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600 mr-2" size={24} />
                <span className="text-3xl font-bold text-blue-600">85%</span>
              </div>
              <p className="text-gray-600">Improved interview chances</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={statsItem}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <CheckCircle className="text-green-600 mr-2" size={24} />
                <span className="text-3xl font-bold text-green-600">93%</span>
              </div>
              <p className="text-gray-600">Pass rate through ATS systems</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={statsItem}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <Award className="text-purple-600 mr-2" size={24} />
                <span className="text-3xl font-bold text-purple-600">4.9/5</span>
              </div>
              <p className="text-gray-600">Customer satisfaction rating</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 