import Image from "next/image";
import Link from "next/link";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { BreadcrumbNav } from "@/components/breadcrumb";

export default function BrandAmbassadorsPage() {
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
                  label: "Brand Ambassadors",
                  href: "/services/brand-ambassadors",
                  isCurrent: true,
                },
              ]}
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Brand Ambassadors
          </h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            For events and brands who want their talent to promote and enhance
            their reputation.
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
                  We understand that your brand's image is everything, which is
                  why we specialize in providing exceptional brand ambassadors
                  who embody your values and elevate your presence. Our
                  ambassadors are carefully selected for their charisma,
                  professionalism, and ability to connect with your target
                  audience, ensuring they leave a lasting impression at every
                  event, product launch, or promotional campaign.
                </p>
                <p className="text-lg">
                  Whether you need a dynamic team for a trade show, a polished
                  presence for a corporate event, or engaging personalities for
                  a street marketing campaign, we tailor our talent to align
                  perfectly with your brand's identity and goals.
                </p>
                <p className="text-lg">
                  With a deep understanding of Miami's vibrant market and a
                  commitment to excellence, we ensure your brand stands out in a
                  crowded landscape. Our ambassadors are not just faces—they are
                  skilled communicators, relationship builders, and passionate
                  advocates for your brand.
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
                src="/brand-ambassadors.png"
                alt="Brand Ambassadors"
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
