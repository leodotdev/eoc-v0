import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 bg-white">
        <section className="bg-secondary text-accent py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">SERVICES & SOLUTIONS</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8 text-center">Our Offerings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <ServiceCard icon="/icons/conventions.svg" title="Conventions & Events" />
              <ServiceCard icon="/icons/administrative.svg" title="Administrative Professionals" />
              <ServiceCard icon="/icons/brand.svg" title="Brand Ambassadors" />
              <ServiceCard icon="/icons/hospitality.svg" title="Hospitality" />
            </div>

            <div className="space-y-12 mt-16">
              <div>
                <h3 className="text-xl font-medium text-accent mb-4">Conventions & Events</h3>
                <p className="text-accent">
                  Our convention and event staffing solutions provide you with skilled professionals who can handle
                  registration, information desks, session monitoring, and more. We ensure your events run smoothly from
                  start to finish.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-accent mb-4">Administrative Professionals</h3>
                <p className="text-accent">
                  From executive assistants to office managers, our administrative professionals bring organization and
                  efficiency to your operations. We match skilled individuals with your specific administrative needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-accent mb-4">Brand Ambassadors</h3>
                <p className="text-accent">
                  Our brand ambassadors are the face of your company at events, trade shows, and promotional activities.
                  They are trained to represent your brand with professionalism and enthusiasm.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-accent mb-4">Hospitality</h3>
                <p className="text-accent">
                  Our hospitality staff provides exceptional service for your events, ensuring your guests have a
                  memorable experience. From servers to bartenders, we have the right people for your hospitality needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

