import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useSectionFadeIn } from '../utils/useScrollReveal';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useSectionFadeIn<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="py-4 sm:py-5 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft rounded container */}
        <div ref={sectionRef} className="bg-[#F4F2EC] rounded-[24px] p-5 sm:p-8 border border-black/[0.05] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Content */}
            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Stay updated
              </h3>
              <p className="text-sm text-ink-muted max-w-md">
                Subscribe to get the latest news, offers and updates from Heybank.
              </p>
            </div>

            {/* Middle: Email Form */}
            <div className="w-full lg:max-w-md ml-auto mr-auto lg:mr-0">
              {isSubmitted ? (
                <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-full px-6 py-3.5 flex items-center justify-center gap-2 text-xs font-bold text-[#065F46] animate-in fade-in">
                  <span>✓ Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-5 pr-36 py-3.5 bg-white rounded-full border border-black/10 text-xs sm:text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-5 py-2.5 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
