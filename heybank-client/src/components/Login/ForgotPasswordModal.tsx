import React from 'react';
import { KeyRound, CheckCircle2 } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  setEmail: (val: string) => void;
  forgotSent: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  email,
  setEmail,
  forgotSent,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white text-ink rounded-[24px] max-w-sm w-full p-5 shadow-2xl border border-black/10 relative animate-in zoom-in-95">
        <div className="mb-4">
          <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mb-2">
            <KeyRound className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-ink">Reset Password</h3>
          <p className="text-[11px] text-ink-muted mt-0.5">
            Enter your registered email address to receive password reset instructions.
          </p>
        </div>

        {forgotSent ? (
          <div className="py-4 text-center space-y-1.5 bg-emerald-50 rounded-2xl text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
            <div className="text-xs font-bold">Reset Link Sent!</div>
            <div className="text-[10px] text-gray-600">Please check your email inbox to continue.</div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.morgan@heybank.com"
                className="w-full px-3 py-2 rounded-xl border border-black/10 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-black/10 bg-canvas"
              />
            </div>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-2 rounded-full border border-black/10 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-2/3 py-2 rounded-full bg-ink text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
