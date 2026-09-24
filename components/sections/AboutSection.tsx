"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Target, Users, TrendingUp } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in digital innovation",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering measurable results",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with proven expertise",
    },
    {
      icon: TrendingUp,
      title: "Growth-Driven",
      description: "Strategies that scale with your business",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />

      <div className="relative container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
              Who We Are
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            About{" "}
            <span className="text-gradient-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Asr Marketing
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              At ASR Marketing, we’re more than a digital marketing agency —
              we’re your creative allies in the ever-evolving online world. Our
              mission is to transform your brand’s presence into a powerful
              digital experience that connects, engages, and inspires. We
              combine data-driven strategy, innovative design, and cutting-edge
              technology to craft solutions that elevate your business beyond
              expectations.
            </p>

            {/* <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-105 group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT SIDE - AUTO PLAY VIDEO */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-3xl border border-blue-500/30 shadow-2xl"
              style={{ height: "100%", maxHeight: "700px" }}
            >
              <source src="/introasr.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
