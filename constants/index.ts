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
  { label: "Home", href: "/" },
  { label: "About", href: "/?sec=about" },
  { label: "Services", href: "/?sec=services" },
  { label: "Coverage", href: "/?sec=coverage" },
  { label: "Why Choose Us", href: "/?sec=why" },
  { label: "Pricing", href: "/?sec=pricing" },
  { label: "Impact", href: "/impact" },
];

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

export const DEFAULT_TARIFFS = plans.map(plan => ({
  value: plan.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  label: `${plan.name} — ${plan.price}`,
}));


//coverage
export const coverage = {
towns: [
  'Nairobi', 'Mombasa', 'Nakuru', 'Eldoret', 'Thika',
  'Kisumu', 'Nyeri', 'Kitengela', 'Ruiru', 'Kiambu', 'Kajiado(DC Area)'
],
estates: [
  'Ngong Road', 'Embakasi', 'Kasarani', 'Rongai', 'Ruaka', 'Donholm', 'Lumumba drive',
  'Obama', 'Mathare', 'Kariobangi', 'Civil Servant', 'Huruma', 'Mowlem', 'Outering Rd',
  'Korogocho',
],
}


//impact stats
export const impactStats = [
  { label: "Estates Connected", value: 20, suffix: "+" },
  { label: "Households Served", value: 3000, suffix: "+" },
  { label: "SMEs Connected", value: 150, suffix: "+" },
  { label: "Network Uptime", value: 98, suffix: "%" },
];

// /stories
export const impactStories = [
    {
    id: "korogocho-ftth-rollout",
    title: "Lighting Up Korogocho With Fiber",
    teaser:
      "We deployed 1.25km of fiber into Korogocho, connected 30 homes, and trained local youth to lead installations despite heavy deployment challenges.",
    full: `
Korogocho is one of Nairobi’s most densely populated informal settlements. For years, thousands of families lived without reliable internet.

To change this, Pata WiFi deployed 1.25km of fiber directly from our main distribution office into the heart of Korogocho. We also set up multiple local pick-up and support stations to make access easier.

Four months after breaking ground, we connected 30 households to high-speed internet — enabling online work, learning, communication, security systems, and entertainment.

Challenges included early wireless infrastructure theft, unsafe access due to territorial gatekeepers, and installation delays. To overcome this, we trained local youth in FTTH deployment. Since then, installations and support are now handled safely and efficiently from within the community itself.
    `,
    img: "https://i.pinimg.com/1200x/7f/01/ef/7f01ef26155c8db35715948f2a6c8b4d.jpg",
    region: "Korogocho",
    category: "Infrastructure & Community FTTH",
    date: "2025",
  },

  {
    id: "kariobangi-street-wifi",
    title: "How Kariobangi Came Online",
    teaser:
      "Street WiFi and 100Mbps Kadogo internet transformed daily digital access for small traders, boda riders, and content creators.",
    full: `
Kariobangi is a place of daily hustle — from mama mbogas and welders to boda riders and content creators. Expensive internet had held many back.

Pata WiFi launched street-based WiFi hotspots directly where people work. Then we introduced a powerful package: 100 Mbps unlimited for 24 hours.

This shifted everything. Youth now upload content instantly, apply for online jobs, attend interviews, and run businesses without delays. For the first time, fast internet became accessible on demand — without contracts or expensive bundles.
    `,
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    region: "Kariobangi",
    category: "Kadogo WiFi & Youth Empowerment",
    date: "2024",
  },

  {
    id: "dandora-ondemand-ftth",
    title: "On-Demand Home Fiber Coming to Dandora",
    teaser:
      "We are preparing an on-demand FTTH rollout in Dandora focused on flexibility, affordability, and no monthly commitments.",
    full: `
Families in Dandora rely heavily on the internet for schoolwork, communication, and small businesses—but bundles remain expensive and home internet often inflexible.

Pata WiFi is rolling out a new on-demand Fiber-to-the-Home model allowing residents to activate internet only when needed, avoid monthly commitments, and enjoy real fiber speeds.

This approach was shaped directly by community feedback where flexibility matters as much as speed. The goal is to give households full control of costs while maintaining stable connectivity.
    `,
    img: "https://i.pinimg.com/736x/55/eb/0c/55eb0c14f9017d306f5714a3904dbeb4.jpg",
    region: "Dandora",
    category: "On-Demand Home Fiber",
    date: "Coming Soon",
  },
  {
    id: "kasarani-homes",
    title: "Transforming Internet Access in Kasarani & Lumumba Drive",
    teaser:
      "We connected multiple estates across Kasarani where speeds were poor. Students now join online classes without interruption and families stream and work reliably.",
    full: `Before Pata WiFi, many parts of Kasarani and Lumumba Drive had slow, unreliable connections and expensive bundles. We deployed fiber-backed last-mile links and affordable home plans. Since then, students attend online classes without interruptions, small shops accept mobile payments, and families stream and work from home with confidence.`,
    img: "https://i.pinimg.com/1200x/66/6f/a8/666fa8a278708251f1043093ef2a1512.jpg",
    region: "Kasarani",
    category: "Home Connectivity",
    date: "Mar 2025",
  },
  {
    id: "embakasi-sme-growth",
    title: "Embakasi SMEs grow with reliable connectivity",
    teaser:
      "Cyber cafés and mini shops in Embakasi now accept digital payments and serve more customers thanks to stable internet.",
    full: `Embakasi has seen a rapid uplift in small business productivity. Cyber cafés and mini-shops that previously lost sales due to flaky connections now accept payments, provide services reliably and expand digital offerings. Pata WiFi worked with owners to optimize connectivity and advise on POS and mobile-pay setups.`,
    img: "https://i.pinimg.com/1200x/f3/44/52/f34452302add40865a91bac9efba0d74.jpg",
    region: "Embakasi",
    category: "Business & SME",
    date: "Feb 2025",
  },
  {
    id: "kariobangi-mathare",
    title: "Kariobangi & Mathare: Closing the connectivity gap",
    teaser:
      "We expanded last-mile access and low-cost Kadogo passes so more residents and small businesses can get online affordably.",
    full: `By deploying last-mile links and partnering with community leaders in Kariobangi and Mathare, we launched Kadogo hotspots and affordable home plans. Residents now access education resources, start small e-commerce initiatives, and maintain contact with family and customers.`,
    img: "https://i.pinimg.com/736x/8a/de/da/8adedae325b6a59791bf9b347594f95d.jpg",
    region: "Kariobangi",
    category: "Community Hotspots",
    date: "Dec 2024",
  },
  // add more stories as you create them
];


