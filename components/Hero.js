"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export default function Hero() {
  return (
    <div className="relative isolate px-6 lg:px-8 overflow-hidden flex items-center">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-400 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </motion.div>

      <motion.div className="mx-auto max-w-2xl py-16" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="hidden sm:mb-8 sm:flex sm:justify-center" variants={itemVariants}>
          <motion.div
            className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Announcing our new EV charging network.{" "}
            <Link href="/blog" className="font-semibold text-green-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="text-center">
          <motion.h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" variants={itemVariants}>
            Change Green, <span className="text-green-600">Drive Clean</span>
          </motion.h1>

          <motion.p className="mt-6 text-lg leading-8 text-gray-600" variants={itemVariants}>
            Revolutionizing transportation through sustainable solutions. Join us in creating a cleaner future with
            innovative electric vehicle technology and charging infrastructure.
          </motion.p>

          <motion.div className="mt-10 flex items-center justify-center gap-x-6" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/solutions" className="btn-primary">
                Explore Solutions
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating background element */}
      <motion.div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        animate={floatingAnimation}
      >
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-green-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </motion.div>
    </div>
  )
}
