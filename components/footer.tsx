import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="relative h-12 w-36 mb-4">
              <Image
                src="/eoc-logo.png"
                alt="Events & Office Consultants"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-xs">
              Our woman-owned business has a singular mission: to connect
              exceptional talent with extraordinary events.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Events & Office Consultants
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/testimonials"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Testimonials
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>305-442-6000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@eocpeople.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://facebook.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/eocpeople"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <form className="space-y-3">
              <Input
                type="text"
                placeholder="Name *"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
                required
              />
              <Input
                type="email"
                placeholder="Email *"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
                required
              />
              <Textarea
                placeholder="Comment or Message"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
              />
              <Button
                type="submit"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Events & Office Consultants. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
