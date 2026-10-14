import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wifi, ShieldCheck, Sparkles, TrendingUp, DollarSign } from 'lucide-react';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

interface BankingProductsSectionProps {
  onOpenGetStarted: (planName?: string) => void;
}

export const BankingProductsSection: React.FC<BankingProductsSectionProps> = ({ onOpenGetStarted }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Masked heading reveal
      gsap.fromTo(
        '.products-head-line',
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Bento cards reveal
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.bento-product-card');
        gsap.fromTo(
          cards,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-6 lg:py-9 bg-canvas relative border-t border-black/[0.05]" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Eloqwnt style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-[11px] font-mono uppercase tracking-wider text-ink mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>FINANCIAL SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.08]">
              <span className="overflow-hidden block">
                <span className="products-head-line block">Banking designed</span>
              </span>
              <span className="overflow-hidden block">
                <span className="products-head-line block font-light">for how you actually live.</span>
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-full border border-black/[0.07] text-xs font-semibold text-ink shadow-2xs self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>FDIC Insured deposits up to $250,000</span>
          </div>
        </div>

        {/* Asymmetric Bento Showcase (2 Rows: 7+5 / 5+7) */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Everyday Checking (Dark Luxury Hero Tile - 7 Cols) */}
          <div className="bento-product-card lg:col-span-7 bg-[#111215] text-white rounded-[32px] p-8 sm:p-10 border border-black/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-glow-rose/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/60 font-bold">
                  CHECKING & TRANSFERS
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-white border border-white/15 text-xs font-bold">
                  $0 / month fee
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Everyday Account
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    A frictionless digital checking account with no minimum balances, zero hidden maintenance charges, and instant Apple Pay virtual card activation.
                  </p>
                </div>

                {/* Mini Visual Card Preview */}
                <div className="sm:col-span-5 flex justify-center sm:justify-end">
                  <div className="w-[190px] h-[115px] rounded-2xl bg-gradient-to-br from-[#1E2024] via-[#2A2E35] to-[#16181C] border border-white/20 p-3.5 shadow-2xl flex flex-col justify-between transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-[10px] font-black tracking-wider">HEYBANK</span>
                      <Wifi className="w-3 h-3 text-white/70 rotate-90" />
                    </div>
                    <div className="text-[11px] font-mono tracking-widest text-white/80">•••• 4920</div>
                    <div className="flex justify-between items-end text-[8px] text-white/60 font-mono">
                      <span>VIRTUAL DEBIT</span>
                      <span className="text-emerald-400 font-bold">● ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-6 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Instant virtual card</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Free domestic wires</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>1-Tap in-app freeze</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => onOpenGetStarted('Everyday Account')}
                className="elo-btn px-6 py-3 rounded-full bg-white text-ink text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>OPEN EVERYDAY ACCOUNT</span>
                <ArrowRight className="w-3.5 h-3.5 text-ink" />
              </button>
            </div>
          </div>

          {/* Card 2: High-Yield Vault (Warm Amber & Display APY - 5 Cols) */}
          <div className="bento-product-card lg:col-span-5 bg-gradient-to-br from-[#FEFCE8] via-[#FFFBEB] to-[#FEF3C7] rounded-[32px] p-8 sm:p-10 border border-amber-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800/80 font-bold">
                  HIGH-YIELD WEALTH
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 border border-amber-300/60 text-xs font-extrabold">
                  Compounded Daily
                </span>
              </div>

              {/* Massive Display Rate */}
              <div className="my-4">
                <div className="text-5xl sm:text-6xl font-extrabold text-ink tracking-tight font-sans flex items-baseline gap-2">
                  4.85<span className="text-3xl font-light text-amber-700">%</span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">APY</span>
                </div>
                <p className="text-xs font-medium text-amber-900/70 mt-1">
                  12x higher than traditional national banks
                </p>
              </div>

              <h3 className="text-2xl font-bold text-ink tracking-tight mb-2">
                Smart Savings Vault
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6 font-normal">
                Put your cash to work with automatic spare-change roundups and target-based goal vaults with instant withdrawals anytime.
              </p>

              <div className="space-y-2 text-xs text-gray-700 bg-white/60 p-4 rounded-2xl border border-amber-200/60">
                <div className="flex items-center justify-between">
                  <span>Minimum deposit required:</span>
                  <strong className="text-ink">$0.00</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interest payout schedule:</span>
                  <strong className="text-ink">Daily compounding</strong>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenGetStarted('Savings Account')}
                className="w-full py-3.5 px-4 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>START SAVING TODAY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Titanium Cashback Credit Card (Crisp White Metal - 5 Cols) */}
          <div className="bento-product-card lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 border border-black/[0.07] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500 font-bold">
                  REWARDS & LIFESTYLE
                </span>
                <span className="px-3 py-1 rounded-full bg-canvas text-ink border border-black/[0.06] text-xs font-bold">
                  Metal Card
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink tracking-tight mb-2">
                Heybank Titanium Card
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                Premium contactless metal credit card built for worldwide spending with zero international exchange fees and instant cashback.
              </p>

              {/* Tiered Cashback Matrix */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-canvas border border-black/[0.04]">
                  <span className="text-xs font-semibold text-gray-700">Dining, Cafés & Food</span>
                  <span className="text-xs font-bold text-ink font-mono bg-white px-2.5 py-0.5 rounded-full border border-black/[0.06]">3.0% Back</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-canvas border border-black/[0.04]">
                  <span className="text-xs font-semibold text-gray-700">Airlines & Hotel Bookings</span>
                  <span className="text-xs font-bold text-ink font-mono bg-white px-2.5 py-0.5 rounded-full border border-black/[0.06]">2.0% Back</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-canvas border border-black/[0.04]">
                  <span className="text-xs font-semibold text-gray-700">All Everyday Purchases</span>
                  <span className="text-xs font-bold text-ink font-mono bg-white px-2.5 py-0.5 rounded-full border border-black/[0.06]">1.0% Back</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenGetStarted('Credit Card')}
                className="w-full py-3.5 px-4 rounded-full bg-canvas hover:bg-ink text-ink hover:text-white border border-black/[0.08] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>APPLY FOR METAL CARD</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Flexible Transparent Financing (Mint Green - 7 Cols) */}
          <div className="bento-product-card lg:col-span-7 bg-[#F0FDF4] rounded-[32px] p-8 sm:p-10 border border-[#DCFCE7] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-bold">
                  TRANSPARENT FINANCING
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold">
                  From 5.4% APR
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                    Personal Credit & Loans
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Tailored personal loans up to $50,000 with transparent fixed APRs, zero early repayment penalties, and same-day direct disbursement.
                  </p>
                </div>

                {/* Instant Metric Box */}
                <div className="sm:col-span-5 bg-white/90 p-4 rounded-2xl border border-emerald-200 shadow-2xs space-y-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Max Limit</div>
                  <div className="text-2xl font-extrabold text-ink font-sans">$50,000</div>
                  <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <span>⚡ Instant 2-min decision</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-emerald-200/60 text-xs text-gray-700">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>No prepayment penalty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Direct same-day wire</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>No paperwork needed</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenGetStarted('Personal Loans')}
                className="elo-btn px-6 py-3.5 rounded-full bg-ink text-white text-xs font-bold uppercase tracking-wider hover:bg-ink-hover transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>CHECK YOUR LOAN RATE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

