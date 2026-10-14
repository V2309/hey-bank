import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Initial entrance animation
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
      );
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled style threshold
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up (only past 80px)
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bankingLinks = [
    { title: 'Everyday Checking', desc: 'Zero fees & instant debit card', href: '#products' },
    { title: 'High-Yield Savings', desc: 'Grow wealth with 4.85% APY', href: '#features' },
    { title: 'Personal Loans', desc: 'Flexible financing from 5.4%', href: '#products' },
    { title: 'Security & Safety', desc: '256-bit bank grade encryption', href: '#security' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full shadow-none'
      } ${
        isScrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-black/[0.06] shadow-xs py-3.5'
          : 'bg-canvas/70 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8 shrink-0">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-ink flex items-center group shrink-0 select-none whitespace-nowrap"
              id="brand-logo"
            >
              <span className="font-extrabold tracking-tight">Heybank</span>
              <span className="text-accent inline-block font-black ml-0.5 group-hover:scale-125 transition-transform">.</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <a
                href="#"
                className="relative px-3.5 py-1.5 text-[13px] font-semibold text-ink transition-colors hover-line-link whitespace-nowrap"
              >
                <span>Home</span>
              </a>

              {/* Banking Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('banking')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="px-3.5 py-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors inline-flex items-center gap-1.5 cursor-pointer hover-line-link whitespace-nowrap"
                  onClick={() => setActiveDropdown(activeDropdown === 'banking' ? null : 'banking')}
                >
                  <span>Banking</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${activeDropdown === 'banking' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'banking' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl p-2.5 shadow-2xl border border-black/[0.08] transition-all animate-in fade-in slide-in-from-top-2 z-50">
                    {bankingLinks.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block p-3 rounded-xl hover:bg-canvas transition-all group"
                      >
                        <div className="text-[13px] font-semibold text-ink group-hover:translate-x-1 transition-transform">{item.title}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{item.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Customers */}
              <a
                href="#testimonials"
                className="px-3.5 py-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors hover-line-link whitespace-nowrap"
              >
                <span>Customers</span>
              </a>

              {/* Partners */}
              <a
                href="#partners"
                className="px-3.5 py-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors hover-line-link whitespace-nowrap"
              >
                <span>Partners</span>
              </a>

              {/* About us */}
              <a
                href="#impact"
                className="px-3.5 py-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors hover-line-link whitespace-nowrap"
              >
                <span>About us</span>
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase text-ink hover:text-black transition-colors hover-line-link cursor-pointer whitespace-nowrap"
              id="navbar-login-btn"
            >
              LOGIN
            </button>
            <button
              onClick={onOpenGetStarted}
              className="elo-btn px-5 py-2.5 rounded-full bg-ink text-white text-xs font-bold tracking-wider uppercase shadow-sm hover:shadow-md active:scale-[0.98] inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              id="navbar-get-started-btn"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenGetStarted}
              className="px-3.5 py-1.5 rounded-full bg-ink text-white text-xs font-bold uppercase"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-black/5 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas border-b border-black/[0.08] px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-ink rounded-xl bg-black/5"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-xl hover:bg-black/5"
            >
              Banking Products
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-xl hover:bg-black/5"
            >
              Features
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-xl hover:bg-black/5"
            >
              Customers
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-xl hover:bg-black/5"
            >
              About Heybank
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-xl hover:bg-black/5"
            >
              Security
            </a>
          </div>

          <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-center text-xs font-bold tracking-wider uppercase text-ink border border-black/10 rounded-full"
            >
              LOGIN TO ACCOUNT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase text-white bg-ink rounded-full shadow-sm"
            >
              OPEN FREE ACCOUNT →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
