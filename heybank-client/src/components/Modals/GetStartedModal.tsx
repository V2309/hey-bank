import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, CreditCard, Sparkles, CheckCircle2, Copy } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan || 'Everyday Account');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCard = () => {
    navigator.clipboard?.writeText('4532 8901 2345 6789');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-[32px] max-w-xl w-full p-6 sm:p-9 shadow-2xl border border-black/10 relative overflow-hidden animate-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-gray-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-[10px] font-extrabold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Bank-Grade Onboarding</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111215] tracking-tight">
            {step === 1 && 'Choose your account'}
            {step === 2 && 'Enter your details'}
            {step === 3 && 'Your Heybank account is ready!'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {step === 1 && 'Select the plan that fits your financial goals best.'}
            {step === 2 && 'Takes less than 60 seconds with no credit score impact.'}
            {step === 3 && 'Here is your new virtual card and account details.'}
          </p>
        </div>

        {/* Step 1: Select Plan */}
        {step === 1 && (
          <div className="space-y-4">
            {[
              {
                id: 'Everyday Account',
                title: 'Everyday Account',
                price: '$0 / month',
                desc: 'Zero maintenance fee, instant virtual card, unlimited free transfers.',
                badge: 'Most Popular',
              },
              {
                id: 'High-Yield Savings',
                title: 'High-Yield Savings',
                price: '4.85% APY',
                desc: 'Automated round-ups, goal vaults, and compound interest paid monthly.',
                badge: 'Top Rate',
              },
              {
                id: 'Credit Card',
                title: 'Metal Credit Card',
                price: '3.0% Cashback',
                desc: 'Premium travel benefits, no foreign transaction fees, instant freeze.',
                badge: 'Premium',
              },
            ].map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-[#111215] bg-[#FAF8F5] ring-2 ring-black/10'
                      : 'border-black/[0.08] hover:border-black/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#111215]">{plan.title}</span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-black/5 text-gray-700">
                        {plan.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{plan.desc}</p>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <div className="text-xs font-bold text-[#111215]">{plan.price}</div>
                    <div className={`w-5 h-5 rounded-full mt-1 ml-auto flex items-center justify-center ${
                      isSelected ? 'bg-[#111215] text-white' : 'border border-black/20'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              );
            })}

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-full bg-[#111215] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              <span>Continue to Verification</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: User Details */}
        {step === 2 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Morgan"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="alex.morgan@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                Phone Number (for SMS verification)
              </label>
              <input
                type="tel"
                required
                placeholder="+1 (555) 019-2834"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500">
              <input type="checkbox" required defaultChecked id="terms" className="rounded text-black" />
              <label htmlFor="terms">I agree to the Heybank Terms of Service and Privacy Policy.</label>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-full border border-black/15 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-black/5"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-full bg-[#111215] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success & Virtual Card Display */}
        {step === 3 && (
          <div className="space-y-6 text-center">
            {/* Virtual Card Preview */}
            <div className="w-full max-w-[340px] mx-auto h-[190px] rounded-[22px] bg-gradient-to-br from-[#38BDF8] via-[#6366F1] to-[#A855F7] text-white p-5 shadow-xl text-left relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-sm font-black tracking-widest text-white">VISA</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  Virtual Debit
                </span>
              </div>

              <div className="mt-7 font-mono text-sm tracking-widest text-white">
                4532 8901 2345 6789
              </div>

              <div className="mt-6 flex justify-between items-end">
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-white/80 font-bold">CARDHOLDER</div>
                  <div className="text-xs font-bold tracking-wide uppercase">
                    {formData.firstName || 'ALEX'} {formData.lastName || 'MORGAN'}
                  </div>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-white/80 font-bold">EXP</div>
                  <div className="text-xs font-mono font-bold">08/30</div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-black/[0.05] text-left space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">Account Number:</span>
                <span className="font-mono font-bold text-[#111215]">892019482910</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">Routing (ABA):</span>
                <span className="font-mono font-bold text-[#111215]">122000496</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">Starting Balance:</span>
                <span className="font-bold text-[#10B981]">$0.00</span>
              </div>
            </div>

            <button
              onClick={handleCopyCard}
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black py-1 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied to clipboard!' : 'Copy virtual card details'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-full bg-[#111215] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Go to Dashboard Demo
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
