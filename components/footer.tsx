import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 wave-top pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="w-[120px] h-[60px] relative">
                <Image src="/logo.svg" alt="Events & Office Consultants" fill className="object-contain" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <nav className="flex flex-col md:flex-row gap-6">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-white/80 transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-white/80 transition-colors">
                Services & Solutions
              </Link>
              <Link href="/testimonials" className="hover:text-white/80 transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="hover:text-white/80 transition-colors">
                Contact Us
              </Link>
            </nav>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:info@eocpeople.com"
                aria-label="Email"
                className="hover:text-white/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} Events & Office Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

