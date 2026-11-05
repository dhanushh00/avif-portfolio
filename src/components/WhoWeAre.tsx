import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Compass, Lightbulb, Cog, TrendingUp, ArrowRight } from 'lucide-react';

interface WhoWeAreProps {
  theme: ThemeMode;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const triad = [
    {
      title: 'Strategy',
      subtitle: 'Foundation & Direction',
      icon: Compass,
      desc: 'Market intelligence, positioning, and commercial focus before moving a single pixel.',
    },
    {
      title: 'Creative',
      subtitle: 'Emotion & Resonance',
      icon: Lightbulb,
      desc: 'Cinematic commercials, bold aesthetics, and storytelling that halt the scroll.',
    },
    {
      title: 'Technology',
      subtitle: 'Execution & Scale',
      icon: Cog,
      desc: 'High-speed digital platforms, automated funnels, and frictionless growth infrastructure.',
    },
  ];

  return (
    <section id="whos-avif" className="relative py-28 px-6 sm:px-8 border-t border-current/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading & Slogan directly from Slide 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#E8753D] block mb-2 font-bold">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight">
              So, who’s{' '}
              <span className="text-[#E8753D] font-serif-luxury italic font-normal">
                AVIF?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-2xl sm:text-3xl font-light leading-relaxed">
              "A creative and digital growth agency that helps brands build a stronger digital presence."
            </p>
            <p className={`mt-6 text-sm sm:text-base leading-relaxed ${isDark ? 'text-[#A7A39D]' : 'text-[#555555]'}`}>
              From commercial content and video production to social campaigns, brand identity, and scalable web solutions — we unify every touchpoint around your core business ambition.
            </p>
          </div>
        </div>

        {/* Slide 3: "The Avif’s way!" */}
        <div id="avifs-way" className={`p-8 sm:p-14 rounded-3xl border transition-all duration-300 ${
          isDark
            ? 'bg-[#171717] border-white/10'
            : 'bg-white border-black/10 shadow-lg'
        }`}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#E8753D] block mb-2 font-bold">
              Methodology • Slide 03
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
              The Avif’s <span className="text-[#E8753D] font-serif-luxury italic font-normal">way!</span>
            </h3>
            <p className="mt-4 text-lg sm:text-xl font-light leading-relaxed">
              "We bring strategy, creativity and technology together to move businesses forward."
            </p>
          </div>

          {/* 3 Interconnected Triad Nodes (Strategy, Creative, Technology from user's Slide 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {triad.map((node, idx) => {
              const Icon = node.icon;
              const isHovered = activeNode === idx;

              return (
                <div
                  key={node.title}
                  onMouseEnter={() => setActiveNode(idx)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-7 rounded-2xl border transition-all duration-300 cursor-default relative group ${
                    isHovered
                      ? 'border-[#E8753D] shadow-[0_0_30px_rgba(232,117,61,0.2)] -translate-y-1.5'
                      : isDark
                      ? 'border-white/5 bg-black/40 hover:border-white/20'
                      : 'border-black/5 bg-[#F5F3EE]/60 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#E8753D]/15 border border-[#E8753D]/40 flex items-center justify-center text-[#E8753D] group-hover:scale-110 group-hover:bg-[#E8753D] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#E8753D] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-1 group-hover:text-[#E8753D] transition-colors">
                    {node.title}
                  </h4>

                  <div className="text-xs font-mono text-[#E8753D] mb-3">
                    {node.subtitle}
                  </div>

                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#A7A39D]' : 'text-[#666666]'}`}>
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
