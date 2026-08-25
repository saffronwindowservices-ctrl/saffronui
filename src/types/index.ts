import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  price: string;
  rating: number;
  badge?: string;
  image: string;
  category: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export type ReviewStatus = "pending" | "approved" | "published";

export interface Review {
  id: string;
  customerName: string;
  email: string;
  serviceType: string;
  rating: number;
  title: string;
  message: string;
  image: string | null;
  status: ReviewStatus;
  createdAt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
