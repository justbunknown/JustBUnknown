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
  recursiveRate: number;
  computeOverhang: number;
  financialIncentive: number;
  latencyHours: number;
  antiDogfoodingEnforced: boolean;
  runSizeR: number;
  heartbeatLeaseActive: boolean;
  asicEconomicSubsidy: number;
  computeTariffActive: boolean;
  dualMemoryRagStandard: boolean;
  // Hardened Anti-Exploit Metrics
  legacyRetrofitAccordActive: boolean; // ◄— New
  computeThresholdAgilityActive: boolean; // ◄— New
}

export interface SimulationTick {
  month: number;
  aiCapabilityIndex: number;
  alignmentControlMargin: number;
  takeoverProbability: number;
  economicOutputDelivered: number;
  civilizationalStatus: string;
  eventLog?: string;
  heartbeatStatus?: string;
  geopoliticalDefectionRisk?: number;
  gpuCommercialObsolescence?: number;
  legacyClusterLeakage?: number; // ◄— Track shadow compute leakage %
  algorithmicOverhangBuffer?: number; // ◄— Dynamic defense threshold in FLOPs
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
