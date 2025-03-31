import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Us</h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl max-w-3xl">
            Events & Office Consultants is a woman-owned business that connects
            exceptional talent with extraordinary events.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="h-1 w-16 bg-primary mb-8"></div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Since our founding, Events & Office Consultants has been
                  dedicated to providing personalized staffing solutions for
                  businesses and organizations across a wide range of
                  industries.
                </p>
                <p>
                  We understand that the success of your event or office
                  environment depends on having the right people in place.
                  That's why we take a personalized approach to staffing,
                  carefully matching talented professionals with the specific
                  needs of your business.
                </p>
                <p>
                  Our team brings years of experience in event management,
                  administrative support, and hospitality services, allowing us
                  to provide comprehensive staffing solutions that exceed
                  expectations.
                </p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.jpg"
                alt="EOC Team"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to excellence in every aspect of our business,
                from the talent we recruit to the service we provide to our
                clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Personalization</h3>
              <p className="text-muted-foreground">
                We believe in a personalized approach to staffing, taking the
                time to understand your specific needs and goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-muted-foreground">
                You can count on us to deliver exceptional talent and support
                when and where you need it, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Leadership
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/testimonials/person1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Ellen Smith</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/testimonials/person2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-muted-foreground">Operations Director</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/testimonials/person3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-muted-foreground">Client Relations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
