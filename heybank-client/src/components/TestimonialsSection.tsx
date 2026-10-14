import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Masked headline reveal
      gsap.fromTo(
        '.testimonials-head-line',
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

      // Cards entrance
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.testimonial-card');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
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

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= TESTIMONIALS.length - 3 ? 0 : prev + 1));
  };

  // Visible items
  const visibleTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section ref={sectionRef} className="py-6 lg:py-9 bg-canvas relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Eloqwnt style dot badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-mono uppercase tracking-wider text-ink mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>CLIENT VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              <span className="overflow-hidden block">
                <span className="testimonials-head-line block">Loved by thousands</span>
              </span>
              <span className="overflow-hidden block">
                <span className="testimonials-head-line block font-light">of customers</span>
              </span>
            </h2>
          </div>

          {/* Carousel Arrows — functional icons, kept */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-black/15 bg-white flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-black/15 bg-white flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards — no Quote icon, no Star icons */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="testimonial-card bg-white rounded-[26px] p-7 sm:p-8 border border-black/[0.06] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating as text + large typographic opening quote */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-serif text-black/[0.08] leading-none select-none">"</span>
                  <div className="flex items-center gap-1 text-[#F59E0B] text-sm">
                    {'★'.repeat(t.rating)}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-ink leading-relaxed font-normal mb-8">
                  {t.quote}
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-black/[0.04]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-black/[0.06]"
                />
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
