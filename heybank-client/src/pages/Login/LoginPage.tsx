import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginHeader } from '../../components/Login/LoginHeader';
import { LoginCardStack } from '../../components/Login/LoginCardStack';
import { LoginTrustBadges } from '../../components/Login/LoginTrustBadges';
import { LoginFormConsole, AccountType, AuthMethod, LoginStep } from '../../components/Login/LoginFormConsole';
import { ForgotPasswordModal } from '../../components/Login/ForgotPasswordModal';
import { LoginFooter } from '../../components/Login/LoginFooter';
import { AuthLayout } from '../../layouts/AuthLayout';
import { UserProfile } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface LoginPageProps {
  onBackToHome?: () => void;
  onLoginSuccess?: (userProfile: UserProfile) => void;
  onOpenGetStarted?: (plan?: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onBackToHome: propOnBackToHome,
  onLoginSuccess: propOnLoginSuccess,
  onOpenGetStarted: propOnOpenGetStarted,
}) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleBackToHome = propOnBackToHome || (() => navigate('/'));
  const handleLoginSuccess = propOnLoginSuccess || ((profile: UserProfile) => {
    auth.login(profile);
    navigate('/dashboard');
  });
  const handleOpenGetStarted = propOnOpenGetStarted || auth.openGetStarted;

  const [accountType, setAccountType] = useState<AccountType>('personal');
  const [authMethod, setAuthMethod] = useState<AuthMethod>('password');
  const [step, setStep] = useState<LoginStep>('credentials');
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Form Fields
  const [username, setUsername] = useState('alex.morgan@heybank.com');
  const [password, setPassword] = useState('Heybank2026!Secure');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 019-2834');
  const [otpDigits, setOtpDigits] = useState(['5', '8', '2', '0', '9', '4']);

  // UI states
  const [isLoading, setIsLoading] = useState(false);
  const [isBiometricScanning, setIsBiometricScanning] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(45);

  // Quick Demo Accounts & Sync with Cards
  const handleAccountTypeChange = (type: AccountType) => {
    setAccountType(type);
    setErrorMessage(null);
    if (type === 'personal') {
      setUsername('alex.morgan@heybank.com');
      setPassword('Heybank2026!Secure');
      setActiveCardIndex(0);
    } else if (type === 'business') {
      setUsername('s.jenkins@acmepay.io');
      setPassword('AcmeTreasury99#');
      setActiveCardIndex(1);
    } else {
      setUsername('victoria.sterling@sterlingholdings.com');
      setPassword('PrivateVault2026$');
      setActiveCardIndex(2);
    }
  };

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
    if (index === 0) handleAccountTypeChange('personal');
    else if (index === 1) handleAccountTypeChange('business');
    else if (index === 2) handleAccountTypeChange('wealth');
  };

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please enter both your email/username and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('2fa');
    }, 600);
  };

  const handleBiometricAuth = () => {
    setIsBiometricScanning(true);
    setErrorMessage(null);
    setTimeout(() => {
      setIsBiometricScanning(false);
      setStep('2fa');
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    if (value && index < 5) {
      const nextInput = document.getElementById(`login-otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify2FA = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');

      const profileName = accountType === 'personal'
        ? 'Alex Morgan'
        : accountType === 'business'
          ? 'Sarah Jenkins (Acme Corp)'
          : 'Victoria Sterling (Private Wealth)';

      const balance = accountType === 'personal' ? 24680.50 : accountType === 'business' ? 184520.00 : 890450.00;

      setTimeout(() => {
        handleLoginSuccess({
          name: profileName,
          email: username,
          accountType: accountType === 'personal' ? 'Everyday Personal Account' : accountType === 'business' ? 'Corporate Treasury' : 'Private Wealth Elite',
          balance,
        });
      }, 700);
    }, 600);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
      setForgotPasswordOpen(false);
    }, 2000);
  };

  return (
    <>
      {/* 1. Header Bar */}
      <LoginHeader
        onBackToHome={handleBackToHome}
        onOpenGetStarted={() => handleOpenGetStarted()}
      />

      {/* 2. Main Workspace Console (100dvh desktop fit) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-center min-h-0 overflow-hidden relative z-10">
        <div className="w-full h-full max-h-[640px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: 3D Animated Cards & Trust Badges */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-between h-full py-2 pr-1 select-none">
            <LoginCardStack
              activeCardIndex={activeCardIndex}
              onCardClick={handleCardClick}
            />
            <LoginTrustBadges />
          </div>

          {/* Right Column: Hardware Bezel Authentication Console */}
          <div className="lg:col-span-6 flex justify-center items-center h-full">
            <LoginFormConsole
              accountType={accountType}
              onAccountTypeChange={handleAccountTypeChange}
              authMethod={authMethod}
              setAuthMethod={setAuthMethod}
              step={step}
              setStep={setStep}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              otpDigits={otpDigits}
              onOtpChange={handleOtpChange}
              isLoading={isLoading}
              isBiometricScanning={isBiometricScanning}
              errorMessage={errorMessage}
              resendTimer={resendTimer}
              setResendTimer={setResendTimer}
              onCredentialsSubmit={handleCredentialsSubmit}
              onBiometricAuth={handleBiometricAuth}
              onVerify2FA={handleVerify2FA}
              onOpenForgotPassword={() => setForgotPasswordOpen(true)}
            />
          </div>

        </div>
      </main>

      {/* 3. Password Recovery Modal */}
      <ForgotPasswordModal
        isOpen={forgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
        email={forgotEmail || username}
        setEmail={setForgotEmail}
        forgotSent={forgotSent}
        onSubmit={handleForgotPasswordSubmit}
      />

      {/* 4. Footer Disclosures */}
      <LoginFooter />
    </>
  );
};

export default LoginPage;
