"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
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
      ],
    },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex items-center">
          <ViewTransitionLink href="/" className="flex items-center">
            <div className="relative h-12 w-36">
              <Image
                src="/eoc-logo.png"
                alt="Events & Office Consultants"
                fill
                className="object-contain"
                priority
              />
            </div>
          </ViewTransitionLink>
        </div>

        <nav className="ml-auto hidden md:flex items-center space-x-8">
          {routes.map((route) =>
            route.isDropdown ? (
              <DropdownMenu key={route.href}>
                <DropdownMenuTrigger className="text-base font-medium nav-link inline-flex items-center gap-1 outline-none">
                  {route.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
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
            ) : (
              <ViewTransitionLink
                key={route.href}
                href={route.href}
                className="text-base font-medium nav-link"
              >
                {route.label}
              </ViewTransitionLink>
            )
          )}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="relative h-12 w-36 mb-6">
              <Image
                src="/eoc-logo.png"
                alt="Events & Office Consultants"
                fill
                className="object-contain"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              {routes.map((route) =>
                route.isDropdown ? (
                  <div key={route.href} className="space-y-2">
                    <ViewTransitionLink
                      href={route.href}
                      className="text-foreground/90 transition-colors hover:text-foreground font-medium"
                    >
                      {route.label}
                    </ViewTransitionLink>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {route.dropdownItems?.map((item) => (
                        <ViewTransitionLink
                          key={item.href}
                          href={item.href}
                          className="text-foreground/70 transition-colors hover:text-foreground block text-sm"
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
                    className="text-foreground/90 transition-colors hover:text-foreground font-medium"
                  >
                    {route.label}
                  </ViewTransitionLink>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
