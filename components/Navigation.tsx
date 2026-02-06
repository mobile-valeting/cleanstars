
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: View.HOME, icon: 'home' },
    { view: View.FLEET, icon: 'directions_car' },
    { view: View.BOOKINGS, icon: 'chat' },
  ];

  return (
    <nav className="fixed bottom-6 left-6 right-6 h-16 glass-card backdrop-blur-3xl flex justify-around items-center z-50 border-white/20 shadow-2xl">
      {navItems.map((item) => (
        <button
          key={item.view}
          onClick={() => onNavigate(item.view)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            currentView === item.view ? 'text-white scale-110' : 'text-white/40'
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          {currentView === item.view && <div className="w-1 h-1 bg-white rounded-full mt-0.5"></div>}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
