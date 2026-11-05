import React, { useRef, useState } from 'react';
import { ThemeMode } from '../types';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  theme: ThemeMode;
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onExplore, onContact }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === 'dark';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 10,
      y: (x / (rect.width / 2)) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-6 sm:px-8 overflow-hidden">
      {/* Background Topographical Wavy Lines inspired by user's carousel design */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full object-cover"
          fill="none"
          stroke={isDark ? '#E8753D' : '#C45A25'}
          strokeWidth="1.2"
        >
          <path d="M-100,100 C200,50 300,180 600,120 C900,60 1000,160 1200,100" />
          <path d="M-100,140 C200,90 300,220 600,160 C900,100 1000,200 1200,140" />
          <path d="M-100,180 C200,130 300,260 600,200 C900,140 1000,240 1200,180" />
          <path d="M-100,480 C250,540 400,420 700,500 C1000,580 1100,460 1200,520" />
          <path d="M-100,520 C250,580 400,460 700,540 C1000,620 1100,500 1200,560" />
        </svg>
      </div>

      {/* Hero Body */}
      <div className="max-w-4xl mx-auto w-full my-auto py-12 flex flex-col items-center text-center relative z-10">
        {/* Monogram Logo (Transparent, Resized, with smooth 3D tilt) */}
        <div
          ref={cardRef}
          onMouseMove={(e) => {
            handleMouseMove(e);
            setIsHovered(true);
          }}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
          className="relative mb-6 cursor-pointer select-none group"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute -inset-10 rounded-full bg-[#E8753D]/20 blur-3xl transition-opacity duration-500 ${
              isHovered ? 'opacity-100 scale-125' : 'opacity-50'
            }`}
          />

          <motion.div
            animate={{
              rotateX: tilt.x,
              rotateY: tilt.y,
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative h-20 sm:h-24 w-auto flex items-center justify-center p-2"
          >
            {/* Pristine Transparent Logo */}
            <img
              src="/avif-logo.png"
              alt="AVIF Signature Emblem"
              className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(232,117,61,0.5)]"
            />
          </motion.div>
        </div>

        {/* Big Bold Typography from Slide 1 of user carousel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-display font-extrabold tracking-tight uppercase leading-none">
            AVIF
          </h1>

          {/* Core Slogan: "A VISION INTO FOCUS" */}
          <div className="mt-3 flex items-center justify-center gap-2 text-sm sm:text-lg md:text-xl font-display font-bold tracking-[0.3em] uppercase text-[#E8753D]">
            <span>A Vision Into Focus</span>
          </div>
        </motion.div>

        {/* Aperture Iris Graphic Inspired by Slide 1 */}
        <div className="my-10 relative flex items-center justify-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#E8753D] p-3 flex items-center justify-center shadow-[0_0_35px_rgba(232,117,61,0.3)] transition-transform duration-700 hover:rotate-90">
            {/* Iris Segments */}
            <div className="w-full h-full rounded-full relative overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#E8753D] via-[#C45A25] to-[#E8753D]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#080808] border-2 border-[#E8753D] flex items-center justify-center shadow-inner">
                <div className="w-4 h-4 rounded-full bg-[#E8753D] animate-ping" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle Statement */}
        <p className={`text-base sm:text-xl font-light max-w-2xl leading-relaxed ${
          isDark ? 'text-[#A7A39D]' : 'text-[#444444]'
        }`}>
          A creative and digital growth agency that helps brands build a stronger digital presence.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExplore}
            className="px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#E8753D] text-[#080808] hover:bg-[#ff8447] transition-all duration-300 shadow-[0_0_20px_rgba(232,117,61,0.3)] hover:shadow-[0_0_30px_rgba(232,117,61,0.5)] transform hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            <span>The Avif's Way</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onContact}
            className={`px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group ${
              isDark
                ? 'border-white/20 text-[#F5F3EE] hover:border-[#E8753D] hover:text-[#E8753D]'
                : 'border-black/20 text-[#080808] hover:border-[#E8753D] hover:text-[#E8753D]'
            }`}
          >
            <span>Bring Vision Into Focus</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
