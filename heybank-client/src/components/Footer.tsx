import React from 'react';
import { AppleLogo, GooglePlayLogo } from './Icons/StoreLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas border-t border-black/[0.06] pt-8 pb-6 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-2xl font-bold tracking-tight text-ink flex items-center">
              <span className="font-extrabold tracking-tight">Heybank</span>
              <span className="text-accent font-black ml-0.5">.</span>
            </a>
            
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              Heybank is the next-generation digital banking platform built for the modern world. Simple. Secure. Smart.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-black/5 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-black/5 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-black/5 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-black/5 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Banking */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#111215] uppercase tracking-wider">Banking</div>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#products" className="hover:text-black transition-colors">Accounts</a></li>
              <li><a href="#products" className="hover:text-black transition-colors">Cards</a></li>
              <li><a href="#products" className="hover:text-black transition-colors">Loans</a></li>
              <li><a href="#features" className="hover:text-black transition-colors">Investments</a></li>
              <li><a href="#features" className="hover:text-black transition-colors">Savings Vaults</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#111215] uppercase tracking-wider">Company</div>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#impact" className="hover:text-black transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers <span className="text-[10px] bg-[#ECFDF5] text-[#10B981] font-bold px-1.5 py-0.5 rounded-full ml-1">We're hiring</span></a></li>
              <li><a href="#" className="hover:text-black transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#111215] uppercase tracking-wider">Support</div>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#security" className="hover:text-black transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div className="lg:col-span-2 space-y-3" id="download">
            <div className="text-xs font-bold text-[#111215] uppercase tracking-wider">Download App</div>
            <div className="space-y-2 pt-1">
              <a
                href="#download"
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xs transition-all text-[#111215] shadow-2xs"
              >
                <AppleLogo className="w-5 h-5 fill-current shrink-0 group-hover:scale-105 transition-transform" />
                <div className="text-left leading-tight">
                  <div className="text-[8px] uppercase tracking-wider text-gray-400 font-medium">Download on</div>
                  <div className="text-[12px] font-bold tracking-tight">App Store</div>
                </div>
              </a>

              <a
                href="#download"
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xs transition-all text-[#111215] shadow-2xs"
              >
                <GooglePlayLogo className="w-5 h-5 shrink-0 group-hover:scale-105 transition-transform" colored={true} />
                <div className="text-left leading-tight">
                  <div className="text-[8px] uppercase tracking-wider text-gray-400 font-medium">GET IT ON</div>
                  <div className="text-[12px] font-bold tracking-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2026 Heybank Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-black transition-colors">Cookies Settings</a>
            <a href="#" className="hover:text-black transition-colors">Legal Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
