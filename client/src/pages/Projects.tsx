import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/types/project";
import { Filter, ArrowRight } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Projects page with filterable project cards linking to detail pages
 */

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Get unique categories and statuses
  const categories = ["all", ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))];
  const statuses = ["all", "active", "completed", "upcoming"];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const categoryMatch = selectedCategory === "all" || p.category === selectedCategory;
    const statusMatch = selectedStatus === "all" || p.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-display mb-6">
            OUR
            <br />
            <span className="text-[#d12e56]">PROJECTS</span>
          </h1>
          <p className="text-xl text-[#999999] max-w-3xl">
            Explore the innovative projects our community is building and bringing to life. Click on any project to see detailed information, team members, timeline, and documentation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex items-center gap-2 text-[#d12e56]">
              <Filter size={20} />
              <span className="font-bold tracking-wide uppercase text-sm">Filter</span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-bold tracking-wide uppercase transition-smooth ${
                    selectedCategory === cat
                      ? "bg-[#d12e56] text-white"
                      : "border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56]"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 text-sm font-bold tracking-wide uppercase transition-smooth ${
                    selectedStatus === status
                      ? "bg-[#d12e56] text-white"
                      : "border border-[#333333] text-[#999999] hover:border-[#d12e56] hover:text-[#d12e56]"
                  }`}
                >
                  {status === "all" ? "All Status" : status}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#666666] mt-4">
            Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#999999] text-lg">No projects found matching your filters.</p>
            </div>
          ) : (
            <div className="card-grid-2 lg:card-grid-3 animate-stagger">
              {filteredProjects.map((project, idx) => (
                <Link key={project.id} href={`/project/${project.slug}`}>
                  <a
                    className="card-professional space-y-4 group animate-slide-up overflow-hidden"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    {/* Project Image */}
                    <div className="h-48 bg-[#1a1a1a] border border-[#333333] overflow-hidden group-hover:border-[#d12e56] transition-colors">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold tracking-wide uppercase px-2 py-1 bg-[#d12e56] text-white">
                          {project.category}
                        </span>
                        <span
                          className={`text-xs font-bold tracking-wide uppercase px-2 py-1 ${
                            project.status === "active"
                              ? "bg-[#00ff41]/20 text-[#00ff41]"
                              : project.status === "completed"
                              ? "bg-[#0099ff]/20 text-[#0099ff]"
                              : "bg-[#999999]/20 text-[#999999]"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3 className="heading-md group-hover:text-[#d12e56] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-[#999999] text-sm leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Project Meta */}
                      <div className="border-t border-[#333333] pt-3 flex items-center justify-between">
                        <div className="text-xs text-[#666666] font-bold">
                          {project.teamSize} Members
                        </div>
                        <div className="text-[#d12e56] group-hover:translate-x-2 transition-transform">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing border-t border-[#d12e56]/30 bg-[#0a0a0a]">
        <div className="container text-center space-y-8">
          <h2 className="heading-lg">HAVE A PROJECT IDEA?</h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            Join our community and bring your ideas to life. We provide resources, mentorship, and a collaborative environment for innovation.
          </p>
          <Link href="/contribute">
            <a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d12e56] text-white font-bold tracking-wide hover:bg-[#e85a7a] transition-smooth hover-lift uppercase text-sm shadow-subtle">
              START YOUR PROJECT <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
