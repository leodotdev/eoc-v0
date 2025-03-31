import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ServicesPage() {
  // Service categories
  const services = [
    {
      title: "Conventions & Events",
      description:
        "Professional staff for conferences, trade shows, and special events",
      image: "/public/icons/conventions.svg",
      features: [
        "Registration desk staff",
        "Information booth attendants",
        "Event greeters and hosts",
        "Room monitors",
        "Badge checkers",
        "Line management staff",
        "VIP & speaker support",
        "Coat check attendants",
      ],
    },
    {
      title: "Administrative Professionals",
      description: "Skilled administrative support for your office needs",
      image: "/public/icons/administrative.svg",
      features: [
        "Administrative assistants",
        "Executive assistants",
        "Receptionists",
        "Data entry specialists",
        "Office managers",
        "Customer service representatives",
        "Project coordinators",
        "Virtual assistants",
      ],
    },
    {
      title: "Brand Ambassadors",
      description: "Talented representatives to promote your brand",
      image: "/public/icons/brand.svg",
      features: [
        "Product demonstrators",
        "Brand spokespersons",
        "Promotional models",
        "Trade show booth staff",
        "Sampling staff",
        "Experiential marketing staff",
        "Event activation teams",
        "Street team members",
      ],
    },
    {
      title: "Hospitality",
      description: "Exceptional service staff for hospitality events",
      image: "/public/icons/hospitality.svg",
      features: [
        "Greeters and hosts",
        "Waitstaff",
        "Bartenders",
        "Food servers",
        "Banquet staff",
        "Concierge services",
        "VIP attendants",
        "Event setup and breakdown staff",
      ],
    },
  ];

  return (
    <main className="flex-1 bg-white">
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Our Services & Solutions
          </h1>
          <div className="w-24 wavy-line-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            We provide comprehensive staffing solutions tailored to your
            specific needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center mb-16">
          <h2 className="section-heading">What We Offer</h2>
          <div className="w-24 wavy-line mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our woman-owned business is dedicated to providing exceptional
            talent for your events and office needs.
          </p>
        </div>

        <div className="container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } mb-24`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <div className="w-16 wavy-line mb-6"></div>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 bg-primary rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary p-10 rounded-lg h-80 relative flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/10">
                  {index + 1}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground w-24 h-24 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="section-heading">Ready to Get Started?</h2>
          <div className="w-24 wavy-line mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Contact us today to discuss how we can provide tailored staffing
            solutions for your specific needs.
          </p>
          <Link href="/contact" className="inline-block button-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
