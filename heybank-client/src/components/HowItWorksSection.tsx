import React, { useState, useEffect, useRef } from 'react';
import { Bell, ArrowUpRight, ArrowDownLeft, Plus, MoreHorizontal, Home, CreditCard as CardIcon, Send, PieChart, User } from 'lucide-react';
import { STEPS, MOCK_TRANSACTIONS } from '../data/mockData';
import { gsap, ScrollTrigger } from '../utils/gsapInit';

export const HowItWorksSection: React.FC = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [mockBalance, setMockBalance] = useState<number>(24680.50);
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [activeStep, setActiveStep] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Masked heading reveal
      gsap.fromTo(
        '.how-head-line',
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

      // Stagger reveal for step items
      if (stepsRef.current) {
        const items = stepsRef.current.querySelectorAll('.step-item');
        gsap.fromTo(
          items,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Phone mockup entrance
      if (phoneRef.current) {
        gsap.fromTo(
          phoneRef.current,
          { y: 50, scale: 0.96, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: phoneRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleQuickAction = (action: string) => {
    setActiveAction(action);
    if (action === 'Top up') {
      setMockBalance(prev => prev + 500);
      setTransactions(prev => [
        {
          id: `tx-${Date.now()}`,
          merchant: 'Quick Top-up',
          category: 'Instant Transfer',
          date: 'Just now',
          amount: 500.00,
          type: 'credit',
          icon: 'dollar-sign',
        },
        ...prev.slice(0, 3),
      ]);
    }
    setTimeout(() => setActiveAction(null), 1800);
  };

  return (
    <section ref={sectionRef} className="py-6 lg:py-9 bg-canvas relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Eloqwnt style dot badge */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-[11px] font-mono uppercase tracking-wider text-ink mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.12]">
            <span className="overflow-hidden block">
              <span className="how-head-line block">Banking in just</span>
            </span>
            <span className="overflow-hidden block">
              <span className="how-head-line block font-light">a few simple steps</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: 3-Step Process */}
          <div ref={stepsRef} className="lg:col-span-6 space-y-10">
            {/* Step icons row with connected line — using large numbers instead of icons */}
            <div className="grid grid-cols-3 gap-4 relative">
              
              {/* Connector line */}
              <div className="hidden sm:block absolute top-7 left-12 right-12 h-[2px] bg-black/[0.08] -z-0" />

              {STEPS.map((step, idx) => {
                const pastelBg =
                  idx === 0 ? 'bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]' :
                  idx === 1 ? 'bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]' :
                  'bg-[#FFE4E6] text-[#E11D48] border-[#FECDD3]';

                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="step-item flex flex-col items-center text-center cursor-pointer group"
                  >
                    <div
                      className={`w-14 h-14 rounded-full ${pastelBg} border flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 shadow-xs mb-3 ${
                        activeStep === idx ? 'ring-4 ring-black/10' : ''
                      }`}
                    >
                      {/* Large step number instead of icon */}
                      <span className="text-lg font-extrabold">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step details list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  className={`step-item p-4 rounded-2xl transition-all duration-200 ${
                    activeStep === idx ? 'bg-white shadow-sm border border-black/[0.06]' : 'opacity-80 hover:opacity-100'
                  }`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="text-xl font-bold text-gray-400 font-mono mb-1">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-[#111215] mb-2 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust badge — no icon, text only */}
            <div className="step-item bg-white/80 rounded-2xl p-4 border border-black/[0.06] flex items-center gap-3">
              <p className="text-xs text-gray-600">
                <strong className="text-gray-900 font-semibold">Instant verification:</strong> Most accounts are approved within 3 minutes with zero paperwork.
              </p>
            </div>
          </div>

          {/* Right Side: Realistic Mobile Banking Dashboard Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div ref={phoneRef} className="w-full max-w-[370px] bg-white rounded-[36px] p-5 shadow-2xl border-[6px] border-[#1E2024] relative overflow-hidden text-[#111215]">
              
              {/* Phone Speaker & Notch */}
              <div className="w-28 h-4 bg-[#1E2024] rounded-b-xl mx-auto -mt-5 mb-3 flex items-center justify-center">
                <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
              </div>

              {/* App Header / Greeting */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[11px] text-gray-400 font-medium">Good morning,</div>
                  <div className="text-base font-bold text-[#111215] flex items-center gap-1">
                    Alex
                  </div>
                </div>
                <div className="relative p-2 rounded-full bg-[#FAF8F5] border border-black/[0.06] hover:bg-black/5 cursor-pointer">
                  <Bell className="w-4 h-4 text-[#111215]" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#F43F5E]"></span>
                </div>
              </div>

              {/* Total Balance Card */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-black/[0.04] mb-4">
                <div className="text-[11px] text-gray-500 font-medium">Total Balance</div>
                <div className="text-2xl font-extrabold text-[#111215] tracking-tight mt-0.5 font-sans">
                  ${mockBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#10B981] font-semibold mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+8.4% this month</span>
                </div>
              </div>

              {/* Quick Actions Row */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {[
                  { name: 'Send', icon: ArrowUpRight },
                  { name: 'Receive', icon: ArrowDownLeft },
                  { name: 'Top up', icon: Plus },
                  { name: 'More', icon: MoreHorizontal },
                ].map((act) => {
                  const ActionIcon = act.icon;
                  const isHighlighted = activeAction === act.name;
                  return (
                    <button
                      key={act.name}
                      onClick={() => handleQuickAction(act.name)}
                      className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all cursor-pointer ${
                        isHighlighted ? 'bg-[#111215] text-white scale-95' : 'hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isHighlighted ? 'bg-white/20 text-white' : 'bg-[#FAF8F5] text-[#111215] border border-black/[0.06]'
                      }`}>
                        <ActionIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold text-gray-600">{act.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Action feedback toast */}
              {activeAction && (
                <div className="text-[11px] text-center bg-[#ECFDF5] text-[#065F46] py-1 px-3 rounded-lg mb-3 font-semibold animate-in fade-in">
                  ✓ {activeAction === 'Top up' ? 'Added $500.00 to balance' : `${activeAction} action opened`}
                </div>
              )}

              {/* Recent Transactions */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#111215] tracking-wide">Recent Transactions</span>
                  <a href="#features" className="text-[11px] text-[#3B82F6] font-semibold hover:underline">See all</a>
                </div>

                <div className="space-y-2.5 max-h-[190px] overflow-y-auto pr-1">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          tx.type === 'credit' ? 'bg-[#DCFCE7] text-[#16A34A]' : 'bg-[#F3F4F6] text-gray-800'
                        }`}>
                          {tx.merchant.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#111215] line-clamp-1">{tx.merchant}</div>
                          <div className="text-[10px] text-gray-400">{tx.date}</div>
                        </div>
                      </div>
                      <div className={`text-xs font-bold font-mono ${
                        tx.type === 'credit' ? 'text-[#16A34A]' : 'text-[#111215]'
                      }`}>
                        {tx.type === 'credit' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Bottom Tab Bar */}
              <div className="pt-3 mt-2 border-t border-black/[0.06] grid grid-cols-5 items-center justify-items-center text-gray-400">
                <div className="text-[#111215] flex flex-col items-center">
                  <Home className="w-4 h-4" />
                  <span className="text-[8px] font-bold mt-0.5">Home</span>
                </div>
                <div className="hover:text-black flex flex-col items-center cursor-pointer">
                  <CardIcon className="w-4 h-4" />
                  <span className="text-[8px] font-medium mt-0.5">Cards</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#111215] text-white flex items-center justify-center shadow-sm -mt-2 cursor-pointer hover:scale-105 transition-transform">
                  <Send className="w-3.5 h-3.5" />
                </div>
                <div className="hover:text-black flex flex-col items-center cursor-pointer">
                  <PieChart className="w-4 h-4" />
                  <span className="text-[8px] font-medium mt-0.5">Invest</span>
                </div>
                <div className="hover:text-black flex flex-col items-center cursor-pointer">
                  <User className="w-4 h-4" />
                  <span className="text-[8px] font-medium mt-0.5">Profile</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
