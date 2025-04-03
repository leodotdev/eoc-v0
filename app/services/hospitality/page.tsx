import Image from "next/image";
import Link from "next/link";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";

export default function HospitalityPage() {
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
                  label: "Hospitality",
                  href: "/services/hospitality",
                  isCurrent: true,
                },
              ]}
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Hospitality</h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            For professionals who are looking for exceptional guest experiences
            and top-tier hospitality staffing solutions.
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
                  In the dynamic world of hospitality, exceptional service is
                  not just an expectation—it's a necessity. We specialize in
                  providing top-tier hospitality professionals who understand
                  the art of creating memorable guest experiences. From luxury
                  hotels and resorts to high-end restaurants and exclusive
                  venues, our staff brings the perfect blend of professionalism,
                  attention to detail, and warm hospitality.
                </p>
                <p className="text-lg">
                  Our hospitality professionals are carefully selected for their
                  experience, expertise, and dedication to service excellence.
                  Whether you need front desk staff, concierge services, food
                  and beverage professionals, or event hospitality teams, we
                  ensure each member of our team upholds the highest standards
                  of guest service and operational efficiency.
                </p>
                <p className="text-lg">
                  With our deep understanding of the hospitality industry and
                  commitment to excellence, we help you deliver exceptional
                  experiences that keep your guests coming back. Let us be your
                  partner in creating unforgettable moments and maintaining the
                  highest standards of hospitality service.
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
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/hospitality.png"
                alt="Hospitality Services"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
            <ViewTransitionLink
              href="/services/administrative-professionals"
              className="bg-white p-8 group rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Administrative Professionals
              </h3>
              <p className="text-muted-foreground mb-6">
                For teams who need skilled talent and easy integration.
              </p>
              <p className="text-primary group-hover:underline">Learn More →</p>
            </ViewTransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
