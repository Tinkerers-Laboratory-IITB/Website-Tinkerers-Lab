import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Policies page with expandable policy sections
 */

export default function Policies() {
  const [expandedPolicy, setExpandedPolicy] = useState<number | null>(0);

  const policies = [
    {
      title: "Lab Usage Policy",
      content: "Our lab is a shared space designed for innovation and collaboration. All members must respect equipment and facilities, clean up after themselves, report damage immediately, follow safety protocols, avoid unauthorized modifications, respect quiet hours (10 PM - 8 AM), and document all projects.",
    },
    {
      title: "Safety & Conduct Policy",
      content: "Safety is our top priority. All members must complete safety training before using equipment, wear appropriate protective gear, report hazards immediately, maintain a respectful and inclusive environment, follow zero-tolerance for harassment, follow emergency procedures, and maintain personal hygiene.",
    },
    {
      title: "Intellectual Property Policy",
      content: "We respect intellectual property rights. Members retain ownership of their projects, the lab provides support and resources, collaborative projects have shared ownership, patents and publications require lab acknowledgment, confidential projects are protected, and disputes are resolved through mediation.",
    },
    {
      title: "Code of Conduct",
      content: "Our community values respect and inclusivity, honesty and integrity, collaboration and support, continuous learning, accountability, diversity and belonging, and environmental responsibility. Violations may result in membership suspension or termination.",
    },
    {
      title: "Membership Policy",
      content: "Membership is open to all students and makers. Annual membership fee is required (waivable for financial hardship). Benefits include access to facilities and equipment, participation in events and workshops, mentorship opportunities, project funding eligibility, alumni network access, and annual renewal.",
    },
    {
      title: "Data Privacy Policy",
      content: "We protect your privacy through secure data collection with consent, data used only for stated purposes, no third-party sharing without consent, secure storage and encryption, right to access and delete data, GDPR and local law compliance, regular security audits, and transparent data practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Policies
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Guidelines and policies that govern Tinkerers' Lab operations and member conduct.
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <div className="space-y-4">
            {policies.map((policy, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border-2 border-[#333333] hover:border-[#ffffff] transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedPolicy(expandedPolicy === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="heading-sm text-white ">{policy.title}</h3>
                  {expandedPolicy === idx ? (
                    <ChevronUp className="text-white" size={24} />
                  ) : (
                    <ChevronDown className="text-white" size={24} />
                  )}
                </button>

                {expandedPolicy === idx && (
                  <div className="border-t border-[#333333] px-6 py-4 bg-[#000000]">
                    <p className="text-white  leading-relaxed">
                      {policy.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container py-8">
          <p className="text-sm text-white  text-center">
            Last Updated: February 2024 | Version 1.0
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container py-16 text-center">
          <h2 className="heading-md text-white  mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-white  mb-8">
            Contact our team for clarifications or concerns.
          </p>
          <a
            href="mailto:policies@tinkerslab.com"
            className="inline-block px-8 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
