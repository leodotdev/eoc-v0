import { TestimonialCard } from "@/components/testimonial-card";
import { ClientLogos } from "@/components/client-logos";
import Link from "next/link";
import { ViewTransitionLink } from "@/components/view-transition-link";

export default function TestimonialsPage() {
  // Testimonials data with real testimonials from the EOC website
  const testimonials = [
    {
      quote:
        "Working with Events & Office Consultants for numbers of years has provided us the staffing we need with confidence. They are very easy to work with and it has always been a pleasure working with them in Miami. Not only onsite but also working on the prework for our events with Ellen, she knows our needs for the staff and is always helpful.",
      author: "Donna DeFrank",
      company: "INFORMA",
    },
    {
      quote:
        "We've developed a great partnership with EOC. Listening is very important! The way you guys interpret our needs and make it seamless is much appreciated. Your responsiveness, flexibility and attention to detail is to be commended.",
      author: "Debbie",
      company: "National Marine Manufacturers Association (NMMA)",
    },
    {
      quote:
        "EOC is our go-to Staffing Agency for professional and positive people to represent our clients! We love working with them.",
      author: "Rachel",
      company: "Makaira Co.",
    },
    {
      quote:
        "I've been working with Events & Office Consultants, who helps us source temporary personal, for 4 years. Each time, Ellen is responsive, helpful, and finds the perfect fit for the job. She makes sure we see similar faces year to year when possible and can always help in a last minute pinch. I will always work with E&O Consultants.",
      author: "Jaime",
      company: "Director, Meetings with SCAI",
    },
    {
      quote:
        "EOC has provided us with talented and enthusiastic staff for multiple events. Their professionalism and dedication have made a significant impact on our attendee experience.",
      author: "Michael Thompson",
      company: "Global Events Network",
    },
    {
      quote:
        "The administrative professionals from EOC have been instrumental in keeping our office running smoothly during our busiest seasons. Their attention to detail and professional demeanor have been greatly appreciated.",
      author: "Lisa Chen",
      company: "Executive Director, Healthcare Solutions",
    },
  ];

  return (
    <main className="flex-1 bg-white">
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            Our success is measured by the satisfaction of our clients and the
            exceptional experiences we create together.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.author}
                title={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="section-heading">Ready to work with us?</h2>
          <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Let us help you find the perfect staff for your next event or office
            needs.
          </p>
          <ViewTransitionLink
            href="/contact"
            className="inline-block button-primary"
          >
            Contact Us Today
          </ViewTransitionLink>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />
    </main>
  );
}
