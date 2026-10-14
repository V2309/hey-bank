import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LoginHeaderProps {
  onBackToHome: () => void;
  onOpenGetStarted: () => void;
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({
  onBackToHome,
  onOpenGetStarted,
}) => {
  return (
    <header className="h-14 px-4 sm:px-8 border-b border-black/[0.06] bg-canvas/85 backdrop-blur-md flex items-center justify-between shrink-0 z-30">
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-black transition-all px-3.5 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-black/10 shadow-2xs cursor-pointer active:scale-95"
          id="login-page-back-home-btn"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <div className="h-3.5 w-px bg-black/10 hidden sm:block" />

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBackToHome();
          }}
          className="text-xl font-black tracking-tight text-ink flex items-center group"
        >
          <span>Heybank</span>
          <span className="text-accent inline-block font-black ml-0.5 group-hover:scale-125 transition-transform">.</span>
        </a>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-ink-subtle hidden md:inline font-medium">New to Heybank?</span>
        <button
          onClick={onOpenGetStarted}
          className="px-4 py-1.5 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold transition-all cursor-pointer shadow-2xs hover:shadow-sm active:scale-95"
          id="login-page-register-btn"
        >
          Open Account
        </button>
      </div>
    </header>
  );
};
