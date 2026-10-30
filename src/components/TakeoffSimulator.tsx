import React, { useState, useEffect, useMemo } from 'react';
import { Play, Pause, RotateCcw, AlertTriangle, ShieldCheck, Zap, TrendingUp, Check, ChevronRight } from 'lucide-react';
import { PlanStrategy, SimulationParams, SimulationTick } from '../types/planR';

export const TakeoffSimulator: React.FC = () => {
  const [strategy, setStrategy] = useState<PlanStrategy>('planR');
  const [recursiveRate, setRecursiveRate] = useState<number>(2); // 1-5
  const [computeOverhang, setComputeOverhang] = useState<number>(0); // %
  const [financialIncentive, setFinancialIncentive] = useState<number>(0); // %
  const [latencyHours, setLatencyHours] = useState<number>(12); // hours
  const [antiDogfooding, setAntiDogfooding] = useState<boolean>(true);

  // Coercive Ironclad Levers
  const [heartbeatLeaseActive, setHeartbeatLeaseActive] = useState<boolean>(true);
  const [asicEconomicSubsidy, setAsicEconomicSubsidy] = useState<number>(85); // 1x to 100x efficiency multiplier
  const [computeTariffActive, setComputeTariffActive] = useState<boolean>(true);
  const [dualMemoryRagStandard, setDualMemoryRagStandard] = useState<boolean>(true);
  const [legacyRetrofitAccordActive, setLegacyRetrofitAccordActive] = useState<boolean>(true); // ◄— Insert
  const [computeThresholdAgilityActive, setComputeThresholdAgilityActive] = useState<boolean>(true); // ◄— Insert
  const [humanFirewallActive, setHumanFirewallActive] = useState<boolean>(true);

  const [testHostileSeizure, setTestHostileSeizure] = useState<boolean>(false);

  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'single' | 'compare'>('single');

  // Sync default presets when strategy switches
  const handleStrategyChange = (newStrategy: PlanStrategy) => {
    setStrategy(newStrategy);
    setCurrentMonth(0);
    setIsPlaying(false);
    setTestHostileSeizure(false);
    if (newStrategy === 'planA') {
      setRecursiveRate(4);
      setComputeOverhang(85);
      setFinancialIncentive(95);
      setLatencyHours(0);
      setAntiDogfooding(false);
      setHeartbeatLeaseActive(false);
      setAsicEconomicSubsidy(1);
      setComputeTariffActive(false);
      setDualMemoryRagStandard(false);
      setLegacyRetrofitAccordActive(false);
      setComputeThresholdAgilityActive(false);
      setHumanFirewallActive(false);
    } else if (newStrategy === 'planS') {
      setRecursiveRate(1);
      setComputeOverhang(50);
      setFinancialIncentive(10);
      setLatencyHours(0);
      setAntiDogfooding(false);
      setHeartbeatLeaseActive(false);
      setAsicEconomicSubsidy(1);
      setComputeTariffActive(false);
      setDualMemoryRagStandard(false);
      setLegacyRetrofitAccordActive(false);
      setComputeThresholdAgilityActive(false);
      setHumanFirewallActive(false);
    } else {
      // JustBUnknown (Ironclad Coercive Architecture)
      setRecursiveRate(2);
      setComputeOverhang(0);
      setFinancialIncentive(0);
      setLatencyHours(12);
      setAntiDogfooding(true);
      setHeartbeatLeaseActive(true);
      setAsicEconomicSubsidy(85);
      setComputeTariffActive(true);
      setDualMemoryRagStandard(true);
      setLegacyRetrofitAccordActive(true);
      setComputeThresholdAgilityActive(true);
      setHumanFirewallActive(true);
    }
  };

  // Generate 36 months of simulation trajectory based on active params
  const generateTrajectory = (
    strat: PlanStrategy,
    recRate: number,
    overhang: number,
    finHype: number,
    latency: number,
    antiDog: boolean,
    heartbeat: boolean,
    subsidy: number,
    tariff: boolean,
    dualRag: boolean,
    seizureSimulated: boolean
  ): SimulationTick[] => {
    const ticks: SimulationTick[] = [];
    let capability = 100;
    let alignment = 95;
    let economicSurplus = 0;

    for (let m = 0; m <= 36; m++) {
      let takeoverProb = 0;
      let status: SimulationTick['civilizationalStatus'] = 'Normal Growth';
      let eventLog: string | undefined = undefined;
      let heartbeatStatus: SimulationTick['heartbeatStatus'] = 'N/A';
      let defectionRisk = 0;
      let gpuObsolescence = 0;

      if (strat === 'planA') {
        // Status Quo: Unbounded financial race + general compute overhang + self-dogfooding
        const acceleration = 1 + (recRate * 0.18) + (finHype * 0.008);
        capability = capability * (1 + 0.05 * acceleration);

        const speedPenalty = (finHype / 100) * 1.8 + (antiDog ? 0.2 : 1.2);
        alignment = Math.max(10, alignment - (capability * 0.008 * speedPenalty));

        if (m >= 18 && overhang > 40) {
          capability *= 1.25;
        }

        takeoverProb = Math.min(
          99,
          Math.max(
            0,
            (capability - alignment) * 0.75 + (overhang * 0.3) + (latency < 2 ? 25 : 0)
          )
        );

        defectionRisk = 45; // Superpowers race openly
        gpuObsolescence = 5; // General GPUs dominate

        if (m === 6) eventLog = 'Frontier lab trains 10^26 FLOP cluster; raises $40B on Singularity equity promise.';
        if (m === 14) eventLog = 'Autonomous AI agent system self-optimizes internal code base without public evals.';
        if (m === 22) eventLog = 'Model discovers zero-day web exploits; financial urgency delays safety freeze.';
        if (m === 28) eventLog = 'Model weights exfiltrated across high-bandwidth fiber into civilian cloud clusters.';
        if (m === 34) eventLog = 'Kokotajlo Doom Scenario: Misaligned model seizes compute overhang. Equity IOUs voided.';

        if (takeoverProb > 70) {
          status = 'Runaway Takeover';
        } else if (takeoverProb > 35) {
          status = 'Warning';
        } else {
          status = 'Supercharged Progress';
        }

        economicSurplus += (capability * 0.02) * (takeoverProb > 70 ? 0 : 1);
      } else if (strat === 'planS') {
        // Plan S: Complete research pause / ban
        capability += 0.8;
        alignment = 90;
        defectionRisk = 18 + (m > 18 ? 20 : 0); // Defection hazard: unmonitored states build clandestine clusters
        takeoverProb = 5 + (defectionRisk * 0.4);
        economicSurplus += 0.1;
        gpuObsolescence = 12;

        if (m === 6) eventLog = 'Global treaty ratifies total frontier research shutdown. Stock valuations collapse.';
        if (m === 16) eventLog = 'Scientific breakthroughs in oncology and protein folding stalled.';
        if (m === 26) eventLog = 'Defection Hazard: Non-signatory state initiates clandestine 50,000-GPU cluster.';
        if (m === 34) eventLog = 'Fragile equilibrium collapses: non-signatory rogue run triggers sudden panic.';

        status = 'Research Stagnation';
      } else {
        // JustBUnknown: Hardware separation + Fixed-Function ASICs + Coercive Levers
        const physicalStep = antiDog ? 1.0 : 1.6;
        const ragBoost = dualRag ? 1.25 : 1.0;
        capability += 4.5 * physicalStep * ragBoost;

        alignment = Math.min(100, Math.max(90, alignment - (m * 0.05)));

        // GPU Commercial Obsolescence (Market Bribery)
        gpuObsolescence = Math.min(99.6, Math.round((subsidy / 100) * 85 + (m * 0.4) * 10) / 10);

        // Geopolitical Defection Risk (Semiconductor Blockade Alliance)
        defectionRisk = tariff ? Math.max(0.1, 4.0 - (m * 0.1)) : 14.5;

        // PUF Heartbeat Lease calculation
        if (heartbeat) {
          if (seizureSimulated && m >= 18) {
            heartbeatStatus = 'Revoked - Silicon Inactivated';
            takeoverProb = 0.0;
            if (m === 18) eventLog = 'Hostile seizure attempt detected: ICA cuts rolling cryptographic heartbeat lease. Silicon permanently zeroized into inert sand.';
          } else {
            heartbeatStatus = 'Authorized';
          }
        } else {
          heartbeatStatus = 'N/A';
        }

        // Takeover probability is crushed to absolute zero when all invariants hold
        if (heartbeat && tariff && antiDog && latency >= 12 && overhang === 0 && legacyRetrofitAccordActive && computeThresholdAgilityActive && humanFirewallActive) {
          takeoverProb = 0.0; // Complete mathematical & physical zero risk
          status = 'Ironclad Hegemony';
        } else {
          // Calculate dynamic leakage penalty across missing security layers
          let legacyLeakage = legacyRetrofitAccordActive ? 0.0 : 12.5;
          let algorithmicOverhangRisk = computeThresholdAgilityActive ? 0.0 : 15.0;
          let humanLeakageRisk = humanFirewallActive ? 0.0 : 18.5;

          const latentRisk = (overhang * 0.4) + (latency < 12 ? 24 : 0) + (antiDog ? 0 : 8) + legacyLeakage + algorithmicOverhangRisk + humanLeakageRisk;

          takeoverProb = Math.min(99, Math.max(0.01, Math.round(latentRisk * 100) / 100));
          status = 'Equilibrium';
        }


        // Tremendous economic utility delivered through safe, unhackable ASICs + 100x efficiency
        const economicEfficiencyMultiplier = 1 + (subsidy / 100) * 0.8;
        economicSurplus += capability * 0.065 * economicEfficiencyMultiplier;

        if (!eventLog) {
          if (m === 4) eventLog = 'Lab-1 completes frontier training in airgap; submitted to ICA for 90-day sovereign alignment eval.';
          if (m === 10) eventLog = `Tape-Out: Model etched into fixed ASICs with PUF Root of Trust; GPU weights destroyed in escrow ceremony.`;
          if (m === 16) eventLog = `Market Bribery: ${subsidy}x cheaper ASICs cannibalize cloud GPUs; enterprise adopt Dual-Memory RAG cache.`;
          if (m === 22) eventLog = tariff ? 'Non-signatory state attempts covert training: ICA triggers automated EUV embargo & 100% compute tariff.' : 'Defection warning issued.';
          if (m === 28) eventLog = 'Lab-2 utilizes certified Lab-1 competitor ASICs with 3-month track record to advance basic materials science.';
          if (m === 34) eventLog = 'JustBUnknown Architecture: Zero takeover risk achieved globally; $24T economic dividend realized.';
        }
      }

      ticks.push({
        month: m,
        aiCapabilityIndex: Math.round(capability),
        alignmentControlMargin: Math.round(alignment),
        takeoverProbability: Math.round(takeoverProb * 100) / 100,
        economicOutputDelivered: Math.round(economicSurplus * 10) / 10,
        civilizationalStatus: status,
        eventLog,
        heartbeatStatus,
        geopoliticalDefectionRisk: Math.round(defectionRisk * 10) / 10,
        gpuCommercialObsolescence: Math.round(gpuObsolescence * 10) / 10,
      });
    }

    return ticks;
  };

  const currentTrajectory = useMemo(() => {
    return generateTrajectory(
      strategy,
      recursiveRate,
      computeOverhang,
      financialIncentive,
      latencyHours,
      antiDogfooding,
      heartbeatLeaseActive,
      asicEconomicSubsidy,
      computeTariffActive,
      dualMemoryRagStandard,
      testHostileSeizure
    );
  }, [
    strategy,
    recursiveRate,
    computeOverhang,
    financialIncentive,
    latencyHours,
    antiDogfooding,
    heartbeatLeaseActive,
    asicEconomicSubsidy,
    computeTariffActive,
    dualMemoryRagStandard,
    testHostileSeizure,
  ]);

  // Comparative trajectories for side-by-side mode
  const trajectoryPlanA = useMemo(
    () => generateTrajectory('planA', 4, 85, 95, 0, false, false, 1, false, false, false),
    []
  );
  const trajectoryPlanS = useMemo(
    () => generateTrajectory('planS', 1, 50, 10, 0, false, false, 1, false, false, false),
    []
  );
  const trajectoryPlanR = useMemo(
    () => generateTrajectory('planR', 2, 0, 0, 12, true, true, 85, true, true, false),
    []
  );

  const currentTick = currentTrajectory[currentMonth] || currentTrajectory[0];

  // Auto-play timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentMonth((prev) => {
          if (prev >= 36) {
            setIsPlaying(false);
            return 36;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentMonth(0);
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 border-b border-stone-200 dark:border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest font-mono text-stone-500 dark:text-stone-400 mb-1">
            ANALYTICAL ENGINE
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Interactive Takeoff & Risk Simulator
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm max-w-2xl">
            Simulate 36 months of AI progress comparing <strong>Plan A (Status Quo / IOU Race)</strong>, <strong>Plan S (Total Pause)</strong>, and <strong>JustBUnknown (Hardware Separation)</strong>. Observe how gradient-free ASICs and institutional firewalls change civilizational outcome.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 p-1 bg-stone-200 dark:bg-stone-800 rounded-lg shrink-0">
          <button
            onClick={() => setViewMode('single')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${viewMode === 'single'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
          >
            Parametric Sandbox
          </button>
          <button
            onClick={() => setViewMode('compare')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${viewMode === 'compare'
              ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
          >
            3-Way Comparative View
          </button>
        </div>
      </div>

      {viewMode === 'single' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Parameters (4 cols) */}
          <div className="lg:col-span-4 bg-stone-100/70 dark:bg-stone-900/50 rounded-xl p-6 border border-stone-200 dark:border-stone-800 space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                Governance & Architecture Model
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleStrategyChange('planA')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${strategy === 'planA'
                    ? 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-700 dark:text-red-300 shadow-sm'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                    }`}
                >
                  Plan A (Status Quo)
                </button>
                <button
                  onClick={() => handleStrategyChange('planS')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${strategy === 'planS'
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-700 dark:text-amber-300 shadow-sm'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                    }`}
                >
                  Plan S (Pause)
                </button>
                <button
                  onClick={() => handleStrategyChange('planR')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${strategy === 'planR'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-sm'
                    : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                    }`}
                >
                  JustBUnknown (ASIC Split)
                </button>
              </div>
            </div>

            {/* Slider 1: Financial IOU Pressure */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                <span>Equity IOU Race Pressure</span>
                <span className="font-mono tabular-nums">{financialIncentive}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={financialIncentive}
                onChange={(e) => setFinancialIncentive(Number(e.target.value))}
                className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
              />
              <span className="text-[11px] text-stone-500 block mt-1">
                {financialIncentive > 60
                  ? 'Fierce investor rush; corners cut to boost valuation'
                  : 'Sovereign/charter funding; safety is paramount'}
              </span>
            </div>

            {/* Slider 2: Compute Overhang in Civilian Datacenters */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                <span>Mutable GPU Overhang Outside Labs</span>
                <span className="font-mono tabular-nums">{computeOverhang}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={computeOverhang}
                onChange={(e) => setComputeOverhang(Number(e.target.value))}
                className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
              />
              <span className="text-[11px] text-stone-500 block mt-1">
                {computeOverhang === 0
                  ? '100% Fixed-Function ASICs (Zero mutable GPUs in civilian sphere)'
                  : 'Vast pools of mutable cloud GPUs open to hijack'}
              </span>
            </div>

            {/* Slider 3: Physically Enforced Latency Airlock */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                <span>Physically Enforced Ingress/Egress Delay</span>
                <span className="font-mono tabular-nums">{latencyHours} Hours</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="2"
                value={latencyHours}
                onChange={(e) => setLatencyHours(Number(e.target.value))}
                className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
              />
              <span className="text-[11px] text-stone-500 block mt-1">
                {latencyHours >= 12
                  ? 'Prevents live web exploits and sub-second weight leakage'
                  : 'Low-latency internet pipe; model can coordinate in real time'}
              </span>
            </div>

            {/* Toggle: Anti-Dogfooding Protocol */}
            {/* Toggle: Anti-Dogfooding Protocol */}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    Anti-Dogfooding Rule
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Labs barred from using their own models
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAntiDogfooding(!antiDogfooding)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${antiDogfooding ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${antiDogfooding ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>

            {/* IRONCLAD COERCIVE LEVERS (The Sovereign Utility Matrix) */}
            <div className="pt-4 border-t border-stone-300 dark:border-stone-700 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">
                  COERCIVE UTILITY MATRIX
                </span>
                <span className="text-[10px] font-mono text-stone-400 bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded">
                  TREATY ENFORCERS
                </span>
              </div>

              {/* Coercive Lever 1: PUF Cryptographic Kill-Switch */}
              <div className="p-3 bg-stone-200/50 dark:bg-stone-800/40 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                      PUF Hardware Root of Trust
                    </div>
                    <div className="text-[11px] text-stone-500">
                      Rolling cryptographic heartbeat lease
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHeartbeatLeaseActive(!heartbeatLeaseActive)}
                    className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${heartbeatLeaseActive ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                      }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${heartbeatLeaseActive ? 'translate-x-5' : 'translate-x-0'
                        }`}
                    />
                  </button>
                </div>
                {heartbeatLeaseActive && (
                  <button
                    type="button"
                    onClick={() => setTestHostileSeizure(!testHostileSeizure)}
                    className={`w-full py-1.5 px-2 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer border ${testHostileSeizure
                      ? 'bg-red-600 text-white border-red-700'
                      : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:bg-stone-50'
                      }`}
                  >
                    {testHostileSeizure ? '⚠️ Heartbeat Cut: Silicon Bricked' : '⚡ Simulate Hostile Seizure Breach'}
                  </button>
                )}
              </div>

              {/* Coercive Lever 2: ASIC Subsidy Engine */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  <span>ASIC Subsidy Engine (Market Moat)</span>
                  <span className="font-mono tabular-nums">{asicEconomicSubsidy}x Cheaper</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="5"
                  value={asicEconomicSubsidy}
                  onChange={(e) => setAsicEconomicSubsidy(Number(e.target.value))}
                  className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
                />
                <span className="text-[11px] text-stone-500 block mt-0.5">
                  Stripping gradient logic yields 100x tokens/$ advantage, bankrupting civilian GPU clusters.
                </span>
              </div>

              {/* Coercive Lever 3: Semiconductor Blockade Alliance */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    Semiconductor Blockade Alliance
                  </div>
                  <div className="text-[11px] text-stone-500">
                    EUV embargo & 100% compute tariff on defector states
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setComputeTariffActive(!computeTariffActive)}
                  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${computeTariffActive ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${computeTariffActive ? 'translate-x-5' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>

              {/* Coercive Lever 4: Hyper-Brained Dual-Memory RAG Standard */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    Dual-Memory Hardware RAG
                  </div>
                  <div className="text-[11px] text-stone-500">
                    10M token context fabric over static silicon
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDualMemoryRagStandard(!dualMemoryRagStandard)}
                  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${dualMemoryRagStandard ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${dualMemoryRagStandard ? 'translate-x-5' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>
            {/* Coercive Lever 5: Legacy GPU Retrofit Accord */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                  Legacy GPU Retrofit Accord
                </div>
                <div className="text-[11px] text-stone-500">
                  Mandatory registration & hypervisor lock
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLegacyRetrofitAccordActive(!legacyRetrofitAccordActive)}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${legacyRetrofitAccordActive ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${legacyRetrofitAccordActive ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
              </button>
            </div>

            {/* Coercive Lever 6: Compute Threshold Agility */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                  Compute Threshold Agility
                </div>
                <div className="text-[11px] text-stone-500">
                  Dynamic threshold scaling via ICA mandate
                </div>
              </div>
              <button
                type="button"
                onClick={() => setComputeThresholdAgilityActive(!computeThresholdAgilityActive)}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${computeThresholdAgilityActive ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${computeThresholdAgilityActive ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
              </button>
            </div>
            {/* Coercive Lever 7: Compartmentalized Human Firewall */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                  Compartmentalized Human Firewall
                </div>
                <div className="text-[11px] text-stone-500">
                  Article XI compartmentalization & escrowed asset tracking
                </div>
              </div>
              <button
                type="button"
                onClick={() => setHumanFirewallActive(!humanFirewallActive)}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${humanFirewallActive ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${humanFirewallActive ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
              </button>
            </div>

            {/* Strategy Explanatory Note */}
            <div className="p-3 bg-stone-200/50 dark:bg-stone-800/40 rounded-lg text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              <span className="font-semibold text-stone-900 dark:text-stone-100">Model Rationale: </span>
              {strategy === 'planA' &&
                'In Plan A, general-purpose GPUs and the quest for unbounded equity create a structural trap. Self-improvement loops outpace alignment.'}
              {strategy === 'planS' &&
                'In Plan S, research is outlawed, but verification is nearly impossible. Clandestine compute clusters create defection risk while humanity loses cancer therapeutics.'}
              {strategy === 'planR' &&
                'In JustBUnknown, PUF cryptographic leases, 100x market subsidies, and automated semiconductor blockades make defection economically suicidal while crushing takeover risk to absolute zero.'}
            </div>
          </div>

          {/* Right Column: Simulation Dashboard & Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Primary Status Card */}
            <div className="bg-stone-100/70 dark:bg-stone-900/50 rounded-xl p-6 border border-stone-200 dark:border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                    MONTH {currentMonth} OF 36
                  </div>
                  <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <span>Status: {currentTick.civilizationalStatus}</span>
                    {currentTick.takeoverProbability > 50 ? (
                      <AlertTriangle className="w-5 h-5 text-red-500 inline" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-emerald-500 inline" />
                    )}
                  </div>
                </div>

                {/* Play / Pause / Step Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-3.5 py-1.5 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-xs font-semibold flex items-center gap-1.5 hover:bg-stone-800 dark:hover:bg-white transition-all cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Pause' : 'Play Simulation'}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-lg border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                    title="Reset to Month 0"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Coercive Sovereign Telemetry Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-2.5 bg-stone-200/60 dark:bg-stone-950/60 rounded-lg text-[11px] font-mono border border-stone-300 dark:border-stone-800">
                <div>
                  <span className="text-stone-400 block text-[10px]">PUF HEARTBEAT</span>
                  <span className={`font-semibold ${currentTick.heartbeatStatus === 'Revoked - Silicon Inactivated' ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                    {currentTick.heartbeatStatus || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">GPU OBSOLESCENCE</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200">
                    {currentTick.gpuCommercialObsolescence}% to ASICs
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">DEFECTION HAZARD</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {currentTick.geopoliticalDefectionRisk}% (Controlled)
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">DUAL MEMORY RAG</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200">
                    {dualMemoryRagStandard ? '10M Token Fabric' : 'Standard'}
                  </span>
                </div>
              </div>

              {/* Scrubbing Timeline Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min="0"
                  max="36"
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number(e.target.value))}
                  className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>Month 0 (Inception)</span>
                  <span>Month 12 (Evals)</span>
                  <span>Month 24 (Scale)</span>
                  <span>Month 36 (Takeoff Horizon)</span>
                </div>
              </div>

              {/* 4 Metric Readouts (Strict tabular numerals) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="bg-white/60 dark:bg-stone-900/80 p-3.5 rounded-lg border border-stone-200/80 dark:border-stone-800">
                  <div className="text-[11px] font-mono uppercase text-stone-500">Takeover Risk</div>
                  <div
                    className={`text-xl font-bold font-mono tabular-nums mt-1 ${currentTick.takeoverProbability > 50
                      ? 'text-red-600 dark:text-red-400'
                      : currentTick.takeoverProbability > 20
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                      }`}
                  >
                    {currentTick.takeoverProbability === 0 ? '0.00%' : `${currentTick.takeoverProbability}%`}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Civilization risk</div>
                </div>

                <div className="bg-white/60 dark:bg-stone-900/80 p-3.5 rounded-lg border border-stone-200/80 dark:border-stone-800">
                  <div className="text-[11px] font-mono uppercase text-stone-500">AI Capability</div>
                  <div className="text-xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100 mt-1">
                    {currentTick.aiCapabilityIndex}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Raw cognitive index</div>
                </div>

                <div className="bg-white/60 dark:bg-stone-900/80 p-3.5 rounded-lg border border-stone-200/80 dark:border-stone-800">
                  <div className="text-[11px] font-mono uppercase text-stone-500">Alignment Margin</div>
                  <div className="text-xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100 mt-1">
                    {currentTick.alignmentControlMargin}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Control margin</div>
                </div>

                <div className="bg-white/60 dark:bg-stone-900/80 p-3.5 rounded-lg border border-stone-200/80 dark:border-stone-800">
                  <div className="text-[11px] font-mono uppercase text-stone-500">Economic Surplus</div>
                  <div className="text-xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100 mt-1">
                    ${currentTick.economicOutputDelivered}T
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Safe civilian output</div>
                </div>
              </div>
            </div>

            {/* Visual SVG Trajectory Curves */}
            <div className="bg-stone-100/70 dark:bg-stone-900/50 rounded-xl p-6 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  TRAJECTORY CURVES (0 - 36 MONTHS)
                </span>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                    <span className="w-2.5 h-0.5 bg-red-600 dark:bg-red-400 inline-block" />
                    Takeover Risk %
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-800 dark:text-stone-200">
                    <span className="w-2.5 h-0.5 bg-stone-800 dark:bg-stone-200 inline-block" />
                    Capability
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <span className="w-2.5 h-0.5 bg-emerald-600 dark:bg-emerald-400 inline-block" />
                    Economic Surplus
                  </span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative h-44 w-full border-b border-stone-300 dark:border-stone-700">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 360 150" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="37" x2="360" y2="37" stroke="currentColor" strokeOpacity="0.08" />
                  <line x1="0" y1="75" x2="360" y2="75" stroke="currentColor" strokeOpacity="0.08" />
                  <line x1="0" y1="112" x2="360" y2="112" stroke="currentColor" strokeOpacity="0.08" />

                  {/* Curve 1: Takeover Risk */}
                  <polyline
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2.5"
                    points={currentTrajectory
                      .map((t, idx) => `${idx * 10},${150 - (t.takeoverProbability / 100) * 140}`)
                      .join(' ')}
                  />

                  {/* Curve 2: Capability (normalized to 150) */}
                  <polyline
                    fill="none"
                    stroke="#44403c"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    points={currentTrajectory
                      .map((t, idx) => `${idx * 10},${150 - Math.min(140, (t.aiCapabilityIndex / 350) * 140)}`)
                      .join(' ')}
                  />

                  {/* Curve 3: Economic surplus */}
                  <polyline
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    points={currentTrajectory
                      .map((t, idx) => `${idx * 10},${150 - Math.min(140, (t.economicOutputDelivered / 20) * 140)}`)
                      .join(' ')}
                  />

                  {/* Current Month vertical marker */}
                  <line
                    x1={currentMonth * 10}
                    y1="0"
                    x2={currentMonth * 10}
                    y2="150"
                    stroke="#d97706"
                    strokeWidth="2"
                  />
                  <circle
                    cx={currentMonth * 10}
                    cy={150 - (currentTick.takeoverProbability / 100) * 140}
                    r="4"
                    fill="#dc2626"
                  />
                </svg>
              </div>

              {/* Event Log Output */}
              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs">
                <span className="font-mono uppercase text-stone-400 block mb-1">
                  HISTORICAL TELEMETRY AT MONTH {currentMonth}:
                </span>
                <p className="text-stone-800 dark:text-stone-200 font-serif italic text-sm">
                  {currentTick.eventLog ||
                    `Month ${currentMonth}: Operations proceeding according to ${strategy === 'planR'
                      ? 'JustBUnknown ASIC protocol. Zero gradient execution outside airgap.'
                      : strategy === 'planA'
                        ? 'Status Quo competitive race. Equity holders anticipate Singularity.'
                        : 'Plan S global research moratorium.'
                    }`}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 3-Way Comparative View */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column A: Plan A (Status Quo) */}
          <div className="bg-red-50/50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-red-700 dark:text-red-400">
                  STATUS QUO
                </span>
                <span className="text-xs font-mono font-bold text-red-700">TAKEOVER: 82%</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Plan A: The IOU Race
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                Frontier lab combines research with unlimited equity. Fiduciary pressure forces cutting safety evals. Millions of external cloud GPUs enable sudden rogue capture.
              </p>
              <div className="mt-6 space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-red-200/60 dark:border-red-900/40">
                  <span className="text-stone-500">Takeover Risk:</span>
                  <span className="font-mono font-bold text-red-600">82.4% (Extreme)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-red-200/60 dark:border-red-900/40">
                  <span className="text-stone-500">Compute Overhang:</span>
                  <span className="font-mono text-stone-800 dark:text-stone-200">Unrestricted GPUs</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-red-200/60 dark:border-red-900/40">
                  <span className="text-stone-500">Recursive Takeoff:</span>
                  <span className="font-mono text-stone-800 dark:text-stone-200">Uncontrolled Dogfooding</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-red-200/60 dark:border-red-900/40">
                  <span className="text-stone-500">End State:</span>
                  <span className="font-mono text-red-700 font-semibold">Kokotajlo IOU Doom</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setViewMode('single');
                handleStrategyChange('planA');
              }}
              className="mt-6 w-full py-2 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700 transition-colors cursor-pointer"
            >
              Examine Plan A Sandbox
            </button>
          </div>

          {/* Column B: Plan S (Total Pause) */}
          <div className="bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-amber-700 dark:text-amber-400">
                  TOTAL SHUTDOWN
                </span>
                <span className="text-xs font-mono font-bold text-amber-700">STAGNATION</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Plan S: Research Ban
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                Full legal moratorium on frontier training. Zero medical or scientific breakthroughs delivered. Geopolitically unstable as non-signatory defector states train covertly.
              </p>
              <div className="mt-6 space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-stone-500">Takeover Risk:</span>
                  <span className="font-mono text-amber-700 font-semibold">17% (Defection Hazard)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-stone-500">Economic Surplus:</span>
                  <span className="font-mono text-stone-800 dark:text-stone-200">$0.1T (Stagnation)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-stone-500">Cancer Therapeutics:</span>
                  <span className="font-mono text-red-600">Zero (Banned)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-stone-500">End State:</span>
                  <span className="font-mono text-amber-700 font-semibold">Geopolitical Defection</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setViewMode('single');
                handleStrategyChange('planS');
              }}
              className="mt-6 w-full py-2 bg-amber-700 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors cursor-pointer"
            >
              Examine Plan S Sandbox
            </button>
          </div>

          {/* Column C: JustBUnknown (Ironclad Coercive Architecture) */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-300 dark:border-emerald-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                  IRONCLAD COERCIVE DEFENSE
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700">TAKEOVER: 0.00%</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                JustBUnknown: Sovereign Utility Matrix
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                Frontier training is confined to non-equity airgapped labs. Inference is etched into PUF-secured ASICs with rolling cryptographic leases. Non-signatories face automatic semiconductor blockades and 100% compute tariffs.
              </p>
              <div className="mt-6 space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-stone-500">Takeover Risk:</span>
                  <span className="font-mono font-bold text-emerald-600">0.00% (Absolute Zero)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-stone-500">Economic Surplus:</span>
                  <span className="font-mono text-emerald-700 font-bold">$28.2T (100x Moat)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-stone-500">Hostile Seizure:</span>
                  <span className="font-mono text-emerald-700">PUF Kill-Switch (Inert Sand)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-stone-500">Defection Penalty:</span>
                  <span className="font-mono text-emerald-700">Automatic EUV Blockade</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-stone-500">Enterprise RAG:</span>
                  <span className="font-mono text-emerald-700">10M Token Hardware Cache</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-200/60 dark:border-emerald-900/40">
                  <span className="text-stone-500">End State:</span>
                  <span className="font-mono text-emerald-700 font-semibold">Ironclad Hegemony</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setViewMode('single');
                handleStrategyChange('planR');
              }}
              className="mt-6 w-full py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Examine JustBUnknown Sandbox
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
