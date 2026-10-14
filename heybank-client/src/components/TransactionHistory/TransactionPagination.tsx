import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TransactionPaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const TransactionPagination: React.FC<TransactionPaginationProps> = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handleSelectPage = (page: number) => {
    setActivePage(page);
    onPageChange?.(page);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100 select-none">
      {/* Previous Button */}
      <button
        type="button"
        disabled={activePage === 1}
        onClick={() => handleSelectPage(activePage - 1)}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleSelectPage(num)}
            className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activePage === num
                ? 'bg-budget-blue-subtle text-brand-blue border border-brand-blue/20'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {num}
          </button>
        ))}

        <span className="px-2 text-xs text-gray-400 font-bold">...</span>

        {[8, 9, 10].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleSelectPage(num)}
            className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activePage === num
                ? 'bg-budget-blue-subtle text-brand-blue border border-brand-blue/20'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={activePage === totalPages}
        onClick={() => handleSelectPage(activePage + 1)}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer"
      >
        <span>Next</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
