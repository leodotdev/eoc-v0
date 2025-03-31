import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Service categories
  const services = [
    {
      title: "Conventions & Events",
      icon: "/public/icons/conventions.svg",
      description:
        "Professional staff for conferences, trade shows and special events",
    },
    {
      title: "Administrative Professionals",
      icon: "/public/icons/administrative.svg",
      description: "Skilled administrative support for your office needs",
    },
    {
      title: "Brand Ambassadors",
      icon: "/public/icons/brand.svg",
      description: "Talented representatives to promote your brand",
    },
    {
      title: "Hospitality",
      icon: "/public/icons/hospitality.svg",
      description: "Exceptional service staff for hospitality events",
    },
  ];

  // Features
  const features = [
    {
      title: "Recruiting for your needs",
      description:
        "We find the perfect staff to match your specific requirements",
    },
    {
      title: "Excellent client services",
      description: "Dedicated support throughout your project",
    },
    {
      title: "Partnering for success",
      description: "Working together to achieve your goals",
    },
    {
      title: "Employer of Record",
      description: "We handle all HR and payroll responsibilities",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "Working with Events & Office Consultants for numbers of years has provided us the staffing we need with confidence. They are very easy to work with and it has always been a pleasure working with them in Miami.",
      author: "Donna DeFrank",
      company: "INFORMA",
      image: "/testimonials/person1.jpg",
    },
    {
      quote:
        "We've developed a great partnership with EOC. Listening is very important! The way you guys interpret our needs and make it seamless is much appreciated. Your responsiveness, flexibility and attention to detail is to be commended.",
      author: "Debbie",
      company: "National Marine Manufacturers Association (NMMA)",
      image: "/testimonials/person2.jpg",
    },
    {
      quote:
        "EOC is our go-to Staffing Agency for professional and positive people to represent our clients! We love working with them.",
      author: "Rachel",
      company: "Makaira Co.",
      image: "/testimonials/person3.jpg",
    },
  ];

  // Instagram posts (these would be fetched from Instagram API in production)
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://placehold.co/300x300/black/white?text=EOC+Instagram+1",
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/300x300/black/white?text=EOC+Instagram+2",
    },
    {
      id: 3,
      imageUrl: "https://placehold.co/300x300/black/white?text=EOC+Instagram+3",
    },
    {
      id: 4,
      imageUrl: "https://placehold.co/300x300/black/white?text=EOC+Instagram+4",
    },
    {
      id: 5,
      imageUrl: "https://placehold.co/300x300/black/white?text=EOC+Instagram+5",
    },
    {
      id: 6,
      imageUrl: "https://placehold.co/300x300/black/white?text=EOC+Instagram+6",
    },
  ];

  // Client logos
  const clients = [
    { name: "FIME", logo: "/clients/fime.png" },
    { name: "Rolls-Royce", logo: "/clients/rolls-royce.png" },
    { name: "Longines", logo: "/clients/longines.png" },
    { name: "Miami Marathon", logo: "/clients/miami-marathon.png" },
    { name: "Seatrade", logo: "/clients/seatrade.png" },
    { name: "JISO", logo: "/clients/jiso.png" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalized Staffing Experience
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary-foreground/80">
              For businesses and organizations
            </h2>
            <p className="text-lg max-w-md text-primary-foreground/80">
              We believe that events are about people. By providing the
              personnel and support to create unforgettable experiences we can
              help bring your vision to life.
            </p>
            <Button
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 mt-4"
            >
              <Link href="/contact">START HERE</Link>
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-md overflow-hidden">
            <Image
              src="/placeholder.jpg"
              alt="EOC Staffing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center mb-16">
          <h2 className="section-heading">What we do</h2>
          <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our woman-owned business has a singular mission: to connect
            exceptional talent with extraordinary events.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 text-center flex flex-col items-center"
            >
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center mb-16">
          <h2 className="section-heading">What our clients say</h2>
          <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center mb-12">
          <h2 className="section-heading">Our Clients</h2>
          <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative h-16 w-32">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center mb-16">
          <h2 className="section-heading">Find us on Instagram</h2>
          <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
          <Link
            href="https://www.instagram.com/eocpeople/"
            className="inline-flex items-center text-primary hover:underline"
          >
            <Instagram className="h-5 w-5 mr-2" />
            @eocpeople
          </Link>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://www.instagram.com/eocpeople/"
              className="aspect-square relative overflow-hidden group"
            >
              <Image
                src={post.imageUrl}
                alt="Instagram post"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
