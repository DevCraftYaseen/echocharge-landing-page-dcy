"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "The Future of Electric Vehicle Charging Infrastructure",
    href: "/blog/ev-charging-infrastructure",
    description:
      "Exploring the latest developments in EV charging technology and what it means for the future of transportation.",
    date: "2024-01-15",
    datetime: "2024-01-15",
    category: { title: "Technology", href: "/blog/category/technology" },
    author: {
      name: "Sarah Johnson",
      role: "Technology Writer",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "How Electric Fleets Are Reducing Corporate Carbon Footprints",
    href: "/blog/electric-fleets-carbon-reduction",
    description:
      "Case studies showing how companies are achieving significant emissions reductions through fleet electrification.",
    date: "2024-01-10",
    datetime: "2024-01-10",
    category: { title: "Sustainability", href: "/blog/category/sustainability" },
    author: {
      name: "Michael Chen",
      role: "Sustainability Expert",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Government Incentives for Electric Vehicle Adoption",
    href: "/blog/government-ev-incentives",
    description:
      "A comprehensive guide to federal and state incentives available for electric vehicle purchases and infrastructure.",
    date: "2024-01-05",
    datetime: "2024-01-05",
    category: { title: "Policy", href: "/blog/category/policy" },
    author: {
      name: "Emily Rodriguez",
      role: "Policy Analyst",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
  },
]

export default function BlogClientPage() {
  const postsRef = useRef(null)
  const isPostsInView = useInView(postsRef, { once: true, margin: "-100px" })

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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
            alt="Blog and insights"
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Blog & Insights</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay updated with the latest trends, insights, and developments in sustainable transportation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Blog posts */}
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            ref={postsRef}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={isPostsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isPostsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative w-full">
                  <img
                    src={post.imageUrl || " "}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    // onError={(e) => {
                    //   e.target.src = "/placeholder.svg?height=400&width=600"
                    // }}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl || "/placeholder.svg"}
                      alt={post.author.name}
                      className="h-10 w-10 rounded-full bg-gray-100"
                      // onError={(e) => {
                      //   e.target.src = "/placeholder.svg?height=40&width=40"
                      // }}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <Link href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </Link>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
