"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = "" }) {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className={className}>
      {children}
    </motion.div>
  )
}

export function FadeInUp({ children, delay = 0 }) {
  return (
    <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ ...fadeInUp.transition, delay }}>
      {children}
    </motion.div>
  )
}
