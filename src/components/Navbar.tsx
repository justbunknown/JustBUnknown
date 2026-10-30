import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLaunchSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onLaunchSimulator }) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark in Display Font */}
        <button
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-stone-100 flex items-center justify-center text-stone-50 dark:text-stone-900 transition-transform group-hover:scale-105">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap">
            JustBUnknown
          </span>
        </button>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-400">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap transition-colors cursor-pointer hover:text-stone-900 dark:hover:text-stone-100 ${
              activeTab === 'overview'
                ? 'text-stone-950 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600 dark:decoration-amber-400'
                : ''
            }`}
          >
            Core Thesis
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`whitespace-nowrap transition-colors cursor-pointer hover:text-stone-900 dark:hover:text-stone-100 ${
              activeTab === 'architecture'
                ? 'text-stone-950 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600 dark:decoration-amber-400'
                : ''
            }`}
          >
            Dual-Entity System
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`whitespace-nowrap transition-colors cursor-pointer hover:text-stone-900 dark:hover:text-stone-100 ${
              activeTab === 'simulator'
                ? 'text-stone-950 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600 dark:decoration-amber-400'
                : ''
            }`}
          >
            Takeoff Simulator
          </button>
          <button
            onClick={() => setActiveTab('diplomatic')}
            className={`whitespace-nowrap transition-colors cursor-pointer hover:text-stone-900 dark:hover:text-stone-100 ${
              activeTab === 'diplomatic'
                ? 'text-stone-950 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600 dark:decoration-amber-400'
                : ''
            }`}
          >
            Diplomatic Brief
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`whitespace-nowrap transition-colors cursor-pointer hover:text-stone-900 dark:hover:text-stone-100 ${
              activeTab === 'comparison'
                ? 'text-stone-950 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600 dark:decoration-amber-400'
                : ''
            }`}
          >
            Policy Matrix
          </button>
          <button
            onClick={() => setActiveTab('essay')}
            className={`whitespace-nowrap transition-colors cursor-pointer hover:text-stone-900 dark:hover:text-stone-100 ${
              activeTab === 'essay'
                ? 'text-stone-950 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600 dark:decoration-amber-400'
                : ''
            }`}
          >
            Whitepaper
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onLaunchSimulator}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-50 bg-stone-900 dark:bg-stone-100 dark:text-stone-950 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-all shadow-sm active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
            <span>Simulate Takeoff</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar for Small Screens */}
      <div className="lg:hidden flex items-center gap-3 px-4 py-2 border-t border-stone-200 dark:border-stone-800 overflow-x-auto text-xs font-medium text-stone-600 dark:text-stone-400 scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'overview' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : ''}`}
        >
          Thesis
        </button>
        <button
          onClick={() => setActiveTab('architecture')}
          className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'architecture' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : ''}`}
        >
          Architecture
        </button>
        <button
          onClick={() => setActiveTab('simulator')}
          className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'simulator' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : ''}`}
        >
          Simulator
        </button>
        <button
          onClick={() => setActiveTab('diplomatic')}
          className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'diplomatic' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : ''}`}
        >
          Diplomatic
        </button>
        <button
          onClick={() => setActiveTab('comparison')}
          className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'comparison' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : ''}`}
        >
          Policy
        </button>
        <button
          onClick={() => setActiveTab('essay')}
          className={`whitespace-nowrap px-2.5 py-1 rounded ${activeTab === 'essay' ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100' : ''}`}
        >
          Whitepaper
        </button>
      </div>
    </header>
  );
};
