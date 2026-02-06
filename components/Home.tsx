
import React from 'react';
import { SERVICES, ADD_ONS, TESTIMONIALS } from '../constants';
import ServiceCard from './ServiceCard';

interface HomeProps {
  onBook: () => void;
}

const Home: React.FC<HomeProps> = ({ onBook }) => {
  return (
    <div className="px-6 pt-2 pb-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="material-symbols-outlined text-[14px] text-white/70">location_on</span>
          <span className="text-[10px] font-medium tracking-widest uppercase text-white/70">Bognor Regis Premier Service</span>
        </div>
        <h2 className="text-[44px] font-display font-light leading-[1.05] mb-6 tracking-tight">
          Unrivaled <span className="font-bold">Precision.</span><br/>Showroom Finish.
        </h2>
        <p className="text-white/70 text-base leading-relaxed max-w-[320px] font-light mb-8">
          Bognor Regis’ premier mobile detailing service for daily drivers and car collectors.
        </p>
        <ul className="space-y-3 mb-10">
          <li className="flex items-center gap-3 text-sm font-medium text-white/90">
            <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
            Retain your car’s market value
          </li>
          <li className="flex items-center gap-3 text-sm font-medium text-white/90">
            <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
            Bespoke hand-finished care
          </li>
          <li className="flex items-center gap-3 text-sm font-medium text-white/90">
            <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
            Fully mobile – We come to you
          </li>
        </ul>
        <button 
          onClick={onBook}
          className="w-full py-5 bg-star-white text-midnight font-black rounded-2xl text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
        >
          Secure Your Slot
        </button>
      </div>

      {/* Services List */}
      <div className="space-y-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} onInquire={onBook} />
        ))}
      </div>

      {/* Add-Ons */}
      <section className="mt-20">
        <h4 className="text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold mb-8 text-center">Optional Add-Ons</h4>
        <div className="grid grid-cols-2 gap-4">
          {ADD_ONS.map((addon) => (
            <div key={addon.id} className="glass-card p-6 flex flex-col items-center text-center border-white/5 hover:border-white/20 transition-all">
              <span className="material-symbols-outlined text-2xl text-white/60 mb-3">{addon.icon}</span>
              <p className="text-[11px] font-medium text-white/80 mb-1">{addon.name}</p>
              <p className="text-lg font-display font-bold text-white">+£{addon.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24 px-4 bg-white/[0.03] py-12 rounded-[2rem] border border-white/5">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-1 mb-8 text-white/80">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[18px] fill-[1]">star</span>
            ))}
          </div>
          <p className="text-xl font-light leading-relaxed text-white mb-10 px-2">
            {TESTIMONIALS[0].text}
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">{TESTIMONIALS[0].author}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
