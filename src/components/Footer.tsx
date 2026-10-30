import React from 'react';
import { Shield } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-950/80 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <span className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 tracking-tight">
            JustBUnknown
          </span>
          <span className="text-stone-400 dark:text-stone-600">·</span>
          <span className="text-xs text-stone-500 font-sans">
            Hardware-Enforced Frontier AI Containment
          </span>
        </div>

        <nav className="flex items-center gap-6 text-xs font-medium text-stone-600 dark:text-stone-400">
          <button
            onClick={() => setActiveTab('overview')}
            className="hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className="hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
          >
            Dual-Entity Specs
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className="hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
          >
            Simulator
          </button>
          <button
            onClick={() => setActiveTab('diplomatic')}
            className="hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
          >
            Diplomatic Brief
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className="hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
          >
            Policy Matrix
          </button>
          <button
            onClick={() => setActiveTab('essay')}
            className="hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
          >
            Full Text
          </button>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-stone-200/60 dark:border-stone-800/60 text-center text-xs text-stone-400 font-mono">
        An interactive institutional framework exploring the separation of frontier model training from equity claims and hardware gradient locks.
      </div>
    </footer>
  );
};
