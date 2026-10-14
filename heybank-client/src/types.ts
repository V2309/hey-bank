export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BankingFeature {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: 'credit-card' | 'bar-chart-3' | 'shield-check' | 'smartphone';
  color: {
    bg: string;
    icon: string;
    border: string;
  };
  details: string[];
}

export interface BankingProduct {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  iconName: 'wallet' | 'credit-card' | 'piggy-bank' | 'landmark';
  color: string;
  features: string[];
  ctaText: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
  iconName?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: 'user-plus' | 'credit-card' | 'trending-up';
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'activity' | 'fingerprint';
  tag: string;
}

export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  date: string;
  amount: number;
  type: 'debit' | 'credit';
  icon: string;
}

export interface UserProfile {
  name: string;
  email: string;
  accountType: string;
  balance: number;
}
