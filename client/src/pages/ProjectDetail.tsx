import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/types/project";
import { Github, Linkedin, Mail, ExternalLink, Calendar, Users, Tag } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Individual project detail page with full information
 */

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container section-spacing text-center">
          <h1 className="heading-xl mb-4">Project Not Found</h1>
          <p className="text-[#999999] mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth">
              Back to Projects
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[#d12e56]/30">
        <div className="container">
          <Link href="/projects">
            <a className="text-[#999999] hover:text-[#d12e56] transition-smooth text-sm font-bold tracking-wide uppercase mb-8 inline-block">
              ← Back to Projects
            </a>
          </Link>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-[#d12e56] text-white text-xs font-bold tracking-wide uppercase">
                {project.category}
              </span>
              <span
                className={`px-4 py-2 text-xs font-bold tracking-wide uppercase ${
                  project.status === "active"
                    ? "bg-[#00ff41]/20 text-[#00ff41]"
                    : project.status === "completed"
                    ? "bg-[#0099ff]/20 text-[#0099ff]"
                    : "bg-[#999999]/20 text-[#999999]"
                }`}
              >
                {project.status.toUpperCase()}
              </span>
            </div>
            <h1 className="heading-display">{project.title}</h1>
            <p className="text-xl text-[#999999] max-w-3xl">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-[#999999]">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[#d12e56]" />
                <span>{project.startDate} {project.endDate && `- ${project.endDate}`}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-[#d12e56]" />
                <span>{project.teamSize} Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container py-12">
          <div className="w-full h-96 bg-[#1a1a1a] border border-[#333333] flex items-center justify-center">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-spacing border-b border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-lg mb-4 heading-with-underline">OVERVIEW</h2>
                <p className="text-[#999999] leading-relaxed text-lg">{project.overview}</p>
              </div>

              <div>
                <h3 className="heading-md mb-3 text-[#d12e56]">THE CHALLENGE</h3>
                <p className="text-[#999999] leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className="heading-md mb-3 text-[#d12e56]">OUR SOLUTION</h3>
                <p className="text-[#999999] leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h3 className="heading-md mb-3 text-[#d12e56]">IMPACT & OUTCOMES</h3>
                <p className="text-[#999999] leading-relaxed">{project.impact}</p>
              </div>
            </div>

            {/* Quick Links Sidebar */}
            <div className="space-y-6">
              <div className="card-professional space-y-4">
                <h3 className="heading-md">QUICK LINKS</h3>
                <div className="space-y-3">
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth"
                    >
                      <Github size={18} />
                      <span className="text-sm font-bold">GitHub Repo</span>
                      <ExternalLink size={14} className="ml-auto" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-bold">Live Demo</span>
                      <ExternalLink size={14} className="ml-auto" />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-bold">Website</span>
                      <ExternalLink size={14} className="ml-auto" />
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="card-professional space-y-4">
                <h3 className="heading-md">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#d12e56]/20 text-[#d12e56] text-xs font-bold tracking-wide uppercase border border-[#d12e56]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Metrics */}
      <section className="section-spacing border-b border-[#d12e56]/30">
        <div className="container">
          <h2 className="heading-lg mb-12 heading-with-underline">KEY METRICS & OUTCOMES</h2>
          <div className="card-grid-2 lg:card-grid-4">
            {project.outcomes.map((outcome, idx) => (
              <div key={idx} className="card-professional space-y-3">
                <div className="heading-xl text-[#d12e56]">{outcome.value}</div>
                <h3 className="heading-sm">{outcome.metric}</h3>
                <p className="text-[#999999] text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing border-b border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container">
          <h2 className="heading-lg mb-12 heading-with-underline">PROJECT TIMELINE</h2>
          <div className="space-y-4 max-w-3xl">
            {project.timeline.map((item, idx) => (
              <div
                key={item.id}
                className="border-l-2 border-[#d12e56] pl-6 py-4 animate-slide-up"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-bold tracking-wide uppercase text-[#d12e56]">
                    {item.date}
                  </span>
                  <span
                    className={`text-xs font-bold tracking-wide uppercase px-2 py-1 ${
                      item.status === "completed"
                        ? "bg-[#00ff41]/20 text-[#00ff41]"
                        : item.status === "in-progress"
                        ? "bg-[#d12e56]/20 text-[#d12e56]"
                        : "bg-[#666666]/20 text-[#999999]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="heading-sm mb-2">{item.milestone}</h3>
                <p className="text-[#999999]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-spacing border-b border-[#d12e56]/30">
        <div className="container">
          <h2 className="heading-lg mb-12 heading-with-underline">TEAM MEMBERS</h2>
          <div className="card-grid-2 lg:card-grid-4">
            {project.teamMembers.map((member, idx) => (
              <div
                key={member.id}
                className="card-professional space-y-4 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Member Image */}
                <div className="h-48 bg-gradient-to-br from-[#d12e56] to-[#a01f3f] flex items-center justify-center overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="heading-sm">{member.name}</h3>
                    <p className="text-[#d12e56] text-xs font-bold tracking-wide uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-[#999999] text-sm leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="border-t border-[#333333] pt-3 flex gap-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#1a1a1a] border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth hover-scale"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Gallery */}
      <section className="section-spacing border-b border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container">
          <h2 className="heading-lg mb-12 heading-with-underline">DOCUMENTATION & GALLERY</h2>
          <div className="card-grid-2 lg:card-grid-3">
            {project.documentation.map((doc, idx) => (
              <a
                key={doc.id}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-professional space-y-4 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Thumbnail */}
                <div className="h-40 bg-[#1a1a1a] border border-[#333333] overflow-hidden group-hover:border-[#d12e56] transition-colors">
                  {doc.thumbnail ? (
                    <img
                      src={doc.thumbnail}
                      alt={doc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#666666]">
                      {doc.type.toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wide uppercase px-2 py-1 bg-[#d12e56]/20 text-[#d12e56]">
                      {doc.type}
                    </span>
                  </div>
                  <h3 className="heading-sm group-hover:text-[#d12e56] transition-colors">{doc.title}</h3>
                  <p className="text-[#999999] text-sm">{doc.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="section-spacing border-b border-[#d12e56]/30">
        <div className="container">
          <h3 className="heading-md mb-6">PROJECT TAGS</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#d12e56]/30 text-[#999999] text-sm font-bold tracking-wide uppercase hover:border-[#d12e56] hover:text-[#d12e56] transition-smooth"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="section-spacing">
        <div className="container text-center space-y-8">
          <h2 className="heading-lg">INTERESTED IN THIS PROJECT?</h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            Want to contribute or learn more? Check out the GitHub repository or get in touch with the team.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle"
              >
                <Github size={20} />
                VIEW ON GITHUB
              </a>
            )}
            <Link href="/contribute">
              <a className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#d12e56] text-[#d12e56] font-bold tracking-wide hover:bg-[#d12e56] hover:text-white transition-smooth hover-lift uppercase text-sm">
                JOIN THE TEAM
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
