import Image from "next/image";
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Hospitality Services
          </h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            Exceptional guest experiences and top-tier hospitality staffing
            solutions for your events.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Events with Professional Hospitality Staff
              </h2>
              <div className="h-1 w-16 bg-primary mb-8"></div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  We specialize in transforming your vision into conventions and
                  events that leave a lasting impression. Whether you're
                  planning a large-scale conference, a corporate summit, or an
                  intimate networking event, our team of seasoned professionals
                  can make sure that you and your guests are looked after.
                </p>
                <p>
                  From servers to bartenders, we ensure your attendees
                  experience impeccable service. Let us take the stress out of
                  planning so you can focus on what matters most—engaging your
                  attendees and achieving your objectives.
                </p>
                <p>
                  Whether it's a high-profile convention or a bespoke corporate
                  gathering, Events & Office Consultants is your partner in
                  creating unforgettable experiences.
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
                alt="Professional hospitality staff providing exceptional service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/our-work-1.png"
                alt="Brand ambassador in black t-shirt against pink wall"
                fill
                className="object-cover scale-[1.5] object-[50%_50%]"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/our-work-2.png"
                alt="Crowd at Walter E Washington Convention Center"
                fill
                className="object-cover scale-[1.5] object-[50%_50%]"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/our-work-3.png"
                alt="Modern boardroom with leather chairs"
                fill
                className="object-cover scale-[1.5] object-[50%_50%]"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/our-work-4.png"
                alt="Miami beach with palm trees and buildings"
                fill
                className="object-cover scale-[1.5] object-[50%_50%]"
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
