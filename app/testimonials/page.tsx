import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { TestimonialCard } from "@/components/testimonial-card"
import { ClientLogos } from "@/components/client-logos"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 bg-white">
        <section className="bg-secondary text-accent py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
              PERSONALIZED STAFFING EXPERIENCE
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-medium text-accent mb-6 text-center">Kind Words</h2>
            <p className="text-accent text-center max-w-4xl mx-auto mb-16">
              Our success is measured by the satisfaction of our clients and the unforgettable experiences we create.
              Here, you'll find testimonials from those who have trusted us to bring their events to life, showcasing
              our commitment to excellence, professionalism, and seamless execution in every detail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

              <TestimonialCard
                quote="We've been working with EOC for our administrative staffing needs for over two years now, and they consistently deliver high-quality professionals who integrate seamlessly with our team."
                name="Emily Rodriguez"
                title="Operations Manager, Horizon Enterprises"
                image="/testimonials/person3.jpg"
              />

              <TestimonialCard
                quote="The hospitality staff provided by EOC for our charity gala were exceptional. They were attentive, professional, and helped create a memorable experience for our guests."
                name="David Wilson"
                title="Executive Director, Community Foundation"
                image="/testimonials/person4.jpg"
              />

              <TestimonialCard
                quote="EOC's convention staff made our international conference run smoothly. Their attention to detail and ability to handle unexpected challenges was impressive."
                name="Jennifer Lee"
                title="Conference Coordinator, Global Association"
                image="/testimonials/person5.jpg"
              />

              <TestimonialCard
                quote="Working with EOC has been a game-changer for our events. Their team understands our needs and consistently delivers exceptional talent that aligns with our brand values."
                name="Robert Thompson"
                title="CEO, Premier Events"
                image="/testimonials/person6.jpg"
              />
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />
      </main>

      <Footer />
    </div>
  )
}

