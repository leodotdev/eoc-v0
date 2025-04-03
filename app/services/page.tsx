import Image from "next/image";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  // Service categories
  const services = [
    {
      title: "Conventions & Events",
      description:
        "For organizations who need a seamless and unforgettable experience.",
      image: "/convention-crowd.png",
      link: "/services/conventions-events",
    },
    {
      title: "Brand Ambassadors",
      description:
        "For events and brands who want their talent to promote and enhance their reputation.",
      image: "/brand-ambassadors.png",
      link: "/services/brand-ambassadors",
    },
    {
      title: "Administrative Professionals",
      description: "For teams who need skilled talent and easy integration.",
      image: "/admin-professionals.png",
      link: "/services/administrative-professionals",
    },
    {
      title: "Hospitality",
      description:
        "For professionals who are looking for exceptional guest experiences and top-tier hospitality staffing solutions.",
      image: "/hospitality.png",
      link: "/services", // Will need a dedicated page in the future
    },
  ];

  // Other services categories
  const otherServices = [
    [
      "Payroll Services",
      "Temp-to-hire",
      "Concierge & Guest Relations",
      "Usher & Seating Coordination",
    ],
    [
      "Survey & Data Collection Staff",
      "Retail Merchandise Assistants",
      "Street Team Marketing",
      "Translation Services",
    ],
    [
      "Bonded Cashiers",
      "Event managers & floor supervisors",
      "Product demonstrators",
      "Costumed Mascots",
    ],
    [
      "Crowd Engagement Specialists",
      "Event Production Assistants",
      "Press & Media Relations Staff",
      "Festival & Outdoor Event Staff",
    ],
  ];

  // Why choose us
  const whyChooseUs = [
    {
      title: "Proven Experience in Large-Scale Events",
      description: "Staffed major trade shows, expos, and industry conferences",
      icon: "🏢",
    },
    {
      title: "Scalable & Reliable Staffing Solutions",
      description:
        "Access to a trained workforce, ready for events of any size",
      icon: "👥",
    },
    {
      title: "VIP & Multilingual Hospitality Specialists",
      description:
        "Experts in white-glove service, guest engagement, and international attendees",
      icon: "🌎",
    },
    {
      title: "Local & Industry-Specific Expertise",
      description:
        "Knowledgeable in venue logistics, exhibitor support, and customer service excellence",
      icon: "🔍",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="mb-6">
            <BreadcrumbNav
              items={[
                {
                  label: "Services & Solutions",
                  href: "/services",
                  isCurrent: true,
                },
              ]}
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Services & Solutions
          </h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            We provide comprehensive staffing solutions tailored to your
            specific needs, ensuring exceptional talent for your events and
            business operations.
          </p>
        </div>
      </section>

      {/* Personalized Staffing Experience */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Personalized Staffing Experience
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-16"></div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <div className="h-1 w-16 bg-primary mb-8"></div>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <ViewTransitionLink
                    href={service.link}
                    className="button-primary"
                  >
                    Learn More
                  </ViewTransitionLink>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Other Services Include:
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {otherServices.map((column, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {column.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-center text-lg font-medium">
            Don't see what you're looking for? Get in touch with our team for a
            look at our bespoke options!
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-secondary/20 p-8 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground italic">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
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
    </main>
  );
}
