import { Link } from "wouter";

/**
 * Design System: NASA/SpaceX Aesthetic with Red Accent
 * Bold typography, black/white contrast, red accent, grey shades
 */

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#d12e56]/30 animate-fade-in">
      <div className="container py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 animate-stagger">
          {/* Brand */}
          <div className="space-y-4 animate-slide-up">
            <h3 className="text-2xl font-black tracking-tighter hover:text-[#d12e56] transition-smooth">TL</h3>
            <p className="text-sm text-[#999999] leading-relaxed">
              Tinkerers' Lab - Where innovation meets collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-sm font-bold tracking-wide uppercase text-[#d12e56]">EXPLORE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/impact">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Impact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-sm font-bold tracking-wide uppercase text-[#d12e56]">RESOURCES</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contribute">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Contribute</a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Book Space</a>
                </Link>
              </li>
              <li>
                <Link href="/newsletter">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Newsletter</a>
                </Link>
              </li>
              <li>
                <Link href="/policies">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Policies</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-sm font-bold tracking-wide uppercase text-[#d12e56]">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@tinkerslab.com" className="text-[#999999] hover:text-white transition-smooth hover-scale">
                  hello@tinkerslab.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-[#999999] hover:text-white transition-smooth hover-scale">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-[#999999] hover:text-white transition-smooth hover-scale">Get in Touch</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d12e56]/20 py-8 animate-fade-in">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#666666]">
            <p>&copy; 2024 Tinkerers' Lab. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#d12e56] transition-smooth hover-scale">
                Twitter
              </a>
              <a href="#" className="hover:text-[#d12e56] transition-smooth hover-scale">
                Instagram
              </a>
              <a href="#" className="hover:text-[#d12e56] transition-smooth hover-scale">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
