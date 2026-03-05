import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic
 * Coming Soon page for placeholder sections (Inventory, Machine Status)
 */

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30 min-h-[calc(100vh-120px)] flex items-center">
        <div className="container py-20 text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Zap size={80} className="text-white animate-pulse" />
          </div>

          <h1 className="heading-xl text-white ">
            Coming Soon
          </h1>

          <p className="text-xl text-white  max-w-2xl mx-auto">
            We're working on something exciting! This section is currently under development and will be available soon.
          </p>

          <div className="space-y-4">
            <p className="text-lg text-white ">
              In the meantime, explore other sections of our site or get in touch with us.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <Link href="/">
                <a className="px-8 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]">
                  Back to Home
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-8 py-3 border-2 border-[#ffffff] text-white font-bold  hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-200">
                  Get in Touch
                </a>
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-[#333333]">
            <p className="text-sm text-white ">
              Stay tuned for updates. Follow us on social media for announcements!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
