import React, { useState } from 'react';
import { PaymentTransferHeader } from '../../components/PaymentTransfer/PaymentTransferHeader';
import { TransferDetailsForm } from '../../components/PaymentTransfer/TransferDetailsForm';
import { RecipientDetailsForm } from '../../components/PaymentTransfer/RecipientDetailsForm';
import { TransferActionButton } from '../../components/PaymentTransfer/TransferActionButton';
import { CheckCircle2 } from 'lucide-react';

export const PaymentTransferPage: React.FC = () => {
  const [sourceBank, setSourceBank] = useState('Chase Growth Savings ($41,382.80)');
  const [transferNote, setTransferNote] = useState(
    'Dear John,\n\nI hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it.'
  );
  const [email, setEmail] = useState('john@gmail.com');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('40000');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleTransfer = () => {
    if (!email || !amount) {
      alert('Please fill in both recipient email and amount.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(`Successfully transferred $${Number(amount || 0).toLocaleString()} to ${email}!`);
      setTimeout(() => setSuccessMessage(null), 5000);
    }, 1200);
  };

  return (
    <div className="flex-1 h-full overflow-y-auto p-6 sm:p-10 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Success Alert Banner */}
        {successMessage && (
          <div className="p-4 rounded-2xl bg-budget-green-subtle border border-budget-green/30 text-budget-green text-xs sm:text-sm font-bold flex items-center gap-3 animate-in fade-in shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-budget-green shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* 1. Header */}
        <PaymentTransferHeader />

        {/* 2. Transfer Details Subform */}
        <TransferDetailsForm
          sourceBank={sourceBank}
          setSourceBank={setSourceBank}
          transferNote={transferNote}
          setTransferNote={setTransferNote}
        />

        {/* 3. Recipient & Bank Account Details Subform */}
        <RecipientDetailsForm
          email={email}
          setEmail={setEmail}
          accountNumber={accountNumber}
          setAccountNumber={setAccountNumber}
          amount={amount}
          setAmount={setAmount}
        />

        {/* 4. Action Button */}
        <TransferActionButton
          isLoading={isLoading}
          onClick={handleTransfer}
        />
      </div>
    </div>
  );
};

export default PaymentTransferPage;
