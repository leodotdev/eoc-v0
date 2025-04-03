"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Instagram, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstagramGallery from "@/components/instagram-gallery";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { ClientLogos } from "@/components/client-logos";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/components/testimonial-card";

export default function Home() {
  const playerRef = useRef<any>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoId = "sKw_ZBs08AU";
  const [origin, setOrigin] = useState("");
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);

    // First set a short timeout to quickly show content if video loads fast
    const quickTimer = setTimeout(() => setIsVideoReady(true), 1000);

    // Add a failsafe timeout to ensure content always shows even if video has issues
    const failsafeTimer = setTimeout(() => {
      setIsVideoReady(true);
      // If we're using the failsafe timer, assume there might be video issues
      setVideoError(true);
    }, 3000);

    // Add event listener for when iframe loads
    const handleIframeLoad = () => {
      setIsVideoReady(true);
      clearTimeout(failsafeTimer);
    };

    // Clean up timers on unmount
    return () => {
      clearTimeout(quickTimer);
      clearTimeout(failsafeTimer);
    };
  }, []);

  // Service categories
  const services = [
    {
      title: "Conventions & Events",
      icon: "/public/icons/conventions.svg",
      description:
        "Professional staff for conferences, trade shows and special events",
      link: "/services/conventions-events",
    },
    {
      title: "Administrative Professionals",
      icon: "/public/icons/administrative.svg",
      description: "Skilled administrative support for your office needs",
      link: "/services/administrative-professionals",
    },
    {
      title: "Brand Ambassadors",
      icon: "/public/icons/brand.svg",
      description: "Talented representatives to promote your brand",
      link: "/services/brand-ambassadors",
    },
    {
      title: "Hospitality",
      icon: "/public/icons/hospitality.svg",
      description: "Exceptional service staff for hospitality events",
      link: "/services",
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[80vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full blur-[24px]">
            {origin && !videoError ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&mute=1&playsinline=1&rel=0&playlist=${videoId}&enablejsapi=0&origin=${encodeURIComponent(
                  origin
                )}&nocookie=1`}
                className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                title="Background video"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsVideoReady(true)}
                onError={() => {
                  setIsVideoReady(true);
                  setVideoError(true);
                }}
              />
            ) : (
              // Fallback background
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/90"></div>
            )}
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Loading Overlay */}
        {!isVideoReady && (
          <div className="absolute inset-0 z-20 bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground animate-pulse">Loading...</p>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div
          className={`container relative z-10 py-24 md:py-32 transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1200px] text-white flex flex-col items-center">
            <h1 className="text-center">
              <span className="block text-4xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                Your favorite
              </span>
              <span className="mt-2 block text-4xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
                staffing partner.
              </span>
            </h1>
            <p className="max-w-2xl text-center text-lg text-white/90 md:text-xl lg:text-2xl mt-8">
              We connect exceptional talent with extraordinary events.
              Experience seamless staffing solutions that bring your vision to
              life.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg bg-white/10 border-white text-white hover:bg-white hover:text-black transition-colors"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <ClientLogos />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
            <div className="h-1 w-24 bg-primary my-6"></div>
            <p className="text-lg text-muted-foreground">
              Our woman-owned business has a singular mission: to connect
              exceptional talent with extraordinary events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-16">
            {services.map((service, index) => (
              <ViewTransitionLink
                key={index}
                href={service.link}
                className="group bg-secondary rounded-lg p-6 flex flex-col items-center transition-colors hover:bg-secondary/80"
              >
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-center">
                  {service.description}
                </p>
                <div className="mt-4 text-primary flex items-center gap-1 text-sm font-medium group-hover:underline">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </ViewTransitionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center text-center"
            >
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              What our clients say
            </h2>
            <div className="h-1 w-24 bg-primary my-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.author}
                title={testimonial.company}
              />
            ))}
          </div>

          <div className="mt-12">
            <ViewTransitionLink
              href="/testimonials"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              View All Testimonials
              <ArrowRight className="h-4 w-4" />
            </ViewTransitionLink>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Find us on Instagram
            </h2>
            <div className="h-1 w-24 bg-primary my-6"></div>
            <Link
              href="https://www.instagram.com/eocpeople/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              @eocpeople
            </Link>
          </div>

          <div className="w-full mt-12">
            <InstagramGallery />
            <div className="flex justify-center mt-10">
              <Link
                href="https://www.instagram.com/eocpeople/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                View More on Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
