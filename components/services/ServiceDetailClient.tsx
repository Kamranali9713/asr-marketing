"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { services } from "@/lib/data/services";
import {
  ArrowLeft,
  Check,
  Zap,
  Sparkles,
  TrendingUp,
  Image as ImageIcon,
  ArrowRight,
  Star,
} from "lucide-react";

type Service = (typeof services)[number];

type ServiceWithoutIcon = Omit<Service, "icon"> & {
  icon?: never; // Ensure icon is not present
};

interface ServiceDetailClientProps {
  service: ServiceWithoutIcon;
  iconElement: React.ReactNode;
  heroImage?: string;
}

export function ServiceDetailClient({ service, iconElement, heroImage }: ServiceDetailClientProps) {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
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
    <div className="min-h-screen bg-[#030617] text-white relative overflow-hidden">
      {/* Hero Image Section */}
      {heroImage && (
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[350px] sm:min-h-[450px] md:min-h-[500px] max-h-[700px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030617] via-[#030617]/80 to-[#030617] z-10" />
          <Image
            src={heroImage}
            alt={`${service.title} hero`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030617] via-[#030617]/60 to-transparent z-20" />
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
              <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm shadow-lg shadow-blue-500/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10">
                    {iconElement}
                  </div>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Floating Particles Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      <div className={`relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl ${heroImage ? 'py-12 sm:py-16 md:py-24' : 'pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24'}`}>
        {/* Back Button */}
        {heroImage && (
          <div className="mb-12">
            <a
              href="/"
              onClick={(e) => handleSectionNavigation("services", e)}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </a>
          </div>
        )}
        
        {!heroImage && (
          <div className="mb-12">
              <a
              href="/"
              onClick={(e) => handleSectionNavigation("services", e)}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </a>

            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                {iconElement}
              </div>
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  {service.title}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Service Type
              </h3>
            </div>
            <p className="text-2xl font-bold text-white">Premium</p>
          </div>
          <div className="bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Support
              </h3>
            </div>
            <p className="text-2xl font-bold text-white">24/7 Available</p>
          </div>
          <div className="bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Rating
              </h3>
            </div>
            <p className="text-2xl font-bold text-white">5.0 / 5.0</p>
          </div>
        </div>

        {/* Market Trends Section */}
        <div className="relative mb-12 sm:mb-16 md:mb-20 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Latest Market Trends
              </h2>
            </div>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              {service.trend}
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-[#0a1020] to-[#050a15] border border-white/10 p-6 rounded-2xl hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Check className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed flex-1">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
            <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Project Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {service.gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 aspect-square"
              >
                <Image
                  src={src}
                  alt={`${service.title} image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
                Pricing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-gradient-blue px-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
              Select the <span className="text-gradient-blue font-medium">perfect plan</span> that fits your business needs and budget
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {service.plans.map((plan, i) => {
              const isPopular = i === 1; // Middle plan is popular
              return (
                <div
                  key={i}
                  className={`group relative ${
                    isPopular
                      ? "lg:-mt-4 lg:mb-4 lg:scale-105 z-10"
                      : ""
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-blue-500/50">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div
                    className={`h-full flex flex-col p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass border transition-all duration-300 ${
                      isPopular
                        ? "border-blue-500/60 shadow-glow-blue-lg"
                        : "border-white/10 hover:border-blue-500/40 hover:shadow-glow-blue"
                    }`}
                  >
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                        <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    <ul className="flex-1 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {plan.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                        >
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full py-4 sm:py-6 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
                        isPopular
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/30"
                          : "bg-gradient-to-r from-[#0a1020] to-[#050a15] border-2 border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                      }`}
                    >
                      <a
                        href="/"
                        onClick={(e) => handleSectionNavigation("contact", e)}
                        className="flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Contact Us
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass border border-blue-500/40 shadow-glow-blue-lg p-6 sm:p-8 md:p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-gradient-blue">
              Ready to Get Started?
            </h2>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Have questions? Our team is here to help you choose the <span className="text-gradient-blue font-medium">perfect solution</span> for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg shadow-blue-500/30 text-sm sm:text-base"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-sm sm:text-base"
              >
                <a
                  href="/"
                  onClick={(e) => handleSectionNavigation("services", e)}
                  className="cursor-pointer"
                >
                  View All Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

