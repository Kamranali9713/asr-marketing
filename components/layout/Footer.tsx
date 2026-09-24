"use client";

import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Careers", "Blog", "Press"],
    Services: ["Web Development", "Mobile Apps", "Cloud Solutions", "Consulting"],
    Resources: ["Documentation", "Support", "Community", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-amber-400" },
    { icon: Github, href: "#", color: "hover:text-emerald-400" },
    { icon: Facebook, href: "https://www.facebook.com/share/1HCHrC9adR/?mibextid=wwXIfr", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/asr_marketing4?igsh=Z3NpMjdrM3lkb2Fu", color: "hover:text-pink-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-950/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 group cursor-pointer mb-4">
              <img 
                src="/logoasr.webp" 
                alt="Asr Marketing Logo" 
                className="h-10 w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              />
              <span className="text-xl font-bold text-gradient-blue">
                Asr Marketing
              </span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Transforming businesses through <span className="text-gradient-blue font-medium">innovative technology solutions</span> and creative excellence.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:shadow-glow-blue group`}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 text-gradient-blue">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm group/link flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 group-hover/link:w-4 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} ASR Solution's. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
