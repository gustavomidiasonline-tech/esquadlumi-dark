import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  link?: string;
  customIcon?: string; // For SVGs if needed
}

export interface Partner {
  name: string;
  logoUrl: string;
  url?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
  date?: string;
  avatarUrl?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
}