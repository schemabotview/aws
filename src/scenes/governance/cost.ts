import type { Scene } from '../../render-engine'

// §6 cost — the OPTIMIZE stage. Pay-as-you-go (foundations §9) is a gift, but unwatched it creeps, so
// cost management has two halves. PAY LESS — three levers: right-size (match instance size to real need
// and kill idle resources), commitment discounts (Savings Plans / Reserved Instances: commit to 1–3
// years of usage for a big discount), and Spot (bid on spare capacity for up to ~90% off, for
// interruptible work). SEE & CONTROL — the visibility tools: Cost Explorer (analyse & forecast where
// the money goes), Budgets (alert before you blow a threshold), and Anomaly Detection (flag unexpected
// spikes). Drawn as two bands: the levers, and the tools.
export const cost: Scene = {
  id: 'cost',
  cols: 2,
  padding: 0.2,
  nodes: [
    {
      id: 'levers',
      label: 'Pay less · the three levers',
      pattern: 'service',
      sub: 'reduce what you spend',
      cols: 1,
      children: [
        { id: 'rightsize', label: 'Right-size', pattern: 'service', icon: 'gauge', sub: 'match size to need · kill idle resources' },
        { id: 'commit', label: 'Savings Plans / RI', pattern: 'service', icon: 'receipt', sub: 'commit 1–3 yr → up to ~72% off' },
        { id: 'spot', label: 'Spot', pattern: 'service', icon: 'ec2', sub: 'spare capacity → up to ~90% off · interruptible' },
      ],
    },
    {
      id: 'tools',
      label: 'See & control the spend',
      pattern: 'network',
      sub: 'visibility & guardrails',
      cols: 1,
      children: [
        { id: 'explorer', label: 'Cost Explorer', pattern: 'network', icon: 'costexplorer', sub: 'analyse & forecast where money goes' },
        { id: 'budgets', label: 'Budgets', pattern: 'network', icon: 'budgets', sub: 'alert before you exceed a threshold' },
        { id: 'anomaly', label: 'Anomaly Detection', pattern: 'network', icon: 'bell', sub: 'flag unexpected spend spikes' },
      ],
    },
  ],
  edges: [],
}
