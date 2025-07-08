"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function NotFoundClient() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4 relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
          alt="Electric vehicle background"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <motion.div
        className="text-center max-w-md mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1
            className="text-9xl font-bold text-green-600 mb-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            404
          </motion.h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for seems to have taken a detour. Let's get you back on the right path to
            sustainable transportation.
          </p>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="inline-flex items-center justify-center w-full btn-primary">
              <HomeIcon className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </motion.div>

          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Go Back
          </motion.button>
        </motion.div>

        <motion.div className="mt-8 text-sm text-gray-500" variants={itemVariants}>
          <p>
            Need help?{" "}
            <Link href="/contact" className="text-green-600 hover:text-green-700 underline">
              Contact us
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
