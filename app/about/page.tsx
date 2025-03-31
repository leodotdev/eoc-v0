import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 bg-white">
        <section className="bg-secondary text-accent py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">ABOUT US</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-accent">
              <p>
                Events & Office Consultants is a woman-owned business dedicated to connecting exceptional talent with
                extraordinary events. We believe that events are about people, and our mission is to provide the
                personnel and support needed to create unforgettable experiences.
              </p>
              <p>
                With years of experience in the events industry, we understand the unique challenges that businesses and
                organizations face when planning and executing events. Our team of professionals is committed to helping
                you bring your vision to life.
              </p>
              <p>
                We take pride in our personalized approach to staffing, ensuring that each client receives tailored
                solutions that meet their specific needs. Whether you need support for conventions, administrative
                professionals, brand ambassadors, or hospitality staff, we have the expertise to deliver exceptional
                results.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

