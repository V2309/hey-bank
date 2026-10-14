import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Wifi } from 'lucide-react';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

interface HeroSectionProps {
  onOpenGetStarted: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGetStarted, onOpenVideo }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1. Pill badge entrance
      gsap.fromTo(
        '.hero-pill',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.15,
          clearProps: 'transform,opacity',
        }
      );

      // 2. Headline masked line-by-line reveal
      if (headlineRef.current) {
        const revealLines = headlineRef.current.querySelectorAll('.hero-reveal-line');
        gsap.fromTo(
          revealLines,
          { yPercent: 115, opacity: 0, filter: 'blur(4px)' },
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.05,
            stagger: 0.12,
            ease: 'power4.out',
            delay: 0.28,
            clearProps: 'transform,opacity,filter',
          }
        );
      }

      // 3. Subtext
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.65,
            clearProps: 'transform,opacity',
          }
        );
      }

      // 4. CTAs
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.8,
            clearProps: 'transform,opacity',
          }
        );
      }

      // 5. Social proof
      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.95,
            clearProps: 'transform,opacity',
          }
        );
      }

      // 6. Cards visual composition (Oversized scale settling into natural size)
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current,
          { scale: 1.07, y: 30, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1.15,
            ease: 'power3.out',
            delay: 0.4,
            clearProps: 'transform,opacity',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-12 pb-6 lg:pt-14 lg:pb-8 overflow-hidden bg-canvas">
      {/* Background Soft Ambient Blobs */}
      <div ref={blobsRef}>
        <div className="hero-blob absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-br from-glow-peach/35 via-glow-rose/40 to-glow-indigo/30 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="hero-blob absolute -bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-glow-yellow/25 via-glow-yellow/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Small pill: Eloqwnt style dot badge */}
            <div className="hero-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-ink uppercase">NEXT-GEN BANKING · 100% SECURED</span>
            </div>

            {/* Large editorial headline with overflow-hidden mask reveals */}
            <div className="space-y-1">
              <h1 ref={headlineRef} className="text-[44px] sm:text-[62px] lg:text-[76px] leading-[1.04] font-extrabold text-ink tracking-tight">
                <span className="overflow-hidden block py-0.5">
                  <span className="hero-reveal-line block transform">Digital banking</span>
                </span>
                <span className="overflow-hidden block py-0.5">
                  <span className="hero-reveal-line block transform">
                    <span className="font-light">made for</span>
                    <span className="inline-block align-middle mx-3 sm:mx-4">
                      {/* Decorative colorful pill shape */}
                      <span className="inline-block w-20 sm:w-28 lg:w-32 h-9 sm:h-12 lg:h-14 rounded-full bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] shadow-sm transform hover:scale-105 transition-transform"></span>
                    </span>
                  </span>
                </span>
                <span className="overflow-hidden block py-0.5">
                  <span className="hero-reveal-line block font-bold tracking-tight transform">digital life.</span>
                </span>
              </h1>
            </div>

            {/* Supporting description */}
            <p ref={subtextRef} className="text-base sm:text-lg text-ink-muted max-w-xl leading-relaxed font-normal">
              Simple, secure banking designed to help you manage your money, build better habits, and move confidently toward your goals.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onOpenGetStarted}
                id="hero-primary-cta"
                className="elo-btn group px-8 py-4 rounded-full bg-ink text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-xl active:scale-[0.98] flex items-center gap-3 cursor-pointer"
              >
                <span>GET STARTED NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                id="hero-watch-video-btn"
                className="group flex items-center gap-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-ink hover:text-black py-2 px-2 transition-colors cursor-pointer hover-line-link"
              >
                <div className="w-10 h-10 rounded-full border border-black/15 bg-white flex items-center justify-center group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch video</span>
              </button>
            </div>

            {/* Customer Rating & Avatars — no Lucide Star icons, use text stars */}
            <div ref={socialRef} className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-canvas object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-canvas object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-canvas object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-canvas object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Customer"
                />
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#EAB308]">
                  <span className="text-sm tracking-wide">★★★★★</span>
                  <span className="text-xs font-bold text-ink ml-1">4.8</span>
                </div>
                <div className="text-[12px] text-gray-500 font-medium">
                  Trusted by 232K+ customers
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Banking Card Composition — removed spinning text and floating stat */}
          <div ref={cardsRef} className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
            
            {/* Circular Backdrop Aura */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Subtle background circular disk */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFE4E6]/60 via-glow-yellow/40 to-glow-indigo/50 blur-2xl -z-0"></div>
              
              {/* Card Composition Wrapper */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                
                {/* Secondary Background Card (Crimson / Coral Pink gradient) */}
                <div
                  className="absolute w-[290px] sm:w-[340px] h-[175px] sm:h-[205px] rounded-[22px] bg-gradient-to-br from-accent via-[#FB7185] to-accent-hover text-white p-5 shadow-2xl border border-white/20 transform rotate-12 translate-x-8 translate-y-12 transition-transform duration-500 hover:rotate-14"
                  style={{ transformOrigin: 'center' }}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-black tracking-widest text-white/90">HEYBANK</span>
                    <Wifi className="w-4 h-4 text-white/80 rotate-90" />
                  </div>
                  <div className="mt-8 font-mono tracking-widest text-xs sm:text-sm text-white/90">
                    •••• •••• •••• 8842
                  </div>
                  <div className="mt-4 flex justify-between items-end">
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-white/70">Cardholder</div>
                      <div className="text-xs font-semibold tracking-wide">ALEXANDER V.</div>
                    </div>
                    {/* Mastercard dual circle logo */}
                    <div className="flex -space-x-2 items-center">
                      <div className="w-6 h-6 rounded-full bg-[#EA580C]/90"></div>
                      <div className="w-6 h-6 rounded-full bg-[#FACC15]/90 mix-blend-screen"></div>
                    </div>
                  </div>
                </div>

                {/* Primary Foreground Card */}
                <div
                  className="relative z-10 w-[300px] sm:w-[355px] h-[185px] sm:h-[218px] rounded-[24px] bg-gradient-to-br from-[#38BDF8] via-[#6366F1] to-[#A855F7] text-white p-5 sm:p-6 shadow-2xl border border-white/30 transform -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
                >
                  {/* Subtle card sheen */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none"></div>

                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-base sm:text-lg font-black tracking-wider text-white">VISA</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-5 rounded bg-[#FDE047]/80 flex items-center justify-center opacity-80">
                        <div className="w-3 h-2 border border-black/20 rounded-xs"></div>
                      </div>
                      <Wifi className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-7 font-mono text-sm sm:text-base tracking-[0.18em] text-white font-medium drop-shadow-xs relative z-10">
                    1234 5678 9000 0000
                  </div>

                  <div className="mt-5 sm:mt-6 flex justify-between items-end relative z-10">
                    <div>
                      <div className="text-[8px] uppercase tracking-widest text-white/80 font-bold">CARD HOLDER</div>
                      <div className="text-xs sm:text-sm font-bold tracking-wider uppercase">KARTIK BANSAL</div>
                    </div>
                    <div>
                      <div className="text-[8px] uppercase tracking-widest text-white/80 font-bold">EXPIRES</div>
                      <div className="text-xs sm:text-sm font-mono font-bold tracking-wider">08 / 28</div>
                    </div>
                    {/* Visa / hologram circles */}
                    <div className="flex -space-x-2 items-center">
                      <div className="w-6 h-6 rounded-full bg-white/70 backdrop-blur-xs"></div>
                      <div className="w-6 h-6 rounded-full bg-white/40 backdrop-blur-xs"></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
