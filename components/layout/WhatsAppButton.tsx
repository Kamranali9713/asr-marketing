"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

type WhatsAppSettings = {
  url: string;
  whatsapp_message: string | null;
  button_label: string | null;
  is_active: boolean | null;
};

function buildWhatsAppUrl(rawUrl: string, message: string) {
  const trimmed = rawUrl.trim();
  if (!trimmed) return "";

  try {
    const url = new URL(trimmed);
    if (!url.hostname.includes("wa.me") && !url.hostname.includes("whatsapp")) {
      return trimmed;
    }
    url.searchParams.set("text", message);
    return url.toString();
  } catch {
    const digits = trimmed.replace(/\D/g, "");
    return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : "";
  }
}

export function WhatsAppButton() {
  const [settings, setSettings] = useState<WhatsAppSettings | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadWhatsApp = async () => {
      // Read the URL first. This keeps the button working even if the optional
      // WhatsApp settings columns have not been migrated yet.
      const { data, error } = await supabase
        .from("social_links")
        .select("url")
        .eq("platform", "whatsapp")
        .order("order_index", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (!mounted) return;

      if (error || !data?.url) {
        console.error("WhatsApp button: unable to load social link", error);
        setSettings(null);
        return;
      }

      // Load optional admin settings separately. If these columns are not
      // available yet, use safe defaults instead of hiding the button.
      const settingsResult = await supabase
        .from("social_links")
        .select("whatsapp_message, button_label, is_active")
        .eq("platform", "whatsapp")
        .order("order_index", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (!mounted) return;

      if (settingsResult.error) {
        setSettings({
          url: data.url,
          whatsapp_message:
            "Hello ASR Marketing! I would like to know more about your services. Please share more details.",
          button_label: "Let's Talk",
          is_active: true,
        });
        return;
      }

      const optional = settingsResult.data;
      setSettings({
        url: data.url,
        whatsapp_message: optional?.whatsapp_message ?? null,
        button_label: optional?.button_label ?? "Let's Talk",
        is_active: optional?.is_active ?? true,
      });
    };

    loadWhatsApp();

    const channel = supabase
      .channel("whatsapp-button-live")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "social_links" },
        () => loadWhatsApp()
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  if (!settings?.url || settings.is_active === false) return null;

  const message =
    settings.whatsapp_message?.trim() ||
    "Hello ASR Marketing! I would like to know more about your services. Please share more details.";
  const whatsappUrl = buildWhatsAppUrl(settings.url, message);

  if (!whatsappUrl) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[99999] group"
    >
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
      <span className="relative flex items-center gap-2.5 px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,.35)] hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_16px_50px_rgba(37,211,102,.45)] transition-all duration-300 ring-1 ring-white/20">
        <span className="flex items-center justify-center w-6 h-6 shrink-0" aria-hidden="true">
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
            <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.55 1.74 6.55L3 29l6.6-1.72A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.6c-2.02 0-4-.54-5.73-1.57l-.4-.24-3.91 1.02 1.04-3.8-.26-.41A10.6 10.6 0 1 1 16 26.6Zm5.82-7.95c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.74-1.79-1.01-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.5 5.58 4.9.78.34 1.39.54 1.87.69.79.25 1.5.21 2.07.13.63-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.62-.38Z" />
          </svg>
        </span>
        <span className="hidden sm:block font-semibold text-sm">
          {settings.button_label?.trim() || "Let's Talk"}
        </span>
      </span>
    </a>
  );
}
