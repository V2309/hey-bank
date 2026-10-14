import {
  BankingFeature,
  BankingProduct,
  SecurityFeature,
  StepItem,
  Testimonial,
  Transaction,
} from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    role: 'Marketing Manager',
    company: 'Veloce Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      'Heybank has completely changed the way I manage my money. It’s fast, secure and incredibly easy to use.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'David L.',
    role: 'Entrepreneur',
    company: 'Aura Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      'The best digital banking experience I’ve ever had. Everything I need is right here in one app.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Emily R.',
    role: 'Freelancer',
    company: 'Independent Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    quote:
      'I feel more in control of my finances than ever before. Real-time notifications and automatic savings are game changers!',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Marcus Chen',
    role: 'Tech Lead',
    company: 'FinSphere',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote:
      'Switching our personal and business accounts to Heybank took under 10 minutes. The interface is breathtakingly clean.',
    rating: 5,
  },
];

export const FEATURES: BankingFeature[] = [
  {
    id: 'f1',
    category: 'TRANSFERS & PAYMENTS',
    title: 'Digital Payments',
    description: 'Send, receive and manage payments instantly and securely across 150+ regions.',
    iconName: 'credit-card',
    color: {
      bg: 'bg-[#EDE9FE]', // soft lavender
      icon: 'text-[#6366F1]',
      border: 'border-[#DDD6FE]',
    },
    details: [
      'Instant zero-fee domestic transfers',
      'Virtual multi-currency cards with freeze control',
      'Real-time spending categorisation',
    ],
  },
  {
    id: 'f2',
    category: 'SAVINGS & WEALTH',
    title: 'Smart Savings',
    description: 'Automatically save money and watch your money grow over time with automated round-ups.',
    iconName: 'bar-chart-3',
    color: {
      bg: 'bg-[#FEF3C7]', // soft pastel yellow/amber
      icon: 'text-[#D97706]',
      border: 'border-[#FDE68A]',
    },
    details: [
      'Automated spare change round-ups',
      'Dedicated high-yield goal vaults (4.85% APY)',
      'Scheduled weekly automatic deposits',
    ],
  },
  {
    id: 'f3',
    category: 'PROTECTION',
    title: 'Banking Security',
    description: 'Top-level security designed to keep your money and data safe at all times.',
    iconName: 'shield-check',
    color: {
      bg: 'bg-[#FFE4E6]', // soft pastel pink/rose
      icon: 'text-[#E11D48]',
      border: 'border-[#FECDD3]',
    },
    details: [
      '256-bit AES military-grade data encryption',
      'Biometric face and fingerprint authorization',
      'Instant card lock with single-tap in app',
    ],
  },
  {
    id: 'f4',
    category: 'CONVENIENCE',
    title: 'Mobile Banking',
    description: 'Bank anytime, anywhere with our award-winning, powerful mobile app.',
    iconName: 'smartphone',
    color: {
      bg: 'bg-[#E0F2FE]', // soft pastel sky blue
      icon: 'text-[#0284C7]',
      border: 'border-[#BAE6FD]',
    },
    details: [
      'Available on iOS & Android devices',
      'Push transaction alerts under 1 second',
      'Digital wallet sync for Apple Pay & Google Pay',
    ],
  },
];

export const PRODUCTS: BankingProduct[] = [
  {
    id: 'p1',
    title: 'Everyday Account',
    tagline: 'Simple banking for everyday spending',
    description: 'A frictionless checking account with no hidden fees, zero maintenance charges, and instant virtual debit card.',
    highlight: '$0 / month',
    iconName: 'wallet',
    color: 'from-[#FDF2F8] to-[#FFF1F2]',
    features: ['Free virtual & physical debit card', 'Unlimited domestic transfers', 'Real-time transaction alerts'],
    ctaText: 'Open Everyday Account',
  },
  {
    id: 'p2',
    title: 'Credit Card',
    tagline: 'Flexible spending with rewards and control',
    description: 'Premium metal card offering cashback on dining, travel and everyday purchases, with flexible payment options.',
    highlight: 'Up to 3.0% Cashback',
    iconName: 'credit-card',
    color: 'from-[#EDE9FE] to-[#F3E8FF]',
    features: ['No foreign transaction fees', 'Comprehensive travel insurance', 'Instant card freeze in app'],
    ctaText: 'Apply for Card',
  },
  {
    id: 'p3',
    title: 'Savings Account',
    tagline: 'Grow your money with competitive interest',
    description: 'High-yield savings account that grows your deposits without locking up your liquidity.',
    highlight: '4.85% Annual APY',
    iconName: 'piggy-bank',
    color: 'from-[#FEF3C7] to-[#FFFBEB]',
    features: ['No minimum deposit required', 'Interest paid monthly', 'Multiple target-based vaults'],
    ctaText: 'Start Saving',
  },
  {
    id: 'p4',
    title: 'Personal Loans',
    tagline: 'Flexible financing when you need it',
    description: 'Tailored personal loans with low fixed APR, transparent repayment terms, and same-day direct disbursement.',
    highlight: 'Fixed rates from 5.4% APR',
    iconName: 'landmark',
    color: 'from-[#E0F2FE] to-[#F0FDF4]',
    features: ['Borrow up to $50,000', 'No prepayment penalties', 'Instant decision in 2 minutes'],
    ctaText: 'Check Loan Rate',
  },
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up in minutes and create your secure account with a valid government ID.',
    iconName: 'user-plus',
  },
  {
    number: '02',
    title: 'Add Money',
    description: 'Add funds using your card, bank transfer, Apple Pay, or instant wire.',
    iconName: 'credit-card',
  },
  {
    number: '03',
    title: 'Start Banking',
    description: 'Spend, send, save and invest your money with total confidence and ease.',
    iconName: 'trending-up',
  },
];

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    id: 'sec1',
    title: '256-bit Encryption',
    description: 'Your financial data and transactions are protected with bank-grade TLS 1.3 & AES-256 encryption at rest and in transit.',
    iconName: 'shield',
    tag: 'Enterprise Standard',
  },
  {
    id: 'sec2',
    title: 'Fraud Protection',
    description: 'Real-time AI monitoring continuously analyzes suspicious activities and prevents unauthorized transactions before they execute.',
    iconName: 'activity',
    tag: '24/7 Live Monitoring',
  },
  {
    id: 'sec3',
    title: 'Secure Authentication',
    description: 'Multi-layer authentication, device pairing verification, and biometric FaceID/TouchID checks ensure only you access your funds.',
    iconName: 'fingerprint',
    tag: 'Biometric & FIDO2',
  },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx1',
    merchant: 'Amazon Shopping',
    category: 'Retail & Electronics',
    date: 'Today, 10:30 AM',
    amount: -120.0,
    type: 'debit',
    icon: 'shopping-bag',
  },
  {
    id: 'tx2',
    merchant: 'Salary Deposit',
    category: 'Direct Income',
    date: 'May 28, 2026',
    amount: 5300.2,
    type: 'credit',
    icon: 'dollar-sign',
  },
  {
    id: 'tx3',
    merchant: 'Netflix Subscription',
    category: 'Entertainment',
    date: 'May 27, 2026',
    amount: -11.99,
    type: 'debit',
    icon: 'film',
  },
  {
    id: 'tx4',
    merchant: 'Starbucks Coffee',
    category: 'Food & Dining',
    date: 'May 27, 2026',
    amount: -6.5,
    type: 'debit',
    icon: 'coffee',
  },
];

export const TRUSTED_COMPANIES = [
  { name: 'Microsoft', logo: 'Microsoft' },
  { name: 'Google', logo: 'Google' },
  { name: 'Airbnb', logo: 'Airbnb' },
  { name: 'Amazon', logo: 'Amazon' },
  { name: 'Spotify', logo: 'Spotify' },
  { name: 'Uber', logo: 'Uber' },
];
