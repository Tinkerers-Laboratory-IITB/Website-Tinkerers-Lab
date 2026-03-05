import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, CheckCircle } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Newsletter page with subscription form
 */

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Stay Updated
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Subscribe to our newsletter for the latest updates, events, and opportunities from Tinkerers' Lab.
          </p>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#000000] border-2 border-[#333333] p-12 space-y-8">
              <div className="text-center space-y-4">
                <Mail size={48} className="text-white mx-auto" />
                <h2 className="heading-md text-white ">
                  Join Our Community
                </h2>
                <p className="text-white ">
                  Get weekly updates about new projects, events, and opportunities at Tinkerers' Lab.
                </p>
              </div>

              {subscribed ? (
                <div className="bg-[#0a0a0a] border-2 border-[#ffffff] p-6 text-center space-y-3">
                  <CheckCircle size={48} className="text-white mx-auto" />
                  <h3 className="heading-sm text-white ">
                    Thank You for Subscribing!
                  </h3>
                  <p className="text-white ">
                    Check your email for a confirmation link. Welcome to our community!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-white  mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-[#0a0a0a] border-2 border-[#333333] text-white  px-4 py-3 focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]"
                  >
                    Subscribe Now
                  </button>

                  <p className="text-xs text-white  text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12 text-center">
            What You'll Get
          </h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Project Updates", desc: "Latest news from ongoing and completed projects" },
              { title: "Event Announcements", desc: "Early access to workshops, hackathons, and events" },
              { title: "Opportunities", desc: "Funding, mentorship, and collaboration opportunities" },
              { title: "Success Stories", desc: "Inspiring stories from our community members" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200 space-y-3"
              >
                <h3 className="text-lg font-bold text-white ">{item.title}</h3>
                <p className="text-sm text-white ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Frequency */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-md text-white  mb-8 text-center">
            Newsletter Frequency
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { frequency: "Weekly Digest", desc: "Every Monday - Curated updates and highlights" },
              { frequency: "Event Alerts", desc: "Immediate - Urgent announcements and special events" },
              { frequency: "Monthly Report", desc: "First of the month - Comprehensive impact report" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#000000] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-white  mb-2">{item.frequency}</h3>
                <p className="text-white ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-md text-white  mb-12 text-center">
            What Subscribers Say
          </h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-3 gap-6">
            {[
              { name: "Alex", quote: "The newsletter keeps me informed about all the amazing projects happening at TL!" },
              { name: "Sarah", quote: "I found my current project team through a newsletter announcement. Highly recommend!" },
              { name: "Mike", quote: "Great way to stay connected with the community and discover new opportunities." },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200 space-y-3"
              >
                <p className="text-white  italic">"{testimonial.quote}"</p>
                <p className="text-white font-bold ">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
