// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Header } from "@/components/layout/Header";
// import { HeroSection } from "@/components/sections/HeroSection";
// import { ServicesSection } from "@/components/sections/ServicesSection";
// import { AboutSection } from "@/components/sections/AboutSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { TeamSection } from "@/components/sections/TeamSection";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
// import { ContactSection } from "@/components/sections/ContactSection";
// import { Footer } from "@/components/layout/Footer";
// import { CEOSection } from "@/components/sections/CeoSection";
// import {PlansSection} from "@/components/sections/PlansSection";
// import { VideoCarouselSection } from "@/components/sections/VideoCarouselSection";
// import { handleScrollOnLoad } from "@/lib/utils/navigation";


// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const currentProgress = (window.scrollY / totalScroll) * 100;
//       setScrollProgress(currentProgress);
//     };

//     window.addEventListener("scroll", handleScroll);
    
//     // Handle scroll to section on page load
//     handleScrollOnLoad();
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="site-theme relative overflow-x-hidden">
//       {/* Enhanced scroll progress bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 z-[100] transition-all duration-300 shadow-glow-blue"
//         style={{ width: `${scrollProgress}%` }}
//       />

//       {/* Animated background grid */}
//       <div className="fixed inset-0 opacity-5 pointer-events-none">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(91, 140, 255, 0.10) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(91, 140, 255, 0.10) 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px'
//           }}
//         />
//       </div>

//       <Header />

//       <main className="relative z-10">
//         <HeroSection />
//         <VideoCarouselSection />
//         <ServicesSection />
//         <AboutSection />
//         <CEOSection />
//         <TeamSection />
//         <ProjectsSection />
//         <TestimonialsSection />
//         {/* <PlansSection/> */}
//         <ContactSection />
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CEOSection } from "@/components/sections/CeoSection";
import { VideoCarouselSection } from "@/components/sections/VideoCarouselSection";
import { handleScrollOnLoad } from "@/lib/utils/navigation";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      const currentProgress = (window.scrollY / totalScroll) * 100;

      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle scroll to section on page load
    handleScrollOnLoad();

    // Set initial progress
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="site-theme relative min-h-screen overflow-x-hidden">
      {/* Premium scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 z-[100] transition-[width] duration-300 scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="ambient-glow ambient-glow-teal" />
        <div className="ambient-glow ambient-glow-violet" />
        <div className="ambient-glow ambient-glow-coral" />
      </div>

      {/* Subtle animated background grid */}
      <div className="fixed inset-0 opacity-[0.035] pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 234, 212, 0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 234, 212, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
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

        {/* <TeamSection /> */}

        <ProjectsSection />

        <TestimonialsSection />

        {/* <PlansSection /> */}

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
