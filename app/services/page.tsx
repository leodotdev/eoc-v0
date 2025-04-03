import Image from "next/image";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";
import { CheckCircle, ArrowRight } from "lucide-react";

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
        <div className="container flex flex-col gap-6">
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
          <h1 className="text-3xl md:text-5xl font-bold">
            Services & Solutions
          </h1>
          <div className="h-1 w-24 bg-white"></div>
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
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-center">
              Personalized Staffing Experience
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>

          <div className="flex flex-col gap-20 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <div className="h-1 w-16 bg-primary"></div>
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex">
                    <ViewTransitionLink
                      href={service.link}
                      className="button-primary inline-flex items-center gap-2 self-start"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </ViewTransitionLink>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={90}
                    priority={index === 0}
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
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-center">
              Other Services Include:
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {otherServices.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {column.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-center text-lg font-medium mt-12">
            Don't see what you're looking for?{" "}
            <ViewTransitionLink
              href="/contact"
              className="text-primary hover:text-primary/80"
            >
              Get in touch
            </ViewTransitionLink>{" "}
            with our team for a look at our bespoke options!
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-secondary/20 p-8 rounded-lg flex flex-col gap-3"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
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
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold">Ready to work with us?</h2>
          <div className="h-1 w-24 bg-primary"></div>
          <p className="max-w-2xl text-center text-lg text-muted-foreground">
            Let us help you find the perfect staff for your next event or office
            needs.
          </p>
          <div className="mt-2">
            <ViewTransitionLink
              href="/contact"
              className="inline-block button-primary"
            >
              Contact Us Today
            </ViewTransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
