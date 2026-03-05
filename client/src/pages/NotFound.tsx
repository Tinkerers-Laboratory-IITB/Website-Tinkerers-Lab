import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Design System: NASA/SpaceX Aesthetic
 * 404 Not Found page
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d12e56]/30 min-h-[calc(100vh-120px)] flex items-center">
        <div className="container py-20 text-center space-y-8">
          <div className="text-9xl font-bold text-white ">404</div>

          <h1 className="heading-xl text-white ">
            Page Not Found
          </h1>

          <p className="text-xl text-white  max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <Link href="/">
              <a className="px-8 py-3 bg-[#ffffff] text-[#000000] font-bold  hover:bg-[#ffffff] transition-all duration-200 border-2 border-[#ffffff] hover:border-[#ffffff]">
                Back to Home
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-8 py-3 border-2 border-[#ffffff] text-white font-bold  hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-200">
                Contact Support
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
