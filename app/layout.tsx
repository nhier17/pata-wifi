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
  title: "Pata WiFi",
  description: "Pata WiFi Technologies LTD delivers fast, reliable and affordable internet to Kenyan homes and businesses. Daily WiFi passes, fiber broadband, hotspots, reseller bandwidth and more.",
  icons: {
    icon: "/images/logo.jpeg",
  }
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
