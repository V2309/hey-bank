import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

export const MarqueeTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const tickerItems = [
    '/ $2.4B+ transactions processed',
    '/ 232K+ active cardholders',
    '/ 99.99% system uptime SLA',
    '/ 0% international exchange fees',
    '/ FDIC insured up to $250,000',
    '/ 4.85% APY high-yield savings',
    '/ Instant virtual cards in Apple & Google Pay',
    '/ Bank-grade 256-bit encryption',
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !tickerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Eloqwnt-style horizontal scroll storytelling: vertical scroll drives horizontal offset
      gsap.to(trackRef.current, {
        xPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: tickerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={tickerRef}
      className="w-full border-y border-black/[0.07] bg-canvas-subtle/80 overflow-hidden py-3 select-none"
    >
      <div
        ref={trackRef}
        className="flex w-max animate-marquee space-x-8 text-[12px] sm:text-[13px] font-mono font-bold tracking-wider text-ink-muted uppercase"
      >
        {/* Track 1 */}
        <div className="flex space-x-8 shrink-0 items-center">
          {tickerItems.map((item, index) => (
            <div key={`track-1-${index}`} className="flex items-center space-x-2">
              <span className="hover:text-ink transition-colors cursor-default">{item}</span>
            </div>
          ))}
        </div>

        {/* Track 2 for seamless infinite loop */}
        <div className="flex space-x-8 shrink-0 items-center" aria-hidden="true">
          {tickerItems.map((item, index) => (
            <div key={`track-2-${index}`} className="flex items-center space-x-2">
              <span className="hover:text-ink transition-colors cursor-default">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeTicker;

