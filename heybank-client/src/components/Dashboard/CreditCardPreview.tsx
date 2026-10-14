import React from 'react';
import { Wifi } from 'lucide-react';

interface CreditCardPreviewProps {
  userName?: string;
  cardNumber?: string;
  expiry?: string;
}

export const CreditCardPreview: React.FC<CreditCardPreviewProps> = ({
  userName = 'ADRIAN HAJDIN',
  cardNumber = '1234 1234 1234 1234',
  expiry = '06/24',
}) => {
  return (
    <div className="relative w-full h-[200px] flex items-center justify-center select-none">
      {/* Background Peeking Card (Blue Wave + Mastercard) */}
      <div className="absolute w-[92%] h-[165px] rounded-[18px] bg-gradient-to-tr from-[#0284C7] via-[#2563EB] to-[#38BDF8] p-4 text-white shadow-md transform translate-x-4 translate-y-4 overflow-hidden border border-white/20">
        {/* Abstract subtle waves */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="flex justify-between items-start">
          <span className="text-xs font-bold tracking-tight text-white/90">Heybank Card</span>
          <div className="flex -space-x-1.5 items-center">
            <div className="w-4 h-4 rounded-full bg-[#EA580C]/90" />
            <div className="w-4 h-4 rounded-full bg-[#FACC15]/90 mix-blend-screen" />
          </div>
        </div>

        <div className="absolute bottom-3 left-4 right-4 font-mono text-[11px] tracking-widest text-white/80">
          {cardNumber}
        </div>
      </div>

      {/* Foreground Main Card (Dark Charcoal + Iridescent Wave Stripe) */}
      <div className="relative z-10 w-[95%] h-[175px] rounded-[20px] bg-[#1E293B] text-white shadow-xl border border-white/10 overflow-hidden flex flex-col justify-between p-5">
        {/* Right side iridescent purple/pink vertical wave graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] bg-gradient-to-b from-[#C084FC] via-[#F472B6] to-[#FB7185] flex flex-col justify-between p-3.5 items-end">
          <Wifi className="w-4 h-4 text-white/90 rotate-90" />
          <span className="text-xs font-black italic tracking-wider text-white">VISA</span>
        </div>

        {/* Card Header */}
        <div className="relative z-10">
          <span className="text-xs font-bold tracking-tight text-gray-200">
            JS Mastery Pro.
          </span>
        </div>

        {/* Card Details & Number */}
        <div className="relative z-10 space-y-2.5">
          <div className="flex items-center gap-6 text-[9px] font-mono tracking-wider text-gray-300">
            <div>
              <div className="text-[7.5px] uppercase text-gray-400">Cardholder</div>
              <div className="font-bold text-white text-[10px]">{userName}</div>
            </div>
            <div>
              <div className="text-[7.5px] uppercase text-gray-400">Exp</div>
              <div className="font-bold text-white text-[10px]">{expiry}</div>
            </div>
          </div>

          <div className="font-mono text-xs tracking-[0.16em] text-white font-medium drop-shadow-xs">
            {cardNumber}
          </div>
        </div>
      </div>
    </div>
  );
};
