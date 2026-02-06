
import React from 'react';

interface FooterProps {
  onBook: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBook }) => {
  return (
    <footer className="px-6 pt-16 pb-36 border-t border-white/5 bg-black/60 backdrop-blur-xl relative z-10">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center">
          <h5 className="font-display font-bold text-xl mb-3 tracking-tighter">CLEAN STARS</h5>
          <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
            Monday — Sunday: 08:00 - 20:00<br/>
            Mobile Service Across West Sussex
          </p>
        </div>
        <button 
          onClick={onBook}
          className="w-full py-6 bg-star-white text-midnight rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-white/10 active:scale-95 transition-transform group"
        >
          <span className="material-symbols-outlined text-xl">calendar_month</span>
          <span className="text-sm font-black uppercase tracking-[0.2em]">Secure Your Slot</span>
        </button>
        <div className="flex gap-6">
          <button className="material-symbols-outlined text-white/40 hover:text-white transition-colors">share</button>
          <button className="material-symbols-outlined text-white/40 hover:text-white transition-colors">call</button>
          <button className="material-symbols-outlined text-white/40 hover:text-white transition-colors">mail</button>
        </div>
        <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">© 2024 CLEAN STARS DETAILING • BOGNOR REGIS</p>
      </div>
    </footer>
  );
};

export default Footer;
