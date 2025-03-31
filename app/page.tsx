import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ClientLogos } from "@/components/client-logos"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Banner */}
      <section className="bg-secondary text-accent py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            PERSONALIZED STAFFING EXPERIENCE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8">For businesses and organizations</h2>
          <p className="text-lg text-accent mb-16">
            We believe that events are about people. By providing the personnel and support to create unforgettable
            experiences we can help bring your vision to life.
          </p>

          <div className="border-t border-b border-gray-300 py-8 mb-16">
            <h2 className="text-2xl font-medium text-accent">WHAT WE DO</h2>
          </div>

          <p className="text-lg text-accent mb-16">
            Our woman-owned business has a singular mission: to connect exceptional talent with extraordinary events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ServiceCard icon="/icons/conventions.svg" title="Conventions & Events" />
            <ServiceCard icon="/icons/administrative.svg" title="Administrative Professionals" />
            <ServiceCard icon="/icons/brand.svg" title="Brand Ambassadors" />
            <ServiceCard icon="/icons/hospitality.svg" title="Hospitality" />
          </div>

          <div className="flex justify-center">
            <Button className="bg-white text-accent hover:bg-gray-100 border border-accent rounded-full px-8 py-6">
              START HERE →
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-medium text-accent mb-6 text-center">What Our Clients Say</h2>
          <p className="text-accent text-center max-w-3xl mx-auto mb-12">
            Our success is measured by the satisfaction of our clients and the unforgettable experiences we create.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <TestimonialCard
              quote="EOC provided exceptional staff for our annual conference. Their team was professional, reliable, and went above and beyond to ensure our event was a success."
              name="Sarah Johnson"
              title="Event Director, Global Tech Summit"
              image="/testimonials/person1.jpg"
            />

            <TestimonialCard
              quote="The brand ambassadors from EOC were instrumental in the success of our product launch. They were knowledgeable, enthusiastic, and effectively communicated our brand message."
              name="Michael Chen"
              title="Marketing Director, Innovate Solutions"
              image="/testimonials/person2.jpg"
            />
          </div>

          <div className="flex justify-center">
            <Link href="/testimonials" className="text-accent font-medium hover:underline">
              View all testimonials →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

