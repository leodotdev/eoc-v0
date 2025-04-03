"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("source", "Footer Form");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "Thank you for your message!",
        });

        // Reset form on success
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="relative h-16 w-48">
              <Image
                src="/eoc-logo.png"
                alt="Events & Office Consultants"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-xs">
              Our woman-owned business has a singular mission: to connect
              exceptional talent with extraordinary events.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">
              Events & Office Consultants
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/testimonials"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Testimonials
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                All Services
              </Link>
              <Link
                href="/services/conventions-events"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Conventions & Events
              </Link>
              <Link
                href="/services/brand-ambassadors"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Brand Ambassadors
              </Link>
              <Link
                href="/services/administrative-professionals"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Administrative Professionals
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="tel:305-442-6000"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                <span>305-442-6000</span>
              </Link>
              <Link
                href="mailto:info@eocpeople.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
                <span>info@eocpeople.com</span>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/eocpeople"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            {formStatus.isSuccess && (
              <Alert className="bg-green-800/20 border-green-800/30 text-white">
                <AlertDescription>{formStatus.message}</AlertDescription>
              </Alert>
            )}
            {formStatus.isError && (
              <Alert className="bg-red-800/20 border-red-800/30 text-white">
                <AlertDescription>{formStatus.message}</AlertDescription>
              </Alert>
            )}
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <Input
                name="name"
                type="text"
                placeholder="Name*"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
                required
                value={formState.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email*"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
                required
                value={formState.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Comment or Message"
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60"
                value={formState.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                className="bg-primary-foreground w-fit text-primary hover:bg-primary-foreground/90"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Events & Office Consultants. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
