import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Who's AVIF?", href: '#whos-avif' },
    { label: "The Avif's Way", href: '#avifs-way' },
    { label: "The Big 4's", href: '#the-big-4' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? isDark
            ? 'bg-[#080808]/90 border-b border-white/10 backdrop-blur-md py-4'
            : 'bg-[#F5F3EE]/90 border-b border-black/10 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram (Transparent, Resized) */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-8 w-auto flex items-center justify-center">
            <img
              src="/avif-logo.png"
              alt="AVIF Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_2px_8px_rgba(232,117,61,0.3)]"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className={`font-display font-bold tracking-[0.2em] text-sm group-hover:text-[#E8753D] transition-colors ${isDark ? 'text-[#F5F3EE]' : 'text-[#080808]'
              }`}>
              AVIF
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#E8753D] uppercase font-bold">
              DIGITAL
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-mono uppercase tracking-wider transition-colors relative py-1 group ${isDark
                  ? 'text-[#A7A39D] hover:text-[#F5F3EE]'
                  : 'text-[#555555] hover:text-[#080808]'
                }`}
            >
              <span className="group-hover:text-[#E8753D] transition-colors">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8753D] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Controls: Theme Switcher Toggle (Top Right) & Email Pill */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button (White / Black) */}
          <button
            onClick={onToggleTheme}
            title={isDark ? 'Switch to White Theme' : 'Switch to Black Theme'}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center group ${isDark
                ? 'border-white/15 bg-white/5 text-[#F5F3EE] hover:border-[#E8753D] hover:text-[#E8753D]'
                : 'border-black/15 bg-black/5 text-[#080808] hover:border-[#E8753D] hover:text-[#E8753D]'
              }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#E8753D] transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#E8753D] transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>

          {/* Quick Email Pill */}
          <a
            href="mailto:avifdigital.com"
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 group ${isDark
                ? 'border-white/15 text-[#F5F3EE] hover:border-[#E8753D] hover:text-[#E8753D] hover:bg-[#E8753D]/5'
                : 'border-black/15 text-[#080808] hover:border-[#E8753D] hover:text-[#E8753D] hover:bg-[#E8753D]/5'
              }`}
          >
            <span>avifdigital.com</span>
            <ArrowUpRight className="w-3 h-3 text-[#E8753D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${isDark ? 'text-[#A7A39D] hover:text-white' : 'text-[#555555] hover:text-black'
              }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={`md:hidden border-b px-6 py-6 transition-all duration-300 ${isDark
            ? 'bg-[#080808] border-white/10 text-[#F5F3EE]'
            : 'bg-[#F5F3EE] border-black/10 text-[#080808]'
          }`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs font-mono uppercase tracking-wider py-1 border-b border-current/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E8753D]" />
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono">Theme Mode</span>
              <button
                onClick={onToggleTheme}
                className="px-3 py-1 rounded-full text-xs font-mono border border-current/20 flex items-center gap-1.5"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-[#E8753D]" /> : <Moon className="w-3.5 h-3.5 text-[#E8753D]" />}
                <span>{isDark ? 'White Theme' : 'Black Theme'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
