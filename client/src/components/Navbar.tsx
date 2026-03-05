import { useState } from "react";
import { Link } from "wouter";
import { Search, Menu, X } from "lucide-react";

/**
 * Design System: NASA/SpaceX Aesthetic with Red Accent
 * Bold typography, black/white contrast, red (#d12e56) accent color
 * Navbar with NLM search bar and smooth animations
 */

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "ABOUT", href: "/about" },
    { label: "TEAM", href: "/team" },
    { label: "PROJECTS", href: "/projects" },
    { label: "EVENTS", href: "/events" },
    { label: "GALLERY", href: "/gallery" },
    { label: "IMPACT", href: "/impact" },
    { label: "CONTRIBUTE", href: "/contribute" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // NLM search functionality would go here
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#d12e56]/30 animate-fade-in">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-3xl md:text-4xl font-black tracking-tighter hover:text-[#d12e56] transition-smooth">
            TL
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link key={link.href} href={link.href}>
              <a 
                className="text-sm font-bold tracking-wide hover:text-[#d12e56] transition-smooth"
                style={{
                  animation: `slideDown 0.6s ease-out ${0.1 * (idx + 1)}s both`
                }}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Search & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:bg-[#d12e56]/20 transition-smooth hover-scale"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#d12e56]/20 transition-smooth hover-scale"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-[#d12e56]/30 bg-black/95 backdrop-blur-sm animate-slide-down">
          <div className="container py-4">
            <form onSubmit={handleSearch} className="flex gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, events, people..."
                className="flex-1 bg-white/5 border border-[#d12e56]/30 text-white placeholder-white/40 px-4 py-2 text-sm focus:outline-none focus:border-[#d12e56] transition-smooth focus:bg-white/10"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#d12e56] text-white font-bold text-sm hover:bg-[#e85a7a] transition-smooth hover-scale"
              >
                SEARCH
              </button>
            </form>
            <p className="text-xs text-white/40 mt-3 animate-fade-in">
              Natural Language Search - Try: "robotics projects", "upcoming events", "team members"
            </p>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#d12e56]/30 bg-black/95 backdrop-blur-sm animate-slide-down">
          <div className="container py-4 space-y-4 animate-stagger">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block text-sm font-bold tracking-wide hover:text-[#d12e56] transition-smooth uppercase py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
