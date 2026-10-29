import React, { useState } from 'react';
import {
  LayoutGrid,
  FileText,
  TrendingUp,
  User,
  Plus,
  Settings,
  Bell,
  ChevronDown,
  ArrowUpRight,
  Filter,
  Download,
  MoreHorizontal,
  X,
  Printer,
  Maximize2,
  Lock,
  ArrowLeft,
  Sparkles,
  CreditCard,
  Shield
} from 'lucide-react';

export default function DashboardView({ onBackToLanding }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeNav, setActiveNav] = useState('Overview');
  const [expensePeriod, setExpensePeriod] = useState('Weekly');
  const [incomeSort, setIncomeSort] = useState('Sort by Month');

  // Heatmap data matching Reference 2:
  // Colors: 'empty' (grey ring/circle), 'light' (blue #60a5fa), 'blue' (electric #1d4ed8), 'dark' (black #0f172a)
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const heatmapRows = [
    {
      category: 'Groceries',
      dots: ['empty', 'light', 'dark', 'blue', 'dark', 'blue', 'empty']
    },
    {
      category: 'Fashion',
      dots: ['empty', 'dark', 'blue', 'dark', 'blue', 'blue', 'empty']
    },
    {
      category: 'Electronics',
      dots: ['empty', 'empty', 'dark', 'blue', 'dark', 'blue', 'empty']
    }
  ];

  return (
    <div className="min-h-screen bg-[#ECEFF5] p-3 sm:p-6 lg:p-8 font-sans text-slate-800">
      
      {/* Top Bar with Return to Landing Page Pill */}
      <div className="max-w-[1520px] mx-auto mb-4 flex items-center justify-between">
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-sm hover:shadow border border-slate-200/80 transition-all active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à la Landing Page (AirLume Style)</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Mode Testeur Direct (Sans Login Requis)
          </span>
        </div>
      </div>

      {/* Main Container Card (Reference 2: Fingoals / KashUp Dashboard) */}
      <div className="max-w-[1520px] mx-auto bg-white rounded-[36px] shadow-xl border border-slate-200/70 p-5 lg:p-7">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          
          {/* ================= LEFT SIDEBAR (col-span-3) ================= */}
          <aside className="lg:col-span-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pr-0 lg:pr-6 pb-6 lg:pb-0">
            <div>
              {/* Brand Header */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                  {/* Geometric 4-leaf clover / KashUp star icon */}
                  <div className="grid grid-cols-2 gap-0.5">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-200"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-200"></span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900">KashUp</span>
                  <span className="text-[10px] font-bold text-blue-600">PRO</span>
                </div>
              </div>

              {/* Welcome text */}
              <div className="mb-7">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Welcome Back, Daniel!
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Current summary financial report
                </p>
              </div>

              {/* HOME NAV SECTION */}
              <div className="mb-6">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">
                  HOME
                </p>
                <div className="space-y-1.5">
                  
                  {/* Active Overview Pill */}
                  <button
                    onClick={() => setActiveNav('Overview')}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                      activeNav === 'Overview'
                        ? 'bg-black text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <LayoutGrid className="w-4 h-4" />
                      <span>Overview</span>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => setActiveNav('Legality Statement')}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-medium transition-all ${
                      activeNav === 'Legality Statement'
                        ? 'bg-black text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>Legality Statement</span>
                  </button>

                  <button
                    onClick={() => setActiveNav('Financial Projection')}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-medium transition-all ${
                      activeNav === 'Financial Projection'
                        ? 'bg-black text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 text-slate-400" />
                    <span>Financial Projection</span>
                  </button>

                  <button
                    onClick={() => setActiveNav('Account')}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-medium transition-all ${
                      activeNav === 'Account'
                        ? 'bg-black text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <User className="w-4 h-4 text-slate-400" />
                    <span>Account</span>
                  </button>

                </div>
              </div>

              {/* POCKET SECTION */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    POCKET
                  </p>
                  <button className="w-5 h-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <div className="space-y-1.5">
                  <button
                    onClick={() => setActiveNav('Married Savings')}
                    className="w-full flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
                  >
                    <CreditCard className="w-4 h-4 text-slate-400" />
                    <span>Married Savings</span>
                  </button>

                  <button
                    onClick={() => setActiveNav('Emergency Funds')}
                    className="w-full flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
                  >
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span>Emergency Funds</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Left Promo Card: "Unlock full version" */}
            <div className="mt-8 bg-[#1855ff] text-white rounded-[26px] p-4 relative overflow-hidden shadow-lg shadow-blue-500/20">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Top Unlock Icon */}
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>

                <h4 className="text-sm font-extrabold leading-tight">
                  Unlock full <br />version
                </h4>
                <p className="text-[10px] text-blue-100/90 mt-1">20+ metrics</p>

                {/* Free trial button */}
                <button className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-[10px] font-semibold transition-all">
                  <span>14 day free-trial</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              {/* Cheerful Avatar cut-out representation */}
              <div className="absolute -bottom-1 -right-1 w-24 h-28 flex items-end justify-center pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Avatar"
                  className="w-20 h-24 object-cover object-top rounded-t-full drop-shadow-md"
                />
              </div>
            </div>

          </aside>

          {/* ================= MAIN CONTENT AREA (col-span-9) ================= */}
          <main className="lg:col-span-9 flex flex-col justify-between">
            
            {/* Top Navigation Pill Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              
              {/* Pill Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {['Dashboard', 'Analytics', 'Invoice', 'Joint Savings', 'Calendar'].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                          : 'bg-[#F4F6FA] text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Right Action Controls & User Profile */}
              <div className="flex items-center gap-2.5">
                <button className="w-8 h-8 rounded-full bg-[#F4F6FA] hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors">
                  <Settings className="w-4 h-4" />
                </button>

                <button className="w-8 h-8 rounded-full bg-[#F4F6FA] hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors relative">
                  <Bell className="w-4 h-4" />
                  <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1.5 right-1.5"></span>
                </button>

                {/* User Profile Pill */}
                <div className="flex items-center gap-2.5 pl-1.5 pr-3 py-1 bg-[#F4F6FA] rounded-full border border-slate-200/50">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Maretta Daniel"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div className="text-left leading-tight hidden sm:block">
                    <p className="text-xs font-bold text-slate-800">Maretta Daniel</p>
                    <p className="text-[10px] text-slate-400">danielmaretta@mail.com</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Dashboard Header Bar: "Financial Overview" */}
            <div className="pt-6 pb-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Financial Overview
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Overview &gt; All Reports
                </p>
              </div>

              {/* Filters / Dropdowns */}
              <div className="flex items-center gap-2.5">
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                  <span>Default View</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                  <span>Export</span>
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                </button>

                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                  <span>Filter</span>
                  <Filter className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* MAIN WIDGETS GRID */}
            <div className="space-y-6">
              
              {/* ROW 1: Expense Breakdown + Financial Class Mastery & Right Mini Cards */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* WIDGET 1: Expense Breakdown (col-span-7) */}
                <div className="md:col-span-7 bg-[#FAFBFD] rounded-[28px] p-5 border border-slate-100 flex flex-col justify-between shadow-sm">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-700">Expense Breakdown</h4>
                      <div className="text-2xl font-black text-slate-900 mt-1">
                        $ 17,3K
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                        <span>{expensePeriod}</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </button>
                      <button className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 shadow-2xs">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap items-center gap-4 my-4 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> $ 1 - 100
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span> $ 100 - 500
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-black"></span> &gt; $ 500
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full border border-slate-300 bg-transparent"></span> No Expense
                    </span>
                  </div>

                  {/* Heatmap Matrix Grid */}
                  <div className="space-y-3.5 pt-2">
                    {heatmapRows.map((row) => (
                      <div key={row.category} className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold text-slate-500 w-24 shrink-0">
                          {row.category}
                        </span>

                        <div className="flex-1 flex items-center justify-between max-w-md">
                          {row.dots.map((dotType, idx) => {
                            let dotStyle = 'bg-slate-200/50 border border-slate-200';
                            if (dotType === 'light') dotStyle = 'bg-blue-400 shadow-sm';
                            if (dotType === 'blue') dotStyle = 'bg-blue-600 shadow-sm shadow-blue-500/30';
                            if (dotType === 'dark') dotStyle = 'bg-black shadow-sm';

                            return (
                              <div
                                key={idx}
                                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-transform hover:scale-110 cursor-pointer ${dotStyle}`}
                                title={`${row.category} Day ${days[idx]}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    {/* Days X-Axis labels */}
                    <div className="flex items-center justify-between gap-4 pt-1">
                      <span className="w-24 shrink-0"></span>
                      <div className="flex-1 flex items-center justify-between max-w-md text-[11px] font-bold text-slate-400">
                        {days.map((d, i) => (
                          <span key={i} className="w-7 text-center">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN OF ROW 1 (col-span-5) */}
                <div className="md:col-span-5 flex flex-col justify-between gap-4">
                  
                  {/* Join Financial Class Mastery Promo Card */}
                  <div className="bg-[#101217] text-white rounded-[26px] p-5 relative overflow-hidden shadow-md flex flex-col justify-between min-h-[140px]">
                    {/* Abstract wave overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-44 opacity-20 bg-gradient-to-l from-blue-500 to-transparent pointer-events-none" />
                    
                    <div>
                      <h4 className="text-base font-extrabold leading-snug">
                        Join Our Financial <br />Class Mastery
                      </h4>
                      <div className="mt-2.5">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#18392b] text-[#3dd68c] text-[10px] font-bold">
                          +15% discount for member
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all">
                        <span>Join Class</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 2 Mini Cards: Today Received + Financial Report */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Today Received Card */}
                    <div className="bg-[#FAFBFD] rounded-[24px] p-4 border border-slate-100 shadow-2xs flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                        <div className="w-4 h-4 rounded-full bg-slate-200/70 flex items-center justify-center">
                          <ChevronDown className="w-2.5 h-2.5 text-slate-600" />
                        </div>
                        <span>Today Received</span>
                      </div>

                      <div className="my-2">
                        <div className="text-xl font-black text-slate-900 tracking-tight">
                          $ 532,921
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-semibold">12%</span>
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Financial Report Dark Card */}
                    <div className="bg-[#101217] text-white rounded-[24px] p-4 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-end gap-1.5 text-slate-400">
                        <button className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs">
                          <X className="w-3 h-3" />
                        </button>
                        <button className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs">
                          <Printer className="w-3 h-3" />
                        </button>
                        <button className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs">
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="mt-4">
                        <p className="text-[10px] text-slate-400 font-medium">Track and Print Report</p>
                        <h5 className="text-sm font-bold text-white mt-0.5">Financial Report</h5>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* ROW 2: Income Sources (wide) + Financial Balance Gauge */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* WIDGET: Income Sources (col-span-8) */}
                <div className="md:col-span-8 bg-[#FAFBFD] rounded-[28px] p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                  
                  {/* Top Bar Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-xs font-bold text-slate-700">Income Sources</h4>

                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                        <span>Sort by Month</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </button>

                      <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                        <span>All Sources</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </button>

                      <button className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-2xs">
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Stat & Comparison Callout */}
                  <div className="flex flex-wrap items-end justify-between gap-4 my-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold mb-2">
                        30 Days
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        $ 7,72K
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                        Income Sources Statistic in a month
                      </p>
                    </div>

                    {/* Percentage Pill Callout */}
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-black text-blue-600">
                        +73,6%
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium">better than last month</p>
                    </div>
                  </div>

                  {/* Stylized Bar Chart */}
                  <div className="relative pt-6 pb-2">
                    {/* Dotted threshold line at 12k */}
                    <div className="absolute top-10 left-0 right-0 border-t border-dashed border-slate-300 flex items-center justify-end">
                      <span className="text-[9px] font-bold text-slate-400 bg-[#FAFBFD] px-1 -mt-2">12K Max</span>
                    </div>

                    <div className="flex items-end justify-around h-44 gap-4 px-2">
                      
                      {/* Bar 1: Black Striped Bar */}
                      <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="text-[10px] font-extrabold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs">
                          ↗ 2.7K
                        </div>
                        <div className="w-12 sm:w-16 h-24 rounded-2xl bg-[#0f172a] stripe-pattern-dark transition-all duration-300 group-hover:scale-y-105 origin-bottom shadow-md" />
                      </div>

                      {/* Bar 2: Dark Blue Textured Bar */}
                      <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="text-[10px] font-extrabold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs">
                          ↗ 5.6K
                        </div>
                        <div className="w-12 sm:w-16 h-16 rounded-2xl bg-[#1e3a8a] stripe-pattern-dark transition-all duration-300 group-hover:scale-y-105 origin-bottom shadow-md" />
                      </div>

                      {/* Bar 3: Bright Royal Blue Striped Bar (Hero Bar) */}
                      <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="text-[10px] font-extrabold text-white bg-blue-600 px-2.5 py-0.5 rounded-md shadow-sm">
                          ● 12K
                        </div>
                        <div className="w-12 sm:w-16 h-36 rounded-2xl bg-blue-600 stripe-pattern transition-all duration-300 group-hover:scale-y-105 origin-bottom shadow-lg shadow-blue-500/30" />
                      </div>

                      {/* Bar 4: Sky Blue Bar */}
                      <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="text-[10px] font-extrabold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs">
                          ↗ 8.1K
                        </div>
                        <div className="w-12 sm:w-16 h-28 rounded-2xl bg-[#b0d2fe] transition-all duration-300 group-hover:scale-y-105 origin-bottom shadow-sm" />
                      </div>

                    </div>
                  </div>

                  {/* Bottom Legend */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> Salary
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span> Insurance
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-black"></span> Bonus
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span> Another job
                    </span>
                  </div>

                </div>

                {/* WIDGET: Financial Balance (col-span-4) Speedometer Gauge */}
                <div className="md:col-span-4 bg-[#FAFBFD] rounded-[28px] p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-700">Financial Balance</h4>
                    <button className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium my-2">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> Total
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span> Profit Today
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span> For Week
                    </span>
                  </div>

                  {/* Semicircular Radial Gauge Visualization */}
                  <div className="relative flex flex-col items-center justify-center py-4">
                    {/* SVG Speedometer Arc */}
                    <div className="w-48 h-28 relative flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 200 110" className="w-full h-full">
                        {/* Segmented Ticks forming arc */}
                        {Array.from({ length: 25 }).map((_, i) => {
                          const angle = 180 + (i * (180 / 24));
                          const rad = (angle * Math.PI) / 180;
                          const r1 = 80;
                          const r2 = 96;
                          const x1 = 100 + r1 * Math.cos(rad);
                          const y1 = 100 + r1 * Math.sin(rad);
                          const x2 = 100 + r2 * Math.cos(rad);
                          const y2 = 100 + r2 * Math.sin(rad);

                          // Active blue for first ~12 ticks, light blue for next, grey for rest
                          let strokeColor = '#e2e8f0';
                          if (i < 9) strokeColor = '#2563eb';
                          else if (i < 17) strokeColor = '#93c5fd';

                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke={strokeColor}
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                          );
                        })}
                      </svg>

                      {/* Center Gauge Text */}
                      <div className="absolute bottom-1 text-center">
                        <div className="text-xl font-black text-slate-900 tracking-tight">
                          22%
                        </div>
                        <p className="text-[9px] text-slate-400 font-semibold">from yesterday</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="text-center pt-2 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 font-medium">
                      Profit is <span className="font-bold text-slate-700">22% More</span> short last week
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

