import React, { useState } from 'react';
import { ArrowRight, Cpu, Lock, SlidersHorizontal, Scale, CheckCircle2 } from 'lucide-react';
import { HISTORICAL_ANALOGUES } from '../data/planRData';

interface HeroSectionProps {
  onExploreArchitecture: () => void;
  onLaunchSimulator: () => void;
  onReadEssay: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreArchitecture,
  onLaunchSimulator,
  onReadEssay,
}) => {
  const [activeAnalogueIndex, setActiveAnalogueIndex] = useState(0);

  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header Lead */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-stone-500 dark:text-stone-400 mb-4">
          <span>WHITE PAPER</span>
          <span aria-hidden="true">·</span>
          <span>GOVERNANCE & HARDWARE ARCHITECTURE</span>
          <span aria-hidden="true">·</span>
          <span>EST. 2026</span>
        </div>

        {/* Hero Title & Deck */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-100 text-balance leading-tight">
            AI Safety by Skeuomorphism
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-serif italic text-stone-700 dark:text-stone-300 text-balance">
            Eliminating civilization-scale AI risk by decoupling frontier training from financial claims and burning inference into immutable ASICs.
          </p>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl">
            Frontier AI companies dangerously couple two lethal properties: the capacity to create self-replicating superintelligent entities, and an unbounded financial claim on the resulting surplus. Nuclear and biological labs possess immense capability without equity upside—which is why they do not gamble with human survival. The JustBUnknown architecture restores that institutional balance at the physical silicon level.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onLaunchSimulator}
              className="px-6 py-3 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 font-medium text-sm hover:bg-stone-800 dark:hover:bg-white transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Launch Takeoff Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreArchitecture}
              className="px-6 py-3 rounded-lg border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-medium text-sm hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors cursor-pointer"
            >
              Explore Dual-Entity Blueprint
            </button>
            <button
              onClick={onReadEssay}
              className="px-4 py-3 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-4 cursor-pointer"
            >
              Read Full Annotated Thesis
            </button>
          </div>
        </div>

        {/* 2-Column Split: The Hardware Artifact & The Containment Facility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* Column A: Fixed-Function Neural ASIC */}
          <div className="flex flex-col bg-stone-100/70 dark:bg-stone-900/60 rounded-xl p-6 border border-stone-200 dark:border-stone-800">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 aspect-[16/9] bg-stone-950">
              <img
                src="./asic_silicon_die_1793328090798.jpg"
                alt="Fixed-Function Neural ASIC die with etched immutable synaptic pathways"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/80 backdrop-blur text-stone-100 text-xs font-mono rounded">
                HARDWARE INVARIANT: GRADIENT-FREE
              </div>
            </div>
            <p className="text-xs font-serif italic text-stone-500 dark:text-stone-400 mt-3">
              Fig. 1 — Monolithic fixed-function neural ASIC. Neural weights and routing topologies are hardwired in silicon. The chip physically lacks the logic gates required to compute gradients, eliminating the possibility of rogue online learning outside the lab.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 flex-1 flex flex-col justify-between">
              <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                <span className="font-semibold text-stone-900 dark:text-stone-100">Zero Compute Overhang: </span>
                Civilian AI deployment companies operate exclusively on these fixed chips. Even if a model wished to alter itself, it has no writable execution medium.
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>RUN SIZE: R PARAMETER</span>
                <span>FABRICATION: TSMC / INTEL / SAMSUNG</span>
              </div>
            </div>
          </div>

          {/* Column B: Airgapped Containment Facility */}
          <div className="flex flex-col bg-stone-100/70 dark:bg-stone-900/60 rounded-xl p-6 border border-stone-200 dark:border-stone-800">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 aspect-[16/9] bg-stone-950">
              <img
                src="./airgap_research_lab_1793328091194.jpg"
                alt="Airgapped Frontier AI research facility with 12-hour latency buffer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/80 backdrop-blur text-stone-100 text-xs font-mono rounded">
                CONTAINMENT: 12-HOUR PHYSICAL LATENCY
              </div>
            </div>
            <p className="text-xs font-serif italic text-stone-500 dark:text-stone-400 mt-3">
              Fig. 2 — Sovereign-chartered AI R&D containment compound. All general-purpose GPU training clusters operate inside physically airgapped perimeters with multi-hour physical latency airlocks on all telemetry.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 flex-1 flex flex-col justify-between">
              <div className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                <span className="font-semibold text-stone-900 dark:text-stone-100">Zero Unbounded Equity: </span>
                Labs operate under G-SIB and nuclear facility charters with no stock options or speculative IPO pressures, removing the incentive to rush frontier safety evals.
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>INGRESS/EGRESS: 12H AIRLOCK</span>
                <span>DATA QUARANTINE: NO CONSUMER TELEMETRY</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip (Per design rules, placed below hero split) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-stone-200 dark:border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-wider font-mono text-stone-500 dark:text-stone-400 mb-1">
              Property Separation
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
              100% Decoupled
            </div>
            <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
              Zero equity issuance for training organizations; full market equity for downstream deployment.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-mono text-stone-500 dark:text-stone-400 mb-1">
              Hardware Gradient Lock
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
              0 Flops Writable
            </div>
            <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
              Civilian ASICs cannot compute backprop. Weight mutation outside airgapped labs is physically impossible.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-mono text-stone-500 dark:text-stone-400 mb-1">
              Data Blackmail Risk
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Zero Telemetry
            </div>
            <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
              R&D labs have zero access to customer chats, cameras, or search logs, denying models social leverage.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-mono text-stone-500 dark:text-stone-400 mb-1">
              Singularity Speed Limit
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
              3-Month Lag
            </div>
            <p className="mt-1 text-xs text-stone-600 dark:text-stone-400 leading-normal">
              Anti-dogfooding protocol forces recursive loops to be mediated by physical foundry fabrication batches.
            </p>
          </div>
        </div>

        {/* Historical Proof: Why Property A without Property B Works */}
        <div className="mt-16 bg-stone-100/50 dark:bg-stone-900/40 rounded-xl p-8 border border-stone-200 dark:border-stone-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Institutional Precedents
              </span>
              <h2 className="text-2xl font-serif font-semibold text-stone-900 dark:text-stone-100 mt-1">
                Civilization Has Solved Property A Before
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-stone-200 dark:bg-stone-800 p-1 rounded-lg">
              {HISTORICAL_ANALOGUES.map((item, idx) => (
                <button
                  key={item.domain}
                  onClick={() => setActiveAnalogueIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    activeAnalogueIndex === idx
                      ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  {item.domain.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200 dark:border-stone-800 text-sm">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-1">
                Domain & Charter
              </div>
              <div className="font-semibold text-stone-900 dark:text-stone-100 text-base">
                {HISTORICAL_ANALOGUES[activeAnalogueIndex].domain}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-1">
                Property A vs Property B
              </div>
              <div className="text-stone-700 dark:text-stone-300">
                <span className="block">{HISTORICAL_ANALOGUES[activeAnalogueIndex].propertyA}</span>
                <span className="block mt-1 font-semibold text-stone-900 dark:text-stone-100">
                  {HISTORICAL_ANALOGUES[activeAnalogueIndex].propertyB}
                </span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-1">
                Observed Civilizational Result
              </div>
              <div className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {HISTORICAL_ANALOGUES[activeAnalogueIndex].outcome}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
