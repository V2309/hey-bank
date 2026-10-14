import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { FEATURES } from '../data/mockData';
import { BankingFeature } from '../types';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<BankingFeature | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Masked heading reveal
      gsap.fromTo(
        '.feature-head-line',
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

      // Feature items stagger
      if (cardsContainerRef.current) {
        const items = cardsContainerRef.current.querySelectorAll('.feature-item');
        gsap.fromTo(
          items,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split features: first one is hero, rest are stacked
  const heroFeature = FEATURES[0];
  const stackedFeatures = FEATURES.slice(1);

  return (
    <section ref={sectionRef} className="py-6 lg:py-9 bg-canvas relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Eloqwnt style dot badge & masked headline */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-mono uppercase tracking-wider text-ink mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.12]">
            <span className="overflow-hidden block">
              <span className="feature-head-line block">Everything you need,</span>
            </span>
            <span className="overflow-hidden block">
              <span className="feature-head-line block font-light">all in one place</span>
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            Powerful banking tools designed around the way you live and work.
          </p>
        </div>

        {/* Asymmetric 2-col layout: large hero card + 3 stacked cards */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Large Featured Card */}
          {heroFeature && (
            <div
              className="feature-item lg:col-span-5 bg-white rounded-[24px] p-8 sm:p-10 border border-black/[0.06] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Numbered indicator instead of icon */}
                <div className="text-6xl font-extrabold text-black/[0.06] leading-none mb-4 font-mono">01</div>

                <h3 className="text-2xl font-bold text-ink tracking-tight mb-3">
                  {heroFeature.title}
                </h3>

                <p className="text-sm text-ink-muted leading-relaxed mb-6 font-normal">
                  {heroFeature.description}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.04]">
                <button
                  onClick={() => setSelectedFeature(heroFeature)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-black uppercase tracking-wider transition-colors cursor-pointer py-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* 3 Stacked Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stackedFeatures.map((feature, idx) => (
              <div
                key={feature.id}
                className="feature-item bg-white rounded-[24px] p-6 sm:p-7 border border-black/[0.06] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Numbered indicator */}
                  <div className="text-4xl font-extrabold text-black/[0.06] leading-none mb-3 font-mono">
                    {String(idx + 2).padStart(2, '0')}
                  </div>

                  <h3 className="text-lg font-bold text-ink tracking-tight mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/[0.04]">
                  <button
                    onClick={() => setSelectedFeature(feature)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-black uppercase tracking-wider transition-colors cursor-pointer py-1"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative animate-in zoom-in-95">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                {selectedFeature.category}
              </span>
              <h3 className="text-2xl font-extrabold text-ink">
                {selectedFeature.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {selectedFeature.description}
            </p>

            <div className="space-y-3 mb-6 bg-canvas p-4 rounded-2xl border border-black/[0.04]">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-700">Key Capabilities</div>
              {selectedFeature.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <span className="text-ink-muted shrink-0 mt-0.5">—</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedFeature(null)}
              className="w-full py-3 rounded-full bg-ink text-white text-xs font-bold uppercase tracking-wider hover:bg-ink-hover transition-colors"
            >
              Close Overview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
