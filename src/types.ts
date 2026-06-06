export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  basePrice: number; // For cost estimations
  pricingDetail: string; // e.g., "Starting at $120"
  iconName: string; // Lucide icon identifier
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  homeSize: string;
  preferredDate: string;
  preferredTime: string;
  specialInstructions: string;
  estimatedPrice: number;
  submittedAt: string;
  status: 'Pending Review' | 'Confirmed' | 'Completed';
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}
