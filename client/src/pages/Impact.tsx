import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Impact page with metrics dashboard showing projects, members, startups, awards, etc.
 */

export default function Impact() {
  const metrics = [
    { icon: Zap, label: "Projects Completed", value: "150+", color: "text-white" },
    { icon: Users, label: "Active Members", value: "500+", color: "text-white" },
    { icon: Award, label: "Startups Launched", value: "25+", color: "text-white" },
    { icon: TrendingUp, label: "Awards Won", value: "80+", color: "text-white" },
  ];

  const impactAreas = [
    {
      title: "Education & Skill Development",
      desc: "We've trained over 500 students in cutting-edge technologies and hands-on project management.",
      stats: ["500+ Students Trained", "100+ Workshops Conducted", "50+ Mentors Involved"],
    },
    {
      title: "Innovation & Entrepreneurship",
      desc: "Our members have launched 25+ startups that are creating real-world impact.",
      stats: ["25+ Startups", "$10M+ Funding Raised", "100+ Jobs Created"],
    },
    {
      title: "Community & Collaboration",
      desc: "We've fostered a vibrant community where makers, engineers, and designers collaborate.",
      stats: ["50+ Events Hosted", "200+ Industry Partnerships", "10+ University Collaborations"],
    },
    {
      title: "Social Impact",
      desc: "Our projects have addressed real-world challenges in healthcare, sustainability, and more.",
      stats: ["15+ Social Impact Projects", "5+ Patents Filed", "3+ Awards for Social Good"],
    },
  ];

  const timeline = [
    { year: "2015", event: "Tinkerers' Lab Founded", desc: "Started with a small workshop and 20 members" },
    { year: "2017", event: "First Startup Launch", desc: "First member startup receives funding" },
    { year: "2019", event: "Expanded Facilities", desc: "Moved to larger space with advanced equipment" },
    { year: "2021", event: "500 Members Milestone", desc: "Community grows to 500+ active members" },
    { year: "2023", event: "25th Startup", desc: "Celebrated 25 startups launched by members" },
    { year: "2024", event: "Global Recognition", desc: "Featured in international innovation reports" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Measuring the real-world impact of our community's innovation and collaboration.
          </p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#000000] border-2 border-[#333333] p-8 hover:border-[#ffffff] transition-all duration-200 text-center space-y-4"
                >
                  <Icon className={`${metric.color} mx-auto`} size={40} />
                  <div>
                    <div className={`heading-lg  ${metric.color}`}>
                      {metric.value}
                    </div>
                    <p className="text-sm text-white  mt-2">{metric.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Areas of Impact</h2>
          <div className="space-y-8">
            {impactAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border-2 border-[#333333] p-8 hover:border-[#ffffff] transition-all duration-200 space-y-4"
              >
                <h3 className="heading-md text-white ">{area.title}</h3>
                <p className="text-white ">{area.desc}</p>
                <div className="grid grid-cols animate-stagger-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#333333]">
                  {area.stats.map((stat, i) => (
                    <div key={i} className="bg-[#000000] p-4 border border-[#ffffff]">
                      <p className="text-white font-bold  text-lg">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-12 border-l-4 border-[#ffffff] hover:border-[#ffffff] transition-colors duration-200"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#ffffff] border-2 border-[#000000]"></div>
                <div className="bg-[#000000] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="heading-md text-white ">{item.year}</span>
                    <h3 className="heading-sm text-white ">{item.event}</h3>
                  </div>
                  <p className="text-white ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container py-16 text-center">
          <h2 className="heading-md text-white  mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-white  mb-8 max-w-2xl mx-auto">
            Join us and help create even greater impact. Every member contributes to our collective success.
          </p>
          <button className="px-8 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]">
            Get Involved
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
