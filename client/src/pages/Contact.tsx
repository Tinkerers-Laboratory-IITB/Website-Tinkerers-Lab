import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Contact page with contact form and details
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <div className="grid grid-cols animate-stagger-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="heading-md text-white  mb-8">Contact Information</h2>

              {/* Email */}
              <div className="flex gap-4">
                <Mail size={32} className="text-white flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white  mb-2">Email</h3>
                  <a
                    href="mailto:contact@tinkerslab.com"
                    className="text-white hover:text-white  transition-colors duration-200"
                  >
                    contact@tinkerslab.com
                  </a>
                  <p className="text-sm text-white  mt-1">Response within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone size={32} className="text-white flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white  mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-white hover:text-white  transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-sm text-white  mt-1">Mon-Fri, 10 AM - 6 PM</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <MapPin size={32} className="text-white flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white  mb-2">Location</h3>
                  <p className="text-white ">
                    Tinkerers' Lab<br />
                    Main Campus Building<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#0a0a0a] border-2 border-[#333333] p-6 space-y-3">
                <h3 className="text-lg font-bold text-white ">Operating Hours</h3>
                <div className="space-y-2 text-sm  text-white">
                  <p>Monday - Friday: 8 AM - 10 PM</p>
                  <p>Saturday: 10 AM - 8 PM</p>
                  <p>Sunday: 2 PM - 8 PM</p>
                  <p className="text-white">24/7 access for active members</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-md text-white  mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-white  mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border-2 border-[#333333] text-white  px-4 py-3 focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-white  mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border-2 border-[#333333] text-white  px-4 py-3 focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-white  mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border-2 border-[#333333] text-white  px-4 py-3 focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                    placeholder="Message subject"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-white  mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#000000] border-2 border-[#333333] text-white  px-4 py-3 focus:border-[#ffffff] focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-md text-white  mb-8">Find Us</h2>
          <div className="placeholder-image h-96 border-4 border-[#ffffff]">
            <p className="text-white ">Map Placeholder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
