import React from 'react';
import { Outlet } from 'react-router-dom';

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-[100dvh] w-full bg-canvas text-ink flex flex-col justify-between overflow-hidden selection:bg-accent-subtle relative antialiased">
      {/* Rich Warm Ambient Glow Background */}
      <div className="absolute -top-16 -right-16 w-[480px] h-[480px] bg-gradient-to-br from-glow-peach/40 via-glow-rose/35 to-glow-indigo/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-glow-yellow/30 via-glow-yellow/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Content View (either children or Outlet) */}
      <div className="flex-1 flex flex-col min-h-0 w-full relative z-10">
        {children || <Outlet />}
      </div>
    </div>
  );
};

export default AuthLayout;
