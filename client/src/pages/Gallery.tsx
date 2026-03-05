import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Gallery page with categorized images and lightbox preview
 */

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["All", "Projects", "Events", "Team", "Workspace"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryItems = [
    { id: 1, category: "Projects", title: "Robotics Project", desc: "AI-powered robot prototype" },
    { id: 2, category: "Events", title: "Hackathon 2024", desc: "Opening ceremony" },
    { id: 3, category: "Team", title: "Team Photo", desc: "Core team members" },
    { id: 4, category: "Workspace", title: "Main Lab", desc: "State-of-the-art equipment" },
    { id: 5, category: "Projects", title: "Solar Panel", desc: "Prototype testing" },
    { id: 6, category: "Events", title: "Workshop", desc: "Hands-on training session" },
    { id: 7, category: "Team", title: "Mentors", desc: "Industry professionals" },
    { id: 8, category: "Workspace", title: "Design Lab", desc: "PCB design station" },
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing">
          <h1 className="heading-xl text-white  mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white  max-w-3xl">
            Explore moments from our projects, events, and community.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#0a0a0a] border-b border-[#d12e56]/30">
        <div className="container py-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2  text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#ffffff] text-[#000000] border-2 border-[#ffffff]"
                    : "bg-[#000000] border-2 border-[#333333] text-white hover:border-[#ffffff]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="border-b border-[#d12e56]/30">
        <div className="container section-spacing-sm">
          <div className="grid grid-cols animate-stagger-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id.toString())}
                className="cursor-pointer group overflow-hidden border-2 border-[#333333] hover:border-[#ffffff] transition-all duration-200"
              >
                <div className="placeholder-image h-48 group-hover:bg-gradient-to-br group-hover:from-[#ffffff] group-hover:to-[#ffffff] transition-all duration-200">
                  <p className="text-white  text-sm group-hover:text-[#000000]">
                    {item.title}
                  </p>
                </div>
                <div className="bg-[#0a0a0a] p-4 space-y-2">
                  <h3 className="text-lg font-bold text-white ">{item.title}</h3>
                  <p className="text-sm text-white ">{item.desc}</p>
                  <p className="text-xs text-white ">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#000000] bg-opacity-95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-white transition-colors duration-200"
            >
              <X size={32} />
            </button>
            <div className="placeholder-image h-96 border-4 border-[#ffffff]">
              <p className="text-white ">Full Image Preview</p>
            </div>
            <div className="bg-[#0a0a0a] border-2 border-[#ffffff] p-6 mt-4">
              <h3 className="heading-md text-white  mb-2">
                {galleryItems.find((item) => item.id.toString() === selectedImage)?.title}
              </h3>
              <p className="text-white ">
                {galleryItems.find((item) => item.id.toString() === selectedImage)?.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
