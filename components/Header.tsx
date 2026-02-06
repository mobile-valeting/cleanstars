
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-8 relative z-20">
      <div className="flex flex-col">
        <h1 className="font-display text-2xl font-bold tracking-tighter neon-text">CLEAN STARS</h1>
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Premium Mobile Detailing</span>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-white/10 transition-colors">
        <span className="material-symbols-outlined text-xl">menu</span>
      </button>
    </header>
  );
};

export default Header;
