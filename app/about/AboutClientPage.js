"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckIcon } from "@heroicons/react/24/outline"

const values = [
  "Environmental sustainability",
  "Innovation and technology",
  "Customer-centric approach",
  "Global accessibility",
  "Reliable partnerships",
  "Continuous improvement",
]

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in sustainable technology and electric vehicle innovation.",
  },
  {
    name: "Maria Garcia",
    role: "CTO",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "Expert in electric vehicle technology and charging infrastructure development.",
  },
  {
    name: "David Kim",
    role: "Head of Operations",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Specialist in fleet management and sustainable logistics optimization.",
  },
]

export default function AboutClientPage() {
  const missionRef = useRef(null)
  const teamRef = useRef(null)
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })

  return (
    <motion.div className="bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Hero section */}
      <div className="relative isolate px-6 lg:px-8 overflow-hidden py-20 lg:py-32 flex items-center">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Electric vehicles charging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90" />
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl py-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Our Mission</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're dedicated to creating a sustainable future through innovative transportation solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission section */}
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            ref={missionRef}
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To accelerate the world's transition to sustainable transportation by providing comprehensive electric
              vehicle solutions, charging infrastructure, and expert guidance.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial={{ opacity: 0 }}
            animate={isMissionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop"
                    alt="Electric vehicle charging station"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900">Our Vision</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  A world where clean, efficient transportation is the standard, not the exception.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop"
                    alt="Green technology and sustainability"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900">Our Values</h3>
                <ul className="mt-4 space-y-2">
                  {values.map((value) => (
                    <li key={value} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-base text-gray-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our diverse team of experts is passionate about creating sustainable transportation solutions.
            </p>
          </div>

          <motion.div
            ref={teamRef}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={isTeamInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {team.map((person, index) => (
              <motion.div
                key={person.name}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl || "/placeholder.svg"}
                  alt={person.name}
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=300"
                  }}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-green-600 font-medium">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
