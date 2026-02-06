
import React, { useState } from 'react';

const BookingFlow: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="px-6 py-12">
        <div className="glass-card p-12 text-center space-y-4 animate-in zoom-in duration-500">
          <span className="material-symbols-outlined text-6xl text-green-400">check_circle</span>
          <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
          <p className="text-white/60">One of our detailing experts will contact you shortly to confirm your slot.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-white/40 uppercase tracking-widest text-[10px] font-bold underline underline-offset-4"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4 mb-4">
        <h2 className="text-4xl font-display font-bold">Contact Us Now</h2>
        <p className="text-white/50 font-light px-4">Ready for a showroom finish? Reach out directly or leave a message below.</p>
      </div>

      {/* Quick Contact Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <a 
          href="tel:01234567890" 
          className="glass-card p-6 flex flex-col items-center gap-3 border-white/20 hover:bg-white/10 transition-all text-center"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Call/Text & Book Now</span>
        </a>
        <a 
          href="mailto:cleanstarsdetailing@example.com" 
          className="glass-card p-6 flex flex-col items-center gap-3 border-white/20 hover:bg-white/10 transition-all text-center"
        >
          <span className="material-symbols-outlined text-3xl">mail</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Email Us</span>
        </a>
      </div>

      <div className="glass-card p-8 space-y-6">
        <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-white/40 border-b border-white/5 pb-4">Inquiry Form</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-white/20 outline-none placeholder:text-white/30" 
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-white/20 outline-none placeholder:text-white/30" 
          />
          <textarea 
            placeholder="Tell us about your car & location..." 
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-white/20 outline-none placeholder:text-white/30 resize-none"
          ></textarea>
          <button 
            onClick={() => setSubmitted(true)}
            className="w-full py-5 bg-star-white text-midnight font-black rounded-xl uppercase tracking-[0.2em] shadow-xl shadow-white/5 active:scale-95 transition-all text-xs"
          >
            Submit Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
