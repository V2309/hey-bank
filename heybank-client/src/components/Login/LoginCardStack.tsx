import React from 'react';
import { Wifi, Shield } from 'lucide-react';

interface LoginCardStackProps {
  activeCardIndex: number;
  onCardClick: (index: number) => void;
}

export const LoginCardStack: React.FC<LoginCardStackProps> = ({
  activeCardIndex,
  onCardClick,
}) => {
  return (
    <div className="space-y-4 select-none">
      {/* Top Headline */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-2xs">
          <Shield className="w-3.5 h-3.5 text-ink" />
          <span className="text-[10.5px] font-bold tracking-wider uppercase text-ink">
            100% SECURE BANKING PORTAL
          </span>
        </div>

        <h1 className="text-3xl xl:text-4xl font-black text-ink tracking-tight leading-[1.15]">
          Manage cards & finances at <span className="underline decoration-accent decoration-4 underline-offset-4">Heybank</span>.
        </h1>

        <p className="text-xs text-ink-muted leading-relaxed max-w-md">
          Switch between card tiers by clicking directly on the card stack or choosing an account type.
        </p>
      </div>

      {/* 3D Interactive Animated Card Stack Container */}
      <div className="relative w-full max-w-md h-[215px] xl:h-[235px] flex items-center justify-center perspective-[1200px]">
        
        {/* CARD 3: Obsidian Private Wealth VIP Card */}
        <div
          onClick={() => onCardClick(2)}
          className={`absolute w-[88%] sm:w-[360px] h-[185px] sm:h-[195px] rounded-[22px] p-4 text-white shadow-2xl border transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
            activeCardIndex === 2
              ? 'z-30 translate-y-0 translate-x-0 rotate-0 scale-100 ring-2 ring-amber-400/60 shadow-[0_20px_45px_rgba(245,158,11,0.25)] border-amber-400/40'
              : 'z-10 -translate-y-7 -translate-x-5 rotate-[-8deg] opacity-75 hover:opacity-95 hover:rotate-[-5deg] border-white/10'
          } bg-gradient-to-br from-[#1C1D24] via-[#0D0E12] to-[#252830]`}
        >
          {/* Gold Sheen Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-400/10 pointer-events-none" />

          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-tight text-amber-400">Heybank</span>
              <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/20 border border-amber-400/30 px-2 py-0.5 rounded-full">
                Private Wealth
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-300/90">
              <Wifi className="w-3 h-3 rotate-90" />
              <span className="text-[10px] font-black italic tracking-widest">VISA INFINITE</span>
            </div>
          </div>

          {/* EMV Microchip & Card Number */}
          <div className="flex items-center gap-3 relative z-10 my-auto">
            <div className="w-9 h-6 rounded bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 shadow-inner flex flex-col justify-around p-1 border border-black/30">
              <div className="w-full h-px bg-black/40" />
              <div className="w-full h-px bg-black/40" />
            </div>
            <span className="font-mono text-sm tracking-[0.22em] text-amber-100 font-semibold drop-shadow-xs">
              •••• •••• •••• 9988
            </span>
          </div>

          <div className="flex justify-between items-end text-xs relative z-10 border-t border-amber-500/20 pt-1">
            <div>
              <div className="text-[7.5px] uppercase tracking-wider text-amber-300/70 font-semibold">Cardholder</div>
              <div className="text-[11px] font-bold tracking-wide uppercase text-white font-mono">VICTORIA STERLING</div>
            </div>
            <div className="text-right">
              <div className="text-[7.5px] uppercase tracking-wider text-amber-300/70 font-semibold">Expires</div>
              <div className="text-[11px] font-mono font-bold text-amber-200">12/32</div>
            </div>
          </div>
        </div>

        {/* CARD 2: Radiant Crimson / Rose Corporate Card */}
        <div
          onClick={() => onCardClick(1)}
          className={`absolute w-[88%] sm:w-[360px] h-[185px] sm:h-[195px] rounded-[22px] p-4 text-white shadow-2xl border transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
            activeCardIndex === 1
              ? 'z-30 translate-y-0 translate-x-0 rotate-0 scale-100 ring-2 ring-rose-400/60 shadow-[0_20px_45px_rgba(244,63,94,0.25)] border-rose-300/40'
              : 'z-20 translate-y-1 translate-x-3 rotate-[3deg] opacity-80 hover:opacity-100 hover:rotate-[1deg] border-white/20'
          } bg-gradient-to-br from-[#E11D48] via-accent to-[#FB7185]`}
        >
          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-tight text-white">Heybank</span>
              <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-rose-100 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                Corporate
              </span>
            </div>
            <div className="flex items-center gap-1 text-white/90">
              <div className="flex -space-x-1.5 mr-1">
                <div className="w-4 h-4 rounded-full bg-[#EA580C]/90" />
                <div className="w-4 h-4 rounded-full bg-[#FACC15]/90 mix-blend-screen" />
              </div>
              <span className="text-[10px] font-black italic tracking-wider">MASTERCARD</span>
            </div>
          </div>

          <div className="flex items-center gap-3 relative z-10 my-auto">
            <div className="w-9 h-6 rounded bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-500 shadow-inner flex flex-col justify-around p-1 border border-black/20">
              <div className="w-full h-px bg-black/40" />
              <div className="w-full h-px bg-black/40" />
            </div>
            <span className="font-mono text-sm tracking-[0.22em] text-white font-semibold drop-shadow-xs">
              •••• •••• •••• 4420
            </span>
          </div>

          <div className="flex justify-between items-end text-xs relative z-10 border-t border-white/20 pt-1">
            <div>
              <div className="text-[7.5px] uppercase tracking-wider text-rose-100/80 font-semibold">Company</div>
              <div className="text-[11px] font-bold tracking-wide uppercase text-white font-mono">ACME CORP TREASURY</div>
            </div>
            <div className="text-right">
              <div className="text-[7.5px] uppercase tracking-wider text-rose-100/80 font-semibold">Expires</div>
              <div className="text-[11px] font-mono font-bold text-white">09/29</div>
            </div>
          </div>
        </div>

        {/* CARD 1: Holographic Sky Indigo Everyday Debit Card */}
        <div
          onClick={() => onCardClick(0)}
          className={`absolute w-[88%] sm:w-[360px] h-[185px] sm:h-[195px] rounded-[22px] p-4 text-white shadow-2xl border transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
            activeCardIndex === 0
              ? 'z-30 translate-y-0 translate-x-0 rotate-0 scale-100 ring-2 ring-sky-400/60 shadow-[0_20px_45px_rgba(56,189,248,0.3)] border-sky-300/40'
              : 'z-20 -translate-y-4 translate-x-4 rotate-[6deg] opacity-80 hover:opacity-100 hover:rotate-[3deg] border-white/30'
          } bg-gradient-to-br from-[#0284C7] via-[#4F46E5] to-[#7C3AED]`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/10 pointer-events-none" />

          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-tight text-white">Heybank</span>
              <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-sky-100 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                Everyday Debit
              </span>
            </div>
            <div className="flex items-center gap-1 text-white/90">
              <Wifi className="w-3 h-3 rotate-90" />
              <span className="text-xs font-black italic tracking-wider text-white">VISA</span>
            </div>
          </div>

          <div className="flex items-center gap-3 relative z-10 my-auto">
            <div className="w-9 h-6 rounded bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-500 shadow-inner flex flex-col justify-around p-1 border border-black/20">
              <div className="w-full h-px bg-black/40" />
              <div className="w-full h-px bg-black/40" />
            </div>
            <span className="font-mono text-sm tracking-[0.22em] text-white font-semibold drop-shadow-xs">
              4532 8901 2345 6789
            </span>
          </div>

          <div className="flex justify-between items-end text-xs relative z-10 border-t border-white/20 pt-1">
            <div>
              <div className="text-[7.5px] uppercase tracking-wider text-sky-100/80 font-semibold">Cardholder</div>
              <div className="text-[11px] font-bold tracking-wide uppercase text-white font-mono">ALEX MORGAN</div>
            </div>
            <div className="text-right">
              <div className="text-[7.5px] uppercase tracking-wider text-sky-100/80 font-semibold">Expires</div>
              <div className="text-[11px] font-mono font-bold text-white">08/30</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
