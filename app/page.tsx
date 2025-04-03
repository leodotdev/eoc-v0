"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstagramGallery from "@/components/instagram-gallery";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { ClientLogos } from "@/components/client-logos";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Home() {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load the IFrame Player API code asynchronously
    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    // Function to handle player initialization
    const initializePlayer = () => {
      playerRef.current = new window.YT.Player("hero-video", {
        height: "100%",
        width: "100%",
        videoId: "sKw_ZBs08AU",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          loop: 1,
          modestbranding: 1,
          mute: 1,
          playsinline: 1,
          rel: 0,
          playlist: "sKw_ZBs08AU",
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            console.log("Player ready");
            event.target.setPlaybackRate(0.5);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            // When video starts playing or buffers, set playback rate
            if (
              event.data === window.YT.PlayerState.PLAYING ||
              event.data === window.YT.PlayerState.BUFFERING
            ) {
              console.log("Setting playback rate");
              event.target.setPlaybackRate(0.5);
            }
          },
          onError: (event: any) => {
            console.error("YouTube player error:", event.data);
          },
        },
      });
    };

    // Set up the YouTube API callback
    if (window.YT) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
      loadYouTubeAPI();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

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
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background min-h-[80vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full blur-[24px]">
            <div
              id="hero-video"
              className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-[1200px] text-white">
            <h1 className="mb-8 text-center">
              <span className="block text-4xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                Your favorite
              </span>
              <span className="mt-2 block text-4xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
                staffing partner.
              </span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-white/90 md:text-xl lg:text-2xl">
              We connect exceptional talent with extraordinary events.
              Experience seamless staffing solutions that bring your vision to
              life.
            </p>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
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
        <div className="container text-center">
          <ClientLogos />
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
              <p className="italic text-muted-foreground mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center mb-12">
          <h2 className="section-heading">Find us on Instagram</h2>
          <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
          <Link
            href="https://www.instagram.com/eocpeople/"
            className="inline-flex items-center text-primary hover:underline mb-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 mr-2" />
            @eocpeople
          </Link>
        </div>

        <div className="container">
          <InstagramGallery />
          <div className="text-center mt-10">
            <Link
              href="https://www.instagram.com/eocpeople/"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 mr-2" />
              View More on Instagram
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
