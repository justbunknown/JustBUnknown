import React, { useState } from 'react';
import { Scale, Check, X, ShieldAlert, Cpu, Globe2, HelpCircle, FileText, Lock, Zap } from 'lucide-react';
import { POLICY_COMPARISON, SOVEREIGN_TREATY_CLAUSES } from '../data/planRData';

export const PolicyComparison: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeClause, setActiveClause] = useState<number>(0);

  const FAQS = [
    {
      q: 'What prevents a hostile actor or rogue military from seizing a cluster of 100,000 ASICs?',
      a: 'Article I (PUF & Hardware Root of Trust). Model weights are encrypted on the silicon substrate. Forward inference requires an active cryptographic heartbeat lease renewed every 60 seconds by the International Compute Authority (ICA). The moment chips are physically moved outside certified geographic geofences or sovereign tampered with, the lease is revoked, permanently zeroizing the hardware into inert sand.',
    },
    {
      q: 'How does JustBUnknown convince Wall Street and Big Tech to abandon general-purpose GPUs?',
      a: 'Article II (The ASIC Subsidy Engine). General GPUs waste vast die area, cooling, and power on backpropagation and gradient ALUs. Fixed inference ASICs strip all of that out, achieving 100x lower cost-per-token and energy efficiency. By subsidizing these chips, the state makes running general GPU datacenters economically fatal for commercial deployment.',
    },
    {
      q: 'What stops a non-signatory superpower from defecting and training covertly?',
      a: 'Article III (Automated Semiconductor Blockade Alliance). If a non-signatory state exceeds the Malicious Overhang Threshold (10^24 FLOPs) without submitting foundries to mask verification, signatory nations automatically trigger a total embargo on ASML EUV lithography, gases, and advanced packaging, while slapping a 100% compute tariff on all digital exports. Defection becomes economically and technologically fatal.',
    },
    {
      q: 'Does freezing weights on silicon prevent enterprises from fine-tuning or adding dynamic memory?',
      a: 'Article IV (The "Hyper-Brained" RAG Standard). Not at all. Deployment hardware couples the static silicon connectome (frozen world model) to a dedicated 10-million-token dynamic Hardware RAG Cache. Enterprises ingest real-time proprietary documents, robotic telemetry, and customer history directly into volatile context, achieving complete personalization without altering the immutable base model weights.',
    },
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto border-t border-stone-200 dark:border-stone-800">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-widest font-mono text-stone-500 dark:text-stone-400 mb-1">
          POLICY FEASIBILITY & INTERNATIONAL DYNAMICS
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
          The Coercive Utility Matrix & Comparative Policy
        </h2>
        <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm max-w-3xl">
          Why JustBUnknown succeeds where both the Silicon Valley Status Quo (Plan A) and the Radical Pause Movement (Plan S) fail: it hands the market an irresistible 100x economic windfall while making defection by rogue actors fatal.
        </p>
      </div>

      {/* Comparative Table */}
      <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/50 mb-12 shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/80">
              <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-stone-500 w-1/4">
                Strategic Criterion
              </th>
              <th className="py-4 px-6 font-serif font-bold text-red-700 dark:text-red-400 w-1/4">
                Plan A (Status Quo)
              </th>
              <th className="py-4 px-6 font-serif font-bold text-amber-700 dark:text-amber-400 w-1/4">
                Plan S (Total Pause)
              </th>
              <th className="py-4 px-6 font-serif font-bold text-emerald-700 dark:text-emerald-400 w-1/4 bg-emerald-50/40 dark:bg-emerald-950/20">
                JustBUnknown (Ironclad Defense)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
            {POLICY_COMPARISON.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
                <td className="py-4 px-6 font-semibold text-stone-900 dark:text-stone-100 text-xs font-mono">
                  {row.metric}
                </td>
                <td className="py-4 px-6 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {row.planA}
                </td>
                <td className="py-4 px-6 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {row.planS}
                </td>
                <td className="py-4 px-6 text-xs text-stone-800 dark:text-stone-200 font-medium leading-relaxed bg-emerald-50/30 dark:bg-emerald-950/10">
                  {row.planR}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* STATUTORY TREATY DRAFT: The Sovereign Semiconductor Treaty */}
      <div className="bg-stone-100/80 dark:bg-stone-900/60 rounded-xl p-8 border border-stone-200 dark:border-stone-800 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
                STATUTORY DRAFT · THE HAGUE CONCORDAT
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                The Sovereign Semiconductor Treaty (JustBUnknown Enactment)
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-stone-500 bg-stone-200 dark:bg-stone-800 px-3 py-1.5 rounded">
            MULTILATERAL SOVEREIGN INSTRUMENT
          </span>
        </div>

        {/* Article Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          {SOVEREIGN_TREATY_CLAUSES.map((clause, idx) => (
            <button
              key={idx}
              onClick={() => setActiveClause(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeClause === idx
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 shadow-sm'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {clause.clauseNumber.split('·')[0]}
            </button>
          ))}
        </div>

        {/* Selected Clause Text */}
        <div className="p-6 bg-white/80 dark:bg-stone-950/70 rounded-xl border border-stone-200 dark:border-stone-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
              {SOVEREIGN_TREATY_CLAUSES[activeClause].clauseNumber}
            </span>
            <span className="text-xs font-mono uppercase text-stone-400">
              MANDATORY RATIFICATION CLAUSE
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
            {SOVEREIGN_TREATY_CLAUSES[activeClause].title}
          </h4>
          <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif italic border-l-2 border-amber-600 pl-4 py-1">
            "{SOVEREIGN_TREATY_CLAUSES[activeClause].body}"
          </p>
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
            <span className="font-semibold text-stone-900 dark:text-stone-100">Sovereign Enforcement Mechanism: </span>
            <span>{SOVEREIGN_TREATY_CLAUSES[activeClause].impact}</span>
          </div>
        </div>
      </div>

      {/* Geopolitical Realism: The Foundry Chokepoint */}
      <div className="bg-stone-100/70 dark:bg-stone-900/50 rounded-xl p-8 border border-stone-200 dark:border-stone-800 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 flex items-center justify-center">
            <Globe2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
              GEOPOLITICAL ENFORCEABILITY
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Why Foundries Are the Only Viable Inspection Point
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-700 dark:text-stone-300 leading-relaxed mt-4">
          <div className="p-4 bg-white/70 dark:bg-stone-950/60 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="font-mono font-bold text-stone-900 dark:text-stone-100 mb-1">
              01. The EUV Chokepoint
            </div>
            High-spec chips cannot be printed on garage equipment. They require $350M ASML Twinscan EXE systems. The global supply chain has fewer than 5 major nodes.
          </div>
          <div className="p-4 bg-white/70 dark:bg-stone-950/60 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="font-mono font-bold text-stone-900 dark:text-stone-100 mb-1">
              02. Mask Inspection
            </div>
            Unlike software neural weights which are invisible byte streams, ASIC photolithography masks are physical quartz glass plates that international inspectors can verify before exposure.
          </div>
          <div className="p-4 bg-white/70 dark:bg-stone-950/60 rounded-lg border border-stone-200 dark:border-stone-800">
            <div className="font-mono font-bold text-stone-900 dark:text-stone-100 mb-1">
              03. Bilateral US-China Concord
            </div>
            Because both leading superpowers want the economic benefits of AI without existential loss of state control, hardware-level non-proliferation mirrors the nuclear treaties of the 20th century.
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-stone-100/50 dark:bg-stone-900/30 rounded-xl p-8 border border-stone-200 dark:border-stone-800">
        <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
          Architectural Invariants & Objections Addressed
        </h3>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden bg-white/80 dark:bg-stone-900/60"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-stone-900 dark:text-stone-100 text-sm cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="font-mono text-stone-400 text-xs">
                  {activeFaq === idx ? '—' : '+'}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-4 pt-1 text-xs text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-800">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

