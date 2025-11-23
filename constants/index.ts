import {
  CheckCircle,
  Wallet,
  Zap,
  Map,
  Wrench,
  RefreshCcw,
  Handshake,
} from 'lucide-react'

export const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why Us' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#coverage', label: 'Coverage' },
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
  { title: 'Fast Support', icon: Zap, desc: 'Friendly local team available to help when you need it.' },
  { title: 'Wide Coverage', icon: Map, desc: 'Active in multiple towns and estates with growing reach.' },
  { title: 'Quick Installation', icon: Wrench, desc: 'Swift installs and activations so you can get online fast.' },
  { title: 'Flexible Options', icon: RefreshCcw, desc: 'Daily passes, monthlies, dedicated, hotspots and reseller options.' },
  { title: 'Community‑Focused', icon: Handshake, desc: 'Designed for estates, learning and businesses across Kenya.' },
]

//pricing
export const plans = [
  {
    name: 'Daily WiFi (Kadogo Pass)',
    price: 'KSh 50 — 100/day',
    speed: 'Up to 10 Mbps',
    features: ['Pay-as-you-go', 'Great for students', 'Hotspot access'],
    cta: 'Buy Daily Pass',
  },
  {
    name: 'Home Internet — Standard',
    price: 'KSh 2,500/mo',
    speed: '20–30 Mbps',
    features: ['Unlimited data', 'Free router on yearly plan', 'Evening peak optimization'],
    cta: 'Get Home Internet',
  },
  {
    name: 'Home Internet — Turbo',
    price: 'KSh 3,999/mo',
    speed: '50–70 Mbps',
    features: ['Unlimited data', 'Ideal for 4K streaming', 'Gaming friendly latency'],
    cta: 'Get Turbo',
  },
  {
    name: 'Business — Starter',
    price: 'KSh 6,999/mo',
    speed: 'Up to 100 Mbps',
    features: ['Priority support', 'Static IP (optional)', 'SLA available'],
    cta: 'Get Business Internet',
  },
]


//coverage
export const coverage = {
towns: [
  'Nairobi', 'Mombasa', 'Nakuru', 'Eldoret', 'Thika',
  'Kisumu', 'Nyeri', 'Kitengela', 'Ruiru', 'Kiambu',
],
estates: [
  'South B', 'South C', 'Ngong Road', 'Embakasi', 'Kasarani',
  'Utawala', 'Rongai', 'Ruaka', 'Zimmerman', 'Donholm',
],
}