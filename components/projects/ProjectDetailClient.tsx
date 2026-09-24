"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, User, Check, Code, Image as ImageIcon, Sparkles, Award, Building2, Star, Quote } from "lucide-react";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  gradient: string;
  size: string;
  image: string;
  galleryImages: string[];
  features: string[];
  technologies: string[];
  client: string;
  date: string;
  website: string;
}

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push("/?scroll=projects");
      setTimeout(() => {
        const element = document.getElementById("projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#030617] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030617]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:from-blue-300 hover:to-blue-500 transition-all"
          >
            Asr Marketing
          </Link>
          <a
            href="/"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Projects</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Project Header */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
              <div className="flex-1">
                <span className={`inline-block px-4 py-2 text-sm font-semibold text-blue-300 bg-gradient-to-br ${project.gradient} bg-opacity-20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30`}>
                  {project.category}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-300 mb-6">
                  {project.client && (
                    <div className="flex items-center gap-2 bg-[#0a1020] px-4 py-2 rounded-lg border border-white/10">
                      <User className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                  )}
                  {project.date && (
                    <div className="flex items-center gap-2 bg-[#0a1020] px-4 py-2 rounded-lg border border-white/10">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16 sm:mb-20 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] group">
            <div className={`relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] max-h-[800px] bg-gradient-to-br ${project.gradient} opacity-90 overflow-hidden`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover  group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030617] via-[#030617]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#030617]/80 via-transparent to-[#030617]/80"></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                      <Sparkles className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      Project Overview
                    </h2>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Features Section */}
              {project.features && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl hover:border-blue-500/40 transition-all">
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                        <Check className="w-6 h-6 text-blue-400" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Key Features
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map((feature: string, index: number) => (
                        <div
                          key={index}
                          className="group/item flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 rounded-xl hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300"
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                            <Check className="w-5 h-5 text-blue-400" />
                          </div>
                          <span className="text-gray-200 text-sm sm:text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery - Full Width Horizontal Layout */}
              {project.galleryImages && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl hover:border-blue-500/40 transition-all">
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                        <ImageIcon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Gallery
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {project.galleryImages.map((img: string, index: number) => (
                        <div
                          key={index}
                          className="group/image relative w-full rounded-xl overflow-hidden border border-white/10 aspect-video bg-gradient-to-br from-[#0a1020] to-[#050a15] hover:border-blue-500/40 transition-all shadow-glow-blue"
                        >
                          <Image
  src={img}
  alt={`${project.title} - Image ${index + 1}`}
  fill
  className="object-cover object-center group-hover/image:scale-110 transition-transform duration-500"
/>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Owner Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`relative bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-blue-500/40 transition-all overflow-hidden`}>
                  {/* Background gradient effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                        <Building2 className="w-5 h-5 text-blue-400" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Project Owner
                      </h2>
                    </div>
                    
                    {project.client && (
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="w-4 h-4 text-blue-400" />
                          <span className="text-xs uppercase text-gray-400 tracking-wider">Client</span>
                        </div>
                        <p className="text-lg font-semibold text-white">{project.client}</p>
                      </div>
                    )}
                    
                    {project.date && (
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-xs uppercase text-gray-400 tracking-wider">Completed</span>
                        </div>
                        <p className="text-base text-gray-300">{project.date}</p>
                      </div>
                    )}
                    
                    {project.category && (
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          <span className="text-xs uppercase text-gray-400 tracking-wider">Category</span>
                        </div>
                        <span className={`inline-block px-3 py-1 text-sm font-medium bg-gradient-to-br ${project.gradient} bg-opacity-20 text-blue-300 rounded-lg border border-blue-500/30`}>
                          {project.category}
                        </span>
                      </div>
                    )}
                    
                    {/* Review Section */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <Quote className="w-4 h-4 text-blue-400" />
                        <span className="text-xs uppercase text-gray-400 tracking-wider">Client Review</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-white">5.0</span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed italic">
                        "Excellent work! The team delivered beyond our expectations. The project was completed on time and with exceptional quality."
                      </p>
                      <p className="text-xs text-gray-400 mt-2">— {project.client}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              {project.technologies && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-blue-500/40 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                        <Code className="w-5 h-5 text-blue-400" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Technologies
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-blue-500/30 text-blue-300 rounded-lg hover:border-blue-500/60 hover:bg-blue-500/10 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

