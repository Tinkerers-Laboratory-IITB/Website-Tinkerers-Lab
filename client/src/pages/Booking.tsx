import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, Clock } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Booking page with resource selection and availability calendar
 */

export default function Booking() {
  const [selectedResource, setSelectedResource] = useState("event-space");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    purpose: "",
    date: "",
    time: "",
    headcount: "",
  });

  const resources = [
    {
      id: "event-space",
      name: "Event Space",
      capacity: "100+",
      desc: "Large multipurpose space for conferences, workshops, and events",
      amenities: ["Projector", "Sound System", "WiFi", "Catering Available"],
    },
    {
      id: "presentation-room",
      name: "Presentation Room",
      capacity: "30",
      desc: "Intimate space for presentations, meetings, and seminars",
      amenities: ["Whiteboard", "Projector", "WiFi", "Video Conferencing"],
    },
    {
      id: "meeting-room",
      name: "Meeting Room",
      capacity: "12",
      desc: "Private meeting space for team discussions and planning",
      amenities: ["Table", "Chairs", "WiFi", "Whiteboard"],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Thank you for your booking request! We'll confirm within 24 hours.");
    setFormData({
      name: "",
      email: "",
      organization: "",
      purpose: "",
      date: "",
      time: "",
      headcount: "",
    });
  };

  const selectedResourceData = resources.find((r) => r.id === selectedResource);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container py-20">
          <h1 className="heading-xl text-white  mb-6">
            Book TL Spaces
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Reserve our state-of-the-art facilities for your events, meetings, and workshops.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container py-16">
          <div className="grid grid-cols animate-stagger-1 lg:grid-cols-3 gap-12">
            {/* Resource Selection */}
            <div className="space-y-6">
              <h2 className="heading-md text-white ">Select a Space</h2>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <button
                    key={resource.id}
                    onClick={() => setSelectedResource(resource.id)}
                    className={`w-full text-left p-4 border-2 transition-all duration-200 ${
                      selectedResource === resource.id
                        ? "bg-[#ffffff] text-[#000000] border-[#ffffff]"
                        : "bg-[#0a0a0a] border-[#333333] text-white hover:border-[#ffffff]"
                    }`}
                  >
                    <h3 className="font-bold ">{resource.name}</h3>
                    <p className="text-sm  mt-1">Capacity: {resource.capacity}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Resource Details */}
            <div className="space-y-6">
              <h2 className="heading-md text-white ">Space Details</h2>
              {selectedResourceData && (
                <div className="bg-[#0a0a0a] border-2 border-[#333333] p-6 space-y-4">
                  <div>
                    <h3 className="heading-md text-white  mb-2">
                      {selectedResourceData.name}
                    </h3>
                    <p className="text-white ">{selectedResourceData.desc}</p>
                  </div>

                  <div className="border-t border-[#333333] pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={20} className="text-white" />
                      <span className="font-bold text-white ">
                        Capacity: {selectedResourceData.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#333333] pt-4">
                    <h4 className="font-bold text-white  mb-3">Amenities</h4>
                    <div className="space-y-2">
                      {selectedResourceData.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white  text-sm">
                          <div className="w-2 h-2 bg-[#ffffff]"></div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#000000] border border-[#ffffff] p-4 mt-4">
                    <p className="text-sm text-white ">
                      <strong>Availability:</strong> Check calendar for real-time availability
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Booking Form */}
            <div className="space-y-6">
              <h2 className="heading-md text-white ">Booking Form</h2>
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border-2 border-[#333333] p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Purpose
                  </label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200 resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white  mb-2">
                    Headcount
                  </label>
                  <input
                    type="number"
                    name="headcount"
                    value={formData.headcount}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#000000] border border-[#333333] text-white  px-3 py-2 text-sm focus:border-[#ffffff] focus:outline-none transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#ffffff] text-[#000000] font-bold  text-sm hover:bg-[#ffffff] transition-all duration-200 border border-[#ffffff] hover:border-[#ffffff]"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container py-16">
          <h2 className="heading-md text-white  mb-8">Booking Information</h2>
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-3 gap-6">
            <div className="bg-[#000000] border-2 border-[#333333] p-6 space-y-3">
              <Calendar size={32} className="text-white" />
              <h3 className="text-lg font-bold text-white ">Advance Notice</h3>
              <p className="text-sm text-white ">
                Book at least 7 days in advance for best availability
              </p>
            </div>

            <div className="bg-[#000000] border-2 border-[#333333] p-6 space-y-3">
              <Clock size={32} className="text-white" />
              <h3 className="text-lg font-bold text-white ">Confirmation</h3>
              <p className="text-sm text-white ">
                We'll confirm your booking within 24 hours
              </p>
            </div>

            <div className="bg-[#000000] border-2 border-[#333333] p-6 space-y-3">
              <Users size={32} className="text-white" />
              <h3 className="text-lg font-bold text-white ">Support</h3>
              <p className="text-sm text-white ">
                Contact us for custom arrangements
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
