import Link from "next/link"

export default function CTA() {
  return (
    <div className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Drive Clean?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of businesses and individuals making the switch to sustainable transportation. Start your
            green journey today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Link>
            <Link href="/solutions" className="text-sm font-semibold leading-6 text-white">
              View Solutions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
