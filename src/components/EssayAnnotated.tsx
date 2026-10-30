import React, { useState } from 'react';
import { BookOpen, Bookmark, Info, Sparkles } from 'lucide-react';

export const EssayAnnotated: React.FC = () => {
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);

  const ANNOTATIONS: { [key: string]: { title: string; text: string } } = {
    'property-a': {
      title: 'Property A: Frontier Creation Capability',
      text: 'The ability to train and distill entities whose general intellectual, strategic, and self-improving capabilities match or exceed human civilization. Nuclear reactors and BSL-4 virology facilities possess destructive scale without equity incentives.',
    },
    'property-b': {
      title: 'Property B: Unbounded Financial Claim (Equity)',
      text: 'Ownership of equity that entitles founders, executives, and investors to fractional claims on all future economic output produced by the superintelligence. This creates structural pressure to gamble on safety to protect stock price.',
    },
    'kokotajlo': {
      title: 'Daniel Kokotajlo & The IOU Takeover Model',
      text: 'Former OpenAI governance researcher who outlined how financial commitments create an inescapable treadmill: labs write IOUs (stock) to secure massive capital and power, forcing them to rush deployment until alignment failure voids the entire human financial system.',
    },
    'fixed-asic': {
      title: 'Fixed-Function ASICs as Biological Connectomes',
      text: 'Application-Specific Integrated Circuits whose neural weights and wiring are physically fabricated into metal interconnects. Like mammalian cortical structures, they cannot dynamically alter their architecture or compute gradients.',
    },
    'anti-dogfooding': {
      title: 'The Anti-Dogfooding Invariant',
      text: 'A game-theoretic and physical prohibition preventing any lab from using its own AI to accelerate its next generation. By requiring chips from competing labs with a mandatory 3-month field deployment lag, recursive takeoff is slowed to human foundry manufacturing cycles.',
    },
    'skeuomorphism': {
      title: 'AI Safety by Skeuomorphism',
      text: 'Designing artificial minds to inherit the physical, bounded constraints of human beings (embodiment in a discrete physical container, non-zero physical latency, inability to instantly expand across global clouds) rather than trying to align unbounded, disembodied software matrices.',
    },
    'puf-killswitch': {
      title: 'PUF & Hardware Root of Trust Kill-Switch',
      text: 'Physically Unclonable Functions generate unique cryptographic keys from silicon micro-variations. Model weights remain encrypted at rest. If the chip loses its rolling 60-second sovereign heartbeat lease or detects geofence tampering, the hardware permanently bricks into inert sand.',
    },
    'subsidy-engine': {
      title: 'The ASIC Subsidy Engine (Bribery of the Market)',
      text: 'By omitting general backprop ALUs, matrix gradient caches, and tensor compilation hardware, fixed inference ASICs deliver up to 100x better tokens-per-watt and tokens-per-dollar efficiency. Commercial operators voluntarily abandon general GPU clusters because running them is financial suicide.',
    },
    'compute-tariff': {
      title: 'Semiconductor Blockade Alliance & 100% Compute Tariff',
      text: 'Non-signatories operating clandestine frontier training clusters face automatic multi-lateral embargoes on ASML EUV lithography systems, ultra-pure gases, and 3D packaging, accompanied by a 100% tariff on all digital services and hardware flowing from their borders.',
    },
    'dual-rag': {
      title: 'Dual-Memory Architecture: The Hyper-Brained RAG Standard',
      text: 'Resolves the static-weights critique by coupling the immutable silicon connectome (frozen world model) to a dedicated high-speed Hardware RAG Cache. Enterprises ingest up to 10 million tokens of dynamic documents, robotic telemetry, and memory without touching the underlying frozen silicon.',
    },
  };

  return (
    <article className="py-12 px-6 max-w-5xl mx-auto border-t border-stone-200 dark:border-stone-800">
      {/* Editorial Header */}
      <div className="border-b border-stone-300 dark:border-stone-700 pb-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
          <span>THE MONOGRAPH</span>
          <span aria-hidden="true">·</span>
          <span>ORIGINAL ESSAY & COMMENTARY</span>
          <span aria-hidden="true">·</span>
          <span>AUTUMN 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight">
          AI Safety by Skeuomorphism: Separating the Mind from the Market
        </h1>
        <p className="mt-3 text-lg font-serif italic text-stone-600 dark:text-stone-400">
          A coercive blueprint for dismantling frontier AI catastrophic risk through institutional bookkeeping, fixed-function silicon, and semiconductor treaties.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Body Prose (75ch column) */}
        <div className="lg:col-span-8 space-y-6 text-stone-800 dark:text-stone-200 leading-relaxed font-sans text-base sm:text-lg">
          {/* Drop Cap Opening Paragraph */}
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900 dark:first-letter:text-stone-100">
            Much of the civilization-scale risk we are seeing in AI in 2026 comes from the following lethal combination: we created a single institution (the "Frontier AI Company") that simultaneously possesses two properties:
          </p>

          <div className="p-5 bg-stone-100/70 dark:bg-stone-900/50 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3 font-serif my-6">
            <div className="flex items-start gap-3">
              <span className="font-mono font-bold text-amber-700 dark:text-amber-400 text-sm">A.</span>
              <p className="text-sm sm:text-base text-stone-900 dark:text-stone-100">
                It is set up to create very powerful and/or self-replicating entities that may exceed the capabilities of the entirety of the rest of civilization and come with extraordinary risks.{' '}
                <button
                  onClick={() => setActiveAnnotation('property-a')}
                  className="inline-flex items-center text-xs font-mono text-amber-700 dark:text-amber-400 underline underline-offset-2 ml-1 cursor-pointer"
                >
                  [Inspect Property A]
                </button>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono font-bold text-amber-700 dark:text-amber-400 text-sm">B.</span>
              <p className="text-sm sm:text-base text-stone-900 dark:text-stone-100">
                It gets to own an unbounded financial claim on the resulting surplus.{' '}
                <button
                  onClick={() => setActiveAnnotation('property-b')}
                  className="inline-flex items-center text-xs font-mono text-amber-700 dark:text-amber-400 underline underline-offset-2 ml-1 cursor-pointer"
                >
                  [Inspect Property B]
                </button>
              </p>
            </div>
          </div>

          <p>
            All the technical stuff about AI, AI alignment, etc. can be rolled up into point <strong>(A)</strong> above. The fundamental claim is that having point (A) on its own, without point (B), is probably okay. Nuclear technology and bioweapon technology both approximate (A) and they are mostly okay because without (B), there is no structural incentive for the people controlling them to push their luck on safety.
          </p>

          <p>
            But with Frontier AI Companies, we mixed the two.
          </p>

          {/* Pull quote formatted with top/bottom hairline borders (per editorial guidelines) */}
          <div className="py-8 my-8 border-y border-stone-300 dark:border-stone-700 text-center">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-stone-900 dark:text-stone-100 max-w-2xl mx-auto leading-snug">
              "We can probably get rid of most of AI risk without doing anything other than separating out the bookkeeping, physical footprint, and institutions so that there is no single organization with both properties."
            </blockquote>
          </div>

          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-4">
            The Kokotajlo IOU Doom Loop
          </h2>

          <p>
            What does a typical AI disaster scenario currently look like? (As mapped by researchers like{' '}
            <button
              onClick={() => setActiveAnnotation('kokotajlo')}
              className="font-medium underline decoration-amber-500 underline-offset-4 cursor-pointer text-stone-900 dark:text-stone-100"
            >
              Daniel Kokotajlo
            </button>
            ):
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-stone-700 dark:text-stone-300 text-sm sm:text-base font-serif">
            <li>AI company builds lots of compute and does research, with goods and services flowing in from the human economy.</li>
            <li>Human economy mostly gets IOUs in return ("Stock").</li>
            <li>AI company is incentivized to push forward as fast as possible so that it can sell more IOUs.</li>
            <li>AI company and/or its leading model (which is misaligned) takes over the world.</li>
            <li>IOUs are not respected, because now the misaligned superintelligence is more powerful than the mechanisms that were supposed to enforce the IOUs.</li>
            <li>Everyone dies. The End.</li>
          </ol>

          <p>
            Obviously, humans made a mistake in letting the AI company write IOUs to them. But once there is an institutional system for stocks, banking, and capital markets, letting organizations write you IOUs is the default and it is extraordinarily hard to stop voluntarily.
          </p>

          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-4">
            The Two New Entities
          </h2>

          <p>
            So, here is how we separate the two. Create two distinct institutional entities under sovereign treaty:
          </p>

          <p>
            <strong>(1) AI research and development (AI R&D) organizations:</strong> They do everything that involves training, distilling, testing, and aligning frontier AI models. They are heavily legally restricted and strictly unable to issue equity. Governed like sovereign nuclear laboratories mixed with Global Systemically Important Banks (G-SIBs), they have no stock options, no IPO dreams, and no financial incentive to rush.
          </p>

          <p>
            <strong>(2) AI deployment companies:</strong> They handle all consumer-facing and B2B products. They run inference at scale, organize agent swarms, attach databases, and integrate chips into laptops and surgical robots. They operate on standard Silicon Valley rules, can issue equity, and pay the R&D orgs for certified models.
          </p>

          <p>
            Crucially, AI deployment companies hold all customer interaction data, while AI R&D orgs are prohibited from possessing real-world personal telemetry. This prevents a model undergoing training from accumulating the goldmine of blackmail material and human intel needed for a societal coup.
          </p>

          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-4">
            Hardware-Level Enforcement via ASICs
          </h2>

          <p>
            Fortunately, the physical physics of semiconductor hardware allows us to enforce this distinction mechanically. Once an AI R&D org finishes training a model and it passes verified evaluations, they burn it into an{' '}
            <button
              onClick={() => setActiveAnnotation('fixed-asic')}
              className="font-medium underline decoration-blue-500 underline-offset-4 cursor-pointer text-stone-900 dark:text-stone-100"
            >
              immutable, fixed-function ASIC
            </button>
            .
          </p>

          <p>
            The physical circuitry implements that specific neural model, exactly as a human brain has physical connections that implement a human mind. That ASIC has a run size $R$, which is then manufactured and sold. Afterwards, the mutable training weights on general GPUs inside the lab are permanently deleted or encrypted.
          </p>

          <p>
            All high-spec compute outside the airgapped R&D orgs exists exclusively in the form of these ASICs. Whole categories of AI risk simply disappear: there is no mutable compute overhang for a rogue model to capture. ASICs cannot compute gradients, cannot backpropagate, and cannot modify their own silicon logic gates.
          </p>

          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-4">
            The Coercive Utility Matrix: Transforming JustBUnknown into an Un-Ignorable Reality
          </h2>

          <p>
            To transform JustBUnknown from an elegant conceptual model into an ironclad geopolitical and technical reality, we must shift it from an idealistic framework into a coercive utility matrix. World leaders act on sovereign survival: national security, tax revenue, and capital flight. The four ironclad pillars of the Sovereign Semiconductor Treaty make compliance inevitable:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 bg-stone-100/80 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-800">
              <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base flex items-center justify-between">
                <span>1. Zero-Trust Cryptographic Kill-Switch (PUFs & Rolling Leases)</span>
                <button
                  onClick={() => setActiveAnnotation('puf-killswitch')}
                  className="text-xs font-mono text-amber-700 dark:text-amber-400 underline cursor-pointer"
                >
                  [Inspect PUF]
                </button>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                Every deployment chip embeds Physically Unclonable Functions (PUF) and an on-die Hardware Root of Trust. Model weights are encrypted at rest on the silicon substrate. Forward inference requires a continuous, rolling cryptographic heartbeat lease renewed every 60 seconds by an international consortium (an IAEA for compute). If a rogue state nationalizes a cluster or removes it from certified geofences, the lease is severed—instantly turning the silicon into inert sand.
              </p>
            </div>

            <div className="p-4 bg-stone-100/80 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-800">
              <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base flex items-center justify-between">
                <span>2. The ASIC Subsidy Engine (Bribery of the Market)</span>
                <button
                  onClick={() => setActiveAnnotation('subsidy-engine')}
                  className="text-xs font-mono text-amber-700 dark:text-amber-400 underline cursor-pointer"
                >
                  [Inspect Subsidy]
                </button>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                General GPUs spend massive amounts of die area, power, and cash on components dedicated to backpropagation, compilation caching, and gradient calculation. A pure inference ASIC strips all of that away, offering up to 100x better tokens-per-watt and tokens-per-dollar efficiency. By subsidizing these certified chips, the state makes running general-purpose cloud instances for standard commercial deployment an act of financial suicide. Big Tech chooses JustBUnknown voluntarily.
              </p>
            </div>

            <div className="p-4 bg-stone-100/80 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-800">
              <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base flex items-center justify-between">
                <span>3. The Semiconductor Blockade Alliance & Compute Tariff</span>
                <button
                  onClick={() => setActiveAnnotation('compute-tariff')}
                  className="text-xs font-mono text-amber-700 dark:text-amber-400 underline cursor-pointer"
                >
                  [Inspect Blockade]
                </button>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                The fatal flaw of standard treaties is the Defection Hazard—the fear that a rival superpower will sprint ahead using clandestine clusters. JustBUnknown weaponizes the semiconductor supply chain: signatory nations define an unmonitored general compute threshold (10^24 FLOPs). Any non-signatory state operating unverified frontier clusters faces immediate, automated exclusion from ASML EUV optics, ultra-pure gases, and advanced packaging, alongside a mandatory 100% Compute Tariff on all digital services originating from that jurisdiction.
              </p>
            </div>

            <div className="p-4 bg-stone-100/80 dark:bg-stone-900/60 rounded-xl border border-stone-200 dark:border-stone-800">
              <h3 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base flex items-center justify-between">
                <span>4. The "Hyper-Brained" RAG Standard (Dual-Memory Architecture)</span>
                <button
                  onClick={() => setActiveAnnotation('dual-rag')}
                  className="text-xs font-mono text-amber-700 dark:text-amber-400 underline cursor-pointer"
                >
                  [Inspect Dual-RAG]
                </button>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                To counter the criticism that fixed ASICs destroy enterprise adaptation, JustBUnknown standardizes on a dual-memory hardware split: (1) The Static Silicon Connectome (frozen world model, physically incapable of gradient modification) and (2) The Dynamic Context Fabric (a dedicated high-speed Hardware RAG Cache supporting millions of context tokens). Enterprises gain complete personalization without touching the immutable baseline neural matrices.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-4">
            The Anti-Dogfooding Protocol & Physical Latency
          </h2>

          <p>
            To eliminate runaway recursive self-improvement, JustBUnknown introduces the{' '}
            <button
              onClick={() => setActiveAnnotation('anti-dogfooding')}
              className="font-medium underline decoration-amber-500 underline-offset-4 cursor-pointer text-stone-900 dark:text-stone-100"
            >
              Anti-Dogfooding Invariant
            </button>
            : an AI R&D org is legally and physically barred from using its own models to train its next generation. They may only use publicly certified ASICs manufactured by <em>competing</em> labs, and those ASICs must have completed a mandatory 3-month operational track record in the real world.
          </p>

          <p>
            Furthermore, R&D labs operate behind an airgapped perimeter with a physically enforced 12-hour latency buffer on all data ingress and egress. Sub-second zero-day internet hacks or weight exfiltrations become physically impossible.
          </p>

          <div className="py-6 my-6 border-y border-stone-300 dark:border-stone-700 text-center">
            <blockquote className="font-serif italic text-xl text-stone-900 dark:text-stone-100 max-w-2xl mx-auto leading-snug">
              "The philosophy behind JustBUnknown is AI Safety by skeuomorphism: change what an AI is so that it behaves more like a human, which civilization is already equipped to deal with."
            </blockquote>
          </div>

          <p>
            ASICs that lock an algorithm to a physical substrate are more human-like than dynamic GPU clusters that allow a single algorithm to grab arbitrary compute at instantaneous speed. Under JustBUnknown, AI is not banned. Humanity gains the benefits of artificial intelligence—curing cancer, automating toil, expanding science—while permanently closing the door on the runaway singularity trap.
          </p>
        </div>

        {/* Sidebar / Margin Notes Column (30% asymmetric reading canvas) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-24 bg-stone-100/80 dark:bg-stone-900/60 rounded-xl p-6 border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
              <Info className="w-4 h-4" />
              <span>MARGIN ANNOTATIONS & GLOSSARY</span>
            </div>

            {activeAnnotation && ANNOTATIONS[activeAnnotation] ? (
              <div className="animate-fadeIn">
                <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base mb-1.5">
                  {ANNOTATIONS[activeAnnotation].title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {ANNOTATIONS[activeAnnotation].text}
                </p>
                <button
                  onClick={() => setActiveAnnotation(null)}
                  className="mt-3 text-[11px] font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 underline cursor-pointer"
                >
                  Dismiss Annotation
                </button>
              </div>
            ) : (
              <div className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed space-y-3">
                <p>
                  Click any highlighted term in the essay text to inspect margin notes, mathematical definitions, and governance precedents.
                </p>
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider block text-stone-400">
                    Quick Key Concepts:
                  </span>
                  <button
                    onClick={() => setActiveAnnotation('property-a')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → Property A vs Property B
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('kokotajlo')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → The Kokotajlo IOU Loop
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('puf-killswitch')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → PUF Cryptographic Kill-Switch
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('subsidy-engine')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → The ASIC Subsidy Engine (100x)
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('compute-tariff')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → Semiconductor Blockade Alliance
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('dual-rag')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → Dual-Memory RAG Standard
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('anti-dogfooding')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → Anti-Dogfooding Invariant
                  </button>
                  <button
                    onClick={() => setActiveAnnotation('skeuomorphism')}
                    className="block text-left text-xs font-medium text-stone-700 dark:text-stone-300 hover:underline cursor-pointer"
                  >
                    → Skeuomorphic AI Safety
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
