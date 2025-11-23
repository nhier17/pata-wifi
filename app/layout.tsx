import type { Metadata } from "next";
import { Orbitron, Exo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
