
import React, { useState } from 'react';

const Fleet: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="px-6 py-12 space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
          <span className="material-symbols-outlined text-7xl text-white relative z-10 animate-float">directions_car</span>
        </div>
        <h2 className="text-4xl font-display font-bold tracking-tight">Our Fleet</h2>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-left glass-card p-6 border-white/10 hover:border-white/30 transition-all group active:scale-[0.98]"
        >
          <div className="flex justify-between items-center gap-4">
            <p className="text-white/80 leading-relaxed text-sm">
              We utilize specialized mobile units equipped with top-tier detailing equipment.
            </p>
            <span className={`material-symbols-outlined transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </div>
        </button>
      </div>

      {showDetails && (
        <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
          <div className="glass-card p-8 space-y-6 bg-white/[0.03]">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Operational Standards</h3>
              <p className="text-sm leading-relaxed text-white/70 font-light">
                Clean Stars operates fully equipped mobile valeting units designed for efficiency, reliability, and high-quality outcomes. We arrive organised, stocked, and ready to work so your vehicle receives proper attention without delays or shortcuts. Using commercial-grade vacuum systems, precision detailing tools, and interior-safe products, we remove debris, refresh surfaces, and restore presentation standards through a structured workflow that balances thoroughness with practical turnaround times. Our aim is straightforward: dependable service, professional results, and a noticeably cleaner interior delivered at your location with minimal disruption. Book with confidence and let Clean Stars handle the rest.
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Terms & Service Arrangement</h3>
              <p className="text-[11px] leading-relaxed text-white/40 font-light italic">
                Clean Stars is committed to providing services with reasonable care and skill. To maintain scheduling flexibility and service availability, bookings may be fulfilled by self-employed technicians, independent contractors, or approved subcontractors engaged to operate on behalf of Clean Stars. Such personnel act as independent service providers responsible for the execution of work performed. While Clean Stars endeavours to engage competent individuals, Clean Stars shall not be held liable for loss, damage, or incidental consequences arising from acts, omissions, or negligence attributable to independent subcontractors, except where liability cannot be excluded under applicable law. Customers agree that any concerns or claims relating to alleged damage must be reported promptly following service completion and may be subject to investigation. To the fullest extent permitted by law, Clean Stars disclaims responsibility for indirect loss, consequential damage, pre-existing defects, or issues arising from undisclosed vehicle conditions. By booking or accepting services, the customer acknowledges and agrees to these terms as part of the service arrangement.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fleet;
