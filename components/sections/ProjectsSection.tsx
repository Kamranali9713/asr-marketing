"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: "combine-marketings",
    title: "Combine Marketings",
    category: "Digital Marketing",
    description:
      "Complete digital marketing solution with social media management and campaign optimization",
    image: "/CombineMarketings.webp",
  },
  {
    id: "askari-cadet-college",
    title: "Askari Cadet College",
    category: "Education",
    description:
      "Modern educational institution with comprehensive digital infrastructure",
    image: "/Askari.webp",
  },
  {
    id: "noor-forces-academy",
    title: "Noor Forces Academy",
    category: "Military Education",
    description:
      "Advanced training academy with cutting-edge facilities and curriculum",
    image: "/Noor.webp",
  },
  {
    id: "bellevue-animal-hospital",
    title: "BELLEVUE ANIMAL HOSPITAL & MART",
    category: "Healthcare & Retail",
    description: "Complete veterinary hospital and pet retail solution",
    image: "/Animal.webp",
  },
  {
    id: "habitat-by-rudn-enclave",
    title: "Habitat By Rudn Enclave",
    category: "Real Estate",
    description:
      "Luxury residential development with modern amenities and sustainable design",
    image: "/Habitat.webp",
  },
  {
    id: "pulse-medical-complex",
    title: "Pulse Medical Complex",
    category: "Healthcare",
    description:
      "State-of-the-art medical facility with specialized departments and services",
    image: "/Pulse.webp",
  },
  {
    id: "ammar-forte",
    title: "Ammar Forte",
    category: "Real Estate",
    description:
      "Premium residential and commercial development project with innovative features",
    image: "/AmmarForte.webp",
  },
  {
    id: "apex-quant",
    title: "Apex Quant",
    category: "Technology",
    description:
      "Advanced technology solutions for business analytics and automation",
    image: "/ApexQuant.webp",
  },
  {
    id: "edp-crypto-token",
    title: "EDP Crypto Token",
    category: "Blockchain & Crypto",
    description:
      "Cryptocurrency token project with advanced blockchain technology and smart contracts",
    image: "/Edp.webp",
  },
  
  {
    id: "saira-skin-care",
    title: "Saira Skin Care",
    category: "Beauty & Healthcare",
    description:
      "Professional skincare brand offering dermatological treatments and wellness products",
    image: "/saira.webp",
  },
  {
    id: "crypto-x",
    title: "Crypto X",
    category: "Blockchain & Crypto",
    description:
      "Innovative crypto exchange and investment platform with real-time analytics",
    image: "/cryptox.webp",
  },
  {
    id: "alcazar",
    title: "Alcazar",
    category: "Real Estate",
    description:
      "Luxury urban development project featuring modern architecture and lifestyle amenities",
    image: "/alcazar.webp",
  },
  {
    id: "scary-night-my-malik",
    title: "Scary Night My Malik",
    category: "Entertainment",
    description:
      "Horror short film production blending suspense, creativity, and cinematic storytelling",
    image: "/scary.webp",
  },
  {
    id: "combine-consultant",
    title: "Combine Consultant",
    category: "Visa & Immigration",
    description:
      "Trusted visa consultancy offering global study, work, and immigration services with expert guidance.",
    image: "/combineconsultant.webp",
  },
];


export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-black"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="relative container mx-auto">
        {/* Section Heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-gradient-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Project Gallery
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our <span className="text-gradient-blue font-medium">featured projects</span> across industries, crafted with precision and creativity.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div
          className={`flex sm:hidden gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-6 px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={index}
              className="group relative flex flex-col items-center text-center flex-shrink-0 snap-start"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* 🔵 Circle Image */}
              <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-blue-600/50 shadow-[0_0_40px_10px_rgba(37,99,235,0.25)] transition-transform duration-700 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>

              {/* Text Content */}
              <div className="mt-6">
                <span className="text-xs uppercase text-blue-300 tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div
          className={`hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={index}
              className="group relative flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* 🔵 Circle Image */}
              <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-blue-600/50 shadow-[0_0_40px_10px_rgba(37,99,235,0.25)] transition-transform duration-700 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>

              {/* Text Content */}
              <div className="mt-6">
                <span className="text-xs uppercase text-blue-300 tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
