import React from 'react';

export const LoginFooter: React.FC = () => {
  return (
    <footer className="h-10 px-4 sm:px-8 border-t border-black/[0.06] bg-canvas text-[10px] text-gray-500 flex items-center justify-between shrink-0 z-10">
      <div>© 2026 Heybank Financial Technologies Inc. Member FDIC.</div>
      <div className="flex items-center gap-3 hidden sm:flex">
        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        <span>•</span>
        <a href="#" className="hover:text-black transition-colors">24/7 Support</a>
      </div>
    </footer>
  );
};
