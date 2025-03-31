import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail } from "lucide-react"

export function NavBar() {
  return (
    <header className="bg-primary text-white py-4 wave-bottom pb-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <div className="w-[120px] h-[60px] relative">
              <Image src="/logo.svg" alt="Events & Office Consultants" fill className="object-contain" priority />
            </div>
          </Link>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex gap-8">
            <Link href="/" className="hover:text-white/80 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white/80 font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-white/80 font-medium transition-colors">
              Services & Solutions
            </Link>
            <Link href="/testimonials" className="hover:text-white/80 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-white/80 font-medium transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0 md:ml-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-white/80 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-white/80 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="mailto:info@eocpeople.com" aria-label="Email" className="hover:text-white/80 transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

