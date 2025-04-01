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
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Founded in 1998 by two visionary staffing experts, Events and
                  Office Consultants (EOC) has grown from a small local agency
                  to a leading event staffing solution provider in South
                  Florida, EOC is now led by Ellen Balzebre, who brings 16 years
                  of expertise in staffing and hospitality. Our woman-owned
                  business has a singular mission: to connect exceptional talent
                  with extraordinary events.
                </p>
                <p className="text-lg font-medium text-foreground">
                  We help companies find event staffing to create unforgettable
                  experiences for their customers, from trade shows and
                  conventions to festivals and pop-ups.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden ">
              <Image
                src="/about/team-photo.png"
                alt="EOC Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10">What sets us apart</h2>
          <div className="h-1 w-16 bg-primary mb-8"></div>

          <div className="flex flex-col space-y-4  mb-12">
            <p className="text-xl font-semibold text-primary">
              Curated pool of 1000+ professional staff
            </p>
            <p className="text-xl font-semibold text-primary">
              Personalized recruitment and management
            </p>
            <p className="text-xl font-semibold text-primary">
              Seamless staffing solutions for diverse industries
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <p className=" text-lg">
              At EOC, we understand that every event is unique. Our team
              provides customized staffing solutions tailored to each client's
              specific needs, adapting to various event styles and requirements.
              By handling complex administrative functions like recruitment,
              training, and on-site management, we save you time and ensure
              professional execution.
            </p>

            <p className=" text-lg">
              With over two decades of industry experience, our staff undergoes
              training to exceed client expectations. We leverage innovative
              technology to offer flexible staffing options that can accommodate
              last-minute changes and guarantee smooth event operations.
            </p>

            <p className=" text-lg">
              With a dedicated team of full-time and flex-time professionals EOC
              has been a trusted partner of the Greater Miami Convention &
              Visitors Bureau (GMCVB) for over 15 years, consistently setting
              the standard for excellence in event staffing.
            </p>

            <p className=" text-lg font-medium mt-8">
              Choose EOC for your next event and experience the difference that
              comes with a partner dedicated to transforming your vision into an
              unforgettable reality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
