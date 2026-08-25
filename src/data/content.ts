import {
  Home,
  Building2,
  SquareStack,
  Sparkles,
  Droplets,
  PanelTop,
  ClipboardList,
  CalendarCheck,
  Wand2,
  Eye,
  ShieldCheck,
  Leaf,
  Clock,
  BadgeCheck,
  PiggyBank,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Stat,
  ProcessStep,
  Testimonial,
  FaqItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export const BRAND = {
  name: "Saffron Window Cleaning",
  fullName: "Saffron  Window Cleaning Window Cleaning",
  tagline: "Ontario's Local Window Cleaning Experts",
  phone: "+1 (289) 688-2963",
  phoneHref: "tel:+19055550118",
  email: "patelshubh5009@gmail.com",
  address: "Oshawa Ontario, Canada",
  serviceArea:
    "Oshawa,Ajax,Pickering,Whitby,Bowmanville,Durham region",
};

export const HERO_BADGES: string[] = [
  "Fully Insured",
  "10+ Years Experience",
  "5-Star Rated",
  "Family Owned",
];

export const STATS: Stat[] = [
  { value: "1,000+", label: "Homes Cleaned" },
  { value: "10+", label: "Years Experience" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "92%", label: "Repeat Clients" },
];

export const SERVICES: Service[] = [
  {
    id: "residential",
    icon: Home,
    category: "Residential",
    title: "Residential Window Cleaning",
    description: "Streak-free windows for a brighter, more welcoming home.",
    details: [
      "Interior & exterior glass",
      "Window sills and frames",
      "Screen removal & cleaning",
    ],
    price: "From $99",
    rating: 4.9,
    badge: "Most popular",
    image: "from-sky-100 via-cyan-50 to-white",
  },
  {
    id: "commercial",
    icon: Building2,
    category: "Commercial",
    title: "Commercial Window Cleaning",
    description: "Reliable service that keeps your business looking its best.",
    details: [
      "Storefronts & offices",
      "Flexible after-hours scheduling",
      "Recurring maintenance plans",
    ],
    price: "From $179",
    rating: 4.8,
    badge: "Business ready",
    image: "from-indigo-100 via-sky-50 to-white",
  },
  {
    id: "interior",
    icon: PanelTop,
    category: "Interior",
    title: "Interior Window Cleaning",
    description: "Detailed, respectful cleaning for every inside pane.",
    details: [
      "Drop cloths & shoe covers",
      "Track and sill detailing",
      "Furniture-safe technique",
    ],
    price: "From $75",
    rating: 5,
    badge: "Detail-first",
    image: "from-sky-50 via-white to-cyan-50",
  },
  {
    id: "exterior",
    icon: Droplets,
    category: "Exterior",
    title: "Exterior Window Cleaning",
    description: "A safer way to get a spotless exterior shine.",
    details: [
      "Purified water-fed poles",
      "Ladder-safe for tall homes",
      "Spot-free natural dry",
    ],
    price: "From $89",
    rating: 4.9,
    badge: "Pure water",
    image: "from-cyan-100 via-sky-50 to-white",
  },
  {
    id: "gutter",
    icon: SquareStack,
    category: "Add-on",
    title: "Gutter Cleaning",
    description: "Seasonal clearing to protect your home from buildup.",
    details: [
      "Debris removal & flush",
      "Downspout check",
      "Seasonal photo report",
    ],
    price: "From $129",
    rating: 4.7,
    badge: "Protective care",
    image: "from-amber-50 via-sky-50 to-white",
  },
  {
    id: "screen-track",
    icon: Sparkles,
    category: "Add-on",
    title: "Screen & Track Cleaning",
    description: "Finish every job with clean tracks and screens.",
    details: [
      "Screen mesh rinse",
      "Track vacuum & wipe",
      "Smooth-gliding finish",
    ],
    price: "From $59",
    rating: 4.8,
    badge: "Finish detail",
    image: "from-emerald-50 via-sky-50 to-white",
  },
];

export const WHY_US: { icon: typeof ShieldCheck; label: string }[] = [
  { icon: BadgeCheck, label: "Experienced Team" },
  { icon: Leaf, label: "Eco-Friendly Cleaning" },
  { icon: Clock, label: "Reliable Scheduling" },
  { icon: ShieldCheck, label: "Satisfaction Guaranteed" },
  { icon: PiggyBank, label: "Affordable Pricing" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Request Quote",
    description: "Tell us about your windows.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Schedule Visit",
    description: "Pick a time that works.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Professional Cleaning",
    description: "Our crew handles the rest.",
    icon: Wand2,
  },
  {
    step: "04",
    title: "Enjoy the View",
    description: "Relax with a clearer space.",
    icon: Eye,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Ontario",
    quote: "Prompt, polite, and the windows have never looked better.",
    rating: 5,
  },
  {
    name: "Amir K.",
    location: "Ontario",
    quote: "Great communication from booking through completion.",
    rating: 5,
  },
  {
    name: "Claire T.",
    location: "Aurora",
    quote: "Reliable local service I'm happy to recommend.",
    rating: 5,
  },
];

export const SERVICE_AREAS: string[] = [
    "Oshawa","Ajax","Pickering","Whitby","Bowmanville","Durham region"
];

export const FAQS: FaqItem[] = [
  {
    question: "How is window cleaning priced?",
    answer:
      "Pricing depends on the number of panes, accessibility, and whether you'd like interior, exterior, or both. We provide a clear, itemized quote before any work begins — no surprises.",
  },
  {
    question: "How often should I schedule cleaning?",
    answer:
      "Most homes look their best with a seasonal clean, 2–4 times a year. Businesses with street-facing glass often prefer a monthly or bi-weekly plan.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes — Stone Cliff Window Cleaning is fully insured for residential and commercial work, so you're covered for complete peace of mind on every visit.",
  },
  {
    question: "What types of windows can you clean?",
    answer:
      "We work on standard, bay, skylight, storm, and high-access windows using extension poles and purified water-fed systems where ladders aren't ideal.",
  },
  {
    question: "How does the booking process work?",
    answer:
      "Request a free quote online or by phone, pick a visit time that suits your schedule, and our crew handles the rest from arrival to final wipe-down.",
  },
];

export const SERVICE_OPTIONS: string[] = [
  "Residential Window Cleaning",
  "Commercial Window Cleaning",
  "Interior Window Cleaning",
  "Exterior Window Cleaning",
  "Gutter Cleaning",
  "Screen & Track Cleaning",
  "Not sure — advise me",
];
