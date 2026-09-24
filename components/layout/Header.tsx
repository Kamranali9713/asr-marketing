// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isAtTop, setIsAtTop] = useState(true);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY;
//       setIsScrolled(y > 50);
//       setIsAtTop(y < 5);

//       const sections = [
//         "home",
//         "services",
//         "about",
//         "team",
//         "projects",
//         "testimonials",
//         "contact",
//       ];
//       const currentSection = sections.find((section) => {
//         const el = document.getElementById(section);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (currentSection) setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run once on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "Home", sectionId: "home" },
//     { label: "Services", sectionId: "services" },
//     { label: "About", sectionId: "about" },
//     { label: "Team", sectionId: "team" },
//     { label: "Projects", sectionId: "projects" },
//     { label: "Testimonials", sectionId: "testimonials" },
//     { label: "Contact", sectionId: "contact" },
//   ];

//   const handleNavClick = (
//     sectionId: string,
//     e: React.MouseEvent<HTMLAnchorElement>,
//   ) => {
//     e.preventDefault();
//     setIsMobileMenuOpen(false);

//     if (pathname === "/") {
//       // If already on home page, scroll to section
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       // If on different page, navigate to home then scroll
//       router.push(`/?scroll=${sectionId}`);
//       setTimeout(() => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
//         ${
//           isMobileMenuOpen
//             ? "glass-strong border-b border-blue-500/30 shadow-glow-blue py-2"
//             : isScrolled
//               ? "glass-strong border-b border-blue-500/40 shadow-glow-blue-lg py-2"
//               : isAtTop
//                 ? "bg-transparent py-4"
//                 : "glass py-4"
//         }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between md:justify-center relative">
//           {/* Left Nav */}
//           <div className="hidden md:flex space-x-6 lg:space-x-8 mr-10">
//             {navItems.slice(0, 3).map((item) => (
//               <a
//                 key={item.label}
//                 href="/"
//                 onClick={(e) => handleNavClick(item.sectionId, e)}
//                 className={`px-2 lg:px-4 py-2 text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer relative group/nav ${
//                   activeSection === item.sectionId
//                     ? "text-blue-400"
//                     : "text-gray-300 hover:text-blue-300"
//                 }`}
//               >
//                 <span className="relative z-10">{item.label}</span>
//                 {activeSection === item.sectionId && (
//                   <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-glow-blue" />
//                 )}
//                 <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity -z-10" />
//               </a>
//             ))}
//           </div>

//           {/* Logo */}
//           <a
//             href="/"
//             onClick={(e) => {
//               if (pathname === "/") {
//                 e.preventDefault();
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }
//             }}
//             className="flex items-center space-x-2 group cursor-pointer text-center"
//           >
//             <img
//               src="/logoasr.webp"
//               alt="Asr Marketing Logo"
//               className="h-10 sm:h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-110"
//             />
//             <span className="font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-text text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap tracking-tight">
//               Asr Marketing
//             </span>
//           </a>

//           {/* Right Nav */}
//           <div className="hidden md:flex space-x-6 lg:space-x-8 ml-10">
//             {navItems.slice(3).map((item) => (
//               <a
//                 key={item.label}
//                 href="/"
//                 onClick={(e) => handleNavClick(item.sectionId, e)}
//                 className={`px-2 lg:px-4 py-2 text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer relative group/nav ${
//                   activeSection === item.sectionId
//                     ? "text-blue-400"
//                     : "text-gray-300 hover:text-blue-300"
//                 }`}
//               >
//                 <span className="relative z-10">{item.label}</span>
//                 {activeSection === item.sectionId && (
//                   <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-glow-blue" />
//                 )}
//                 <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity -z-10" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1 absolute right-0"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4 py-4 space-y-3 animate-in slide-in-from-top duration-300 fade-in-90 text-center">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href="/"
//                 onClick={(e) => {
//                   handleNavClick(item.sectionId, e);
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className={`block px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
//                   activeSection === item.sectionId
//                     ? "text-blue-400 bg-blue-500/20 font-medium"
//                     : "text-gray-300 hover:text-blue-300 hover:bg-blue-500/10"
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }


"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", sectionId: "home" },
  { label: "Services", sectionId: "services" },
  { label: "About", sectionId: "about" },
  { label: "Team", sectionId: "team" },
  { label: "Projects", sectionId: "projects" },
  { label: "Testimonials", sectionId: "testimonials" },
  { label: "Contact", sectionId: "contact" },
];

const DESKTOP_ITEMS = NAV_ITEMS.slice(0, 6);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const router = useRouter();
  const pathname = usePathname();

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  /* =========================================================
     Scroll: shrink header, progress bar, active section
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollY > 30);

      setProgress(
        maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0
      );

      if (scrollY < 100) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";
      let closestDistance = Infinity;

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.sectionId);

        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120);

        if (
          rect.top <= 180 &&
          rect.bottom > 100 &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          currentSection = item.sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     Sliding active indicator
  ========================================================= */
  const measureIndicator = useCallback(() => {
    const el = linkRefs.current[activeSection];

    if (!el) {
      setIndicator((prev) => ({
        ...prev,
        visible: false,
      }));

      return;
    }

    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
      visible: true,
    });
  }, [activeSection]);

  useEffect(() => {
    measureIndicator();

    window.addEventListener("resize", measureIndicator);

    return () => {
      window.removeEventListener("resize", measureIndicator);
    };
  }, [measureIndicator]);

  /* =========================================================
     Scroll to section after navigation
  ========================================================= */
  useEffect(() => {
    if (pathname !== "/") return;

    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get("scroll");

    if (!scrollTarget) return;

    const timer = setTimeout(() => {
      document
        .getElementById(scrollTarget)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      window.history.replaceState({}, "", "/");
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  /* =========================================================
     Mobile menu: lock body scroll + Escape
  ========================================================= */
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  /* =========================================================
     Navigation handlers
  ========================================================= */
  const handleNavClick = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      return;
    }

    router.push(`/?scroll=${sectionId}`);
  };

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (pathname === "/") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActiveSection("home");
      setIsMobileMenuOpen(false);
    }
  };

  const compact = isScrolled || isMobileMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main navigation"
        className={`mx-auto transition-all duration-500 ${
          compact ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        {/* =====================================================
            MAIN NAVIGATION BAR
        ===================================================== */}
        <div
          className={`
            relative flex h-14 w-14 items-center justify-center
            overflow-hidden rounded-full border
            transition-all duration-500
            max-lg:ml-auto

            lg:h-[70px]
            lg:w-auto
            lg:justify-start
            lg:rounded-full
            lg:px-3

            ${
              compact
                ? `
                  border-cyan-400/20
                  bg-[#050914]/90
                  shadow-[0_18px_70px_-15px_rgba(0,0,0,0.85)]
                  backdrop-blur-2xl
                `
                : `
                  border-white/[0.10]
                  bg-[#070b14]/75
                  shadow-[0_15px_55px_-15px_rgba(0,0,0,0.65)]
                  backdrop-blur-xl
                `
            }
          `}
        >
          {/* =================================================
              TOP LIGHT
          ================================================= */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-x-0 top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/70
              to-transparent
            "
          />

          {/* =================================================
              GLOW ORBS
          ================================================= */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute -top-20 left-[20%]
              h-32 w-64
              rounded-full
              bg-blue-600/20
              blur-3xl
            "
          />

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute -top-20 right-[10%]
              h-32 w-48
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute bottom-0 left-1/3
              h-16 w-40
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          {/* =================================================
              SCROLL PROGRESS
          ================================================= */}
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-x-8 bottom-0
              hidden h-[3px]
              overflow-hidden
              rounded-full
              lg:block
            "
          >
            <div
              className="
                h-full origin-left
                bg-gradient-to-r
                from-blue-500
                via-cyan-300
                to-blue-500
                shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
              style={{
                transform: `scaleX(${progress})`,
                opacity: isScrolled ? 1 : 0,
                transition: "opacity 300ms",
              }}
            />
          </div>

          {/* =================================================
              LOGO
          ================================================= */}
          <a
            href="/"
            onClick={handleLogoClick}
            aria-label="Asr Marketing – back to top"
            className="
              group relative z-10
              hidden shrink-0
              items-center gap-3
              rounded-full
              py-1 pl-1 pr-4
              outline-none
              lg:flex
              focus-visible:ring-2
              focus-visible:ring-cyan-300/70
            "
          >
            {/* Logo circle */}
            <span
              className="
                relative flex h-12 w-12
                items-center justify-center
                rounded-full

                bg-gradient-to-br
                from-blue-500/30
                via-blue-500/10
                to-cyan-400/20

                ring-1
                ring-inset
                ring-white/15

                shadow-[0_0_25px_rgba(37,99,235,0.20)]

                transition-all
                duration-500

                group-hover:ring-cyan-300/70
                group-hover:shadow-[0_0_35px_rgba(34,211,238,0.40)]
              "
            >
              <span
                aria-hidden
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400/20
                  to-blue-600/20
                  opacity-0
                  blur-md
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <img
                src="/asr_marketing_logo.png"
                alt=""
                className="
                  relative
                  h-12 w-12
                  scale-[1.25]
                  object-contain

                  transition-transform
                  duration-500

                  group-hover:scale-[1.4]
                "
              />
            </span>

            {/* Brand name */}
            <span className="hidden flex-col leading-none sm:flex">
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-cyan-100
                  to-white
                  bg-clip-text
                  text-[17px]
                  font-bold
                  tracking-tight
                  text-transparent
                "
              >
                Asr Marketing
              </span>

              <span
                className="
                  mt-1.5
                  bg-gradient-to-r
                  from-slate-400
                  to-cyan-300
                  bg-clip-text
                  text-[11px]
                  font-medium
                  text-transparent
                "
              >
                Digital agency
              </span>
            </span>
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}
          <div
            className="
              absolute left-1/2
              hidden -translate-x-1/2
              lg:block
            "
          >
            <div
              className="
                relative flex items-center
                rounded-full

                border
                border-white/[0.08]

                bg-white/[0.035]

                p-1

                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
              "
            >
              {/* Active sliding pill */}
              <span
                aria-hidden
                className="
                  absolute inset-y-1
                  rounded-full

                  bg-gradient-to-r
                  from-blue-600/45
                  via-blue-500/35
                  to-cyan-400/25

                  shadow-
                  [inset_0_1px_0_rgba(255,255,255,0.20),
                  0_0_25px_rgba(59,130,246,0.30),
                  0_0_45px_rgba(34,211,238,0.10)]

                  ring-1
                  ring-inset
                  ring-cyan-300/25

                  transition-all
                  duration-500

                  ease-[cubic-bezier(0.22,1,0.36,1)]
                "
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.visible ? 1 : 0,
                }}
              />

              {DESKTOP_ITEMS.map((item) => {
                const isActive =
                  activeSection === item.sectionId;

                return (
                  <a
                    key={item.sectionId}
                    ref={(el) => {
                      linkRefs.current[item.sectionId] = el;
                    }}
                    href="/"
                    onClick={(e) =>
                      handleNavClick(item.sectionId, e)
                    }
                    aria-current={
                      isActive ? "true" : undefined
                    }
                    className={`
                      relative z-10
                      rounded-full
                      px-3.5 py-2

                      text-[13px]
                      font-semibold

                      outline-none
                      transition-all
                      duration-300

                      focus-visible:ring-2
                      focus-visible:ring-cyan-300/70

                      ${
                        isActive
                          ? `
                            text-white
                            drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
                          `
                          : `
                            text-slate-400
                            hover:text-cyan-100
                          `
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}
          <div className="relative z-10 ml-auto hidden lg:block">
            <a
              href="/"
              onClick={(e) =>
                handleNavClick("contact", e)
              }
              className={`
                group relative
                flex items-center
                gap-2.5

                overflow-hidden
                rounded-full

                py-1.5 pl-5 pr-1.5

                text-sm
                font-semibold
                text-white

                outline-none

                transition-all
                duration-300

                hover:-translate-y-0.5

                focus-visible:ring-2
                focus-visible:ring-cyan-300/70

                ${
                  activeSection === "contact"
                    ? `
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-purple-500

                      shadow-[0_10px_40px_rgba(34,211,238,0.45)]
                    `
                    : `
                      bg-gradient-to-r
                      from-blue-600
                      via-blue-500
                      to-cyan-500

                      shadow-[0_10px_35px_rgba(37,99,235,0.40)]

                      hover:shadow-[0_15px_50px_rgba(34,211,238,0.45)]
                    `
                }
              `}
            >
              {/* CTA glow */}
              <span
                aria-hidden
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-full

                  bg-gradient-to-r
                  from-white/0
                  via-white/15
                  to-white/0

                  opacity-0
                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />

              {/* Shine sweep */}
              <span
                aria-hidden
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-1/3
                  w-1/3

                  -skew-x-12
                  bg-white/30

                  opacity-0
                  blur-md

                  transition-all
                  duration-700

                  group-hover:left-[110%]
                  group-hover:opacity-100
                "
              />

              <span className="relative">
                Let&apos;s talk
              </span>

              <span
                className="
                  relative
                  flex h-9 w-9
                  items-center justify-center

                  rounded-full
                  bg-white

                  text-blue-600

                  shadow-[0_0_15px_rgba(255,255,255,0.25)]

                  transition-transform
                  duration-300

                  group-hover:rotate-45
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((open) => !open)
            }
            aria-label={
              isMobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="
              relative z-20
              ml-auto

              flex h-14 w-14
              items-center justify-center

              rounded-full

              border
              border-cyan-300/20

              bg-gradient-to-br
              from-blue-600/25
              via-[#070b14]/90
              to-cyan-500/10

              text-white

              shadow-[0_0_30px_rgba(37,99,235,0.25)]

              backdrop-blur-2xl

              transition-all
              duration-300

              hover:border-cyan-300/50
              hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]

              lg:hidden
            "
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-cyan-200" />
            ) : (
              <Menu className="h-5 w-5 text-cyan-200" />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          id="mobile-menu"
          className={`
            grid
            transition-all
            duration-500

            ease-[cubic-bezier(0.22,1,0.36,1)]

            lg:hidden

            ${
              isMobileMenuOpen
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="overflow-hidden">
            <div
              className="
                relative

                max-h-[calc(100dvh-110px)]
                overflow-y-auto

                rounded-3xl

                border
                border-cyan-300/15

                bg-[#050914]/95

                p-2.5

                shadow-
                [0_25px_90px_-15px_rgba(0,0,0,0.85),
                0_0_50px_rgba(37,99,235,0.12)]

                backdrop-blur-2xl
              "
            >
              {/* Mobile glow */}
              <div
                aria-hidden
                className="
                  pointer-events-none
                  absolute
                  -top-20
                  left-1/2
                  h-32
                  w-64
                  -translate-x-1/2

                  rounded-full

                  bg-blue-500/20
                  blur-3xl
                "
              />

              <ul className="relative flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    activeSection === item.sectionId;

                  return (
                    <li key={item.sectionId}>
                      <a
                        href="/"
                        tabIndex={
                          isMobileMenuOpen ? 0 : -1
                        }
                        onClick={(e) =>
                          handleNavClick(
                            item.sectionId,
                            e
                          )
                        }
                        aria-current={
                          isActive ? "true" : undefined
                        }
                        className={`
                          relative flex
                          items-center
                          justify-between

                          rounded-2xl

                          px-4 py-3.5

                          text-[15px]
                          font-semibold

                          outline-none

                          transition-all
                          duration-300

                          focus-visible:ring-2
                          focus-visible:ring-cyan-300/70

                          ${
                            isActive
                              ? `
                                bg-gradient-to-r
                                from-blue-500/20
                                via-cyan-400/10
                                to-transparent

                                text-white

                                shadow-
                                [inset_0_1px_0_rgba(255,255,255,0.06)]
                              `
                              : `
                                text-slate-400

                                hover:bg-white/[0.05]
                                hover:text-cyan-100
                              `
                          }
                        `}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <>
                            <span
                              aria-hidden
                              className="
                                absolute
                                left-0
                                top-1/2

                                h-6
                                w-[3px]

                                -translate-y-1/2

                                rounded-full

                                bg-gradient-to-b
                                from-cyan-300
                                via-blue-500
                                to-purple-500

                                shadow-[0_0_15px_rgba(34,211,238,0.9)]
                              "
                            />

                            <span
                              aria-hidden
                              className="
                                pointer-events-none
                                absolute
                                inset-0

                                rounded-2xl

                                bg-cyan-400/[0.03]

                                blur-sm
                              "
                            />
                          </>
                        )}

                        <span className="relative">
                          {item.label}
                        </span>

                        <ArrowUpRight
                          className={`
                            relative
                            h-4 w-4

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? `
                                  translate-x-0
                                  text-cyan-300
                                  opacity-100
                                  drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]
                                `
                                : `
                                  -translate-x-1
                                  opacity-0
                                `
                            }
                          `}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}
              <a
                href="/"
                tabIndex={
                  isMobileMenuOpen ? 0 : -1
                }
                onClick={(e) =>
                  handleNavClick("contact", e)
                }
                className="
                  group relative

                  mt-2.5
                  flex w-full
                  items-center
                  justify-center
                  gap-2

                  overflow-hidden

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-400

                  px-4 py-3.5

                  font-semibold
                  text-white

                  shadow-[0_10px_40px_rgba(37,99,235,0.40)]

                  outline-none

                  transition-all
                  duration-300

                  hover:shadow-[0_12px_45px_rgba(34,211,238,0.45)]

                  focus-visible:ring-2
                  focus-visible:ring-white/70
                "
              >
                {/* Shine */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-1/2
                    w-1/3

                    -skew-x-12

                    bg-white/25

                    blur-md

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                  "
                />

                <span className="relative">
                  Let&apos;s talk
                </span>

                <ArrowUpRight
                  className="
                    relative
                    h-4 w-4

                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
