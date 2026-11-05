import React, { useState } from 'react';
import { ThemeMode, ApproachStep } from '../types';

interface ApproachProps {
  theme: ThemeMode;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    description: 'Understand the business, audience and goals.',
  },
  {
    number: '02',
    name: 'STRATEGIZE',
    description: 'Build the right creative and digital direction.',
  },
  {
    number: '03',
    name: 'CREATE',
    description: 'Produce content, visuals and digital assets.',
  },
  {
    number: '04',
    name: 'DISTRIBUTE',
    description: 'Put the brand where its audience is.',
  },
  {
    number: '05',
    name: 'OPTIMIZE',
    description: 'Measure, improve and scale what works.',
  },
];

export const Approach: React.FC<ApproachProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="approach" className="relative py-28 px-6 sm:px-8 border-t border-current/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-light font-serif-luxury italic">
            Our Approach
          </h2>
          <p className={`mt-3 text-sm ${isDark ? 'text-[#A7A39D]' : 'text-[#666666]'}`}>
            A systematic five-phase execution roadmap from initial discovery to compounding digital growth.
          </p>
        </div>

        {/* 5-Step Clean Horizontal Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {APPROACH_STEPS.map((step, idx) => {
            const isHovered = hoveredStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-default flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#E8753D] shadow-[0_0_20px_rgba(232,117,61,0.2)] -translate-y-1'
                    : isDark
                    ? 'bg-[#171717]/40 border-white/5 hover:border-white/15'
                    : 'bg-white border-black/10 hover:border-black/20 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-xs font-mono font-bold tracking-widest mb-4 transition-colors ${
                    isHovered ? 'text-[#E8753D]' : 'text-[#A7A39D]'
                  }`}>
                    {step.number}
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-wider mb-3 group-hover:text-[#E8753D] transition-colors">
                    {step.name}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#A7A39D]' : 'text-[#666666]'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
