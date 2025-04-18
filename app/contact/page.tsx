"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
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
      [e.target.id]: e.target.value,
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
      formData.append("company", formState.company);
      formData.append("message", formState.message);
      formData.append("source", "Contact Page");

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
          message: data.message,
        });

        // Reset form on success
        setFormState({
          name: "",
          email: "",
          company: "",
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
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <div className="h-1 w-24 bg-white"></div>
          <p className="text-xl max-w-3xl">
            Get in touch with us to discuss your event staffing or
            administrative needs.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Get In Touch</h2>
                <div className="h-1 w-16 bg-primary"></div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <Link
                      href="tel:305-442-6000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      305-442-6000
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <Link
                      href="mailto:info@eocpeople.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@eocpeople.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">Miami, Florida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Facebook</h3>
                    <Link
                      href="https://facebook.com/eocpeople"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @eocpeople
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-md">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Instagram</h3>
                    <Link
                      href="https://instagram.com/eocpeople"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @eocpeople
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <div className="h-1 w-16 bg-primary"></div>
              </div>

              {formStatus.isSuccess && (
                <Alert className="bg-green-50 border-green-200 text-green-800">
                  <AlertDescription>{formStatus.message}</AlertDescription>
                </Alert>
              )}

              {formStatus.isError && (
                <Alert className="bg-red-50 border-red-200 text-red-800">
                  <AlertDescription>{formStatus.message}</AlertDescription>
                </Alert>
              )}

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company or organization"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event or staffing needs"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground w-fit"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
