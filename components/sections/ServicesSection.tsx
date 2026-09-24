"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart,
  Brain,
} from "lucide-react";

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    color: "from-blue-500 to-blue-600",
    index: "01",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    slug: "app-development",
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    color: "from-blue-400 to-blue-500",
    index: "02",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "Complete online store solutions with payment integration",
    color: "from-blue-600 to-blue-700",
    index: "03",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    slug: "graphic-designing",
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Creative design solutions for branding and marketing materials",
    color: "from-blue-300 to-blue-400",
    index: "04",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    slug: "digital-marketing",
    icon: BarChart,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your business",
    color: "from-blue-700 to-blue-800",
    index: "05",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    slug: "ai-solutions",
    icon: Brain,
    title: "AI Solutions",
    description:
      "Artificial intelligence solutions to automate and optimize processes",
    color: "from-blue-800 to-blue-900",
    index: "06",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-[#030617] via-[#050a15] to-[#030617] text-white">
      {/* Background elements with pointer-events-none to allow scrolling */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black pointer-events-none" />
      
      {/* Enhanced animated gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-800/25 rounded-full blur-[140px] animate-pulse delay-700 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
            What We Offer
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="text-gradient-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Our Services
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed px-4">
          <span className="text-gradient-blue font-medium">Comprehensive IT solutions</span> tailored to drive your business forward.
        </p>
      </div>

      <div className="relative md:flex md:flex-wrap md:justify-center md:gap-8 px-6">
        {/* Mobile: Horizontal Scroll */}
        <div className="flex md:hidden gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-6 px-6 touch-pan-x">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <Link
                href={`/services/${service.slug}`}
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`group relative flex-shrink-0 w-72 h-[420px] rounded-3xl transition-all duration-500 cursor-pointer snap-start
                  ${isActive ? "scale-105 z-20" : "scale-95 opacity-80 z-10"}
                `}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-[#0a1020] via-[#050a15] to-[#0a1020] border transition-all duration-500 backdrop-blur-sm
                  ${
                    isActive
                      ? "border-blue-500/60 shadow-glow-blue-lg"
                      : "border-white/10 hover:border-blue-500/30"
                  }
                `}
                />
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              {/* Background Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#0a1020]/80 to-[#050a15]" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full p-8 text-center">
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon with image background */}
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                        service.color
                      } flex items-center justify-center transform transition-all duration-500 
                      ${isActive ? "scale-110 rotate-6 shadow-lg" : ""}
                      shadow-glow-blue
                    `}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Small image preview */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-lg overflow-hidden border-2 border-blue-500/50 shadow-glow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3
                    className={`text-2xl font-bold transition-all duration-300 ${
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                        : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-600 transform transition-transform duration-500 origin-left
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                  `}
                  />
                  <span className="mt-3 text-blue-400 text-sm font-semibold tracking-widest">
                    {service.index}
                  </span>
                </div>
              </div>
              </Link>
            );
          })}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-8">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <Link
                href={`/services/${service.slug}`}
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`group relative w-72 h-[420px] rounded-3xl transition-all duration-500 cursor-pointer 
                  ${isActive ? "scale-105 z-20" : "scale-95 opacity-80 z-10"}
                `}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-[#0a1020] to-[#050a15] border border-white/10 transition-all duration-500
                  ${
                    isActive
                      ? "border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                      : ""
                  }
                `}
                />
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Background Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#0a1020]/80 to-[#050a15]" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full p-8 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Icon with image background */}
                    <div className="relative">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                          service.color
                        } flex items-center justify-center transform transition-all duration-500 
                        ${isActive ? "scale-110 rotate-6 shadow-lg" : ""}
                        shadow-glow-blue
                      `}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Small image preview */}
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-lg overflow-hidden border-2 border-blue-500/50 shadow-glow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3
                      className={`text-2xl font-bold transition-all duration-300 ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                          : "text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className={`w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-600 transform transition-transform duration-500 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                    />
                    <span className="mt-3 text-blue-400 text-sm font-semibold tracking-widest">
                      {service.index}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
