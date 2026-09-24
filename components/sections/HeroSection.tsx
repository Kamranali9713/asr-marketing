"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a] text-white"
    >
      {/* Enhanced animated gradient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0.9)_70%)]" />

      {/* Enhanced decorative tech rings with animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-blue-500/30 blur-[3px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-400/40 blur-[2px] animate-pulse delay-700" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-400/30 blur-[1px] animate-pulse delay-1000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* ⚫ Bottom & top fades for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-[55vh] bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-[10vh] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      {/* 🌌 Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Enhanced Logo / Main 3D Image */}
        <div className="relative mb-8 drop-shadow-[0_0_60px_rgba(59,130,246,0.8)] animate-scale-in">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <Image
            src="/asr3dd.webp"
            alt="ASR Logo"
            width={300}
            height={300}
            className="relative z-10 object-contain transition-all duration-700 hover:scale-110 hover:rotate-6"
            style={{
              transform: "perspective(1000px) rotateY(10deg) rotateX(5deg)",
            }}
          />
          {/* Enhanced Glow Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/60 blur-[6px] animate-pulse" />
          <div className="absolute inset-[-20px] rounded-full border border-cyan-400/40 blur-[8px] animate-pulse delay-500" />
        </div>

        {/* Enhanced Headline with better gradient */}
        <h1
  className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-gradient-blue drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] leading-normal mb-2 animate-scale-in"
  style={{ animationDelay: '0.1s', paddingBottom: '0.25em' }}
>
  ASR Marketing
</h1>


        <h4 className="text-xl md:text-xl lg:text-xl font-extrabold text-gradient-blue drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] leading-tight mb-4 animate-scale-in " style={{ animationDelay: '0.1s' }}>Your Social Assistant</h4>


        {/* Enhanced Subheading */}
        <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mt-6 mb-12 leading-relaxed animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-gradient-blue font-semibold">Innovative Digital Solutions</span> that Elevate Your Business to the{" "}
          <span className="text-gradient-blue font-semibold">Next Level</span>
        </p>

        {/* Enhanced Buttons with better styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white text-lg px-10 py-7 rounded-xl shadow-glow-blue-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-110 group font-semibold relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg px-10 py-7 rounded-xl border-2 border-blue-500/60 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-400 transition-all duration-300 hover:scale-110 font-semibold backdrop-blur-sm glass"
          >
            View Our Work
          </Button>
        </div>
      </div>

    

     

      

      {/* Subtle top-left pattern glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_70%)] blur-2xl" />
    </section>
  );
}
