export type PlanStrategy = 'planA' | 'planS' | 'planR';

export interface ThreatScenario {
  id: string;
  title: string;
  category: 'financial' | 'hardware' | 'cyber' | 'recursive' | 'intelligence';
  kokotajloDescription: string;
  planRResolution: string;
  statusQuoVulnerability: string;
  hardwareEnforcementMechanism: string;
  severityScore: number; // 1-10
}

export interface SimulationParams {
  strategy: PlanStrategy;
  recursiveRate: number; // 1 to 5
  computeOverhang: number; // in PFLOPS or abstract 10 to 100
  financialIncentive: number; // 0 to 100 (IOU hype factor)
  latencyHours: number; // 0 to 24
  antiDogfoodingEnforced: boolean;
  runSizeR: number; // run size R of ASICs
  // Ironclad Coercive Levers:
  heartbeatLeaseActive: boolean; // PUF + Hardware RoT with rolling sovereign cryptographic lease
  asicEconomicSubsidy: number; // 1x to 100x efficiency multiplier over general GPUs
  computeTariffActive: boolean; // Treaty-enforced semiconductor blockade & 100% compute tariff on rogue states
  dualMemoryRagStandard: boolean; // Static Silicon Connectome + Dynamic Hardware Context Fabric
}

export interface SimulationTick {
  month: number;
  aiCapabilityIndex: number;
  alignmentControlMargin: number;
  takeoverProbability: number;
  economicOutputDelivered: number; // $ Trillions
  civilizationalStatus: 'Normal Growth' | 'Supercharged Progress' | 'Equilibrium' | 'Warning' | 'Runaway Takeover' | 'Research Stagnation' | 'Ironclad Hegemony';
  eventLog?: string;
  heartbeatStatus?: 'Authorized' | 'Revoked - Silicon Inactivated' | 'N/A';
  geopoliticalDefectionRisk?: number; // %
  gpuCommercialObsolescence?: number; // % market migrated to ASIC
}

export interface ArchitectureNode {
  id: string;
  title: string;
  entity: 'rnd' | 'firewall' | 'deployment';
  summary: string;
  details: string[];
  securityInvariants: string[];
  legalCharter: string;
}
