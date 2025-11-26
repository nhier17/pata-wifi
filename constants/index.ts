import {
  CheckCircle,
  Wallet,
  Map,
  Wrench,
  RefreshCcw,
  Handshake,
  Headset,
} from 'lucide-react'

export const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why Us' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#coverage', label: 'Coverage' },
    {href: '/impact', label: 'Impact'},
    { href: '#contact', label: 'Contact' },
  ]

//footer
export const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why Us' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#coverage', label: 'Coverage' },
    { href: '#contact', label: 'Contact' },
]

export const services = [
  {
    title: 'Home Internet',
    desc: 'Reliable home broadband with flexible speeds for streaming, learning and working from home.',
    img: 'https://i.pinimg.com/736x/80/02/06/800206c592ffe136236234af04f1773c.jpg',
  },
  {
    title: 'Business Internet',
    desc: 'Dedicated and shared business connectivity with SLAs, static IP options and priority support.',
    img: 'https://i.pinimg.com/1200x/34/42/7d/34427d6f26d84673a0885988c7cdb495.jpg',
  },
  {
    title: 'Kadogo Daily WiFi',
    desc: 'Affordable daily pass to stay online — perfect for students, gig work and short-term needs.',
    img: 'https://i.pinimg.com/736x/8d/e8/d7/8de8d72c4476818baf6ba5a06eed1c0d.jpg',
  },
  {
    title: 'Reseller Bandwidth',
    desc: 'Wholesale bandwidth for local ISPs and network resellers with competitive pricing.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Estate & Community Hotspots',
    desc: 'Managed WiFi for estates, apartments, campuses and shared community spaces.',
    img: 'https://i.pinimg.com/736x/7f/68/7f/7f687f2a2afb3bfd841af60e7ab62db7.jpg',
  },
]

//why choose us
export const whyUs = [
  { title: 'Reliable Connection', icon: CheckCircle, desc: 'Fiber‑backed network with smart redundancy for consistent uptime.' },
  { title: 'Affordable Plans', icon: Wallet, desc: 'Value pricing for Kenyan households, SMEs and students.' },
  { title: 'Fast Support', icon: Headset, desc: 'Friendly local team available to help when you need it.' },
  { title: 'Wide Coverage', icon: Map, desc: 'Active in multiple towns and estates with growing reach.' },
  { title: 'Quick Installation', icon: Wrench, desc: 'Swift installs and activations so you can get online fast.' },
  { title: 'Flexible Options', icon: RefreshCcw, desc: 'Daily passes, monthlies, dedicated, hotspots and reseller options.' },
  { title: 'Community‑Focused', icon: Handshake, desc: 'Designed for estates, learning and businesses across Kenya.' },
]

//pricing
export const plans = [
  {
    name: "Daily WiFi Pass (Kadogo)",
    price: "KSh 50 / 24hrs",
    speed: "Up to 100 Mbps • Unlimited",
    features: [
      "24-hour access",
      "Fast speeds up to 100 Mbps",
      "Unlimited usage",
      "Perfect for mobile users",
    ],
    popular: true,
  },

  {
    name: "Home Internet — 8 Mbps",
    price: "KSh 1,500",
    speed: "8 Mbps Unlimited",
    features: [
      "Unlimited usage",
      "Stable fiber speeds",
      "Great for light browsing & streaming",
    ],
  },
  {
    name: "Home Internet — 15 Mbps",
    price: "KSh 2,000",
    speed: "15 Mbps Unlimited",
    features: [
      "Unlimited usage",
      "Smooth streaming",
      "Work-from-home friendly",
    ],
  },
  {
    name: "Home Internet — 20 Mbps",
    price: "KSh 2,500",
    speed: "20 Mbps Unlimited",
    features: [
      "Unlimited usage",
      "HD streaming",
      "Gaming friendly",
    ],
  },
  {
    name: "Home Internet — 30 Mbps",
    price: "KSh 3,000",
    speed: "30 Mbps Unlimited",
    features: [
      "Unlimited usage",
      "Perfect for families",
      "Multiple devices",
    ],
  },
  {
    name: "Home Internet — 50 Mbps",
    price: "KSh 5,000",
    speed: "50 Mbps Unlimited",
    features: [
      "Unlimited usage",
      "4K streaming",
      "Heavy downloading",
      "Large households",
    ],
  },

  {
    name: "Reseller Package — 100 to 500 Mbps",
    price: "KSh 250 per Mbps",
    speed: "100–500 Mbps",
    features: [
      "Wholesale pricing",
      "Collection at any ATC Tower",
      "Perfect for WISPs & hotspots",
      "Flexible scalability",
    ],
  },
  {
    name: "Reseller Package — 500 Mbps to 1 Gbps",
    price: "KSh 220 per Mbps",
    speed: "500 Mbps – 1 Gbps",
    features: [
      "Lower cost per Mbps",
      "High-capacity backhaul",
      "Data center connections",
    ],
  },
  {
    name: "Reseller Package — 1 Gbps+",
    price: "KSh 180 per Mbps",
    speed: "1 Gbps+",
    features: [
      "Enterprise-grade capacity",
      "Carrier-level reliability",
      "Scalable to multi-Gbps",
    ],
  },

  {
    name: "Business Internet",
    price: "Tailored on Request",
    speed: "Custom Packages",
    features: [
      "Dedicated bandwidth",
      "Enterprise support",
      "Public IPs",
      "Custom SLAs available",
    ],
  },
];



//coverage
export const coverage = {
towns: [
  'Nairobi', 'Mombasa', 'Nakuru', 'Eldoret', 'Thika',
  'Kisumu', 'Nyeri', 'Kitengela', 'Ruiru', 'Kiambu', 'Kajiado(DC Area)'
],
estates: [
  'South B', 'South C', 'Ngong Road', 'Embakasi', 'Kasarani',
  'Utawala', 'Rongai', 'Ruaka', 'Zimmerman', 'Donholm','Lumumba drive',
  'Obama', 'Mathare', 'Kariobangi', 'Civil Servant', 'Huruma', 'Mowlem', 'Outering Rd',
  'Korogocho',
],
}

export const impactStories = [
  {
    id: "connecting-kawangware-schools",
    title: "Connecting Schools in Kawangware",
    excerpt:
      "Pata WiFi partnered with local community leaders to provide affordable internet to three schools, enabling over 800 students to access digital learning.",
    date: "Feb 2025",
    img: "https://images.unsplash.com/photo-1588075592395-39a08751b749?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "supporting-small-businesses",
    title: "Supporting Small Businesses with Reliable Internet",
    excerpt:
      "We have empowered over 120 SMEs across Nairobi and Thika with stable fiber connections to grow their digital operations.",
    date: "Jan 2025",
    img: "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "community-hotspots",
    title: "Community Hotspots for Low-Income Estates",
    excerpt:
      "Our Kadogo Hotspot solution has enabled thousands of residents to access affordable daily internet for work, study and communication.",
    date: "Dec 2024",
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a6?auto=format&fit=crop&w=1200&q=80",
  },
];
