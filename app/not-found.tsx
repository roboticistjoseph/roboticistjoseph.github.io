import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500"
      >
        Return to Home
      </Link>
    </div>
  )
}

