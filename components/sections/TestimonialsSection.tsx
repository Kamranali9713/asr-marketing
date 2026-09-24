"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Combine Marketings",
    role: "Digital Marketing Agency",
    content:
      "ASR Marketing delivered a complete digital marketing ecosystem for our brand. Our engagement and conversions increased significantly.",
    rating: 5,
  },
  {
    name: "Askari Cadet College",
    role: "Educational Institute",
    content:
      "Our website and digital infrastructure were built professionally with modern UI and smooth performance. Great experience.",
    rating: 5,
  },
  {
    name: "Noor Forces Academy",
    role: "Military Training Academy",
    content:
      "They created a high-quality website that perfectly represents our academy. Fast, secure, and very well-designed.",
    rating: 5,
  },
  {
    name: "BELLEVUE ANIMAL HOSPITAL ",
    role: "Veterinary & Retail",
    content:
      "Our hospital website and online mart were built with excellent UI/UX. The online appointment system works flawlessly.",
    rating: 5,
  },
  {
    name: "Habitat By Rudn Enclave",
    role: "Real Estate Development",
    content:
      "ASR Marketing developed a premium real estate website with beautiful visuals and lead-generation optimization.",
    rating: 5,
  },
  {
    name: "Pulse Medical Complex",
    role: "Healthcare Facility",
    content:
      "A complete medical website with department pages, appointment booking, and modern branding. Very professional.",
    rating: 5,
  },
  {
    name: "Ammar Forte",
    role: "Real Estate & Construction",
    content:
      "Our real estate portal was redesigned beautifully. The UI, SEO, and performance improvements were outstanding.",
    rating: 5,
  },
  {
    name: "Apex Quant",
    role: "Technology Company",
    content:
      "They built a sleek, fast, and futuristic website for our analytics platform. Excellent understanding of tech projects.",
    rating: 5,
  },
  {
    name: "EDP Crypto Token",
    role: "Blockchain Project",
    content:
      "Our crypto project website was delivered with a modern Web3 design and smooth animations. Very impressed.",
    rating: 5,
  },
  {
    name: "Saira Skin Care",
    role: "Skincare Brand",
    content:
      "Beautiful, premium-look website for our skincare products. The brand presentation is perfect.",
    rating: 5,
  },
  {
    name: "Crypto X",
    role: "Crypto Exchange",
    content:
      "Our platform’s landing page and branding were redesigned with excellent visuals and strong technical structure.",
    rating: 5,
  },
  {
    name: "Alcazar",
    role: "Real Estate Developer",
    content:
      "They built a luxury-themed real estate website for our project. The animations and layout stand out.",
    rating: 5,
  },
  {
    name: "Scary Night My Malik",
    role: "Film Production",
    content:
      "Our horror short-film website and poster designs were delivered with cinematic quality. Highly creative team.",
    rating: 5,
  },
  {
    name: "Combine Consultant",
    role: "Visa & Immigration Firm",
    content:
      "ASR Marketing created a clean and trustworthy website for our visa services. It boosted our lead inquiries.",
    rating: 5,
  },
];


export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1.2; // slightly slower for readability
    let frameId: number;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />

      <div className="relative container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-semibold text-blue-400 uppercase px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-gradient-blue">
            Client Success Stories
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from our <span className="text-gradient-blue">clients across Pakistan</span>
          </p>
        </div>

        <div className="relative">
          {/* Side fading */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden whitespace-nowrap select-none no-scrollbar px-2"
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className={`inline-block w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw] xl:w-[28vw] transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-[#0a1020] shadow-xl hover:scale-[1.03] transition duration-500 overflow-hidden border border-white/5">
                  <div className="absolute top-6 right-6 opacity-20">
                    <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Force wrapping & visible text */}
                    <p className="text-gray-300 mb-6 leading-relaxed whitespace-normal text-sm sm:text-base md:text-lg">
                      {t.content}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>

                      <div>
                        <div className="font-bold text-white text-sm sm:text-base md:text-lg">{t.name}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
