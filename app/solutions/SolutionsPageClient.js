"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { CheckIcon } from "@heroicons/react/24/outline"

const solutions = [
  {
    name: "Enterprise Fleet",
    description: "Comprehensive electric vehicle solutions for large enterprises and corporations.",
    price: "Custom pricing",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    features: [
      "Fleet assessment and planning",
      "Custom vehicle procurement",
      "Charging infrastructure design",
      "Fleet management platform",
      "Driver training programs",
      "24/7 support and maintenance",
      "Performance analytics",
      "Compliance reporting",
    ],
    cta: "Contact Sales",
    href: "/contact",
    featured: true,
  },
  {
    name: "Small Business",
    description: "Perfect for small to medium businesses looking to electrify their fleet.",
    price: "Starting at $2,500/month",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    features: [
      "Up to 10 vehicles",
      "Basic charging infrastructure",
      "Fleet tracking system",
      "Maintenance support",
      "Driver training",
      "Monthly reporting",
    ],
    cta: "Get Started",
    href: "/contact",
    featured: false,
  },
  {
    name: "Municipal Services",
    description: "Specialized solutions for cities and municipal transportation needs.",
    price: "Custom pricing",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    features: [
      "Public transit electrification",
      "Municipal fleet conversion",
      "Public charging networks",
      "Grant assistance",
      "Community engagement",
      "Environmental impact tracking",
      "Policy compliance support",
    ],
    cta: "Learn More",
    href: "/contact",
    featured: false,
  },
]

export default function SolutionsPageClient() {
  const pricingRef = useRef(null)
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" })

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
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1920&h=1080&fit=crop"
            alt="Electric vehicle solutions"
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tailored Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect electric vehicle solution for your business needs and sustainability goals.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Pricing section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions for Every Need</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From small businesses to large enterprises, we have the right solution for your electric vehicle
              transition.
            </p>
          </div>

          <motion.div
            ref={pricingRef}
            className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
            initial={{ opacity: 0 }}
            animate={isPricingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {solutions.map((solution, solutionIdx) => (
              <motion.div
                key={solution.name}
                className={`flex flex-col justify-between rounded-3xl bg-white overflow-hidden ring-1 ring-gray-200 xl:p-0 ${
                  solution.featured ? "lg:z-10 lg:rounded-b-none ring-2 ring-green-600" : "lg:mt-8"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: solutionIdx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {solution.featured && (
                    <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-x-4 mb-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{solution.name}</h3>
                  </div>
                  <p className="text-sm leading-6 text-gray-600 mb-6">{solution.description}</p>
                  <p className="flex items-baseline gap-x-1 mb-8">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">{solution.price}</span>
                  </p>
                  <ul role="list" className="space-y-3 text-sm leading-6 text-gray-600 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={solution.href}
                    className={`block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      solution.featured
                        ? "bg-green-600 text-white shadow-sm hover:bg-green-500 focus-visible:outline-green-600"
                        : "text-green-600 ring-1 ring-inset ring-green-200 hover:ring-green-300 focus-visible:outline-green-600"
                    }`}
                  >
                    {solution.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
