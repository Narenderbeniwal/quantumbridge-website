import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-accent-cream min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-6xl font-bold text-navy-900">404</h1>
        <p className="mt-4 text-xl text-navy-600">
          This page could not be found.
        </p>
        <p className="mt-2 text-navy-500">
          The link may be broken or the page may have been removed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn-gold rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="rounded-full border-2 border-navy-800 px-8 py-4 font-semibold text-navy-800 transition hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
          >
            Jobs
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-navy-800 px-8 py-4 font-semibold text-navy-800 transition hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
