import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Building2 } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Legacy page with alumni batches, sponsors, and previous teams
 */

export default function Legacy() {
  const [selectedBatch, setSelectedBatch] = useState("2024");

  const batches = [
    { year: "2024", count: 45, achievements: "5 startups launched, 12 patents filed" },
    { year: "2023", count: 38, achievements: "3 startups launched, 8 awards won" },
    { year: "2022", count: 32, achievements: "2 startups launched, 6 industry partnerships" },
    { year: "2021", count: 28, achievements: "1 startup acquired, 4 major projects" },
  ];

  const sponsors = [
    { name: "Tech Corp", category: "Platinum", desc: "Equipment & Funding" },
    { name: "Innovation Fund", category: "Gold", desc: "Mentorship & Resources" },
    { name: "Startup Hub", category: "Silver", desc: "Networking & Events" },
    { name: "Design Studio", category: "Silver", desc: "Design Tools & Training" },
    { name: "Hardware Co", category: "Bronze", desc: "Equipment Donations" },
    { name: "Software Inc", category: "Bronze", desc: "Software Licenses" },
  ];

  const selectedBatchData = batches.find((b) => b.year === selectedBatch);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Our Legacy
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Celebrating the achievements, alumni, and partnerships that have shaped Tinkerers' Lab.
          </p>
        </div>
      </section>

      {/* Alumni Batches */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Alumni Batches</h2>

          {/* Batch Selector */}
          <div className="flex flex-wrap gap-3 mb-12">
            {batches.map((batch) => (
              <button
                key={batch.year}
                onClick={() => setSelectedBatch(batch.year)}
                className={`px-6 py-3  font-bold transition-all duration-200 ${
                  selectedBatch === batch.year
                    ? "bg-[#ffffff] text-[#000000] border-2 border-[#ffffff]"
                    : "bg-[#000000] border-2 border-[#333333] text-white hover:border-[#ffffff]"
                }`}
              >
                {batch.year}
              </button>
            ))}
          </div>

          {/* Selected Batch Info */}
          {selectedBatchData && (
            <div className="bg-[#000000] border-2 border-[#ffffff] p-8 space-y-4">
              <div className="flex items-center gap-4">
                <Award size={40} className="text-white" />
                <div>
                  <h3 className="heading-md text-white ">Batch {selectedBatchData.year}</h3>
                  <p className="text-white ">{selectedBatchData.count} Active Members</p>
                </div>
              </div>
              <div className="border-t border-[#333333] pt-4">
                <h4 className="text-lg font-bold text-white  mb-2">Key Achievements</h4>
                <p className="text-white ">{selectedBatchData.achievements}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sponsors & Contributors */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Sponsors & Contributors</h2>
          <div className="space-y-8">
            {["Platinum", "Gold", "Silver", "Bronze"].map((category) => {
              const categorySponsors = sponsors.filter((s) => s.category === category);
              return (
                <div key={category}>
                  <h3 className="heading-sm text-white  mb-4">{category} Partners</h3>
                  <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySponsors.map((sponsor, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0a0a0a] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200 space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <Building2 size={20} className="text-white" />
                          <h4 className="text-lg font-bold text-white ">{sponsor.name}</h4>
                        </div>
                        <p className="text-sm text-white ">{sponsor.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Previous Teams */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <h2 className="heading-lg text-white  mb-12">Notable Projects</h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mars Rover Prototype", year: "2022", status: "Completed" },
              { name: "Quantum Computing Simulator", year: "2021", status: "Completed" },
              { name: "Sustainable Energy Grid", year: "2023", status: "Completed" },
              { name: "AI Medical Diagnosis", year: "2022", status: "Completed" },
              { name: "Autonomous Vehicle", year: "2021", status: "Completed" },
              { name: "Biotech Lab System", year: "2023", status: "Completed" },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-[#000000] border-2 border-[#333333] p-6 hover:border-[#ffffff] transition-all duration-200 space-y-3"
              >
                <h3 className="text-lg font-bold text-white ">{project.name}</h3>
                <div className="flex justify-between items-center text-sm ">
                  <span className="text-white">{project.year}</span>
                  <span className="px-2 py-1 bg-[#ffffff] text-[#000000] font-bold">
                    {project.status}
                  </span>
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
