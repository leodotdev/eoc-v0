import Image from "next/image";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";

export default function ServicesPage() {
  // Service categories
  const services = [
    {
      title: "Conventions & Events",
      description:
        "For organizations who need a seamless and unforgettable experience.",
      image: "/placeholder.jpg",
      link: "/services/conventions-events",
    },
    {
      title: "Brand Ambassadors",
      description:
        "For events and brands who want their talent to promote and enhance their reputation.",
      image: "/placeholder.jpg",
      link: "/services/brand-ambassadors",
    },
    {
      title: "Administrative Professionals",
      description: "For teams who need skilled talent and easy integration.",
      image: "/placeholder.jpg",
      link: "/services/administrative-professionals",
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

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
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
