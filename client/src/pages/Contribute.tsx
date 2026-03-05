import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Lightbulb, Code } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Contribute page with roles, requirements, and workflow
 */

export default function Contribute() {
  const roles = [
    {
      icon: Code,
      title: "Developer",
      desc: "Build software and applications",
      skills: ["Programming", "Problem Solving", "Collaboration"],
      requirements: "Basic programming knowledge",
    },
    {
      icon: Lightbulb,
      title: "Designer",
      desc: "Create user experiences and interfaces",
      skills: ["UI/UX Design", "Prototyping", "Creative Thinking"],
      requirements: "Design portfolio or experience",
    },
    {
      icon: Users,
      title: "Project Manager",
      desc: "Lead and coordinate projects",
      skills: ["Leadership", "Organization", "Communication"],
      requirements: "Project management experience",
    },
    {
      icon: CheckCircle,
      title: "Maker/Tinkerer",
      desc: "Build hardware and prototypes",
      skills: ["Hands-on Skills", "Experimentation", "Problem Solving"],
      requirements: "Passion for making",
    },
  ];

  const workflow = [
    {
      step: 1,
      title: "Express Interest",
      desc: "Fill out the interest form and tell us about your skills and interests.",
    },
    {
      step: 2,
      title: "Meet the Team",
      desc: "Attend an orientation session and meet current members and mentors.",
    },
    {
      step: 3,
      title: "Choose a Project",
      desc: "Browse ongoing projects and select one that interests you.",
    },
    {
      step: 4,
      title: "Get Onboarded",
      desc: "Receive mentorship and resources to get started on your project.",
    },
    {
      step: 5,
      title: "Collaborate & Create",
      desc: "Work with your team, attend workshops, and build amazing things.",
    },
    {
      step: 6,
      title: "Showcase & Celebrate",
      desc: "Present your project and celebrate your achievements with the community.",
    },
  ];

  const convenors = [
    { name: "Alex Johnson", role: "Co-Convenor", email: "alex@tinkerslab.com" },
    { name: "Sarah Chen", role: "Co-Convenor", email: "sarah@tinkerslab.com" },
    { name: "Mike Patel", role: "Project Lead", email: "mike@tinkerslab.com" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            How to Contribute
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Join our community and help shape the future of innovation. We welcome makers of all skill levels.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Roles & Opportunities</h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 gap-6">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#000000] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={32} className="text-white" />
                    <h3 className="heading-md text-white ">{role.title}</h3>
                  </div>
                  <p className="text-white ">{role.desc}</p>
                  <div className="border-t border-[#333333] pt-4 space-y-3">
                    <div>
                      <p className="text-xs text-white  mb-2">Key Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#0a0a0a] border border-[#ffffff] text-white text-xs "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-white  mb-1">Requirements</p>
                      <p className="text-white  text-sm">{role.requirements}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contribution Workflow */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Contribution Workflow</h2>
          <div className="space-y-6">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 bg-[#ffffff] text-[#000000] font-bold  text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-[#0a0a0a] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200">
                  <h3 className="heading-sm text-white  mb-2">{item.title}</h3>
                  <p className="text-white ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convenors */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Meet the Convenors</h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-3 gap-6">
            {convenors.map((convenor, idx) => (
              <div
                key={idx}
                className="bg-[#000000] border-2 border-[#333333] overflow-hidden hover:border-[#ffffff] transition-all duration-200"
              >
                <div className="placeholder-image h-48 border-b border-[#d12e56]/30">
                  <p className="text-white  text-sm">Photo</p>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-white ">{convenor.name}</h3>
                  <p className="text-sm text-white ">{convenor.role}</p>
                  <a
                    href={`mailto:${convenor.email}`}
                    className="text-sm text-white hover:text-white  transition-colors duration-200"
                  >
                    {convenor.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container py-16 text-center">
          <h2 className="heading-md text-white  mb-6">Ready to Get Started?</h2>
          <button className="px-8 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]">
            Express Your Interest
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
