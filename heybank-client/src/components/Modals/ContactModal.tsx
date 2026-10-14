import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative animate-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-gray-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7] bg-[#E0F2FE] px-3 py-1 rounded-full">
            CUSTOMER SUPPORT
          </span>
          <h3 className="text-2xl font-extrabold text-[#111215] mt-2">
            Get in touch with Heybank
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Our banking specialists typically respond within 15 minutes.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#10B981] mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-base font-bold text-gray-900">Message Received</div>
            <div className="text-xs text-gray-500">Thank you, {form.name}. A representative will contact you soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jordan Miller"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="jordan@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                Subject
              </label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
              >
                <option>General Inquiry</option>
                <option>Personal Accounts</option>
                <option>Business & Partnerships</option>
                <option>Security & Compliance</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-1">
                How can we help?
              </label>
              <textarea
                rows={3}
                required
                placeholder="Type your message here..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#111215] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
