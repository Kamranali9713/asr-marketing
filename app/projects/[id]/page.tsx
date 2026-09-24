import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProjectDetailClient } from "@/components/projects/ProjectDetailClient";

import "./project-detail.css";

// All Project Data
const projectData: Record<string, any> = {
  "combine-marketings": {
    id: "combine-marketings",
    title: "Combine Marketings",
    category: "Digital Marketing",
    description:
      "Complete digital marketing solution with social media management and campaign optimization",
    detailedDescription:
      "Combine Marketings is a comprehensive digital marketing solution that transformed a traditional business into a digital powerhouse. Our approach included developing a robust social media presence, creating engaging content, and implementing targeted paid advertising campaigns that significantly increased brand visibility and customer engagement. The project resulted in a 300% increase in online leads and a 150% boost in sales within the first six months.",
    gradient: "from-blue-500 to-blue-600",
    size: "large",
    image:
      "/projects/cm4.jpg",
    galleryImages: [
      "/projects/cm1.jpg",
      "/projects/cm2.jpg",
      "/projects/cm3.jpg",
    ],
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Paid advertising campaigns",
      "Analytics and reporting",
      "Brand identity enhancement",
    ],
    technologies: [
      "Facebook Ads",
      "Instagram",
      "Google Analytics",
      "Canva",
      "Adobe Creative Suite",
    ],
    client: "Combine Marketings Pvt. Ltd.",
    date: "March 2023",
    website: "https://combinemarkets.com",
  },

  "askari-cadet-college": {
    id: "askari-cadet-college",
    title: "Askari Cadet College",
    category: "Education",
    description:
      "Modern educational institution with comprehensive digital infrastructure",
    detailedDescription:
      "We transformed Askari Cadet College's digital presence with a modern website and comprehensive digital infrastructure. The project included developing a responsive website that showcases the college's facilities, programs, and achievements. We also implemented a student portal for easy access to academic resources and a parent communication system.",
    gradient: "from-blue-400 to-blue-500",
    size: "medium",
    image:
      "/projects/ac1.jpg",
    galleryImages: [
      "/projects/ac2.jpg",
      "/projects/ac3.jpg",
      "/projects/ac4.jpg",
    ],
    features: [
      "Responsive website design",
      "Student portal development",
      "Parent communication system",
      "Online admission portal",
      "Digital library integration",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    client: "Askari Cadet College",
    date: "August 2023",
    website: "https://askaricadetcollege.edu.pk",
  },

  "noor-forces-academy": {
    id: "noor-forces-academy",
    title: "Noor Forces Academy",
    category: "Military Education",
    description:
      "Advanced training academy with cutting-edge facilities and curriculum",
    detailedDescription:
      "Noor Forces Academy required a sophisticated digital platform to support its advanced military training programs. Our solution included a learning management system, virtual training environments, and performance tracking tools.",
    gradient: "from-blue-600 to-blue-700",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=1080&fit=crop",
    galleryImages: [
      "/projects/nf1.jpg",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "/projects/nf2.jpg",
    ],
    features: [
      "Learning management system",
      "Virtual training environments",
      "Performance tracking tools",
      "Mobile app integration",
    ],
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker"],
    client: "Noor Forces Academy",
    date: "January 2024",
    website: "https://noorforcesacademy.edu.pk",
  },

  "bellevue-animal-hospital": {
    id: "bellevue-animal-hospital",
    title: "BELLEVUE ANIMAL HOSPITAL & MART",
    category: "Healthcare & Retail",
    description: "Complete veterinary hospital and pet retail solution",
    detailedDescription:
      "We developed a complete digital ecosystem for Bellevue Animal Hospital & Mart — managing both patient care and retail operations under one unified system.",
    gradient: "from-blue-300 to-blue-400",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
    ],
    features: [
      "Patient management system",
      "Inventory control",
      "Appointment booking",
      "Pet health tracking",
    ],
    technologies: ["Angular", "Express.js", "MySQL", "Stripe", "Twilio"],
    client: "Bellevue Animal Hospital",
    date: "May 2023",
    website: "https://bellevueanimalhospital.com",
  },

  "habitat-by-rudn-enclave": {
    id: "habitat-by-rudn-enclave",
    title: "Habitat By Rudn Enclave",
    category: "Real Estate",
    description: "Luxury residential development with modern amenities and sustainable design",
    detailedDescription:
      "Habitat By Rudn Enclave is a premium residential project offering state-of-the-art amenities, sustainable living solutions, and a modern community lifestyle. We built a digital platform showcasing properties, virtual tours, and client booking systems.",
    gradient: "from-green-400 to-green-500",
    size: "medium",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    features: [
      "Luxury apartments",
      "Community parks",
      "Smart home integration",
      "24/7 security",
    ],
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Firebase"],
    client: "RUDN Developers",
    date: "July 2024",
    website: "https://rudnenclave.com",
  },

  "pulse-medical-complex": {
    id: "pulse-medical-complex",
    title: "Pulse Medical Complex",
    category: "Healthcare",
    description: "State-of-the-art medical facility with specialized departments and services",
    detailedDescription:
      "Pulse Medical Complex is a modern healthcare facility providing advanced medical care with specialized departments, emergency services, and a patient management system integrated into a digital platform for easy appointments and reporting.",
    gradient: "from-red-400 to-red-500",
    size: "large",
    image: "/projects/ph1.jpg",
    galleryImages: [
      "/projects/ph2.jpg",
      "/projects/ph3.jpg",
      "/projects/ph4.jpg",
    ],
    features: [
      "Advanced medical equipment",
      "Patient management system",
      "Specialized departments",
      "24/7 emergency services",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    client: "Pulse Healthcare Ltd.",
    date: "May 2024",
    website: "https://pulsec.com",
  },

  "ammar-forte": {
    id: "ammar-forte",
    title: "Ammar Forte",
    category: "Real Estate",
    description: "Premium residential and commercial development project with innovative features",
    detailedDescription:
      "Ammar Forte is a mixed-use development offering premium residential apartments and commercial spaces. Our digital solutions included interactive property showcase, lead generation forms, and virtual tours for prospective clients.",
    gradient: "from-indigo-400 to-indigo-500",
    size: "medium",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
    features: [
      "Residential apartments",
      "Commercial spaces",
      "Virtual property tours",
      "Lead generation forms",
    ],
    technologies: ["Next.js", "Three.js", "Tailwind CSS"],
    client: "Ammar Developers",
    date: "August 2024",
    website: "https://ammarforte.com",
  },

  "apex-quant": {
    id: "apex-quant",
    title: "Apex Quant",
    category: "Technology",
    description: "Advanced technology solutions for business analytics and automation",
    detailedDescription:
      "Apex Quant provides cutting-edge business analytics solutions. The platform includes automated reporting, data visualization dashboards, and predictive analytics tools, designed to optimize decision-making for enterprise clients.",
    gradient: "from-purple-400 to-purple-500",
    size: "large",
    image: "https://images.unsplash.com/photo-1624996379671-bbf6319c6d1d?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1624996379671-bbf6319c6d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1648737965486-55b4e7ab336d?w=800&h=600&fit=crop",
    ],
    features: [
      "Automated reporting",
      "Data visualization dashboards",
      "Predictive analytics",
      "Integration with multiple data sources",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    client: "Apex Quant Solutions",
    date: "September 2024",
    website: "https://apexquant.com",
  },

  "edp-crypto-token": {
    id: "edp-crypto-token",
    title: "EDP Crypto Token",
    category: "Blockchain & Crypto",
    description: "Cryptocurrency token project with advanced blockchain technology and smart contracts",
    detailedDescription:
      "EDP Crypto Token is a blockchain-based digital currency designed for secure transactions and smart contract functionality. We developed the platform with real-time tracking, wallet integration, and secure transaction protocols.",
    gradient: "from-yellow-400 to-yellow-500",
    size: "medium",
    image: "https://images.unsplash.com/photo-1624996379671-bbf6319c6d1d?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1624996379671-bbf6319c6d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1648737965486-55b4e7ab336d?w=800&h=600&fit=crop",
    ],
    features: [
      "Smart contract integration",
      "Secure transactions",
      "Wallet integration",
      "Token analytics",
    ],
    technologies: ["React", "Web3.js", "Node.js", "Ethereum"],
    client: "EDP Blockchain",
    date: "October 2024",
    website: "https://edptoken.com",
  },

  "saira-skin-care": {
    id: "saira-skin-care",
    title: "Saira Skin Care",
    category: "Beauty & Healthcare",
    description:
      "Professional skincare brand offering dermatological treatments and wellness products",
    detailedDescription:
      "Saira Skin Care is a high-end skincare clinic and product line designed to provide both beauty and medical-grade skin solutions. We designed their complete brand website with e-commerce, appointment booking, and digital marketing integration.",
    gradient: "from-pink-500 to-blue-500",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1600431521340-491eca880813?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1583911860205-72b0171d8a7d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600431521340-491eca880813?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1619977673193-9f6c438f5d5b?w=800&h=600&fit=crop",
    ],
    features: [
      "E-commerce skincare store",
      "Online appointment system",
      "Social media integration",
      "Brand design and photography",
    ],
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Firebase"],
    client: "Saira Skin Care",
    date: "May 2024",
    website: "https://sairaskincare.com",
  },

  "crypto-x": {
    id: "crypto-x",
    title: "Crypto X",
    category: "Blockchain & Crypto",
    description:
      "Innovative crypto exchange and investment platform with real-time analytics",
    detailedDescription:
      "Crypto X is a next-generation cryptocurrency exchange offering real-time trading analytics and secure transactions. We built their entire web app including wallet integration, trading dashboard, and data visualization modules.",
    gradient: "from-purple-600 to-blue-600",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1624996379671-bbf6319c6d1d?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1648737965486-55b4e7ab336d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1624996379671-bbf6319c6d1d?w=800&h=600&fit=crop",
    ],
    features: [
      "Trading dashboard",
      "Wallet integration",
      "Advanced charts",
      "User analytics",
      "2FA security system",
    ],
    technologies: ["React", "Web3.js", "Node.js", "MongoDB", "Chart.js"],
    client: "Crypto X Exchange",
    date: "August 2024",
    website: "https://cryptox.io",
  },

  "alcazar": {
    id: "alcazar",
    title: "Alcazar",
    category: "Real Estate",
    description:
      "Luxury urban development project featuring modern architecture and lifestyle amenities",
    detailedDescription:
      "Alcazar is a premium real estate project focused on delivering modern living spaces with sustainable architecture. Our digital solution included a 3D visualization system, lead management CRM, and immersive website.",
    gradient: "from-blue-500 to-cyan-500",
    size: "medium",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    features: [
      "Interactive property website",
      "Virtual tours",
      "Client booking portal",
      "Lead management CRM",
    ],
    technologies: ["Next.js", "Three.js", "MongoDB", "Tailwind CSS"],
    client: "Alcazar Developers",
    date: "June 2024",
    website: "https://alcazardevelopers.com",
  },

  "scary-night-my-malik": {
    id: "scary-night-my-malik",
    title: "Scary Night My Malik",
    category: "Entertainment",
    description:
      "Horror short film production blending suspense, creativity, and cinematic storytelling",
    detailedDescription:
      "Scary Night My Malik is a short horror film production featuring stunning visuals and an eerie narrative. We handled post-production, editing, and promotional content design for the launch campaign.",
    gradient: "from-gray-700 to-black",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1524646432688-8a52b49b1a09?w=1920&h=1080&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1524646432688-8a52b49b1a09?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558980394-0cddf0a0b8c8?w=800&h=600&fit=crop",
    ],
    features: [
      "Post-production & editing",
      "VFX integration",
      "Poster and trailer design",
      "YouTube campaign",
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    client: "My Malik Productions",
    date: "October 2024",
    website: "https://mymalikfilms.com",
  },

  "combine-consultant": {
    id: "combine-consultant",
    title: "Combine Consultant",
    category: "Visa & Immigration",
    description:
      "Trusted visa consultancy offering global study, work, and immigration services",
    detailedDescription:
      "Combine Consultancy provides expert visa and immigration services for students and professionals worldwide. We built their website with inquiry forms, CRM integration, and lead-tracking analytics to streamline client management.",
    gradient: "from-blue-400 to-indigo-600",
    size: "medium",
    image:
      "/projects/cc1.jpg",
    galleryImages: [
      "/projects/cc2.jpg",
      "/projects/cc3.jpg",
      "/projects/cc4.jpg",
    ],
    features: [
      "Study abroad visa consultancy",
      "Work permit guidance",
      "Immigration CRM integration",
      "Leads and inquiry analytics",
    ],
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Google Sheets API"],
    client: "Combine Consultancy",
    date: "September 2024",
    website: "https://combineconsultancy.com",
  },
};


// ✅ Static params for Next.js
export function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({ id }));
}

// ✅ Main Project Detail Page
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030617] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            href="/?scroll=projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
