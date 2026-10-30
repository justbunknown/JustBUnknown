import React, { useState } from 'react';
import { Shield, Cpu, Building2, Lock, ArrowRight, RefreshCw, Database, Layers, CheckCircle } from 'lucide-react';
import { ARCHITECTURE_NODES } from '../data/planRData';

export const DualEntityArchitecture: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('rnd-containment');

  const selectedNode = ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-stone-800">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest font-mono text-stone-500 dark:text-stone-400 mb-1">
          SYSTEM SPECIFICATION
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
          The Dual-Entity & Hardware Separation Architecture
        </h2>
        <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm max-w-3xl">
          Under the JustBUnknown architecture, frontier AI capabilities are split into two legally and physically segregated institutions. The boundary is not enforced by software promises or corporate ethics boards, but by physical silicon circuitry and multi-hour optical airgaps.
        </p>
      </div>

      {/* Interactive 3-Stage Pipeline Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {/* Stage 1: AI R&D Org */}
        <div
          onClick={() => setSelectedNodeId('rnd-containment')}
          className={`p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
            selectedNodeId === 'rnd-containment'
              ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-500 shadow-md ring-1 ring-amber-500'
              : 'bg-stone-100/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 hover:border-stone-400'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold">
                STAGE 01 · CONTAINMENT
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
              AI R&D Organizations
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
              Frontier training on general GPUs/TPUs inside sovereign airgaps. Strictly non-equity; 12-hour latency buffer; zero customer personal telemetry.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
            <span>GOVERNANCE: G-SIB / NUCLEAR</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </div>
        </div>

        {/* Stage 2: Hardware Firewall */}
        <div
          onClick={() => setSelectedNodeId('hardware-firewall')}
          className={`p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
            selectedNodeId === 'hardware-firewall'
              ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-500 shadow-md ring-1 ring-blue-500'
              : 'bg-stone-100/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 hover:border-stone-400'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono uppercase text-blue-700 dark:text-blue-400 font-semibold">
                STAGE 02 · HARDWARE FIREWALL
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
              Fixed-Function ASIC Etching
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
              Evaluated model weights etched into physical silicon. Batch run size $R$. GPU training weights permanently erased; chips physically lack gradient logic.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
            <span>FOUNDRY: TSMC / INTEL</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </div>
        </div>

        {/* Stage 3: AI Deployment Companies */}
        <div
          onClick={() => setSelectedNodeId('deployment-companies')}
          className={`p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
            selectedNodeId === 'deployment-companies'
              ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-500 shadow-md ring-1 ring-emerald-500'
              : 'bg-stone-100/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 hover:border-stone-400'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold">
                STAGE 03 · CIVILIAN ECONOMY
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
              AI Deployment Companies
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
              Consumer apps, B2B services, agent swarms, robotics, and cancer therapies. Funded by standard equity; runs inference exclusively on immutable ASICs.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
            <span>MARKET: SILICON VALLEY</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </div>
        </div>
      </div>

      {/* The Anti-Dogfooding Speed Limit Rail */}
      <div className="bg-stone-200/50 dark:bg-stone-800/40 rounded-xl p-5 border border-stone-300 dark:border-stone-700 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase font-bold text-stone-900 dark:text-stone-100">
              THE ANTI-DOGFOODING SPEED LIMIT RAIL
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
              AI R&D orgs are prohibited from using their own models to train successor models. They may only use ASICs from <em>competing</em> labs with $\ge$ 3 months of public operational field history.
            </div>
          </div>
        </div>
        <div className="shrink-0 font-mono text-xs text-stone-500 dark:text-stone-400 bg-white/70 dark:bg-stone-900/70 px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700">
          PHYSICAL RECURSION GOVERNOR
        </div>
      </div>

      {/* The Two Coercive Hardware Enforcers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-300 dark:border-amber-900/60">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase font-bold text-amber-800 dark:text-amber-400">
              01. ZERO-TRUST PUF KILL-SWITCH
            </span>
            <span className="text-[10px] font-mono text-stone-500">HARDWARE ROT</span>
          </div>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            Weights are encrypted at rest on the silicon substrate. Forward inference requires a continuous, rolling cryptographic heartbeat lease from the International Compute Authority (ICA). Hostile nationalization or uncertified cluster transport immediately revokes the lease, turning the chip into inert sand.
          </p>
        </div>

        <div className="p-4 bg-blue-50/60 dark:bg-blue-950/20 rounded-xl border border-blue-300 dark:border-blue-900/60">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase font-bold text-blue-800 dark:text-blue-400">
              02. DUAL-MEMORY "HYPER-BRAINED" RAG
            </span>
            <span className="text-[10px] font-mono text-stone-500">CONTEXT FABRIC</span>
          </div>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            To eliminate the limitation of static models, ASICs integrate a high-speed Hardware RAG Cache. The core silicon connectome stays immutable (gradient-free), while the 10M token volatile context fabric ingests real-time enterprise documents, robotic sensor telemetry, and dynamic task memory.
          </p>
        </div>
      </div>

      {/* Deep-Dive Inspector for Selected Stage */}
      <div className="bg-stone-100/80 dark:bg-stone-900/60 rounded-xl p-8 border border-stone-200 dark:border-stone-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
              DETAILED TECHNICAL SPECIFICATION
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
              {selectedNode.title}
            </h3>
          </div>
          <div className="text-xs font-mono text-stone-500 bg-stone-200 dark:bg-stone-800 px-3 py-1.5 rounded">
            LEGAL REGIME: {selectedNode.legalCharter.split('.')[0]}
          </div>
        </div>

        <p className="text-stone-700 dark:text-stone-300 text-sm mt-4 leading-relaxed font-medium">
          {selectedNode.summary}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Operational Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              Operational Mechanisms
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
              {selectedNode.details.map((detail, idx) => {
                const [title, desc] = detail.split(': ');
                return (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-stone-900 dark:text-stone-100">{title}: </span>
                      <span>{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Hard Invariants & Legal Enforceability */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              Hardware & Institutional Invariants
            </h4>
            <div className="space-y-3 mb-6">
              {selectedNode.securityInvariants.map((inv, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white/70 dark:bg-stone-950/60 rounded-lg border border-stone-200 dark:border-stone-800 font-mono text-xs text-stone-800 dark:text-stone-200"
                >
                  {inv}
                </div>
              ))}
            </div>

            <div className="p-4 bg-stone-200/50 dark:bg-stone-800/50 rounded-lg text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              <span className="font-semibold text-stone-900 dark:text-stone-100 font-mono uppercase text-[11px] block mb-1">
                Charter Enforcement:
              </span>
              {selectedNode.legalCharter}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
