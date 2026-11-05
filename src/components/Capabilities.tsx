import React, { useState } from 'react';
import { ThemeMode, CapabilityItem } from '../types';
import { Clapperboard, Share2, Crown, Terminal, ArrowRight } from 'lucide-react';

interface CapabilitiesProps {
  theme: ThemeMode;
}

const BIG_FOUR: (CapabilityItem & { icon: React.ElementType })[] = [
  {
    number: '01',
    title: 'CREATIVE PRODUCTION',
    icon: Clapperboard,
    items: [
      'Video Production',
      'Photography',
      'Reels & Short-form Content',
      'Commercial Content',
      'Post-production & Editing',
    ],
  },
  {
    number: '02',
    title: 'DIGITAL MARKETING',
    icon: Share2,
    items: [
      'Social Media Marketing',
      'Digital Campaigns',
      'SEO (Search Engine Optimization)',
      'Paid Advertising',
      'Content Strategy',
      'Digital Distribution',
    ],
  },
  {
    number: '03',
    title: 'BRAND & PERSONAL BRANDING',
    icon: Crown,
    items: [
      'Brand Identity',
      'Personal Branding',
      'Content Direction',
      'Digital Positioning',
      'Visual Communication',
    ],
  },
  {
    number: '04',
    title: 'DIGITAL SOLUTIONS',
    icon: Terminal,
    items: [
      'Websites',
      'Landing Pages',
      'Digital Systems',
      'CRM & Integrations',
      'Automation',
      'Technology-driven Solutions',
    ],
  },
];

export const Capabilities: React.FC<CapabilitiesProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="the-big-4" className="relative py-28 px-6 sm:px-8 border-t border-current/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading directly from Slide 4 of user's carousel */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E8753D] block mb-2 font-bold">
            Core Disciplines
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight">
            The Big 4’s of <span className="text-[#E8753D]">AVIF</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-[#A7A39D]' : 'text-[#555555]'}`}>
            Four specialized divisions working in seamless unison to turn your brand vision into undisputed digital reality.
          </p>
        </div>

        {/* 4-Column Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BIG_FOUR.map((col, idx) => {
            const Icon = col.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={col.title}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-default group ${
                  isHovered
                    ? 'border-[#E8753D] shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(232,117,61,0.2)] -translate-y-2'
                    : isDark
                    ? 'bg-[#171717]/60 border-white/5 hover:border-white/15'
                    : 'bg-white border-black/10 hover:border-black/20 shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-current/10">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#E8753D]">
                      {col.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#E8753D]/10 text-[#E8753D]">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold uppercase tracking-tight mb-6 group-hover:text-[#E8753D] transition-colors">
                    {col.title}
                  </h3>

                  {/* Sub-services list with micro-hover interaction */}
                  <div className="space-y-3">
                    {col.items.map((item) => {
                      const isItemActive = hoveredItem === item;

                      return (
                        <div
                          key={item}
                          onMouseEnter={() => setHoveredItem(item)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className={`text-xs font-mono transition-all duration-200 flex items-center justify-between ${
                            isItemActive
                              ? 'text-[#E8753D] translate-x-1.5 font-bold'
                              : isDark
                              ? 'text-[#A7A39D] hover:text-[#F5F3EE]'
                              : 'text-[#666666] hover:text-[#080808]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                              isItemActive ? 'bg-[#E8753D] scale-125' : 'bg-current/30'
                            }`} />
                            <span>{item}</span>
                          </div>
                          <ArrowRight className={`w-3 h-3 transition-opacity ${
                            isItemActive ? 'opacity-100' : 'opacity-0'
                          }`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between text-[10px] font-mono opacity-60">
                  <span>DISCIPLINE {col.number}</span>
                  <span className="text-[#E8753D]">AVIF SPEC</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
