import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DashboardView from './components/DashboardView';
import { Eye, LayoutDashboard, Globe } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'dashboard'

  return (
    <div className="relative min-h-screen">
      
      {/* Floating View Switcher Bar (Always accessible for instant testing) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 text-white backdrop-blur-xl border border-white/20 px-3 py-2 rounded-full shadow-2xl flex items-center gap-2">
        <span className="text-[11px] font-bold text-slate-400 px-2 flex items-center gap-1.5 hidden sm:flex">
          <Eye className="w-3.5 h-3.5 text-blue-400" /> Mode Visuel :
        </span>

        <button
          onClick={() => setCurrentView('landing')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
            currentView === 'landing'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Réf 1: Landing (AirLume)</span>
        </button>

        <button
          onClick={() => setCurrentView('dashboard')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
            currentView === 'dashboard'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Réf 2: Dashboard (Fingoals)</span>
        </button>
      </div>

      {/* Render selected view */}
      {currentView === 'landing' ? (
        <LandingPage onGoToDashboard={() => setCurrentView('dashboard')} />
      ) : (
        <DashboardView onBackToLanding={() => setCurrentView('landing')} />
      )}

    </div>
  );
}
