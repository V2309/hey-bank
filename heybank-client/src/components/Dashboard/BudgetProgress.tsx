import React from 'react';
import { Tv, ShoppingBag, Link2, LucideIcon } from 'lucide-react';

export interface BudgetItem {
  id: string;
  title: string;
  amountLeft: number;
  progressPercent: number; // 0 to 100
  type: 'subscriptions' | 'food' | 'savings';
}

interface BudgetProgressProps {
  budgets?: BudgetItem[];
}

export const BudgetProgress: React.FC<BudgetProgressProps> = ({ budgets }) => {
  const defaultBudgets: BudgetItem[] = [
    {
      id: 'b-1',
      title: 'Subscriptions',
      amountLeft: 25,
      progressPercent: 65,
      type: 'subscriptions',
    },
    {
      id: 'b-2',
      title: 'Food and booze',
      amountLeft: 120,
      progressPercent: 80,
      type: 'food',
    },
    {
      id: 'b-3',
      title: 'Savings',
      amountLeft: 50,
      progressPercent: 90,
      type: 'savings',
    },
  ];

  const items = budgets || defaultBudgets;

  const getStyleForType = (type: string) => {
    switch (type) {
      case 'subscriptions':
        return {
          icon: Tv,
          iconBg: 'bg-budget-blue-subtle',
          iconColor: 'text-budget-blue',
          barColor: 'bg-budget-blue',
          trackColor: 'bg-budget-blue-subtle',
        };
      case 'food':
        return {
          icon: ShoppingBag,
          iconBg: 'bg-budget-pink-subtle',
          iconColor: 'text-budget-pink',
          barColor: 'bg-budget-pink',
          trackColor: 'bg-budget-pink-subtle',
        };
      case 'savings':
      default:
        return {
          icon: Link2,
          iconBg: 'bg-budget-green-subtle',
          iconColor: 'text-budget-green',
          barColor: 'bg-budget-green',
          trackColor: 'bg-budget-green-subtle',
        };
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const style = getStyleForType(item.type);
        const IconComponent = style.icon;

        return (
          <div
            key={item.id}
            className="p-3.5 rounded-2xl bg-slate-surface border border-gray-100 flex items-center gap-3.5 hover:bg-gray-50 transition-colors"
          >
            {/* Icon Box */}
            <div className={`w-10 h-10 rounded-xl ${style.iconBg} ${style.iconColor} flex items-center justify-center shrink-0 shadow-2xs`}>
              <IconComponent className="w-4 h-4" />
            </div>

            {/* Content & Progress */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-900">{item.title}</span>
                <span className="font-semibold text-gray-500 text-[11px]">
                  ${item.amountLeft} left
                </span>
              </div>

              {/* Progress Track */}
              <div className={`w-full h-1.5 rounded-full ${style.trackColor} overflow-hidden`}>
                <div
                  className={`h-full rounded-full ${style.barColor} transition-all duration-500`}
                  style={{ width: `${item.progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
