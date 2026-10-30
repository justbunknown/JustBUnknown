import React, { useState } from 'react';
import { AlertCircle, ShieldAlert, CheckCircle, ArrowRight, Zap, Filter } from 'lucide-react';
import { THREAT_SCENARIOS } from '../data/planRData';
import { ThreatScenario } from '../types/planR';

export const ThreatVectorMatrix: React.FC = () => {
  const [selectedThreat, setSelectedThreat] = useState<ThreatScenario>(THREAT_SCENARIOS[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [testedThreatState, setTestedThreatState] = useState<{ [key: string]: boolean }>({});

  const filteredThreats = categoryFilter === 'all'
    ? THREAT_SCENARIOS
    : THREAT_SCENARIOS.filter((t) => t.category === categoryFilter);

  const handleTestThreat = (id: string) => {
    setTestedThreatState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-stone-800">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest font-mono text-stone-500 dark:text-stone-400 mb-1">
          THREAT MODELING & DEFENSIBILITY
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
          The Kokotajlo Doom Scenarios & Hardware Resolution
        </h2>
        <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm max-w-3xl">
          Daniel Kokotajlo and AI safety researchers have mapped the primary vectors through which frontier AI companies lead civilization into catastrophe. Here is how JustBUnknown systematically dismantles each vector at the hardware level.
        </p>
      </div>

      {/* Filter Tabs (Interactive buttons per design rules) */}
      <div className="flex items-center gap-1 p-1 bg-stone-200/70 dark:bg-stone-800/60 rounded-lg mb-8 overflow-x-auto w-fit">
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            categoryFilter === 'all'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          All Threats (6)
        </button>
        <button
          onClick={() => setCategoryFilter('financial')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            categoryFilter === 'financial'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Financial IOUs
        </button>
        <button
          onClick={() => setCategoryFilter('hardware')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            categoryFilter === 'hardware'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Compute Overhang
        </button>
        <button
          onClick={() => setCategoryFilter('cyber')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            categoryFilter === 'cyber'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Weight Exfiltration
        </button>
        <button
          onClick={() => setCategoryFilter('intelligence')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            categoryFilter === 'intelligence'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Blackmail Recon
        </button>
        <button
          onClick={() => setCategoryFilter('recursive')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            categoryFilter === 'recursive'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Recursive Takeoff
        </button>
      </div>

      {/* 2-Column Split: Threat List (Left) and Interactive Resolution Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Threat List Cards */}
        <div className="lg:col-span-5 space-y-3">
          {filteredThreats.map((threat) => (
            <div
              key={threat.id}
              onClick={() => setSelectedThreat(threat)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedThreat.id === threat.id
                  ? 'bg-stone-100 dark:bg-stone-900 border-amber-600 dark:border-amber-400 ring-1 ring-amber-600 dark:ring-amber-400'
                  : 'bg-white dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono uppercase text-stone-500">
                  {threat.category}
                </span>
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
                  SEVERITY {threat.severityScore}/10
                </span>
              </div>
              <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base">
                {threat.title}
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2">
                {threat.kokotajloDescription}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Deep Analysis Card */}
        <div className="lg:col-span-7 bg-stone-100/80 dark:bg-stone-900/60 rounded-xl p-8 border border-stone-200 dark:border-stone-800">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
                THREAT VECTOR DEEP DIVE
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                {selectedThreat.title}
              </h3>
            </div>
            <div className="text-xs font-mono px-3 py-1 bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 rounded font-bold">
              RISK SCORE: {selectedThreat.severityScore}
            </div>
          </div>

          {/* Kokotajlo Disaster Scenario */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
              The Kokotajlo Disaster Scenario (Plan A)
            </h4>
            <div className="p-4 bg-red-50/60 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/40 text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif italic">
              "{selectedThreat.kokotajloDescription}"
            </div>
          </div>

          {/* Status Quo Vulnerability */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
              Why Current Frontier Labs Cannot Defend Against This
            </h4>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {selectedThreat.statusQuoVulnerability}
            </p>
          </div>

          {/* Plan R Hardware Resolution */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>JustBUnknown Hardware & Institutional Resolution</span>
            </h4>
            <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-900/40 text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              <p className="font-medium text-emerald-900 dark:text-emerald-200 mb-2">
                {selectedThreat.planRResolution}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                <span className="font-semibold text-stone-900 dark:text-stone-100">Physical Hardware Barrier: </span>
                {selectedThreat.hardwareEnforcementMechanism}
              </p>
            </div>
          </div>

          {/* Interactive Threat Scenario Test Button */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={() => handleTestThreat(selectedThreat.id)}
              className="px-4 py-2.5 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-xs font-semibold flex items-center gap-2 hover:bg-stone-800 dark:hover:bg-white transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-400 dark:text-amber-600" />
              <span>
                {testedThreatState[selectedThreat.id] ? 'Hide Threat Collision Trace' : 'Execute Threat Collision Simulation'}
              </span>
            </button>

            {testedThreatState[selectedThreat.id] && (
              <div className="mt-4 p-4 bg-stone-200/60 dark:bg-stone-800/60 rounded-lg text-xs font-mono space-y-2 border border-stone-300 dark:border-stone-700 animate-fadeIn">
                <div className="text-red-600 dark:text-red-400 font-bold">
                  [Plan A Trace]: Threat triggered. Fiduciary duties prevent freeze. Fast-track deployment across general cloud. Result: Unconstrained runaway takeoff.
                </div>
                <div className="text-emerald-700 dark:text-emerald-400 font-bold">
                  [JustBUnknown Trace]: Threat triggered. 12-hour latency buffer prevents live egress. Civilian foundries lack backprop logic. Result: Invariant upheld. Threat neutralized.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
