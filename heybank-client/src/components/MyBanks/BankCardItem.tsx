import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export interface BankCardData {
  id: string;
  bankName: string;
  cardholder: string;
  expiry: string;
  cardNumber: string;
  theme: 'blue' | 'purple';
  spending: number;
  spendingLimit: number;
}

interface BankCardItemProps {
  card: BankCardData;
}

export const BankCardItem: React.FC<BankCardItemProps> = ({ card }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(card.cardNumber.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progressPercent = Math.min(
    100,
    Math.round((card.spending / card.spendingLimit) * 100)
  );

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);
  };

  const isBlue = card.theme === 'blue';

  return (
    <div className="space-y-3.5 select-none group">
      {/* 1. Credit Card Container */}
      <div
        className={`relative w-full h-[185px] sm:h-[195px] rounded-[22px] p-5 text-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between border border-white/20 ${
          isBlue
            ? 'bg-gradient-to-tr from-[#1D4ED8] via-[#2563EB] to-[#38BDF8]'
            : 'bg-gradient-to-tr from-[#4338CA] via-[#4F46E5] to-[#7C3AED]'
        }`}
      >
        {/* Subtle Topographic Wave Lines Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 50 Q 100 20 200 60 T 400 30"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <path
            d="M 0 90 Q 120 40 240 100 T 400 70"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <path
            d="M 0 130 Q 140 80 260 140 T 400 110"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <path
            d="M 0 170 Q 160 120 280 180 T 400 150"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
        </svg>

        {/* Card Header: Bank Name & Copy Button */}
        <div className="flex items-center justify-between relative z-10">
          <span className="text-sm font-bold tracking-tight text-white/95">
            {card.bankName}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            title={copied ? 'Copied!' : 'Copy Card Number'}
            className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center text-white/90 transition-all cursor-pointer shadow-2xs active:scale-90"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Cardholder & Expiry Row */}
        <div className="flex items-center gap-8 text-[9px] font-mono tracking-wider text-white/80 relative z-10 pt-2">
          <div>
            <div className="text-[7.5px] uppercase tracking-wider text-white/60 font-medium">Cardholder</div>
            <div className="font-bold text-white text-[10px] tracking-wide uppercase">
              {card.cardholder}
            </div>
          </div>
          <div>
            <div className="text-[7.5px] uppercase tracking-wider text-white/60 font-medium">Expires</div>
            <div className="font-bold text-white text-[10px] font-mono">
              {card.expiry}
            </div>
          </div>
        </div>

        {/* Bottom Row: 16-Digit Number & Mastercard Logo */}
        <div className="flex items-center justify-between relative z-10 pt-1">
          <span className="font-mono text-xs sm:text-sm tracking-[0.18em] text-white font-medium drop-shadow-xs">
            {card.cardNumber}
          </span>

          {/* Mastercard dual-circle logo */}
          <div className="flex -space-x-2 items-center">
            <div className="w-5 h-5 rounded-full bg-[#EA580C]/90" />
            <div className="w-5 h-5 rounded-full bg-[#FACC15]/90 mix-blend-screen" />
          </div>
        </div>
      </div>

      {/* 2. Spending Progress Section */}
      <div className="space-y-1.5 px-0.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 font-medium">Spending this month</span>
          <span className="font-bold text-gray-900">
            {formatCurrency(card.spending)}
          </span>
        </div>

        {/* Progress bar track */}
        <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isBlue ? 'bg-brand-blue' : 'bg-[#4F46E5]'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
