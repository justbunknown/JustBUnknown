import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualEntityArchitecture } from './components/DualEntityArchitecture';
import { TakeoffSimulator } from './components/TakeoffSimulator';
import { ThreatVectorMatrix } from './components/ThreatVectorMatrix';
import { PolicyComparison } from './components/PolicyComparison';
import { DiplomaticBrief } from './components/DiplomaticBrief';
import { EssayAnnotated } from './components/EssayAnnotated';
import { Footer } from './components/Footer';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Synchronize dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLaunchSimulator = () => {
    setActiveTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreArchitecture = () => {
    setActiveTab('architecture');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadEssay = () => {
    setActiveTab('essay');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col transition-colors selection:bg-amber-100 dark:selection:bg-amber-900/40 selection:text-amber-900 dark:selection:text-amber-100">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLaunchSimulator={handleLaunchSimulator}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div>
            <HeroSection
              onExploreArchitecture={handleExploreArchitecture}
              onLaunchSimulator={handleLaunchSimulator}
              onReadEssay={handleReadEssay}
            />
            <DiplomaticBrief />
            <DualEntityArchitecture />
            <TakeoffSimulator />
            <ThreatVectorMatrix />
            <PolicyComparison />
          </div>
        )}

        {activeTab === 'diplomatic' && (
          <div className="pt-6">
            <DiplomaticBrief />
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="pt-6">
            <DualEntityArchitecture />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="pt-6">
            <TakeoffSimulator />
          </div>
        )}

        {activeTab === 'threats' && (
          <div className="pt-6">
            <ThreatVectorMatrix />
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="pt-6">
            <PolicyComparison />
          </div>
        )}

        {activeTab === 'essay' && (
          <div className="pt-6">
            <EssayAnnotated />
          </div>
        )}
      </main>

      {/* Floating Theme Switcher */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-full bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      {/* Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
