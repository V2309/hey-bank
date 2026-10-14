import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Fingerprint,
  Smartphone,
  Eye,
  EyeOff,
  AlertCircle,
  RefreshCw,
  Check
} from 'lucide-react';

export type AccountType = 'personal' | 'business' | 'wealth';
export type AuthMethod = 'password' | 'biometric' | 'otp';
export type LoginStep = 'credentials' | '2fa' | 'success';

interface LoginFormConsoleProps {
  accountType: AccountType;
  onAccountTypeChange: (type: AccountType) => void;
  authMethod: AuthMethod;
  setAuthMethod: (method: AuthMethod) => void;
  step: LoginStep;
  setStep: (step: LoginStep) => void;
  username: string;
  setUsername: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  rememberMe: boolean;
  setRememberMe: (val: boolean) => void;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  otpDigits: string[];
  onOtpChange: (index: number, val: string) => void;
  isLoading: boolean;
  isBiometricScanning: boolean;
  errorMessage: string | null;
  resendTimer: number;
  setResendTimer: (val: number) => void;
  onCredentialsSubmit: (e: React.FormEvent) => void;
  onBiometricAuth: () => void;
  onVerify2FA: (e: React.FormEvent) => void;
  onOpenForgotPassword: () => void;
}

export const LoginFormConsole: React.FC<LoginFormConsoleProps> = ({
  accountType,
  onAccountTypeChange,
  authMethod,
  setAuthMethod,
  step,
  setStep,
  username,
  setUsername,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  rememberMe,
  setRememberMe,
  phoneNumber,
  setPhoneNumber,
  otpDigits,
  onOtpChange,
  isLoading,
  isBiometricScanning,
  errorMessage,
  resendTimer,
  setResendTimer,
  onCredentialsSubmit,
  onBiometricAuth,
  onVerify2FA,
  onOpenForgotPassword,
}) => {
  return (
    <div className="w-full max-w-[425px] p-1.5 sm:p-2 rounded-[28px] bg-black/[0.03] ring-1 ring-black/[0.08] shadow-lg">
      <div className="bg-white rounded-[22px] p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] border border-black/[0.04] flex flex-col justify-between relative overflow-hidden">
        
        {/* Header & Account Tier Segment */}
        <div className="space-y-3 mb-3.5">
          {/* Top Status Strip */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-wide text-ink-subtle pb-2 border-b border-black/[0.05]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-ink">AUTH PROTOCOL</span>
            </div>
            <span className="text-gray-400 font-mono">TLS 1.3 SECURE</span>
          </div>

          {/* Clean Minimalist Account Switcher */}
          <div className="flex items-center p-0.5 bg-canvas rounded-lg border border-black/[0.06]">
            {[
              { id: 'personal', label: 'Personal' },
              { id: 'business', label: 'Business' },
              { id: 'wealth', label: 'Private Wealth' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onAccountTypeChange(tab.id as AccountType)}
                className={`flex-1 py-1.5 rounded-md text-[11px] font-bold transition-all cursor-pointer text-center ${
                  accountType === tab.id
                    ? 'bg-white text-ink shadow-2xs font-extrabold border border-black/5'
                    : 'text-ink-subtle hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Credentials Form */}
        {step === 'credentials' && (
          <div className="space-y-3.5">
            {/* Error Notification */}
            {errorMessage && (
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-600" />
                <span className="text-[11px]">{errorMessage}</span>
              </div>
            )}

            {/* Method 1: Password Authenticator */}
            {authMethod === 'password' && (
              <form onSubmit={onCredentialsSubmit} className="space-y-3">
                {/* Field 1: Email / Username */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-ink-subtle">
                    Email / Username
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="name@heybank.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 bg-canvas text-xs text-ink font-semibold focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all placeholder:text-gray-400 placeholder:font-normal"
                    id="login-username-field"
                  />
                </div>

                {/* Field 2: Password */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-ink-subtle">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={onOpenForgotPassword}
                      className="text-[10px] font-semibold text-ink-muted hover:text-ink hover:underline cursor-pointer"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-3.5 pr-9 py-2.5 rounded-xl border border-black/15 bg-canvas text-xs text-ink font-semibold focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all placeholder:text-gray-400 placeholder:font-normal"
                      id="login-password-field"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 p-1 text-gray-400 hover:text-ink focus:outline-none cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Remember & Trust Machine */}
                <div className="flex items-center justify-between text-[11px] px-0.5">
                  <label className="flex items-center gap-1.5 text-ink-subtle cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-gray-300 text-ink focus:ring-black w-3.5 h-3.5"
                    />
                    <span>Trust this machine</span>
                  </label>
                  <button
                    type="button"
                    onClick={onOpenForgotPassword}
                    className="font-medium text-ink-muted hover:text-ink hover:underline cursor-pointer text-[10.5px]"
                  >
                    Recovery
                  </button>
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 pl-5 pr-2.5 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-between group cursor-pointer disabled:opacity-50"
                  id="login-submit-button"
                >
                  <span>{isLoading ? 'Authenticating...' : 'Sign In to Console'}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all group-hover:translate-x-0.5">
                    {isLoading ? (
                      <RefreshCw className="w-3 h-3 animate-spin" />
                    ) : (
                      <ArrowRight className="w-3 h-3" />
                    )}
                  </div>
                </button>
              </form>
            )}

            {/* Method 2: Biometric Passkey */}
            {authMethod === 'biometric' && (
              <div className="py-4 px-3 bg-canvas rounded-xl border border-black/[0.06] text-center space-y-3">
                <div className="relative mx-auto w-12 h-12 flex items-center justify-center">
                  <div className={`w-11 h-11 rounded-full bg-white border border-black/10 flex items-center justify-center transition-all shadow-xs ${
                    isBiometricScanning ? 'scale-110 ring-2 ring-ink' : ''
                  }`}>
                    <Fingerprint className="w-6 h-6 text-ink" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-ink">
                    {isBiometricScanning ? 'Verifying Hardware Key...' : 'Face ID / Touch ID Enclave'}
                  </div>
                  <div className="text-[10.5px] text-ink-muted mt-0.5">
                    FIDO2 WebAuthn cryptographic handshake
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onBiometricAuth}
                  disabled={isBiometricScanning}
                  className="w-full py-2.5 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <Fingerprint className="w-3.5 h-3.5" />
                  <span>{isBiometricScanning ? 'Verifying...' : 'Authorize Passkey'}</span>
                </button>
              </div>
            )}

            {/* Method 3: SMS OTP */}
            {authMethod === 'otp' && (
              <div className="space-y-3">
                <div className="rounded-xl border border-black/15 bg-canvas p-2.5 focus-within:border-ink">
                  <label className="block text-[9.5px] font-bold uppercase tracking-wider text-ink-subtle mb-0.5">
                    Authorized Phone
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-transparent text-xs text-ink font-semibold focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep('2fa')}
                  className="w-full py-2.5 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request OTP Challenge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Minimalist Secondary Method Switcher Strip */}
            <div className="pt-2 border-t border-black/[0.05] flex items-center justify-between text-[10.5px]">
              <span className="text-ink-subtle font-medium">Alternative Auth:</span>
              <div className="flex items-center gap-1.5">
                {authMethod !== 'password' && (
                  <button
                    type="button"
                    onClick={() => setAuthMethod('password')}
                    className="px-2 py-1 rounded-md bg-canvas hover:bg-black/5 text-ink font-semibold transition-colors cursor-pointer"
                  >
                    Password
                  </button>
                )}
                {authMethod !== 'biometric' && (
                  <button
                    type="button"
                    onClick={() => setAuthMethod('biometric')}
                    className="px-2 py-1 rounded-md bg-canvas hover:bg-black/5 text-ink font-semibold transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Fingerprint className="w-3 h-3" />
                    <span>Passkey</span>
                  </button>
                )}
                {authMethod !== 'otp' && (
                  <button
                    type="button"
                    onClick={() => setAuthMethod('otp')}
                    className="px-2 py-1 rounded-md bg-canvas hover:bg-black/5 text-ink font-semibold transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Smartphone className="w-3 h-3" />
                    <span>SMS</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: 2-Factor Authentication */}
        {step === '2fa' && (
          <div className="space-y-3.5 my-auto py-1">
            <div className="text-center space-y-1">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-2xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-ink tracking-tight">
                Security Verification
              </h2>
              <p className="text-[10.5px] text-ink-muted max-w-xs mx-auto">
                Enter the 6-digit challenge code sent to your verified device
              </p>
            </div>

            <form onSubmit={onVerify2FA} className="space-y-3.5">
              <div className="flex justify-center gap-1.5">
                {otpDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`login-otp-input-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => onOtpChange(idx, e.target.value)}
                    className="w-9 sm:w-10 h-10 text-center text-base font-bold font-mono rounded-lg border border-black/15 focus:border-ink focus:ring-1 focus:ring-ink focus:outline-none bg-canvas text-ink"
                  />
                ))}
              </div>

              <div className="text-center text-[10.5px] text-ink-muted">
                Didn't receive a code?{' '}
                <button
                  type="button"
                  onClick={() => setResendTimer(45)}
                  className="font-bold text-ink hover:underline cursor-pointer ml-1"
                >
                  Resend ({resendTimer}s)
                </button>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setStep('credentials')}
                  className="w-1/3 py-2 rounded-full border border-black/15 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gray-50 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-2/3 py-2 rounded-full bg-ink hover:bg-ink-hover text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  id="verify-2fa-submit-btn"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Validating...</span>
                    </div>
                  ) : (
                    <>
                      <span>Verify & Proceed</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Success State */}
        {step === 'success' && (
          <div className="py-6 text-center space-y-3 my-auto animate-in zoom-in-95">
            <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-md">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">
                Handshake Complete
              </h3>
              <p className="text-[10.5px] text-ink-muted mt-0.5">
                Establishing encrypted session...
              </p>
            </div>
            <div className="w-24 h-1 bg-gray-100 rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
