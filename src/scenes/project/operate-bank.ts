import type { Scene } from '../../render-engine'

// operate-bank — §11 (Phase 2 · Design). Operations design as the Day-2 OPERATE LOOP (observe →
// automate → optimize → recover), realizing §4's always-on (RTO/RPO) + scalable/cost bar. Drawn as a
// flow of four stages; the finale stage, recover, opens into the flagship multi-Region DR (primary →
// standby Region failover) — the design that satisfies "survive a whole Region". Echoes governance §8.
export const operateBank: Scene = {
  id: 'operate-bank',
  padding: 0.14,
  nodes: [
    {
      id: 'observe',
      label: 'Observe',
      pattern: 'service',
      icon: 'cloudwatch',
      sub: 'know what the bank is doing',
      cols: 2,
      children: [
        { id: 'cloudwatch', label: 'CloudWatch', pattern: 'service', icon: 'cloudwatch', sub: 'metrics · logs · alarms', variant: 'tile' },
        { id: 'cloudtrail', label: 'CloudTrail', pattern: 'service', icon: 'cloudtrail', sub: 'audit trail', variant: 'tile' },
      ],
    },
    {
      id: 'automate',
      label: 'Automate',
      pattern: 'service',
      icon: 'cloudformation',
      sub: 'no click-ops — everything as code',
      cols: 2,
      children: [
        { id: 'cfn', label: 'CloudFormation', pattern: 'service', icon: 'cloudformation', sub: 'infra as code', variant: 'tile' },
        { id: 'pipeline', label: 'CodePipeline', pattern: 'service', icon: 'codepipeline', sub: 'build · test · deploy', variant: 'tile' },
      ],
    },
    {
      id: 'optimize',
      label: 'Optimize',
      pattern: 'storage',
      icon: 'costexplorer',
      sub: 'cost tracks use',
      cols: 3,
      children: [
        { id: 'costexplorer', label: 'Cost Explorer', pattern: 'storage', icon: 'costexplorer', sub: 'see the spend', variant: 'tile' },
        { id: 'budgets', label: 'Budgets', pattern: 'storage', icon: 'budgets', sub: 'alert on overrun', variant: 'tile' },
        { id: 'savings', label: 'Savings Plans', pattern: 'storage', icon: 'tag', sub: 'commit & save', variant: 'tile' },
      ],
    },
    {
      id: 'recover',
      label: 'Recover · Multi-Region DR',
      pattern: 'network',
      icon: 'globe',
      sub: 'survive a whole Region · RTO / RPO',
      flow: 'LR',
      children: [
        { id: 'primary', label: 'Primary Region', pattern: 'network', icon: 'globe', sub: 'eu-west-1 · live', variant: 'tile' },
        { id: 'standby', label: 'Standby Region', pattern: 'network', icon: 'globe', sub: 'eu-central-1 · warm', variant: 'tile' },
        { id: 'backup', label: 'AWS Backup', pattern: 'storage', icon: 'backup', sub: 'point-in-time · RPO', variant: 'tile' },
      ],
      edges: [
        { source: 'primary', target: 'standby' },
        { source: 'primary', target: 'backup' },
      ],
    },
  ],
  // The Day-2 operate loop, left unrolled as a chain; recover ends on the multi-Region DR.
  edges: [
    { source: 'observe', target: 'automate' },
    { source: 'automate', target: 'optimize' },
    { source: 'optimize', target: 'recover' },
  ],
}
