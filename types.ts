export enum PropertyType {
  VILLA = 'VILLA',
  APARTMENT = 'APARTMENT'
}

export interface Amenity {
  icon: string; // Lucide icon name mapping
  label: string;
}

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  location: string;
  price: string;
  description: string;
  highlights: string[];
  amenities: string[];
  image: string;
  galleryLink?: string;
}

export interface SafariDay {
  day: number;
  title: string;
  description: string;
}

export interface SafariItinerary {
  id: string;
  title: string;
  duration: string;
  description: string;
  timeline: SafariDay[];
  highlights: string[];
  image: string;
  mapImage?: string;
}

export interface NavItem {
  label: string;
  path: string;
}