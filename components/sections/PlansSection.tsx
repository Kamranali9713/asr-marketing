"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  ShoppingBag,
  Palette,
  Megaphone,
  Cpu,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    icon: <Code className="w-6 h-6 mr-2 text-blue-400" />,
    plans: [
      {
        name: "Basic",
        price: "$499",
        features: [
          "1 Page Responsive Website",
          "Contact Form Integration",
          "Basic SEO Optimization",
        ],
      },
      {
        name: "Standard",
        price: "$999",
        features: [
          "Up to 5 Pages Website",
          "Admin Dashboard",
          "Custom UI Components",
        ],
      },
      {
        name: "Premium",
        price: "$1499",
        features: [
          "Full Web App + Backend",
          "Database Integration",
          "Advanced Animations & SEO",
        ],
      },
    ],
  },
  {
    id: "app",
    title: "App Development",
    icon: <Smartphone className="w-6 h-6 mr-2 text-blue-400" />,
    plans: [
      {
        name: "Basic",
        price: "$699",
        features: [
          "Single Platform App (Android/iOS)",
          "Basic UI Design",
          "Bug Fixes & Support",
        ],
      },
      {
        name: "Standard",
        price: "$1299",
        features: [
          "Cross-platform App",
          "API Integration",
          "Push Notifications",
        ],
      },
      {
        name: "Premium",
        price: "$1999",
        features: [
          "Advanced Native App",
          "Admin Panel + Backend",
          "App Store Deployment",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: <ShoppingBag className="w-6 h-6 mr-2 text-blue-400" />,
    plans: [
      {
        name: "Basic",
        price: "$499",
        features: [
          "Single Vendor Store",
          "Product Listing & Checkout",
          "Basic Design",
        ],
      },
      {
        name: "Standard",
        price: "$999",
        features: [
          "Multi-page Ecommerce Website",
          "Payment Gateway Integration",
          "Admin Dashboard",
        ],
      },
      {
        name: "Premium",
        price: "$1599",
        features: [
          "Multi Vendor System",
          "Inventory & Analytics Dashboard",
          "Custom UI/UX Design",
        ],
      },
    ],
  },
  {
    id: "graphic",
    title: "Graphic Designing",
    icon: <Palette className="w-6 h-6 mr-2 text-blue-400" />,
    plans: [
      {
        name: "Basic",
        price: "$199",
        features: ["Logo Design", "2 Revisions", "PNG + Source Files"],
      },
      {
        name: "Standard",
        price: "$399",
        features: [
          "Brand Kit + Social Media Posts",
          "3 Revisions",
          "High Quality Exports",
        ],
      },
      {
        name: "Premium",
        price: "$599",
        features: [
          "Complete Branding Package",
          "Unlimited Revisions",
          "3D Mockups Included",
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: <Megaphone className="w-6 h-6 mr-2 text-blue-400" />,
    plans: [
      {
        name: "Basic",
        price: "$299",
        features: ["Social Media Setup", "1 Ad Campaign", "Basic Analytics"],
      },
      {
        name: "Standard",
        price: "$699",
        features: [
          "Weekly Ad Campaigns",
          "Content Creation",
          "Performance Reports",
        ],
      },
      {
        name: "Premium",
        price: "$999",
        features: [
          "Complete Digital Strategy",
          "SEO + Google Ads",
          "Full-Time Management",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI Solutions",
    icon: <Cpu className="w-6 h-6 mr-2 text-blue-400" />,
    plans: [
      {
        name: "Basic",
        price: "$799",
        features: [
          "AI Chatbot Integration",
          "Basic Automation",
          "1 Model Training",
        ],
      },
      {
        name: "Standard",
        price: "$1499",
        features: [
          "Custom AI Solution",
          "Data Integration",
          "Model Optimization",
        ],
      },
      {
        name: "Premium",
        price: "$2499",
        features: [
          "Advanced AI Pipeline",
          "Deep Learning Models",
          "Full Automation Suite",
        ],
      },
    ],
  },
];

export function PlansSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll animation
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
      ref={sectionRef}
      id="plans"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="relative container mx-auto text-center">
        {/* Title */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Our Service Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Choose a service and explore flexible plans built for your business.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`flex items-center px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
                activeService.id === service.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500"
                  : "border-white/10 text-gray-300 hover:border-blue-500/50 hover:text-white"
              }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* Plans Display */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {activeService.plans.map((plan, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-blue-500/50 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-blue-400 text-xl font-semibold mb-6">
                {plan.price}
              </p>

              <ul className="text-gray-400 mb-8 space-y-2 text-sm text-left">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all">
                Get Started
              </button>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
