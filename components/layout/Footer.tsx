import { footerLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";


export const Footer = () => {
    return (
 <footer id="contact" className="border-t border-white/10 bg-black/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container  grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <Image
            src="/images/logo.jpeg"
            alt="Pata WiFi Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
            />
          </div>
          <p className="text-white/70 mt-3 text-sm">
            Fast, reliable & affordable internet for every Kenyan home & business.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">{link.label}</Link>
            </li>
          ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-white">Support</h4>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><Link href="https://wa.me/254727717901" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</Link></li>
            <li><Link href="tel:+254727717901" className="hover:underline">Call 0727 717 901</Link></li>
            <li><Link href="#cta" className="hover:underline">Request Installation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-white">Address</h4>
          <p className="text-white/70 mt-3 text-sm">Kenya — Serving towns and estates nationwide.</p>
          <p className="text-white/50 text-xs mt-2">Business Hours: Mon–Sat, 8:00am – 6:00pm</p>
        </div>
      </div>
      <div className="container-tight mt-10 pt-6 border-t border-white/10 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Pata WiFi Technologies LTD. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
        </div>
      </div>
      </div>
    </footer>
    );
};