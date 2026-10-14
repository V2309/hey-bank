import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { HeroSection } from '../../components/HeroSection';
import { MarqueeTicker } from '../../components/MarqueeTicker';
import { TrustedBySection } from '../../components/TrustedBySection';
import { FeaturesSection } from '../../components/FeaturesSection';
import { BankingProductsSection } from '../../components/BankingProductsSection';
import { ImpactSection } from '../../components/ImpactSection';
import { HowItWorksSection } from '../../components/HowItWorksSection';
import { MobileAppPromoSection } from '../../components/MobileAppPromoSection';
import { SecuritySection } from '../../components/SecuritySection';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { CtaSection } from '../../components/CtaSection';
import { NewsletterSection } from '../../components/NewsletterSection';
import { Footer } from '../../components/Footer';
import { useAuth } from '../../context/AuthContext';

interface LandingPageProps {
  onOpenGetStarted?: (planName?: string) => void;
  onOpenVideo?: () => void;
  onOpenContact?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenGetStarted: propOnOpenGetStarted,
  onOpenVideo: propOnOpenVideo,
  onOpenContact: propOnOpenContact,
}) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleOpenGetStarted = propOnOpenGetStarted || auth.openGetStarted;
  const handleOpenVideo = propOnOpenVideo || auth.openVideo;
  const handleOpenContact = propOnOpenContact || auth.openContact;

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-accent-subtle">
      {/* Navigation */}
      <Navbar
        onOpenGetStarted={() => handleOpenGetStarted()}
        onOpenLogin={() => navigate('/login')}
      />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <HeroSection
          onOpenGetStarted={() => handleOpenGetStarted()}
          onOpenVideo={handleOpenVideo}
        />

        {/* Section 1.5: Eloqwnt-style Infinite Ticker Line */}
        <MarqueeTicker />

        {/* Section 2: Trusted By */}
        <TrustedBySection />

        {/* Section 3: Features */}
        <FeaturesSection />

        {/* Section 4: Banking Products */}
        <BankingProductsSection onOpenGetStarted={handleOpenGetStarted} />

        {/* Section 5: Impact / Statistics */}
        <ImpactSection onOpenGetStarted={() => handleOpenGetStarted()} />

        {/* Section 6: How It Works */}
        <HowItWorksSection />

        {/* Section 7: Mobile App Promo */}
        <MobileAppPromoSection />

        {/* Section 8: Security */}
        <SecuritySection />

        {/* Section 9: Testimonials */}
        <TestimonialsSection />

        {/* Section 10: Final CTA */}
        <CtaSection
          onOpenGetStarted={() => handleOpenGetStarted()}
          onOpenContact={handleOpenContact}
        />

        {/* Section 11: Newsletter */}
        <NewsletterSection />
      </main>

      {/* Section 12: Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
