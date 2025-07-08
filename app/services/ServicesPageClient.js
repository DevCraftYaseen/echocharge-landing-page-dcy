"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import {
  BoltIcon,
  TruckIcon,
  CogIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    name: "Electric Vehicle Solutions",
    description: "Complete EV procurement, installation, and integration services for businesses of all sizes.",
    icon: BoltIcon,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    features: [
      "Vehicle selection and procurement",
      "Installation and setup",
      "Integration with existing systems",
      "Performance monitoring",
    ],
    href: "/services/electric-vehicles",
  },
  {
    name: "Fleet Management",
    description: "Comprehensive fleet management solutions to optimize your electric vehicle operations.",
    icon: TruckIcon,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    features: ["Real-time tracking", "Route optimization", "Maintenance scheduling", "Driver management"],
    href: "/services/fleet",
  },
  {
    name: "Charging Infrastructure",
    description: "Design, install, and maintain charging stations for residential and commercial use.",
    icon: CogIcon,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    features: ["Site assessment", "Custom installation", "Network management", "24/7 support"],
    href: "/services/charging",
  },
  {
    name: "Analytics & Reporting",
    description: "Advanced analytics to track performance, costs, and environmental impact.",
    icon: ChartBarIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    features: ["Performance dashboards", "Cost analysis", "Environmental impact reports", "Custom reporting"],
    href: "/services/analytics",
  },
  {
    name: "Maintenance & Support",
    description: "Comprehensive maintenance and support services to keep your fleet running smoothly.",
    icon: WrenchScrewdriverIcon,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    features: ["Preventive maintenance", "Emergency repairs", "Parts replacement", "Technical support"],
    href: "/services/maintenance",
  },
  {
    name: "Consulting Services",
    description: "Expert consulting to help you plan and execute your transition to electric vehicles.",
    icon: AcademicCapIcon,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    features: ["Transition planning", "ROI analysis", "Policy compliance", "Training programs"],
    href: "/services/consulting",
  },
]

export default function ServicesPageClient() {
  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })

  return (
    <motion.div className="bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Hero section */}
      <div className="relative isolate px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1920&h=1080&fit=crop"
            alt="Electric vehicle services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl py-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Comprehensive solutions for your electric vehicle and sustainable transportation needs.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            ref={servicesRef}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="relative rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="text-green-600 hover:text-green-700 font-semibold text-sm">
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA section */}
      <motion.div
        className="bg-green-50 section-padding"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discuss your specific needs and learn how we can help you transition to sustainable
              transportation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/solutions" className="text-sm font-semibold leading-6 text-gray-900">
                View Solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
