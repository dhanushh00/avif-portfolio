import React, { useState } from 'react';
import { ThemeMode } from './types';
import { CustomCursor } from './components/CustomCursor';
import { FocusCanvas } from './components/FocusCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { Capabilities } from './components/Capabilities';
import { Approach } from './components/Approach';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleExplore = () => {
    const el = document.getElementById('whos-avif');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative selection:bg-[#E8753D] selection:text-[#080808] overflow-x-hidden ${
        isDark ? 'bg-[#080808] text-[#F5F3EE]' : 'bg-[#F5F3EE] text-[#080808]'
      }`}
    >
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Subtle Background Particle Field */}
      <FocusCanvas />

      {/* Top Navigation with Theme Toggle Button at Top Right */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Agency Presentation */}
      <main className="relative z-10">
        {/* Slide 01: Hero Presentation */}
        <Hero
          theme={theme}
          onExplore={handleExplore}
          onContact={handleContact}
        />

        {/* Slide 02 & 03: "So, who's AVIF?" & "The Avif's way!" */}
        <WhoWeAre theme={theme} />

        {/* Slide 04: "THE BIG 4'S OF AVIF" */}
        <Capabilities theme={theme} />

        {/* Slide 05: Our 5-Step Approach Pipeline */}
        <Approach theme={theme} />

        {/* Slide 05 Closing: "Ready to bring your vision into focus? Follow @avifdigital" */}
        <ContactSection theme={theme} />
      </main>

      {/* Clean Minimal Footer */}
      <Footer theme={theme} />
    </div>
  );
};

export default App;
