import type { Metadata } from "next";
import { Orbitron, Exo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patawifi.co.ke"), 

  title: {
    default: "Pata WiFi | Fast & Affordable Internet Provider in Kenya",
    template: "%s | Pata WiFi",
  },

  description:
    "Pata WiFi Technologies Ltd is a Kenyan internet service provider offering fast, reliable, and affordable internet for homes and businesses. Daily WiFi passes, fiber broadband, hotspots, and reseller bandwidth across Kenya.",

  keywords: [
    "Pata WiFi",
    "internet service provider Kenya",
    "WiFi ISP Kenya",
    "home internet Kenya",
    "fiber internet Nairobi",
    "affordable WiFi Kenya",
    "daily WiFi passes",
    "hotspot internet Kenya",
    "reseller bandwidth Kenya",
  ],

  icons: {
    icon: "/images/logo.jpeg",
  },

  openGraph: {
    title: "Pata WiFi | Internet Service Provider in Kenya",
    description:
      "Fast, reliable, and affordable internet for Kenyan homes and businesses. Fiber broadband, WiFi hotspots, and daily internet passes.",
    url: "https://www.patawifi.co.ke",
    siteName: "Pata WiFi",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Pata WiFi Internet Services in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
    robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${exo.variable} antialiased bg-dark-100`}
      >
        <Suspense fallback={<Loader2 className="animate-spin size-8" />}>
          <Navbar />
        </Suspense>
        {children}
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
