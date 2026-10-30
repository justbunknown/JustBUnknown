import React, { useState } from 'react';
import { Shield, FileText, CheckCircle2, Copy, Check, Globe2, AlertOctagon, Download, Scale } from 'lucide-react';
import { DIPLOMATIC_BRIEFING, PRESS_RELEASE, SIGNATORY_COALITION } from '../data/planRData';

export const DiplomaticBrief: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'brief' | 'press' | 'ratification'>('brief');
  const [selectedBloc, setSelectedBloc] = useState<number>(0);

  const handleCopy = () => {
    const fullText = `
${DIPLOMATIC_BRIEFING.header.classification}
DOCUMENT ID: ${DIPLOMATIC_BRIEFING.header.documentId}
TO: ${DIPLOMATIC_BRIEFING.header.to}
SUBJECT: ${DIPLOMATIC_BRIEFING.header.subject}

${DIPLOMATIC_BRIEFING.section1.title}
${DIPLOMATIC_BRIEFING.section1.body}

${DIPLOMATIC_BRIEFING.section2.title}
${DIPLOMATIC_BRIEFING.section2.pillars.map((p) => `• ${p.title}: ${p.text}`).join('\n\n')}

---
${PRESS_RELEASE.header}
${PRESS_RELEASE.subHeader} - ${PRESS_RELEASE.location}
${PRESS_RELEASE.lead}

${PRESS_RELEASE.paragraph1}

${PRESS_RELEASE.quote}
- ${PRESS_RELEASE.spokesperson}
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto border-t border-stone-200 dark:border-stone-800">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800 mb-8">
        <div>
          <div className="text-xs uppercase tracking-widest font-mono text-stone-500 dark:text-stone-400 mb-1">
            PART 1 · DIPLOMATIC COMMUNIQUÉ & STATE INSTRUMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Diplomatic Legal Brief & Global Press Release
          </h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400 font-serif italic">
            The Hague Concordat: Transforming structural proliferation control from corporate ethics into treaty-enforced semiconductor physics.
          </p>
        </div>

        {/* Action button: Copy text */}
        <button
          onClick={handleCopy}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-white transition-all cursor-pointer flex items-center gap-2 shrink-0 self-start sm:self-auto shadow-sm"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Diplomatic Brief Copied' : 'Copy Official Text'}</span>
        </button>
      </div>

      {/* Sub-navigation tabs: Brief vs Press Release vs Ratification Ledger */}
      <div className="flex items-center gap-1 p-1 bg-stone-200/70 dark:bg-stone-800/60 rounded-lg mb-8 w-fit overflow-x-auto">
        <button
          onClick={() => setActiveTab('brief')}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'brief'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Executive Briefing for Plenipotentiaries
        </button>
        <button
          onClick={() => setActiveTab('press')}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'press'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          ICA Global Press Release
        </button>
        <button
          onClick={() => setActiveTab('ratification')}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'ratification'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
          }`}
        >
          Multilateral Ratification Ledger
        </button>
      </div>

      {/* TAB 1: EXECUTIVE BRIEFING FOR PLENIPOTENTIARIES */}
      {activeTab === 'brief' && (
        <div className="bg-stone-100/90 dark:bg-stone-900/70 rounded-xl p-8 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm space-y-8 animate-fadeIn">
          {/* Classification Header Banner */}
          <div className="border-b border-stone-300 dark:border-stone-700 pb-6 font-mono text-xs text-stone-600 dark:text-stone-400 space-y-2">
            <div className="flex items-center justify-between text-amber-800 dark:text-amber-400 font-bold tracking-wider">
              <span>{DIPLOMATIC_BRIEFING.header.classification}</span>
              <span>DOC REF: {DIPLOMATIC_BRIEFING.header.documentId}</span>
            </div>
            <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-stone-700 dark:text-stone-300">
              <div>
                <span className="text-stone-400 block text-[10px]">TO:</span>
                <span className="font-semibold">{DIPLOMATIC_BRIEFING.header.to}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">ORIGIN:</span>
                <span className="font-semibold">{DIPLOMATIC_BRIEFING.header.from}</span>
              </div>
              <div className="md:col-span-2 pt-1 border-t border-stone-200 dark:border-stone-800">
                <span className="text-stone-400 block text-[10px]">SUBJECT:</span>
                <span className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                  {DIPLOMATIC_BRIEFING.header.subject}
                </span>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              {DIPLOMATIC_BRIEFING.section1.title}
            </h3>
            <div className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-sans space-y-3">
              {DIPLOMATIC_BRIEFING.section1.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6 pt-4 border-t border-stone-300 dark:border-stone-700">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                {DIPLOMATIC_BRIEFING.section2.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 font-serif italic">
                {DIPLOMATIC_BRIEFING.section2.intro}
              </p>
            </div>

            <div className="space-y-5">
              {DIPLOMATIC_BRIEFING.section2.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/80 dark:bg-stone-950/70 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2"
                >
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5" />
                    <span>PILLAR 0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Signatory Seal */}
          <div className="pt-6 border-t border-stone-300 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 font-mono gap-4">
            <div>
              <span>ENACTMENT DATE: {DIPLOMATIC_BRIEFING.header.date}</span>
              <span className="mx-2">·</span>
              <span>{DIPLOMATIC_BRIEFING.header.location}</span>
            </div>
            <div className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>RATIFIED BY UNANIMOUS MULTILATERAL CONCORDAT</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ICA GLOBAL PRESS RELEASE */}
      {activeTab === 'press' && (
        <div className="bg-white dark:bg-stone-900 rounded-xl p-8 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6 font-serif animate-fadeIn">
          {/* Press Release Wire Header */}
          <div className="border-b border-stone-200 dark:border-stone-800 pb-5 font-mono text-xs text-stone-500 space-y-1">
            <div className="flex items-center justify-between font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest text-sm">
              <span>{PRESS_RELEASE.header}</span>
              <span className="text-amber-700 dark:text-amber-400 font-semibold">{PRESS_RELEASE.subHeader}</span>
            </div>
            <div>LOCATION: {PRESS_RELEASE.location}</div>
            <div>DATELINE: {PRESS_RELEASE.dateline}</div>
          </div>

          {/* Headline & Body */}
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight">
            World Powers Ratify Historic Sovereign Semiconductor Treaty to Eliminate AI Catastrophic Risk
          </h3>

          <p className="text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
            <strong className="text-stone-900 dark:text-stone-100">THE HAGUE</strong> — {PRESS_RELEASE.lead.replace('THE HAGUE — ', '')}
          </p>

          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            {PRESS_RELEASE.paragraph1}
          </p>

          {/* Official Quote Box */}
          <div className="my-6 p-6 bg-stone-50 dark:bg-stone-950/60 rounded-xl border-l-4 border-amber-600 italic text-stone-800 dark:text-stone-200 text-base leading-relaxed">
            {PRESS_RELEASE.quote}
            <div className="mt-3 text-xs font-mono font-normal uppercase text-stone-500 not-italic">
              — {PRESS_RELEASE.spokesperson}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-500 space-y-1">
            <div className="font-bold text-stone-700 dark:text-stone-300 uppercase">MEDIA CONTACTS:</div>
            <div>International Compute Authority Press Bureau · Peace Palace, The Hague</div>
            <div>Communications Secretariat: press@ica-compute.org · Secure Wire PGP: 0x9F4B3C21</div>
          </div>
        </div>
      )}

      {/* TAB 3: MULTILATERAL RATIFICATION LEDGER */}
      {activeTab === 'ratification' && (
        <div className="bg-stone-100/80 dark:bg-stone-900/60 rounded-xl p-8 border border-stone-200 dark:border-stone-800 space-y-6 animate-fadeIn">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
              INTERNATIONAL SOVEREIGN INSTRUMENT
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
              Treaty Coalition Status & Foundry Adherence
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              Verification of national implementation, foundry PUF cryptographic compliance, and tariff enforcement readiness.
            </p>
          </div>

          {/* Bloc List */}
          <div className="space-y-3">
            {SIGNATORY_COALITION.map((bloc, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedBloc(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedBloc === idx
                    ? 'bg-white dark:bg-stone-950 border-amber-600 dark:border-amber-400 shadow-sm ring-1 ring-amber-600'
                    : 'bg-white/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                    {bloc.bloc}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 px-2 py-0.5 bg-emerald-100/70 dark:bg-emerald-950/60 rounded">
                    {bloc.status} · {bloc.votes}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {bloc.role}
                </p>
              </div>
            ))}
          </div>

          {/* Defection Game Theory Callout */}
          <div className="p-4 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-300 dark:border-amber-900/60 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            <span className="font-semibold text-stone-900 dark:text-stone-100 font-mono uppercase block mb-1">
              The Sovereign Defection Invariant:
            </span>
            Because the five signatory blocs represent 100% of global EUV manufacturing (ASML), 100% of sub-3nm foundries (TSMC, Samsung, Intel), and 94% of global enterprise software demand, unaligned defection is self-terminating. Non-signatories cannot construct replacement foundries without the coalition's supply chain.
          </div>
        </div>
      )}
    </section>
  );
};
