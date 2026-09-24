import {
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart,
  Brain,
} from "lucide-react";

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code2,
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
    description:
      "We build modern, fast, and user-focused websites using technologies like Next.js, React, and Tailwind CSS. Our development process focuses on performance, accessibility, and brand consistency.",
    trend:
      "Web development in 2025 revolves around performance, SEO-first design, server actions, AI-driven personalization, and full-stack frameworks like Next.js 15 with React Server Components.",
    features: [
      "Responsive design for all screen sizes",
      "Next.js 15 & React Server Components integration",
      "Optimized for Core Web Vitals and SEO",
      "Headless CMS support (Sanity, Strapi, WordPress)",
      "Secure & scalable backend integrations",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    ],
    plans: [
      {
        name: "Starter",
        price: "60K PKR",
        features: [
          "1 Landing Page",
          "Basic SEO setup",
          "Hosting assistance",
          "2 weeks support",
        ],
      },
      {
        name: "Business",
        price: "100K PKR",
        features: [
          "Up to 5 pages",
          "Blog & CMS integration",
          "Advanced SEO & analytics",
          "3 months support",
        ],
      },
      {
        name: "Enterprise",
        price: "150K PKR",
        features: [
          "Custom dashboard",
          "API integrations",
          "Full branding & animations",
          "6 months premium support",
        ],
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    icon: Smartphone,
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop",
    description:
      "We design and build seamless mobile applications for iOS and Android using React Native and Flutter. From MVPs to large-scale production apps, we ensure scalability and performance.",
    trend:
      "Mobile app development trends in 2025 focus on AI assistants, offline-first apps, native animations, and cross-platform solutions that maintain 90%+ shared codebases.",
    features: [
      "React Native and Flutter builds",
      "Offline-first architecture",
      "Firebase & AWS backend integration",
      "Push notifications & analytics",
      "App Store & Play Store deployment",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop",
    ],
    plans: [
      {
        name: "Basic App",
        price: "80K PKR",
        features: [
          "Simple app (3–4 screens)",
          "Firebase backend",
          "1 month support",
        ],
      },
      {
        name: "Pro App",
        price: "120K PKR",
        features: [
          "Full-featured mobile app",
          "Custom UI/UX",
          "Analytics & push notifications",
        ],
      },
      {
        name: "Enterprise App",
        price: "180K PKR",
        features: [
          "Custom backend APIs",
          "Cloud hosting & scaling",
          "12 months premium support",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce Solutions",
    icon: ShoppingCart,
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
    description:
      "We create complete ecommerce solutions that combine beauty, usability, and security — powered by Shopify, WooCommerce, or custom Next.js stores.",
    trend:
      "In 2025, ecommerce platforms focus on AI-driven personalization, headless storefronts, lightning-fast UX, and multi-currency checkout experiences.",
    features: [
      "Custom storefront design",
      "Headless CMS integration",
      "Payment gateways (Stripe, PayPal)",
      "Product management dashboard",
      "Advanced analytics & conversion tracking",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    ],
    plans: [
      {
        name: "Starter Store",
        price: "50K PKR",
        features: ["Up to 10 products", "Basic checkout", "1 month support"],
      },
      {
        name: "Pro Store",
        price: "80K PKR",
        features: [
          "Unlimited products",
          "Custom checkout flow",
          "SEO & analytics setup",
        ],
      },
      {
        name: "Enterprise Commerce",
        price: "120K PKR",
        features: [
          "Headless storefront",
          "AI product recommendations",
          "6 months premium support",
        ],
      },
    ],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    icon: Palette,
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
    description:
      "We create impactful designs that communicate your brand's story — from logos to full brand identities and digital assets.",
    trend:
      "Graphic design trends in 2025 emphasize motion branding, AI-assisted creativity, and bold minimalism that captures attention instantly.",
    features: [
      "Logo and brand identity",
      "Marketing collateral (brochures, banners)",
      "Social media design kits",
      "Motion graphics",
      "Packaging design",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
    ],
    plans: [
      {
        name: "Basic Branding",
        price: "15K PKR",
        features: ["Logo design", "Color palette", "2 revisions"],
      },
      {
        name: "Pro Brand Kit",
        price: "30K PKR",
        features: ["Logo + stationery", "Social media kit", "5 revisions"],
      },
      {
        name: "Complete Identity",
        price: "50K PKR",
        features: [
          "Full brand manual",
          "Packaging & digital assets",
          "Unlimited revisions",
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: BarChart,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    description:
      "We help your brand grow through SEO, social media, paid ads, and content marketing tailored to your audience.",
    trend:
      "Digital marketing in 2025 is driven by AI tools for content generation, real-time analytics, and multi-channel automation across web, social, and search.",
    features: [
      "SEO optimization & keyword research",
      "Google & Meta ad campaigns",
      "Social media management",
      "Email marketing automation",
      "Performance tracking & reports",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    ],
    plans: [
      {
        name: "Starter Growth",
        price: "60K PKR",
        features: ["1 platform management", "Basic SEO", "Monthly report"],
      },
      {
        name: "Pro Growth",
        price: "100K PKR",
        features: ["3 platforms", "PPC campaigns", "Weekly reports"],
      },
      {
        name: "Elite Growth",
        price: "150K PKR",
        features: [
          "Full digital strategy",
          "AI analytics",
          "Daily optimization",
        ],
      },
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    icon: Brain,
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop",
    description:
      "We develop AI-driven automation and intelligent tools tailored to your business needs — from chatbots to predictive analytics.",
    trend:
      "AI in 2025 focuses on domain-specific models, voice interfaces, generative design, and automation systems that learn from user behavior.",
    features: [
      "Custom chatbots and assistants",
      "Predictive analytics dashboards",
      "Machine learning model integration",
      "Data cleaning & visualization",
      "Cloud-based AI deployment",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    ],
    plans: [
      {
        name: "Starter AI",
        price: "80K PKR",
        features: ["Chatbot integration", "Simple model", "3 months support"],
      },
      {
        name: "Pro AI Suite",
        price: "120K PKR",
        features: [
          "Predictive analytics",
          "Data dashboard",
          "6 months support",
        ],
      },
      {
        name: "Enterprise AI",
        price: "180K PKR",
        features: ["Custom ML model", "Cloud deployment", "1-year support"],
      },
    ],
  },
];
