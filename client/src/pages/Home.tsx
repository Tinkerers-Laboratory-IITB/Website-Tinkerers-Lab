import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { ArrowRight, Zap, Users, Rocket } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic with Professional Polish
 * Bold typography, black/white contrast, red (#d12e56) accent
 * Professional spacing, card styles, and visual hierarchy
 */

export default function Home() {
  const carouselItems = [
    {
      id: 1,
      title: "AI-Powered Robotics Platform",
      description: "Building autonomous robots with machine learning capabilities. A groundbreaking project that combines hardware and software innovation.",
      image: "https://via.placeholder.com/1200x600?text=AI+Robotics",
      category: "Featured Project",
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions",
      description: "Developing efficient solar panel prototypes and renewable energy systems. Making clean energy accessible to everyone.",
      image: "https://via.placeholder.com/1200x600?text=Solar+Energy",
      category: "Featured Project",
    },
    {
      id: 3,
      title: "Smart Home IoT System",
      description: "Creating an integrated IoT platform for home automation. Connecting devices and making homes smarter.",
      image: "https://via.placeholder.com/1200x600?text=Smart+Home",
      category: "Featured Project",
    },
    {
      id: 4,
      title: "Biomedical Wearable Sensors",
      description: "Innovative health monitoring devices that track vital signs in real-time. Revolutionizing personal health management.",
      image: "https://via.placeholder.com/1200x600?text=Biomedical",
      category: "Featured Project",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-[#d12e56]/30">
        <div className="container">
          <div className="space-y-8 max-w-4xl">
            <h1 className="heading-display animate-slide-up">
              WHERE INNOVATION
              <br />
              <span className="text-[#d12e56]">MEETS CREATION</span>
            </h1>
            <p className="body-lg text-[#999999] max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Tinkerers' Lab is a community-driven innovation hub where makers, engineers, and creators collaborate to build the future. We provide resources, mentorship, and a vibrant ecosystem for groundbreaking projects.
            </p>
            <div className="flex flex-col md:flex-row gap-4 pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Link href="/contribute">
                <a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle">
                  GET INVOLVED <ArrowRight size={20} />
                </a>
              </Link>
              <Link href="/projects">
                <a className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#d12e56] text-[#d12e56] font-bold tracking-wide hover:bg-[#d12e56] hover:text-white transition-smooth hover-lift uppercase text-sm">
                  EXPLORE PROJECTS <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="border-b border-[#d12e56]/30">
        <Carousel items={carouselItems} autoPlay={true} autoPlayInterval={6000} />
      </section>

      {/* Stats Section */}
      <section className="section-spacing border-b border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-stagger">
            {[
              { number: "500+", label: "Active Members" },
              { number: "150+", label: "Projects Completed" },
              { number: "25+", label: "Startups Launched" },
              { number: "80+", label: "Awards Won" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 animate-slide-up border-l-2 border-[#d12e56] pl-6 shadow-subtle" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="heading-xl text-[#d12e56]">{stat.number}</div>
                <p className="text-[#666666] tracking-wide uppercase text-sm font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing border-b border-[#d12e56]/30">
        <div className="container">
          <h2 className="heading-xl mb-16 animate-slide-up heading-with-underline">WHY JOIN TL</h2>
          <div className="card-grid-3 animate-stagger">
            {[
              {
                icon: Rocket,
                title: "CUTTING-EDGE RESOURCES",
                desc: "Access state-of-the-art equipment, tools, and technology to bring your ideas to life.",
              },
              {
                icon: Users,
                title: "VIBRANT COMMUNITY",
                desc: "Connect with passionate makers, engineers, and innovators from diverse backgrounds.",
              },
              {
                icon: Zap,
                title: "MENTORSHIP & SUPPORT",
                desc: "Get guidance from industry experts and experienced project leads throughout your journey.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="card-professional space-y-4 animate-slide-up"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <Icon size={40} className="text-[#d12e56]" />
                  <h3 className="heading-md">{feature.title}</h3>
                  <p className="text-[#999999] leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing border-b border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container">
          <div className="flex justify-between items-end mb-16 animate-slide-up">
            <h2 className="heading-xl heading-with-underline">FEATURED PROJECTS</h2>
            <Link href="/projects">
              <a className="text-[#999999] hover:text-[#d12e56] transition-smooth font-bold tracking-wide uppercase text-sm">
                View All →
              </a>
            </Link>
          </div>
          <div className="card-grid-3 animate-stagger">
            {[
              { title: "AI Robotics Platform", status: "ACTIVE" },
              { title: "Sustainable Energy Grid", status: "ACTIVE" },
              { title: "Quantum Computing Lab", status: "COMPLETED" },
            ].map((project, idx) => (
              <div
                key={idx}
                className="card-professional space-y-4 animate-slide-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="placeholder-image h-48 mb-4 hover-scale transition-smooth bg-[#1a1a1a] border border-[#333333]">
                  <p className="text-[#666666]">Project Image</p>
                </div>
                <h3 className="heading-md">{project.title}</h3>
                <div className="flex justify-between items-center pt-4 border-t border-[#333333]">
                  <p className="text-[#666666] text-sm">Status</p>
                  <span
                    className={`text-xs font-bold tracking-wide uppercase px-3 py-1 transition-smooth ${
                      project.status === "ACTIVE"
                        ? "bg-[#d12e56] text-white hover:bg-[#e85a7a]"
                        : "bg-[#333333] text-[#999999] hover:bg-[#444444]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container text-center space-y-8">
          <h2 className="heading-xl animate-slide-up">READY TO INNOVATE?</h2>
          <p className="body-lg text-[#999999] max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Join our community and be part of something extraordinary. Whether you're a maker, engineer, or dreamer, there's a place for you at Tinkerers' Lab.
          </p>
          <Link href="/contribute">
            <a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle animate-slide-up" style={{ animationDelay: "0.4s" }}>
              START YOUR JOURNEY <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
