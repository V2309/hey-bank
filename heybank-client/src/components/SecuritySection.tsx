import React, { useEffect, useRef } from 'react';
import { SECURITY_FEATURES } from '../data/mockData';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

export const SecuritySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Masked headline reveal
      gsap.fromTo(
        '.security-head-line',
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

      // Security cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.security-card');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section ref={sectionRef} className="py-6 lg:py-9 bg-canvas relative border-t border-black/[0.04]" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Eloqwnt style dot badge */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-mono uppercase tracking-wider text-ink mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SECURITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15]">
            <span className="overflow-hidden block">
              <span className="security-head-line block">Your money deserves</span>
            </span>
            <span className="overflow-hidden block">
              <span className="security-head-line block font-light">the highest level of security</span>
            </span>
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            We operate with bank-grade encryption, continuous AI threat surveillance, and zero-liability fraud protections.
          </p>
        </div>

        {/* 3 Security Cards Grid — no icon boxes, accent-colored top border instead */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECURITY_FEATURES.map((item, idx) => {
            const borderColor = idx === 0 ? 'border-t-[#10B981]' : idx === 1 ? 'border-t-[#3B82F6]' : 'border-t-[#8B5CF6]';
            
            return (
              <div
                key={item.id}
                className={`security-card bg-white rounded-[26px] p-8 border border-black/[0.06] border-t-[3px] ${borderColor} shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-ink tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-canvas px-3 py-1 rounded-full border border-black/[0.04]">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.04] text-xs font-semibold text-[#10B981]">
                  <span>Active 24/7</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Footer Bar — no Shield icon */}
        <div className="mt-12 p-6 rounded-2xl bg-white/70 border border-black/[0.05] flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Regulated & Compliant:</span>
            <span>PCI-DSS Level 1 Certified · SOC2 Type II Certified · GDPR Compliant</span>
          </div>
          <div className="font-medium text-gray-400">
            Deposits are FDIC insured up to $250,000 via our partner banks.
          </div>
        </div>

      </div>
    </section>
  );
};
