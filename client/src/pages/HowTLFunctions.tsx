import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, Zap, Users, DollarSign, Link2 } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * How TL Functions page with governance, lab access, and operating workflow
 */

export default function HowTLFunctions() {
  const sections = [
    {
      icon: Lock,
      title: "Governance",
      desc: "Our governance structure ensures transparent decision-making and community involvement.",
      details: [
        "Democratic decision-making process",
        "Monthly community meetings",
        "Transparent budget allocation",
        "Mentorship from senior members",
      ],
    },
    {
      icon: Zap,
      title: "Lab Access Model",
      desc: "We provide flexible access to our state-of-the-art facilities and equipment.",
      details: [
        "24/7 access for active members",
        "Scheduled workshops and training",
        "Equipment booking system",
        "Safety-first protocols",
      ],
    },
    {
      icon: Users,
      title: "Operating Workflow",
      desc: "Our streamlined workflow ensures smooth project execution and collaboration.",
      details: [
        "Project ideation and planning",
        "Team formation and assignment",
        "Regular progress tracking",
        "Showcase and celebration",
      ],
    },
    {
      icon: DollarSign,
      title: "Funding & Partnerships",
      desc: "We secure resources through diverse funding channels and strategic partnerships.",
      details: [
        "Corporate sponsorships",
        "University grants",
        "Alumni contributions",
        "Industry partnerships",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            How Tinkerers' Lab Functions
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Understanding our governance, operations, and the systems that keep our community thriving.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <div className="space-y-12">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Icon size={40} className="text-white" />
                    <div>
                      <h2 className="heading-md text-white ">{section.title}</h2>
                      <p className="text-white  mt-1">{section.desc}</p>
                    </div>
                  </div>

                  <div className="bg-[#0a0a0a] border-2 border-[#333333] p-8 space-y-4">
                    <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 gap-4">
                      {section.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-[#ffffff] mt-2"></div>
                          <p className="text-white ">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Flow Explanation */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Project Lifecycle</h2>
          <div className="space-y-4">
            {[
              { phase: "Ideation", desc: "Members propose innovative project ideas" },
              { phase: "Planning", desc: "Teams define scope, timeline, and resources" },
              { phase: "Execution", desc: "Active development with mentorship and support" },
              { phase: "Testing", desc: "Quality assurance and refinement" },
              { phase: "Showcase", desc: "Public presentation and celebration" },
              { phase: "Legacy", desc: "Documentation and knowledge transfer" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffffff] text-[#000000] font-bold  flex items-center justify-center">
                  {idx + 1}
                </div>
                <div className="flex-1 bg-[#000000] border-2 border-[#333333] p-4">
                  <h3 className="font-bold text-white ">{item.phase}</h3>
                  <p className="text-sm text-white ">{item.desc}</p>
                </div>
                {idx < 5 && (
                  <div className="text-white font-bold text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Resources & Support</h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Equipment & Tools",
                items: ["3D Printers", "Soldering Stations", "CNC Machines", "Electronics Lab"],
              },
              {
                title: "Mentorship",
                items: ["Industry Experts", "Project Leads", "Peer Mentors", "Career Guidance"],
              },
              {
                title: "Learning Resources",
                items: ["Workshops", "Online Courses", "Documentation", "Community Forum"],
              },
              {
                title: "Funding & Grants",
                items: ["Project Grants", "Travel Funding", "Equipment Budget", "Event Support"],
              },
            ].map((resource, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200 space-y-4"
              >
                <h3 className="heading-sm text-white ">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white ">
                      <Link2 size={14} className="text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
