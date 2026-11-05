import React, { useState } from 'react';
import { ObjectiveItem } from '../types';

const OBJECTIVES: ObjectiveItem[] = [
  {
    number: '01',
    title: 'Build Digital Presence',
    description: 'Help businesses establish a strong and consistent presence across digital platforms.',
  },
  {
    number: '02',
    title: 'Create Meaningful Content',
    description: 'Produce content that communicates the brand clearly and connects with its audience.',
  },
  {
    number: '03',
    title: 'Drive Digital Growth',
    description: 'Use digital marketing, campaigns, SEO, social media and technology to improve reach and growth.',
  },
  {
    number: '04',
    title: 'Build Strong Brands',
    description: 'Help businesses and individuals create a clear, recognisable and trusted digital identity.',
  },
  {
    number: '05',
    title: 'Connect Creativity With Technology',
    description: 'Combine creative production with modern digital tools and technology to create smarter solutions.',
  },
];

export const Objectives: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="objectives" className="relative py-28 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-light font-serif-luxury italic text-[#F5F3EE]">
            Our Objectives
          </h2>
        </div>

        {/* Clean Editorial List with Focus Hover Animation */}
        <div className="divide-y divide-white/10">
          {OBJECTIVES.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isOtherHovered = hoveredIdx !== null && hoveredIdx !== idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`py-8 sm:py-10 transition-all duration-300 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-default ${
                  isHovered
                    ? 'translate-x-2'
                    : isOtherHovered
                    ? 'opacity-40'
                    : 'opacity-100'
                }`}
              >
                {/* Number & Title */}
                <div className="flex items-baseline gap-6 md:w-1/2">
                  <span className={`text-sm font-mono font-bold tracking-widest transition-colors ${
                    isHovered ? 'text-[#E8753D]' : 'text-[#A7A39D]'
                  }`}>
                    {item.number}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-display font-medium tracking-tight transition-colors ${
                    isHovered ? 'text-[#E8753D]' : 'text-[#F5F3EE]'
                  }`}>
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-1/2 pl-10 md:pl-0">
                  <p className="text-sm sm:text-base text-[#A7A39D] leading-relaxed">
                    {item.description}
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
