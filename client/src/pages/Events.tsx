import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Events page with timeline-based layout
 */

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Hackathon 2024",
      date: "March 15-17, 2024",
      location: "Main Lab",
      attendees: "200+",
      desc: "48-hour innovation challenge with mentorship and prizes.",
      milestones: ["Opening Ceremony", "Project Submission", "Demo Day"],
    },
    {
      id: 2,
      title: "Robotics Workshop",
      date: "March 22, 2024",
      location: "Workshop Room",
      attendees: "50",
      desc: "Hands-on introduction to robotics and automation.",
      milestones: ["Introduction", "Build Session", "Testing & Demo"],
    },
    {
      id: 3,
      title: "AI & ML Seminar",
      date: "April 5, 2024",
      location: "Auditorium",
      attendees: "150",
      desc: "Industry experts discuss latest trends in AI and machine learning.",
      milestones: ["Keynote", "Panel Discussion", "Q&A"],
    },
    {
      id: 4,
      title: "Hardware Design Bootcamp",
      date: "April 20-22, 2024",
      location: "Design Lab",
      attendees: "80",
      desc: "Learn PCB design, prototyping, and hardware development.",
      milestones: ["Theory", "Hands-on Design", "Project Showcase"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Join our community events, workshops, and seminars to learn, network, and innovate together.
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <div className="space-y-12">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative pl-12 border-l-4 border-[#ffffff] hover:border-[#ffffff] transition-colors duration-200"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#ffffff] border-2 border-[#000000]"></div>

                {/* Event Card */}
                <div className="bg-[#0a0a0a] border-2 border-[#333333] p-8 hover:border-[#ffffff] transition-all duration-200 space-y-4">
                  <div>
                    <h3 className="heading-md text-white  mb-2">{event.title}</h3>
                    <p className="text-white ">{event.desc}</p>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols animate-stagger-1 md:grid-cols-3 gap-4 py-4 border-y border-[#333333]">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-white" />
                      <div>
                        <p className="text-xs text-white ">Date</p>
                        <p className="text-white  font-bold">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-white" />
                      <div>
                        <p className="text-xs text-white ">Location</p>
                        <p className="text-white  font-bold">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-white" />
                      <div>
                        <p className="text-xs text-white ">Expected Attendees</p>
                        <p className="text-white  font-bold">{event.attendees}</p>
                      </div>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <h4 className="text-sm font-bold text-white  mb-3">Milestones</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.milestones.map((milestone, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#000000] border border-[#ffffff] text-white text-xs "
                        >
                          {milestone}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button className="px-6 py-2 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Info */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container py-16 text-center">
          <h2 className="heading-md text-white  mb-6">
            More Events Coming Soon
          </h2>
          <p className="text-white  mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay updated on upcoming events, workshops, and special announcements.
          </p>
          <button className="px-8 py-3 border-2 border-[#ffffff] text-white font-bold  hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-200">
            Subscribe to Newsletter
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
