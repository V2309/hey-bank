import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../utils/useScrollReveal';

interface ImpactSectionProps {
  onOpenGetStarted: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenGetStarted }) => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    selector: '.stat-item',
    stagger: 0.12,
    yOffset: 40,
    duration: 0.7,
  });

  // Counter animation refs
  const customersRef = useCountUp(232, 'K');
  const uptimeRef = useCountUp(98.9, '%');
  const transactionsRef = useCountUp(150, 'M');
  const countriesRef = useCountUp(25, '');

  return (
    <section className="py-5 sm:py-7 bg-canvas" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Pastel Container */}
        <div className="bg-[#EEF2FF] rounded-[28px] p-6 sm:p-8 lg:p-10 border border-[#E0E7FF] shadow-xs relative overflow-hidden">
          
          {/* Subtle background abstract shapes */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E0E7FF]/70 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FCE7F3]/60 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Side — Eloqwnt style dot badge */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E0E7FF] text-[11px] font-mono uppercase tracking-wider text-ink shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span>WHO WE ARE · IMPACT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.1]">
                Banking that
                <br />
                makes an impact
              </h2>

              <p className="text-base text-ink-muted leading-relaxed">
                We're building a simpler, more transparent financial experience for everyone with a focus on human-centered innovation, inclusion, and customer satisfaction.
              </p>

              <div>
                <button
                  onClick={onOpenGetStarted}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-ink text-ink hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer border border-black/[0.06]"
                >
                  <span>ABOUT HEYBANK</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side: Stats Grid — no icon boxes, typography-only */}
            <div ref={containerRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 sm:pl-8 lg:border-l lg:border-black/[0.08]">
              
              {/* Stat 1 */}
              <div className="stat-item space-y-2">
                <div className="flex items-baseline gap-1">
                  <span ref={customersRef} className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">0K</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#6366F1]">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-600">Happy Customers</div>
              </div>

              {/* Stat 2 */}
              <div className="stat-item space-y-2">
                <div className="flex items-baseline gap-1">
                  <span ref={uptimeRef} className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">0%</span>
                </div>
                <div className="text-sm font-semibold text-gray-600">Uptime & Reliability</div>
              </div>

              {/* Stat 3 */}
              <div className="stat-item space-y-2">
                <div className="flex items-baseline gap-1">
                  <span ref={transactionsRef} className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">0M</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#DB2777]">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-600">Transactions Monthly</div>
              </div>

              {/* Stat 4 */}
              <div className="stat-item space-y-2">
                <div className="flex items-baseline gap-1">
                  <span ref={countriesRef} className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">0</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0284C7]">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-600">Countries Supported</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
