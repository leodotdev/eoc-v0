import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 bg-white">
        <section className="bg-secondary text-accent py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">CONTACT US</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8 text-center">Get In Touch</h2>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-accent font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your first name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-accent font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-accent font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-accent font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-accent font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button className="w-full bg-primary text-white hover:bg-primary/90">Send Message</Button>
              </form>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium text-accent mb-4">Our Location</h3>
              <p className="text-accent">
                123 Main Street
                <br />
                Suite 456
                <br />
                Anytown, USA 12345
              </p>

              <h3 className="text-xl font-medium text-accent mt-8 mb-4">Contact Information</h3>
              <p className="text-accent">
                Email: info@eocpeople.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

