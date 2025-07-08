"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    body: "Change Green Drive Clean transformed our fleet operations. The transition to electric vehicles was seamless, and the cost savings have been remarkable.",
    author: {
      name: "Sarah Johnson",
      handle: "sarahjohnson",
      company: "GreenTech Logistics",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    body: "The charging infrastructure they provided is reliable and efficient. Our drivers love the convenience and the environmental impact we're making.",
    author: {
      name: "Michael Chen",
      handle: "michaelchen",
      company: "Urban Delivery Co.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    body: "Outstanding service and support. They guided us through every step of our sustainability journey with expertise and dedication.",
    author: {
      name: "Emily Rodriguez",
      handle: "emilyrodriguez",
      company: "Metro Transit Authority",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
  },
]

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our clients say about their experience with our sustainable transportation solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <motion.div
                key={testimonialIdx}
                className="w-full"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 hover:bg-gray-100 transition-colors duration-300 h-full flex flex-col">
                  <blockquote className="text-gray-900 flex-grow">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                      src={testimonial.author.imageUrl || "/placeholder.svg"}
                      alt={testimonial.author.name}
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=40&width=40"
                      }}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.company}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
