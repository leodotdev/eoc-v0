import Image from "next/image";
import Link from "next/link";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";

export default function ConventionsEventsPage() {
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
                  label: "Conventions & Events",
                  href: "/services/conventions-events",
                  isCurrent: true,
                },
              ]}
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Conventions & Events
          </h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            For organizations who need a seamless and unforgettable experience.
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
                  We specialize in transforming your vision into conventions and
                  events that leave a lasting impression. Whether you're
                  planning a large-scale conference, a corporate summit, or an
                  intimate networking event, our team of seasoned professionals
                  handles every detail with precision and creativity.
                </p>
                <p className="text-lg">
                  From venue selection and logistics to audiovisual production
                  and guest management, we ensure your event runs seamlessly,
                  reflecting your brand's values and exceeding your goals. With
                  a deep understanding of the vibrant event scene and a network
                  of trusted vendors, we bring unparalleled expertise to every
                  project.
                </p>
                <p className="text-lg">
                  Let us take the stress out of planning so you can focus on
                  what matters most—engaging your attendees and achieving your
                  objectives. Whether it's a high-profile convention or a
                  bespoke corporate gathering, Events & Office Consultants is
                  your partner in creating unforgettable experiences.
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
            <div className="space-y-4">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/convention-crowd.png"
                  alt="Convention attendees in a modern exhibition center"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                Our staffing solutions help manage large convention crowds
                efficiently and professionally
              </p>
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
