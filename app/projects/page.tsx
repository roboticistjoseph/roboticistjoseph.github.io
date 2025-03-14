import Link from "next/link"
import { ArrowLeft } from "lucide-react"

/**
 * Projects Index Page
 *
 * This is a fallback page that redirects users back to the main projects section.
 */
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md p-8">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Projects Directory</h2>
        <p className="text-gray-300 mb-6">
          Please select a specific project from the main page or return to the projects section.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-yellow-600/50 hover:border-yellow-500 text-gray-100 rounded-lg transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>
      </div>
    </div>
  )
}

