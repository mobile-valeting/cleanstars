
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home as HomeIcon, 
  Car, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu,
  ShieldCheck,
  Zap,
  StarHalf
} from 'lucide-react';

// --- TYPES ---
enum View {
  HOME = 'home',
  FLEET = 'fleet',
  BOOKINGS = 'bookings'
}

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
  features: string[];
  isBestValue?: boolean;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  icon: string;
}

// --- CONSTANTS ---
const SERVICES: Service[] = [
  {
    id: 'refresh',
    name: 'Light Interior Refresh',
    price: 25,
    description: 'A meticulous interior tidy and surfaces wipe-down. Perfect for weekly upkeep to maintain that fresh-off-the-lot feel.',
    icon: 'vacuum',
    features: [
      'Interior Dusting & Wipe Down',
      'Thorough Vacuuming',
      'Glass Cleaned (In/Out)',
      'Scented Finish'
    ]
  },
  {
    id: 'valet',
    name: 'Standard Interior Valet',
    price: 35,
    description: 'Our most popular choice for daily drivers. A deep interior vacuum, steam sanitization, and upholstery treatment.',
    icon: 'sanitizer',
    isBestValue: true,
    features: [
      'Deep Vacuum & Boot Clean',
      'Steam Sanitization of Surfaces',
      'Dash & Trim Dressing',
      'Floor Mats Scrubbed',
      'Pet & Odour Refresh'
    ]
  },
  {
    id: 'deep',
    name: 'Signature Deep Interior Clean',
    price: 55,
    description: 'Concierge-level interior detailing. Intensive stain removal, leather conditioning, and full anti-bacterial deep cleanse.',
    icon: 'clean_hands',
    features: [
      'Full Upholstery Extraction',
      'Leather Clean & Condition',
      'Deep Stain Removal',
      'Headlining Cleaned',
      'Air Vent Detailing'
    ]
  }
];

const ADD_ONS: AddOn[] = [
  { id: 'pet', name: 'Pet Hair Removal', price: 10, icon: 'pets' },
  { id: 'mess', name: 'Heavy Mess', price: 12.50, icon: 'cleaning_services' }
];

// --- COMPONENTS ---

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-6 py-8 relative z-20">
    <div className="flex flex-col">
      <h1 className="font-display text-2xl font-bold tracking-tighter neon-text">CLEAN STARS</h1>
      <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Premium Mobile Detailing</span>
    </div>
    <button className="w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-white/10 transition-colors">
      <Menu size={20} className="text-white/70" />
    </button>
  </header>
);

const ServiceCard: React.FC<{ service: Service; onInquire: () => void }> = ({ service, onInquire }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-card p-8 relative overflow-hidden border-white/10 ${service.isBestValue ? 'bg-white/[0.08] border-white/40' : ''}`}
  >
    {service.isBestValue && (
      <div className="absolute top-4 right-6">
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white bg-white/20 rounded-full px-3 py-1">Best Value</span>
      </div>
    )}
    <div className="flex justify-between items-start mb-6">
      <span className="material-symbols-outlined text-3xl font-light text-white/80">{service.icon}</span>
      <span className="text-3xl font-display font-bold tracking-tighter">£{service.price}</span>
    </div>
    <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
    <p className="text-white/50 text-sm font-light leading-relaxed mb-6">{service.description}</p>
    
    <div className="space-y-2 mb-8">
      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Included in this pack:</p>
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <CheckCircle2 size={12} className="text-white/40" />
          <span className="text-xs text-white/80 font-light">{feature}</span>
        </div>
      ))}
    </div>

    <button 
      onClick={onInquire}
      className={`w-full py-4 font-bold rounded-xl text-xs uppercase tracking-[0.2em] transition-all ${
        service.isBestValue 
          ? 'bg-star-white text-midnight shadow-lg' 
          : 'border border-white/20 text-white hover:bg-white/10'
      }`}
    >
      Inquire Now
    </button>
  </motion.div>
);

const Home: React.FC<{ onBook: () => void }> = ({ onBook }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="px-6 pt-2 pb-12"
  >
    <div className="mb-14">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
        <MapPin size={12} className="text-white/70" />
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
          <CheckCircle2 size={18} className="text-white" />
          Retain your car’s market value
        </li>
        <li className="flex items-center gap-3 text-sm font-medium text-white/90">
          <CheckCircle2 size={18} className="text-white" />
          Bespoke hand-finished care
        </li>
        <li className="flex items-center gap-3 text-sm font-medium text-white/90">
          <CheckCircle2 size={18} className="text-white" />
          Fully mobile – We come to you
        </li>
      </ul>
      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={onBook}
        className="w-full py-5 bg-star-white text-midnight font-black rounded-2xl text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
      >
        Secure Your Slot
      </motion.button>
    </div>

    <div className="space-y-6">
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} onInquire={onBook} />
      ))}
    </div>

    <section className="mt-20">
      <h4 className="text-[11px] uppercase tracking-[0.4em] text-white/50 font-bold mb-8 text-center">Optional Add-Ons</h4>
      <div className="grid grid-cols-2 gap-4">
        {ADD_ONS.map((addon) => (
          <div key={addon.id} className="glass-card p-6 flex flex-col items-center text-center border-white/5">
            <span className="material-symbols-outlined text-2xl text-white/60 mb-3">{addon.icon}</span>
            <p className="text-[11px] font-medium text-white/80 mb-1">{addon.name}</p>
            <p className="text-lg font-display font-bold text-white">+£{addon.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-24 px-4 bg-white/[0.03] py-12 rounded-[2rem] border border-white/5 text-center">
      <div className="flex gap-1 mb-8 text-white/80 justify-center">
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="white" />)}
      </div>
      <p className="text-xl font-light leading-relaxed text-white mb-10">
        "Clean Stars completely transformed my SUV's cabin. The signature interior clean actually exceeded my expectations."
      </p>
      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Verified Local Customer</p>
    </section>
  </motion.div>
);

const BookingFlow: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-6 py-12"
      >
        <div className="glass-card p-12 text-center space-y-4">
          <CheckCircle2 size={64} className="text-green-400 mx-auto" />
          <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
          <p className="text-white/60">One of our detailing experts will contact you shortly to confirm your slot.</p>
          <button onClick={() => setSubmitted(false)} className="mt-8 text-white/40 uppercase tracking-widest text-[10px] font-bold underline">Send Another Message</button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="px-6 py-12 space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold">Contact Us Now</h2>
        <p className="text-white/50 font-light px-4">Ready for a showroom finish? Reach out directly or leave a message below.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.a whileHover={{ y: -2 }} href="tel:01234567890" className="glass-card p-6 flex flex-col items-center gap-3 border-white/20 hover:bg-white/10 text-center">
          <Phone size={32} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call/Text & Book Now</span>
        </motion.a>
        <motion.a whileHover={{ y: -2 }} href="mailto:cleanstars@example.com" className="glass-card p-6 flex flex-col items-center gap-3 border-white/20 hover:bg-white/10 text-center">
          <Mail size={32} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Email Us</span>
        </motion.a>
      </div>

      <div className="glass-card p-8 space-y-6">
        <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-white/40 border-b border-white/5 pb-4">Inquiry Form</h3>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-white/30" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-white/30" />
          <textarea placeholder="Vehicle details & location..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-white/30"></textarea>
          <button onClick={() => setSubmitted(true)} className="w-full py-5 bg-star-white text-midnight font-black rounded-xl uppercase tracking-[0.2em] text-xs">Submit Inquiry</button>
        </div>
      </div>
    </motion.div>
  );
};

const Fleet: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-6 py-12 space-y-8"
    >
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
          <Car size={72} className="text-white relative z-10 animate-float" />
        </div>
        <h2 className="text-4xl font-display font-bold tracking-tight">Our Fleet</h2>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-left glass-card p-6 border-white/10 hover:border-white/30 transition-all group"
        >
          <div className="flex justify-between items-center gap-4">
            <p className="text-white/80 leading-relaxed text-sm">
              We utilize specialized mobile units equipped with top-tier detailing equipment.
            </p>
            <ChevronDown size={20} className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-card p-8 space-y-8 bg-white/[0.03]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={14} className="text-white/60" />
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Operational Standards</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70 font-light">
                  Clean Stars operates fully equipped mobile valeting units designed for efficiency, reliability, and high-quality outcomes. We arrive organised, stocked, and ready to work so your vehicle receives proper attention without delays or shortcuts. Using commercial-grade vacuum systems, precision detailing tools, and interior-safe products, we remove debris, refresh surfaces, and restore presentation standards through a structured workflow that balances thoroughness with practical turnaround times. Our aim is straightforward: dependable service, professional results, and a noticeably cleaner interior delivered at your location with minimal disruption.
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} className="text-white/60" />
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Terms & Service Arrangement</h3>
                </div>
                <p className="text-[11px] leading-relaxed text-white/40 font-light italic">
                  Clean Stars is committed to providing services with reasonable care and skill. To maintain scheduling flexibility and service availability, bookings may be fulfilled by self-employed technicians, independent contractors, or approved subcontractors engaged to operate on behalf of Clean Stars. Such personnel act as independent service providers responsible for the execution of work performed. While Clean Stars endeavours to engage competent individuals, Clean Stars shall not be held liable for loss, damage, or incidental consequences arising from acts, omissions, or negligence attributable to independent subcontractors. Customers agree that any concerns or claims relating to alleged damage must be reported promptly following service completion.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Navigation: React.FC<{ currentView: View; onNavigate: (v: View) => void }> = ({ currentView, onNavigate }) => {
  const items = [
    { view: View.HOME, icon: HomeIcon, label: 'Home' },
    { view: View.FLEET, icon: Car, label: 'Fleet' },
    { view: View.BOOKINGS, icon: MessageSquare, label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-6 left-6 right-6 h-16 glass-card flex justify-around items-center z-50 border-white/20 shadow-2xl">
      {items.map(({ view, icon: Icon }) => (
        <button
          key={view}
          onClick={() => onNavigate(view)}
          className={`flex flex-col items-center gap-1 transition-all ${currentView === view ? 'text-white scale-110' : 'text-white/40'}`}
        >
          <Icon size={22} />
          {currentView === view && <motion.div layoutId="nav-dot" className="w-1 h-1 bg-white rounded-full" />}
        </button>
      ))}
    </nav>
  );
};

const Footer: React.FC<{ onBook: () => void }> = ({ onBook }) => (
  <footer className="px-6 pt-16 pb-36 border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
    <div className="flex flex-col items-center gap-10">
      <div className="text-center">
        <h5 className="font-display font-bold text-xl mb-3 tracking-tighter">CLEAN STARS</h5>
        <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
          Monday — Sunday: 08:00 - 20:00<br/>
          Mobile Service Across West Sussex
        </p>
      </div>
      <motion.button 
        whileTap={{ scale: 0.98 }}
        onClick={onBook}
        className="w-full py-6 bg-star-white text-midnight rounded-2xl flex items-center justify-center gap-3 shadow-2xl"
      >
        <Phone size={18} />
        <span className="text-sm font-black uppercase tracking-[0.2em]">Call / Book Now</span>
      </motion.button>
      <div className="flex gap-8">
        <Mail size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
        <Phone size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
        <MapPin size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
      </div>
      <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">© 2024 CLEAN STARS DETAILING • BOGNOR REGIS</p>
    </div>
  </footer>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-midnight selection:bg-white selection:text-midnight">
      {/* Background Decorative Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="geometric-grid absolute inset-0 opacity-20"></div>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="star-particle animate-pulse" 
            style={{ 
              width: `${Math.random() * 2 + 1}px`, 
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }} 
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-midnight/50 to-midnight"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-lg mx-auto bg-midnight/30 border-x border-white/5">
        <Header />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {currentView === View.HOME && <Home key="home" onBook={() => handleNavigate(View.BOOKINGS)} />}
            {currentView === View.BOOKINGS && <BookingFlow key="bookings" />}
            {currentView === View.FLEET && <Fleet key="fleet" />}
          </AnimatePresence>
        </main>

        <Footer onBook={() => handleNavigate(View.BOOKINGS)} />
        <Navigation currentView={currentView} onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
