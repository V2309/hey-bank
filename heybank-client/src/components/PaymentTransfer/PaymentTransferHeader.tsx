import React from 'react';

export const PaymentTransferHeader: React.FC = () => {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        Payment Transfer
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 font-normal">
        Please provide any specific details or notes related to the payment transfer
      </p>
    </div>
  );
};
