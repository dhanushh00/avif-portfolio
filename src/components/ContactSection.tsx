import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Mail, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@avifdigital.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 border-t border-current/10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Slogan from Slide 5 ("Ready to bring your vision into focus?") */}
          <div className="lg:col-span-6 space-y-6">
            <div className="h-12 w-auto flex items-center">
              <img src="/avif-logo.png" alt="AVIF Monogram" className="h-12 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(232,117,61,0.4)]" />
            </div>

            {/* Slogan from Slide 5 */}
            <h2 className="text-4xl sm:text-6xl font-normal font-serif-luxury italic leading-tight text-[#E8753D]">
              Ready to bring your vision into focus?
            </h2>

            {/* Social handle from Slide 5 */}
            <div className="flex items-center gap-2 text-sm font-mono tracking-wider font-semibold">
              <svg className="w-4 h-4 text-[#E8753D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <a
                href="https://instagram.com/avifdigital"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E8753D] transition-colors underline decoration-[#E8753D]/40"
              >
                Follow @avifdigital
              </a>
            </div>

            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#A7A39D]' : 'text-[#666666]'}`}>
              Whether you need commercial creative production, high-velocity marketing, brand positioning, or modern digital systems — we're ready.
            </p>

            {/* Direct Email Link with One-Click Copy */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@avifdigital.com"
                className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E8753D] text-[#080808] hover:bg-[#ff8447] transition-all duration-300 shadow-[0_0_20px_rgba(232,117,61,0.3)] hover:shadow-[0_0_30px_rgba(232,117,61,0.5)] flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span>hello@avifdigital.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={handleCopy}
                className={`px-4 py-3 rounded-full text-xs font-mono border transition-all flex items-center gap-2 ${
                  isDark
                    ? 'border-white/15 text-[#A7A39D] hover:border-[#E8753D] hover:text-[#F5F3EE]'
                    : 'border-black/15 text-[#555555] hover:border-[#E8753D] hover:text-[#080808]'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Simple Direct Message Form */}
          <div className="lg:col-span-6">
            <div className={`p-8 sm:p-10 rounded-3xl border transition-all ${
              isDark
                ? 'bg-[#171717] border-white/10'
                : 'bg-white border-black/10 shadow-lg'
            }`}>
              {sent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#E8753D]/20 text-[#E8753D] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase">
                    Message Sent
                  </h3>
                  <p className={`text-xs font-mono ${isDark ? 'text-[#A7A39D]' : 'text-[#666666]'}`}>
                    Thank you. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#E8753D] mb-4 font-bold">
                    Start a Project
                  </div>

                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors border ${
                        isDark
                          ? 'bg-black/40 border-white/10 text-[#F5F3EE] focus:border-[#E8753D]'
                          : 'bg-[#F5F3EE]/60 border-black/10 text-[#080808] focus:border-[#E8753D]'
                      }`}
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors border ${
                        isDark
                          ? 'bg-black/40 border-white/10 text-[#F5F3EE] focus:border-[#E8753D]'
                          : 'bg-[#F5F3EE]/60 border-black/10 text-[#080808] focus:border-[#E8753D]'
                      }`}
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your brand vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors border ${
                        isDark
                          ? 'bg-black/40 border-white/10 text-[#F5F3EE] focus:border-[#E8753D]'
                          : 'bg-[#F5F3EE]/60 border-black/10 text-[#080808] focus:border-[#E8753D]'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest bg-[#E8753D] text-[#080808] hover:bg-[#ff8447] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(232,117,61,0.3)]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
