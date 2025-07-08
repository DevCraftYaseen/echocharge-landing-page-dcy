"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export default function HomePageClient() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </motion.div>
  )
}
