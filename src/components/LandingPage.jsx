import React, { useState } from 'react';
import { 
  Sparkles, 
  Plane, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Compass, 
  Search, 
  CreditCard, 
  Gift, 
  BellRing, 
  ChevronRight,
  ExternalLink,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function LandingPage({ onGoToDashboard }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Real-Time Fare Predictions",
      desc: "Algorithmes prédictifs pour réserver vos vols et dépenses au moment où les prix chutent.",
      badge: "when to book to get best prices",
      highlight: true
    },
    {
      id: 1,
      icon: Compass,
      title: "Smart Route Optimization",
      desc: "IA suggérant les itinéraires les plus rapides, économiques et confortables sans détour.",
      badge: "ai suggests faster, cheaper routes",
      highlight: false
    },
    {
      id: 2,
      icon: Gift,
      title: "Dynamic Loyalty Points Tracking",
      desc: "Suivez l'accumulation et la valorisation de vos points en direct lors de chaque dépense.",
      badge: "see your points grow live as you book",
      highlight: false
    },
    {
      id: 3,
      icon: BellRing,
      title: "Personalized Flight Alerts",
      desc: "Soyez notifié dès qu'un rabais exceptionnel est détecté sur vos destinations favorites.",
      badge: "get alerts for price drops instantly",
      highlight: false
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Integrated Rewards Redemption",
      desc: "Convertissez directement vos points de fidélité en cash ou remises partenaires immédiates.",
      badge: "use points for discounts in 1-click",
      highlight: false
    },
    {
      id: 5,
      icon: Layers,
      title: "Airline Comparison Engine",
      desc: "Comparez plus de 200 compagnies et plateformes en temps réel sans frais cachés.",
      badge: "compare 200+ partners in seconds",
      highlight: false
    },
    {
      id: 6,
      icon: Sparkles,
      title: "Seat & Service Recommendations",
      desc: "L'IA sélectionne le meilleur confort à bord selon vos préférences personnalisées.",
      badge: "ai suggests best seats based on taste",
      highlight: false
    },
    {
      id: 7,
      icon: ShieldCheck,
      title: "Secure One-Click Checkout",
      desc: "Finalisation instantanée et sécurisée de vos réservations avec protection des paiements.",
      badge: "book flights quickly with secure pay",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#080d26] text-white selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Top Ambient Glow / Background Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/25 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-60 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Header / Navigation Bar (AirLume Style) */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Plane className="w-5 h-5 text-white -rotate-45" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold tracking-tight text-white">KashUp</span>
            <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-400/30">.Ai</span>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#hero" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#features" className="hover:text-white transition-colors">Loyalty Points</a>
          <a href="#features" className="hover:text-white transition-colors">How It Works</a>
          <a href="#features" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onGoToDashboard}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-1.5"
          >
            Log In
          </button>
          
          <button 
            onClick={onGoToDashboard}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/35 hover:shadow-blue-500/50 transition-all duration-200 active:scale-95"
          >
            <span>Accéder au Dashboard</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        {/* Floating Author Pill like in reference */}
        <div className="hidden lg:flex items-center gap-2 absolute top-12 right-12 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full shadow-xl">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-xs font-bold text-white">
            JD
          </div>
          <div className="text-left text-xs leading-tight">
            <p className="font-semibold text-white">@kashup_design</p>
            <p className="text-[10px] text-slate-400">NextGen UI System</p>
          </div>
        </div>

        {/* Small Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Fly Smarter & Save With KashUp AI</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
          Save Time & Money <br />
          <span className="inline-flex items-center gap-3">
            <span className="text-blue-400">✈</span> On Every Trip 
            <span className="text-2xl sm:text-3xl">🌍</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
          Discover the cheapest fares, get personalized flight recommendations, and book effortlessly with our AI-powered platform.
        </p>

        {/* Main Hero CTA Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={onGoToDashboard}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 transition-all duration-200 active:scale-95"
          >
            <span>Search Flights & Deals Now</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>

          <button 
            onClick={onGoToDashboard}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm backdrop-blur-md transition-all active:scale-95"
          >
            <span>Ouvrir Dashboard (Sans Login)</span>
            <ExternalLink className="w-4 h-4 text-slate-300" />
          </button>
        </div>

        {/* 3 Floating Cards Layout (Faithful to AirLume reference) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto text-left">
          
          {/* Left Card: "Your AirLume / KashUp Points" */}
          <div className="bg-white text-slate-900 rounded-[28px] p-6 shadow-2xl border border-white/20 relative group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-slate-500">Your KashUp Points</p>
                <p className="text-[10px] text-slate-400">Last Update: Real-Time</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-extrabold tracking-tight text-blue-600">13,200</span>
              <span className="text-[11px] font-semibold bg-blue-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Ready
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-between border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">+</div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Next Reward</p>
                  <p className="text-[10px] text-slate-500">$20 off at 900 pts</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer hover:bg-slate-300">
                <ArrowRight className="w-3 h-3 text-slate-700" />
              </div>
            </div>

            {/* Visual Pills below */}
            <div className="mt-4 space-y-2">
              <div className="h-4 bg-slate-100 rounded-full w-full flex items-center px-2">
                <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-900"></div>
                <div className="h-3 bg-slate-100 rounded-full flex-1"></div>
              </div>
            </div>
          </div>

          {/* Center Card: "Scanning 200+ Airlines" (Mockup phone style) */}
          <div className="bg-white text-slate-900 rounded-[34px] p-6 shadow-2xl border-4 border-white/20 relative scale-105 z-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium mb-3">
                KashUp Smart Search
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Scanning 200+ <br />Airlines In Real-Time
              </h3>

              {/* Circular Gauge / Stat */}
              <div className="my-5 p-3 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent flex items-center justify-center font-bold text-xs text-blue-600 shrink-0">
                  94%
                </div>
                <p className="text-[11px] leading-tight text-slate-600 font-medium">
                  Price expected to drop for Sydney flight in <span className="font-bold text-slate-900">three days 🔥</span>
                </p>
              </div>

              {/* Realistic Flight Card Preview */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner h-36 bg-gradient-to-t from-blue-900 via-indigo-900 to-slate-900 flex flex-col justify-end p-4 text-white">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] text-blue-200 uppercase font-semibold">Direct Flight</p>
                    <p className="text-sm font-bold">Paris (CDG) ➔ Tokyo (NRT)</p>
                  </div>
                  <span className="text-xs font-extrabold bg-blue-500/80 px-2 py-1 rounded-lg backdrop-blur-sm">$499</span>
                </div>
              </div>

              {/* Review Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
                <div className="flex -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[9px] font-bold text-black">A</span>
                  <span className="w-5 h-5 rounded-full bg-emerald-400 border border-white flex items-center justify-center text-[9px] font-bold text-black">M</span>
                  <span className="w-5 h-5 rounded-full bg-indigo-500 border border-white flex items-center justify-center text-[9px] font-bold text-white">R</span>
                </div>
                <span className="text-[11px] text-slate-700">98% Users Satisfied</span>
              </div>
            </div>
          </div>

          {/* Right Card: "Best Deal Found" (Glass Glow Style) */}
          <div className="glass-dark rounded-[28px] p-6 shadow-2xl relative group hover:-translate-y-1 transition-transform duration-300 border border-blue-400/30">
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-blue-900 text-[11px] font-bold shadow-md">
                ★ Best Deal Found
              </span>
            </div>

            <p className="text-[10px] text-blue-200/70 mt-3">Last Update</p>
            <h4 className="text-xl font-extrabold text-white mt-1">NYC ➔ LAX</h4>
            <div className="text-2xl font-black text-white mt-1">
              Only <span className="text-blue-400">$179</span>
            </div>
            <p className="text-[11px] text-blue-200/80 mt-1">
              Saved 28% Using AI Prediction
            </p>

            {/* Dotted Flight Trajectory Arc */}
            <div className="my-6 relative flex items-center justify-center py-2">
              <div className="w-full border-t-2 border-dashed border-blue-400/40 relative">
                <Plane className="w-5 h-5 text-blue-300 absolute left-1/2 -top-2.5 -translate-x-1/2 rotate-45 animate-pulse" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-blue-200 font-medium">Non-Stop • 5h 45m</span>
              <button 
                onClick={onGoToDashboard}
                className="w-8 h-8 rounded-full bg-white text-blue-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-white/20"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* AI Features Section (Clean White Transition like Reference 1) */}
      <section id="features" className="relative z-10 bg-[#f8fafc] text-slate-900 rounded-t-[48px] pt-20 pb-28 px-6 transition-all">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
              AI Features Section
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              AI-Powered Features, Travel Effortless With KashUp
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              enjoy seamless booking, smarter flight predictions, and personalized rewards powered by kashup's ai for smoother journeys.
            </p>
          </div>

          {/* 8 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const isSelected = activeFeature === index || item.highlight;
              const IconComponent = item.icon || Plane;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer rounded-[26px] p-6 transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#183ec2] text-white shadow-xl shadow-blue-700/25 -translate-y-1.5'
                      : 'bg-white text-slate-800 shadow-sm hover:shadow-md border border-slate-100 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className={`text-base font-bold mb-2 leading-snug ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Tag badge / short text */}
                    <p className={`text-xs mb-3 font-medium ${
                      isSelected ? 'text-blue-100' : 'text-slate-400'
                    }`}>
                      {item.badge}
                    </p>

                    {/* Description */}
                    <p className={`text-xs leading-relaxed ${
                      isSelected ? 'text-blue-100/90' : 'text-slate-500'
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Learn more link */}
                  <div className="mt-6 pt-4 flex items-center gap-1.5 text-xs font-bold">
                    <span className={isSelected ? 'text-white' : 'text-blue-600'}>
                      Learn more
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Fast Action Banner */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-950 rounded-[32px] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Prêt pour le test visuel ?</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">Accédez directement au Dashboard Financier</h3>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Consultez le layout complet inspiré de la référence Fingoals : graphiques, matrice de dépenses, jauges et indicateurs, sans aucun mot de passe requis.
              </p>
            </div>
            <button
              onClick={onGoToDashboard}
              className="shrink-0 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Ouvrir le Dashboard</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Plane className="w-3.5 h-3.5 -rotate-45" />
            </div>
            <span className="font-bold text-white text-sm">KashUp</span>
            <span className="text-slate-500">© 2026. Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onGoToDashboard} className="hover:text-white transition-colors">Dashboard Direct</button>
            <a href="#hero" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#hero" className="hover:text-white transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

