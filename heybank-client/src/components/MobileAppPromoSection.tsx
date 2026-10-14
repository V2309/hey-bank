import React from 'react';
import { PromoHeader } from './MobileAppPromo/PromoHeader';
import { ProductShowcaseStage } from './MobileAppPromo/ProductShowcaseStage';
import { PromoPillars } from './MobileAppPromo/PromoPillars';

export const MobileAppPromoSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-9 bg-canvas text-ink overflow-hidden relative selection:bg-accent-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Master Container with Original Warm Gradient Background preserved */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#EDE9FE]/90 via-[#FCE7F3]/70 to-[#FEF3C7]/80 border border-black/[0.06] shadow-sm p-5 sm:p-7 lg:p-8 overflow-hidden">

          {/* Subtle Ambient Glows */}
          <div className="absolute -top-28 -left-28 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none" />

          {/* Editorial Header & Download Badges */}
          <PromoHeader />

          {/* 3D Fintech Showcase Stage */}
          <ProductShowcaseStage />

          {/* 3 Core Architecture Pillars */}
          <PromoPillars />

        </div>

      </div>
    </section>
  );
};

export default MobileAppPromoSection;
