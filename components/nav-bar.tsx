"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ViewTransitionLink } from "@/components/view-transition-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Services & Solutions",
      isDropdown: true,
      dropdownItems: [
        { href: "/services/conventions-events", label: "Conventions & Events" },
        { href: "/services/brand-ambassadors", label: "Brand Ambassadors" },
        {
          href: "/services/administrative-professionals",
          label: "Administrative Professionals",
        },
        { href: "/services/hospitality", label: "Hospitality" },
      ],
    },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <ViewTransitionLink href="/" className="flex items-center">
            <div className="relative h-16 w-48">
              <Image
                src="/eoc-logo.png"
                alt="Events & Office Consultants"
                fill
                className="object-contain brightness-0 invert"
                priority
                sizes="(max-width: 768px) 192px, 192px"
                quality={90}
              />
            </div>
          </ViewTransitionLink>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {routes.map((route) =>
              route.isDropdown ? (
                <li key={route.href}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-base font-medium text-primary-foreground/90 hover:text-primary-foreground inline-flex items-center gap-1 outline-none">
                      {route.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      <DropdownMenuItem asChild>
                        <ViewTransitionLink
                          href={route.href}
                          className="w-full cursor-pointer"
                        >
                          All Services
                        </ViewTransitionLink>
                      </DropdownMenuItem>
                      {route.dropdownItems?.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <ViewTransitionLink
                            href={item.href}
                            className="w-full cursor-pointer"
                          >
                            {item.label}
                          </ViewTransitionLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={route.href}>
                  <ViewTransitionLink
                    href={route.href}
                    className="text-base font-medium text-primary-foreground/90 hover:text-primary-foreground"
                  >
                    {route.label}
                  </ViewTransitionLink>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-4 ml-8 border-l border-primary-foreground/20 pl-8">
            <Link
              href="tel:305-442-6000"
              className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
              title="Call us"
            >
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
            <Link
              href="mailto:info@eocpeople.com"
              className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
              title="Email us"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://facebook.com/eocpeople"
              className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com/eocpeople"
              className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="pr-0 bg-primary text-primary-foreground"
          >
            <div className="flex flex-col h-full">
              <div className="relative h-16 w-48 mb-6">
                <Image
                  src="/eoc-logo.png"
                  alt="Events & Office Consultants"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                  sizes="(max-width: 768px) 192px, 192px"
                  quality={90}
                />
              </div>
              <nav className="flex flex-col gap-6">
                {routes.map((route) =>
                  route.isDropdown ? (
                    <div key={route.href} className="flex flex-col gap-2">
                      <ViewTransitionLink
                        href={route.href}
                        className="text-primary-foreground/90 transition-colors hover:text-primary-foreground font-medium"
                      >
                        {route.label}
                      </ViewTransitionLink>
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary-foreground/20">
                        {route.dropdownItems?.map((item) => (
                          <ViewTransitionLink
                            key={item.href}
                            href={item.href}
                            className="text-primary-foreground/70 transition-colors hover:text-primary-foreground text-sm"
                          >
                            {item.label}
                          </ViewTransitionLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <ViewTransitionLink
                      key={route.href}
                      href={route.href}
                      className="text-primary-foreground/90 transition-colors hover:text-primary-foreground font-medium"
                    >
                      {route.label}
                    </ViewTransitionLink>
                  )
                )}
              </nav>

              <div className="flex gap-4 mt-auto py-6">
                <Link
                  href="tel:305-442-6000"
                  className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
                  title="Call us"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Link>
                <Link
                  href="mailto:info@eocpeople.com"
                  className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
                  title="Email us"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link
                  href="https://facebook.com/eocpeople"
                  className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com/eocpeople"
                  className="text-primary-foreground/90 p-2 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
