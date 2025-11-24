"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { navItems } from "../../constants";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on ESC and when resizing to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
 <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        isScrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-2 group">
          <Image
          src="/images/logo.jpeg"
          alt="Pata WiFi Logo"
          width={50}
          height={50}
          className="rounded-full object-cover"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="#pricing" className="btn btn-primary hidden md:inline-flex  text-white px-3 py-2">Get Connected</Link>
          <Button
            type="button"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom pb-3">
          <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur p-3">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="rounded-lg px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link href="#pricing" onClick={toggleMenu} className="btn btn-primary flex-1 bg-primary text-white px-3 py-2">
                Get Connected</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
};  