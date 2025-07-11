"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })
  const isContactInfoInView = useInView(contactInfoRef, { once: true, margin: "-100px" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

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
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop"
            alt="Contact us"
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to start your sustainable transportation journey? Get in touch with our experts today.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
            {/* Contact information */}
            <motion.div
              ref={contactInfoRef}
              className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
              initial={{ opacity: 0, x: -30 }}
              animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We're here to help you transition to sustainable transportation. Contact us to discuss your needs.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      123 Green Drive
                      <br />
                      Sustainable City, SC 12345
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="tel:+1 (555) 123-4567">
                        +1 (555) 123-4567
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:hello@changegreendriveClean.com">
                        hello@changegreendriveClean.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="submit" className="btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
