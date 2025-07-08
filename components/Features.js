"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  BanknotesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    name: "Electric Vehicle Solutions",
    description: "Comprehensive EV solutions including vehicle selection, installation, and maintenance support.",
    icon: BoltIcon,
  },
  {
    name: "Global Charging Network",
    description: "Access to thousands of charging stations worldwide with seamless payment integration.",
    icon: GlobeAltIcon,
  },
  {
    name: "Advanced Safety Features",
    description: "State-of-the-art safety systems ensuring secure and reliable transportation.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Smart Technology",
    description: "AI-powered systems for optimal route planning and energy management.",
    icon: CpuChipIcon,
  },
  {
    name: "Cost Effective",
    description: "Significant savings on fuel costs and maintenance with our efficient solutions.",
    icon: BanknotesIcon,
  },
  {
    name: "Environmental Impact",
    description: "Reduce your carbon footprint and contribute to a healthier planet.",
    icon: HeartIcon,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-green-600">Sustainable Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for clean transportation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive platform provides all the tools and services needed to transition to sustainable
            transportation solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative pl-16"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <motion.div
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </motion.div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
