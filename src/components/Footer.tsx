import React from 'react';
import { ThemeMode } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 px-6 sm:px-8 border-t transition-colors ${
      isDark ? 'bg-[#080808] border-white/10 text-[#A7A39D]' : 'bg-[#F5F3EE] border-black/10 text-[#555555]'
    }`}>
      <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="h-6 w-auto flex items-center">
            <img src="/avif-logo.png" alt="AVIF" className="h-6 w-auto object-contain" />
          </div>
          <span className={`font-display font-bold tracking-widest ${isDark ? 'text-[#F5F3EE]' : 'text-[#080808]'}`}>
            AVIF DIGITAL
          </span>
          <span className="opacity-40">•</span>
          <span>A Vision Into Focus</span>
        </div>

        {/* Minimal Palette Dots */}
        <div className="flex items-center gap-2">
          {[
            { hex: '#171717', label: 'Deep Charcoal' },
            { hex: '#F5F3EE', label: 'Off-White' },
            { hex: '#E8753D', label: 'Burnt Orange' },
            { hex: '#A7A39D', label: 'Warm Grey' },
            { hex: '#080808', label: 'Black' },
          ].map((c) => (
            <div
              key={c.hex}
              title={`${c.label} (${c.hex})`}
              className="w-3.5 h-3.5 rounded-full border border-black/20 hover:scale-125 transition-transform cursor-pointer"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-[#E8753D] transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
