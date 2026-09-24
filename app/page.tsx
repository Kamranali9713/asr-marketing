"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CEOSection } from "@/components/sections/CeoSection";
import {PlansSection} from "@/components/sections/PlansSection";
import { VideoCarouselSection } from "@/components/sections/VideoCarouselSection";
import { handleScrollOnLoad } from "@/lib/utils/navigation";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Handle scroll to section on page load
    handleScrollOnLoad();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] overflow-x-hidden">
      {/* Enhanced scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 z-50 transition-all duration-300 shadow-glow-blue"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <VideoCarouselSection />
        <ServicesSection />
        <AboutSection />
        <CEOSection />
        <ProjectsSection />
        <TestimonialsSection />
        {/* <PlansSection/> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}