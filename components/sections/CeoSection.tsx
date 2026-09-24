"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export function CEOSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in trigger
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
      id="ceo"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-black text-white"
    >
      {/* 🔵 Glowing background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[180px]" />

      <div className="relative container mx-auto max-w-7xl">
        {/* Section heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
              Leadership
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-gradient-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Leadership Spotlight
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the <span className="text-gradient-blue font-medium">visionary driving innovation</span> and excellence at ASR Marketing.
          </p>
        </div>

        {/* Enhanced CEO Card */}
        <div
          className={`relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-3xl glass border border-white/10 shadow-glow-blue-lg transition-all duration-1000 mx-auto w-full px-8 md:px-16 py-12 group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          {/* Enhanced CEO Image */}
          <div className="relative z-10 w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden flex-shrink-0 shadow-glow-blue-lg group/image">
            <Image
              src="/abdullah.webp"
              alt="CEO"
              fill
              className="object-cover rounded-full border-4 border-blue-600/60 group-hover/image:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity" />
          </div>

          {/* Enhanced CEO Info */}
          <div className="relative z-10 flex-1 mt-10 md:mt-0 md:ml-16 text-center md:text-left">
            <h3
              className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 text-gradient-blue whitespace-nowrap drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]`}
            >
              Abdullah&nbsp;Shakir&nbsp;Rao
            </h3>

            <div className="inline-block mb-6">
              <span className="text-blue-400 font-semibold uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 text-sm">
                Chief Executive Officer
              </span>
            </div>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              "At ASR Marketing, our mission is to <span className="text-gradient-blue font-medium">empower brands</span> through
              creative digital innovation. We combine technology and
              storytelling to create experiences that <span className="text-gradient-blue font-medium">inspire and connect</span>."
            </p>

            <p className="text-gray-400 italic text-sm">— Abdullah Shakir Rao</p>
          </div>
        </div>
      </div>
    </section>
  );
}
