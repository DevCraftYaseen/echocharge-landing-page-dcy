"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
  { id: 1, name: "CO2 Emissions Reduced", value: 50, unit: "M+ tons" },
  { id: 2, name: "Electric Vehicles Deployed", value: 100, unit: "K+ vehicles" },
  { id: 3, name: "Charging Stations", value: 5, unit: "K+ locations" },
  { id: 4, name: "Cities Served", value: 200, unit: "+ worldwide" },
]

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="bg-green-600 section-padding">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl lg:max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Making a Global Impact</h2>
            <p className="mt-4 text-lg leading-8 text-green-100">
              Our commitment to sustainable transportation is creating measurable change worldwide.
            </p>
          </div>

          <motion.dl
            ref={ref}
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-white/5 p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <dt className="text-sm font-semibold leading-6 text-green-100">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-white">
                  <AnimatedCounter end={stat.value} />
                  {stat.unit.replace(/^\d+/, "")}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </div>
  )
}
