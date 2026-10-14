import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import frostedCardsImg from '@/assets/frosted_3d_cards.jpg';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

interface CtaSectionProps {
  onOpenGetStarted: () => void;
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenGetStarted, onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Masked headline reveal
      gsap.fromTo(
        '.cta-head-line',
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
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

      // Master 3D container entrance
      if (cardBoxRef.current) {
        gsap.fromTo(
          cardBoxRef.current,
          { scale: 0.97, y: 35, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-5 sm:py-7 bg-canvas relative overflow-hidden selection:bg-accent-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Master 3D Background Container */}
        <div
          ref={cardBoxRef}
          className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center border border-black/[0.08] shadow-[0_24px_70px_-15px_rgba(244,143,107,0.2)]"
        >
          
          {/* 1. Full-Bleed 3D Frosted Cards Background Image */}
          <img
            src={frostedCardsImg}
            alt="3D Frosted Cards Background"
            className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-[70%_center] lg:object-right"
          />

          {/* 2. Layered Studio Light & Frosted Glass Gradient Overlays for High Legibility */}
          {/* Left-to-right gradient ensuring text is 100% legible while showing the cards on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF6EF] via-[#FFF6EF]/90 sm:via-[#FFF6EF]/85 lg:via-[#FFF6EF]/75 to-transparent/10 pointer-events-none" />
          
          {/* Subtle bottom-up warm vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF6EF]/70 via-transparent to-transparent pointer-events-none" />

          {/* Ambient Warm Glow Blobs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-glow-peach/40 rounded-full blur-3xl pointer-events-none" />

          {/* 3. Text & Interactive Elements Floating Directly On Top */}
          <div className="relative z-10 w-full max-w-7xl mx-auto p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7 text-left">
              
              {/* Micro-Eyebrow Pill Badge — removed Sparkles icon */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-2xs">
                <span className="text-[11px] font-mono font-bold tracking-wider text-ink uppercase">
                  LIMITED EDITION · FROSTED CARDS
                </span>
              </div>

              {/* Massive 3D Editorial Headline */}
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-ink tracking-tight leading-[1.04]">
                  <span className="overflow-hidden block">
                    <span className="cta-head-line block">Ready to bank</span>
                  </span>
                  <span className="overflow-hidden block">
                    <span className="cta-head-line block font-light italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-glow-rose to-ink">
                      better?
                    </span>
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal pt-1 max-w-lg">
                  Open your Heybank account today and receive our award-winning translucent frosted glass debit card — with instant virtual activation and zero hidden fees.
                </p>
              </div>

              {/* Feature Pill Matrix with Frosted Backdrop — removed Check icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-lg">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-2xs text-xs font-semibold text-gray-900">
                  <span className="text-emerald-700 font-bold mx-1">—</span>
                  <span>Instant virtual card in Apple Pay</span>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-2xs text-xs font-semibold text-gray-900">
                  <span className="text-emerald-700 font-bold mx-1">—</span>
                  <span>Zero international ATM fees</span>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-2xs text-xs font-semibold text-gray-900">
                  <span className="text-emerald-700 font-bold mx-1">—</span>
                  <span>4 Frosted acrylic tints</span>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/60 shadow-2xs text-xs font-semibold text-gray-900">
                  <span className="text-emerald-700 font-bold mx-1">—</span>
                  <span>FDIC Insured up to $250,000</span>
                </div>
              </div>

              {/* Action Buttons Deck — removed MessageSquare from secondary CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  id="cta-get-started-btn"
                  className="group px-8 py-4 rounded-full bg-ink hover:bg-neutral-900 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 cursor-pointer"
                >
                  <span>ORDER YOUR CARD</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={onOpenContact}
                  id="cta-contact-btn"
                  className="px-7 py-4 rounded-full bg-white/90 hover:bg-white text-ink border border-black/15 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center"
                >
                  <span>CONTACT SALES</span>
                </button>
              </div>

              {/* Rating Subtext */}
              <div className="flex items-center gap-2.5 text-xs text-gray-600 font-medium pt-1">
                <div className="flex items-center gap-0.5 text-amber-500 font-bold tracking-[0.1em]">
                  ★★★★★
                </div>
                <span>Rated 4.9/5 by 232,000+ cardholders worldwide</span>
              </div>

            </div>
          </div>

          {/* Floating Pill on the 3D Cards side (Visible on Desktop) — removed CreditCard icon */}
          <div className="hidden lg:flex absolute bottom-8 right-8 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-lg text-ink">
            <div>
              <div className="text-[10px] font-mono uppercase text-accent font-bold">Translucent Acrylic</div>
              <div className="text-xs font-bold">Rose · Peach · Sage · Clear</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaSection;
