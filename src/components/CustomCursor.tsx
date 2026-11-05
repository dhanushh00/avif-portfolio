import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest('a, button, [role="button"], input, textarea, .hover-interactive');
      setHovered(!!isInteractive);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Elastic Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        animate={{
          x: pos.x - (hovered ? 22 : 14),
          y: pos.y - (hovered ? 22 : 14),
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          borderColor: hovered ? '#E8753D' : 'rgba(232, 117, 61, 0.45)',
          backgroundColor: hovered ? 'rgba(232, 117, 61, 0.08)' : 'transparent',
          scale: hovered ? 1.15 : 1,
        }}
        transition={{ type: 'spring', damping: 26, stiffness: 320, mass: 0.3 }}
      />

      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#E8753D] rounded-full pointer-events-none"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.1 }}
      />
    </div>
  );
};
