import Image from "next/image";
import Link from "next/link";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";

export default function AdministrativeProfessionalsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="mb-6">
            <BreadcrumbNav
              items={[
                { label: "Services & Solutions", href: "/services" },
                {
                  label: "Administrative Professionals",
                  href: "/services/administrative-professionals",
                  isCurrent: true,
                },
              ]}
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Administrative Professionals
          </h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            For teams who need skilled talent and easy integration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Personalized Staffing Experience
              </h2>
              <div className="h-1 w-16 bg-primary mb-8"></div>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  We know that the backbone of any successful event or office
                  operation is a team of skilled administrative professionals.
                  Our carefully vetted talent pool includes experienced
                  administrative assistants, office managers, and executive
                  support staff who excel in organization, communication, and
                  multitasking.
                </p>
                <p className="text-lg">
                  Whether you need temporary support for a busy season,
                  specialized assistance for a high-stakes project, or long-term
                  staffing solutions, we provide professionals who are not only
                  highly capable but also aligned with your company's culture
                  and goals. From managing schedules and coordinating logistics
                  to handling critical office operations, our administrative
                  professionals ensure your business runs smoothly and
                  efficiently.
                </p>
                <p className="text-lg">
                  We pride ourselves on delivering personalized staffing
                  solutions tailored to your unique needs. Whether you're
                  preparing for a major event, expanding your team, or simply
                  need reliable support to keep day-to-day operations on track,
                  Events & Office Consultants is here to help.
                </p>
                <div className="pt-6">
                  <ViewTransitionLink
                    href="/contact"
                    className="button-primary"
                  >
                    Contact Us Today
                  </ViewTransitionLink>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.jpg"
                alt="Administrative Professionals"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">
            Other Services
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ViewTransitionLink
              href="/services/conventions-events"
              className="bg-white p-8 group rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Conventions & Events
              </h3>
              <p className="text-muted-foreground mb-6">
                For organizations who need a seamless and unforgettable
                experience.
              </p>
              <p className="text-primary group-hover:underline">Learn More →</p>
            </ViewTransitionLink>
            <ViewTransitionLink
              href="/services/brand-ambassadors"
              className="bg-white p-8 group rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Brand Ambassadors
              </h3>
              <p className="text-muted-foreground mb-6">
                For events and brands who want their talent to promote and
                enhance their reputation.
              </p>
              <p className="text-primary group-hover:underline">Learn More →</p>
            </ViewTransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
