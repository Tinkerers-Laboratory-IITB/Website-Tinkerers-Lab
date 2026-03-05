import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Team Directory page with professional member cards
 */

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export default function TeamDirectory() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & Director",
      department: "Leadership",
      bio: "Visionary leader with 10+ years in innovation and entrepreneurship.",
      image: "https://via.placeholder.com/300x300?text=Alex+Johnson",
      social: {
        email: "alex@tinkerslab.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Head of Projects",
      department: "Projects",
      bio: "Expert in robotics and AI integration with proven track record.",
      image: "https://via.placeholder.com/300x300?text=Sarah+Chen",
      social: {
        email: "sarah@tinkerslab.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Community Manager",
      department: "Community",
      bio: "Passionate about building inclusive communities and fostering collaboration.",
      image: "https://via.placeholder.com/300x300?text=Marcus+Williams",
      social: {
        email: "marcus@tinkerslab.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Technical Lead",
      department: "Engineering",
      bio: "Full-stack engineer specializing in IoT and embedded systems.",
      image: "https://via.placeholder.com/300x300?text=Priya+Patel",
      social: {
        email: "priya@tinkerslab.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "James Rodriguez",
      role: "Mentor & Advisor",
      department: "Mentorship",
      bio: "Industry veteran with expertise in product development and scaling.",
      image: "https://via.placeholder.com/300x300?text=James+Rodriguez",
      social: {
        email: "james@tinkerslab.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 6,
      name: "Emma Thompson",
      role: "Design Lead",
      department: "Design",
      bio: "Creative designer focused on user experience and visual innovation.",
      image: "https://via.placeholder.com/300x300?text=Emma+Thompson",
      social: {
        email: "emma@tinkerslab.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const departments = ["all", ...Array.from(new Set(teamMembers.map((m) => m.department)))];

  const filteredMembers =
    selectedDepartment === "all"
      ? teamMembers
      : teamMembers.filter((m) => m.department === selectedDepartment) || teamMembers;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-[#d12e56]/30">
        <div className="container">
          <div className="space-y-6 max-w-3xl">
            <h1 className="heading-display animate-slide-up">
              MEET THE
              <br />
              <span className="text-[#d12e56]">TEAM</span>
            </h1>
            <p className="body-lg text-[#999999] max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
              The talented individuals behind Tinkerers' Lab, dedicated to fostering innovation and building the future.
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="section-spacing-sm border-b border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container">
          <div className="flex flex-wrap gap-3 animate-slide-up">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 text-sm font-bold tracking-wide uppercase transition-smooth ${
                  selectedDepartment === dept
                    ? "bg-[#d12e56] text-white"
                    : "border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56]"
                }`}
              >
                {dept === "all" ? "All Members" : dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-spacing">
        <div className="container">
          <div className="card-grid-3 animate-stagger">
            {filteredMembers.map((member, idx) => (
              <div
                key={member.id}
                className="card-professional space-y-6 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Profile Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#d12e56] to-[#a01f3f] overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-md text-white">{member.name}</h3>
                    <p className="text-[#d12e56] font-bold text-sm tracking-wide uppercase mt-1">
                      {member.role}
                    </p>
                    <p className="text-[#666666] text-xs tracking-wide uppercase font-bold mt-2">
                      {member.department}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-[#999999] text-sm leading-relaxed">{member.bio}</p>

                  {/* Divider */}
                  <div className="border-t border-[#333333]" />

                  {/* Social Links */}
                  <div className="flex gap-3 pt-2">
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
