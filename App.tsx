
import React, { useState } from 'react';
import { View } from './types';
import Header from './components/Header';
import Home from './components/Home';
import BookingFlow from './components/BookingFlow';
import Fleet from './components/Fleet';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onBook={() => handleNavigate(View.BOOKINGS)} />;
      case View.BOOKINGS:
        return <BookingFlow />;
      case View.FLEET:
        return <Fleet />;
      default:
        return <Home onBook={() => handleNavigate(View.BOOKINGS)} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-midnight selection:bg-white selection:text-midnight">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="geometric-grid absolute inset-0"></div>
        <div className="star-particle w-1 h-1 top-[15%] left-[10%] animate-pulse"></div>
        <div className="star-particle w-[2px] h-[2px] top-[45%] left-[85%]"></div>
        <div className="star-particle w-1 h-1 top-[75%] left-[20%] animate-pulse"></div>
        <div className="star-particle w-[2px] h-[2px] top-[80%] left-[55%]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-midnight/50 to-midnight"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-lg mx-auto">
        <Header />
        
        <main className="flex-grow">
          {renderContent()}
        </main>

        <Footer onBook={() => handleNavigate(View.BOOKINGS)} />
        
        <Navigation 
          currentView={currentView} 
          onNavigate={handleNavigate} 
        />
      </div>
    </div>
  );
};

export default App;
