"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setIsAtTop(y < 5);

      const sections = [
        "home",
        "services",
        "about",
        "projects",
        "testimonials",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", sectionId: "home" },
    { label: "Services", sectionId: "services" },
    { label: "About", sectionId: "about" },
    { label: "Projects", sectionId: "projects" },
    { label: "Testimonials", sectionId: "testimonials" },
    { label: "Contact", sectionId: "contact" },
  ];

  const handleNavClick = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (pathname === "/") {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on different page, navigate to home then scroll
      router.push(`/?scroll=${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          isMobileMenuOpen
            ? "glass-strong border-b border-blue-500/30 shadow-glow-blue py-2"
            : isScrolled
            ? "glass-strong border-b border-blue-500/40 shadow-glow-blue-lg py-2"
            : isAtTop
            ? "bg-transparent py-4"
            : "glass py-4"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Left Nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 mr-10">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href="/"
                onClick={(e) => handleNavClick(item.sectionId, e)}
                className={`px-2 lg:px-4 py-2 text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer relative group/nav ${
                  activeSection === item.sectionId
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.sectionId && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-glow-blue" />
                )}
                <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity -z-10" />
              </a>
            ))}
          </div>

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center space-x-2 group cursor-pointer text-center"
          >
            <img
              src="/logoasr.webp"
              alt="Asr Marketing Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <span className="font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-text text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap tracking-tight">
              Asr Marketing
            </span>
          </a>

          {/* Right Nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 ml-10">
            {navItems.slice(3).map((item) => (
              <a
                key={item.label}
                href="/"
                onClick={(e) => handleNavClick(item.sectionId, e)}
                className={`px-2 lg:px-4 py-2 text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer relative group/nav ${
                  activeSection === item.sectionId
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.sectionId && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-glow-blue" />
                )}
                <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity -z-10" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1 absolute right-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-3 animate-in slide-in-from-top duration-300 fade-in-90 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="/"
                onClick={(e) => {
                  handleNavClick(item.sectionId, e);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                  activeSection === item.sectionId
                    ? "text-blue-400 bg-blue-500/20 font-medium"
                    : "text-gray-300 hover:text-blue-300 hover:bg-blue-500/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
