
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onInquire: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInquire }) => {
  const isBestValue = service.isBestValue;
  
  return (
    <div className={`glass-card glass-card-glow p-8 relative overflow-hidden group border-white/10 ${isBestValue ? 'bg-white/[0.08] border-white/40' : ''}`}>
      {isBestValue && (
        <div className="absolute top-4 right-6">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white bg-white/20 rounded-full px-3 py-1">Best Value</span>
        </div>
      )}
      <div className="flex justify-between items-start mb-6">
        <span className={`material-symbols-outlined text-3xl font-light ${isBestValue ? 'text-white' : 'text-white/80'}`}>{service.icon}</span>
        <span className="text-3xl font-display font-bold tracking-tighter">£{service.price}</span>
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
      <p className={`${isBestValue ? 'text-white/70' : 'text-white/50'} text-sm font-light leading-relaxed mb-6`}>
        {service.description}
      </p>
      
      <div className="space-y-2 mb-8">
        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Included in this pack:</p>
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-white/40">done</span>
            <span className="text-xs text-white/80 font-light">{feature}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={onInquire}
        className={`w-full py-4 font-bold rounded-xl text-xs uppercase tracking-[0.2em] transition-all ${
          isBestValue 
            ? 'bg-white text-midnight shadow-lg' 
            : 'border border-white/20 text-white hover:bg-white/10'
        }`}
      >
        Inquire {isBestValue ? 'Essential' : (service.id === 'refresh' ? 'Refresh' : 'Signature')} Now
      </button>
    </div>
  );
};

export default ServiceCard;
