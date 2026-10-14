import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import { CreditCardPreview } from './CreditCardPreview';
import { BudgetProgress, BudgetItem } from './BudgetProgress';
import { UserProfile } from '../../types';

interface RightSidebarProps {
  user: UserProfile;
  budgets?: BudgetItem[];
  onAddBank?: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  user,
  budgets,
  onAddBank,
}) => {
  return (
    <aside className="w-80 lg:w-96 bg-white border-l border-gray-100 flex flex-col shrink-0 h-full overflow-y-auto select-none">
      {/* Top Gradient Banner Header - Matching Homepage Ambient Aesthetics */}
      <div className="relative">
        <div className="h-32 w-full bg-gradient-to-r from-glow-peach via-glow-rose to-glow-indigo opacity-90" />

        {/* Floating User Avatar Overlapping Banner */}
        <div className="absolute -bottom-8 left-6">
          <div className="w-18 h-18 rounded-full bg-white p-1 shadow-md ring-2 ring-white">
            <div className="w-full h-full rounded-full bg-canvas border border-black/10 flex items-center justify-center text-ink font-bold text-xs">
              <span className="font-mono text-sm font-black text-ink">
                {'{'}JS{'}'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="pt-10 px-6 pb-6 border-b border-gray-100">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
          {user.name || 'Adrian Hajdin'}
        </h2>
        <p className="text-xs text-gray-500 font-normal mt-0.5">
          {user.email || 'adrian@jsmastery.pro'}
        </p>
      </div>

      <div className="p-6 space-y-8 flex-1">
        {/* My Banks Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-gray-900 tracking-tight">
              My Banks
            </h3>
            <button
              type="button"
              onClick={onAddBank}
              className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add bank</span>
            </button>
          </div>

          {/* Stacked Cards Preview */}
          <CreditCardPreview userName={user.name ? user.name.toUpperCase() : 'ADRIAN HAJDIN'} />
        </div>

        {/* My Budgets Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-gray-900 tracking-tight">
              My budgets
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-900 transition-colors p-1 cursor-pointer"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          {/* Budget Progress Items with customized colors */}
          <BudgetProgress budgets={budgets} />
        </div>
      </div>
    </aside>
  );
};
