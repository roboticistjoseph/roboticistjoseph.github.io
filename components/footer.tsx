export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-yellow-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f5f5dc]/70 text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>

          <p className="text-[#f5f5dc]/70 text-sm mt-2 md:mt-0">Designed & Built with passion</p>
        </div>
      </div>
    </footer>
  )
}

