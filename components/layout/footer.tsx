import { COLORS } from "@/constants/theme"
import { footerData } from "@/data/sections/footer"

/**
 * Footer component
 * Displays copyright information and credits
 */
export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-yellow-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`${COLORS.primary.creamMuted} text-sm`}>
            &copy; {new Date().getFullYear()} {footerData.copyright}
          </p>

          <p className={`${COLORS.primary.creamMuted} text-sm mt-2 md:mt-0`}>{footerData.additionalText}</p>
        </div>
      </div>
    </footer>
  )
}

