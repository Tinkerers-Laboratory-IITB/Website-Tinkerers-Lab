import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Users, Target, Heart, Zap } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * About page with history, vision, values, organizational structure, and testimonials
 */

export default function About() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "AI Researcher",
      quote: "Tinkerers' Lab gave me the resources and community I needed to turn my robotics idea into reality. The mentorship here is invaluable.",
      image: "https://via.placeholder.com/100x100?text=Rajesh",
    },
    {
      id: 2,
      name: "Sophia Martinez",
      role: "Startup Founder",
      quote: "From prototype to product launch, TL was with me every step. This is where innovation happens.",
      image: "https://via.placeholder.com/100x100?text=Sophia",
    },
    {
      id: 3,
      name: "Aditya Singh",
      role: "Mechanical Engineer",
      quote: "The collaborative environment and access to cutting-edge tools made my dreams achievable. Grateful for this community.",
      image: "https://via.placeholder.com/100x100?text=Aditya",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white mb-6">
            About Tinkerers' Lab
          </h1>
          <p className="text-xl text-[#999999] max-w-3xl">
            A community-driven innovation hub where ideas meet execution, and makers become leaders.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white mb-8">Our History</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-[#999999] leading-relaxed">
              Tinkerers' Lab was founded with a simple vision: to create a space where students could experiment, collaborate, and bring their ideas to life. What started as a small workshop has grown into a thriving ecosystem of makers, engineers, designers, and entrepreneurs.
            </p>
            <p className="text-[#999999] leading-relaxed">
              Over the years, we've evolved from a single lab into a multi-disciplinary hub, hosting hundreds of projects, mentoring countless students, and fostering startups that have gone on to make real-world impact.
            </p>
            <p className="text-[#999999] leading-relaxed">
              Today, Tinkerers' Lab stands as a testament to the power of community-driven innovation and the potential of young minds when given the right tools, mentorship, and environment.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="card-grid-2">
            {[
              {
                icon: Zap,
                title: "Innovation",
                desc: "We embrace bold ideas and encourage experimentation without fear of failure.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We believe in the power of teamwork and diverse perspectives coming together.",
              },
              {
                icon: Target,
                title: "Excellence",
                desc: "We strive for quality in everything we do, from projects to community support.",
              },
              {
                icon: Heart,
                title: "Community",
                desc: "We foster an inclusive environment where everyone feels valued and supported.",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="card-professional space-y-4">
                  <Icon size={40} className="text-[#d12e56]" />
                  <h3 className="heading-md text-white">{value.title}</h3>
                  <p className="text-[#999999] leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white mb-12">
            How We're Organized
          </h2>
          <div className="space-y-4 max-w-4xl">
            {[
              {
                role: "Director",
                desc: "Oversees all operations, strategic planning, and resource allocation.",
              },
              {
                role: "Content Manager",
                desc: "Manages public-facing content, communications, and community engagement.",
              },
              {
                role: "Project Leads",
                desc: "Guide ongoing projects and mentor team members.",
              },
              {
                role: "Convenors",
                desc: "Core team members responsible for day-to-day operations and member support.",
              },
              {
                role: "Mentors",
                desc: "Industry professionals and experienced makers who guide projects.",
              },
              {
                role: "Members",
                desc: "Students and makers actively participating in projects and events.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-[#d12e56] pl-6 py-3 hover:border-[#d12e56] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.role}</h3>
                <p className="text-[#999999]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Team Section */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white mb-12 text-center heading-with-underline">
            Meet the Team
          </h2>
          <div className="card-grid-3 animate-stagger">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="card-professional space-y-4 overflow-hidden"
              >
                <div className="placeholder-image h-48 border-b border-[#d12e56]/30">
                  <p className="text-[#666666] text-sm">Team Member Photo</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">Team Member {idx}</h3>
                  <p className="text-sm text-[#d12e56] font-bold">Role & Expertise</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/team">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle">
                View Full Team Directory →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm text-center">
          <h2 className="heading-md text-white mb-6">
            Want to Join Our Community?
          </h2>
          <Link href="/contribute">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle">
              Learn How to Contribute
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
