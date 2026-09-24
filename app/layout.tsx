import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASR Marketing - Your Social Assistance",
  description:
    "We craft innovative digital experiences that elevate your business to new heights with cutting-edge technology and creative excellence.",
  icons: {
    icon: "/logoasr.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoasr.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
