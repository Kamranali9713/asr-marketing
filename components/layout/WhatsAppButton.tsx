"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

export function WhatsAppButton() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const loadWhatsApp = async () => {
      const { data, error } = await supabase
        .from("social_links")
        .select("url")
        .eq("platform", "whatsapp")
        .eq("is_active", true)
        .limit(1)
        .maybeSingle();

      if (!error && data?.url) {
        setWhatsappUrl(data.url);
      } else {
        setWhatsappUrl("");
      }
    };

    loadWhatsApp();

    const channel = supabase
      .channel("whatsapp-button-live")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "social_links",
        },
        () => {
          loadWhatsApp();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (!whatsappUrl) {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-5 bottom-5 sm:right-7 sm:bottom-7 z-[9999] group"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />

      {/* Button */}
      <span className="relative flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,.35)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(37,211,102,.45)] transition-all duration-300">
        <MessageCircle className="w-6 h-6" />

        <span className="hidden sm:block font-semibold">
          Let's Talk
        </span>
      </span>
    </a>
  );
}