"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface ServiceNavigationLinkProps {
  sectionId: string;
  className?: string;
}

export function ServiceNavigationLink({ sectionId, className = "" }: ServiceNavigationLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Services
    </Link>
  );
}

