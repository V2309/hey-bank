import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  CreditCard,
  History,
  Send,
  PlusCircle,
  Search,
  LogOut,
  Layers
} from 'lucide-react';
import { UserProfile } from '../../types';

interface DashboardSidebarProps {
  user: UserProfile;
  onLogout: () => void;
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  user,
  onLogout,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'my-banks', label: 'My Banks', icon: CreditCard, path: '/my-banks' },
    { id: 'history', label: 'Transaction History', icon: History, path: '/transaction-history' },
    { id: 'transfer', label: 'Payment Transfer', icon: Send, path: '/payment-transfer' },
    { id: 'connect', label: 'Connect Bank', icon: PlusCircle, path: '/dashboard' },
  ];

  return (
    <aside className="w-64 h-full overflow-y-auto bg-white border-r border-gray-100 flex flex-col justify-between p-6 shrink-0 select-none">
      {/* Top Section */}
      <div className="space-y-7">
        {/* Brand Logo - Matching Landing Page */}
        <div
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-1.5 cursor-pointer group select-none"
        >
          <span className="text-2xl font-extrabold text-ink tracking-tight">
            Heybank
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block group-hover:scale-125 transition-transform" />
        </div>

        {/* Search Bar Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
          />
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Profile Section */}
      <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-canvas border border-black/10 flex items-center justify-center text-ink font-bold text-xs shrink-0 shadow-2xs">
            <span className="font-mono text-[11px] font-bold text-ink">
              {'{'}JS{'}'}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-bold text-gray-900 truncate">
              {user.name || 'Adrian Hajdin'}
            </div>
            <div className="text-[11px] text-gray-400 truncate">
              {user.email || 'adrian@jsmastery.pro'}
            </div>
          </div>
        </div>

        <button
          onClick={onLogout}
          type="button"
          title="Log out"
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
