import React from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

interface TransferActionButtonProps {
  isLoading: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const TransferActionButton: React.FC<TransferActionButtonProps> = ({
  isLoading,
  onClick,
  disabled,
}) => {
  return (
    <div className="pt-4">
      <button
        type="button"
        disabled={disabled || isLoading}
        onClick={onClick}
        className="w-full py-3.5 px-6 rounded-xl bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-50 text-white font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99]"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing Transfer...</span>
          </>
        ) : (
          <>
            <span>Transfer Funds</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};
