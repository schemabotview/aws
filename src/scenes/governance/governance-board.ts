import type { Scene } from '../../render-engine'

// §8 well-run (finale) — the whole operate loop as one board: the four activities, each filled with the
// services that implement it, so you pick the right operate-tool by asking "which part of the loop am I
// in?". Observe (CloudWatch, CloudTrail, Config); Automate (CloudFormation, CodePipeline); Optimize
// (Cost Explorer, Savings Plans, Budgets); Recover (AWS Backup, multi-Region DR). Mirrors the finale
// decision boards of the other courses — a scene-level 2×2 of activity containers, each a tile grid.
export const governanceBoard: Scene = {
  id: 'governance-board',
  cols: 2,
  padding: 0.2,
  nodes: [
    {
      id: 'observe',
      label: 'Observe',
      pattern: 'service',
      sub: 'healthy? who did what? what changed?',
      cols: 2,
      children: [
        { id: 'cw', label: 'CloudWatch', pattern: 'service', icon: 'cloudwatch', sub: 'metrics · logs', variant: 'tile' },
        { id: 'ct', label: 'CloudTrail', pattern: 'service', icon: 'cloudtrail', sub: 'API audit', variant: 'tile' },
        { id: 'cfg', label: 'Config', pattern: 'service', icon: 'config', sub: 'state · rules', variant: 'tile' },
      ],
    },
    {
      id: 'automate',
      label: 'Automate',
      pattern: 'network',
      sub: 'infra & delivery as code',
      cols: 2,
      children: [
        { id: 'cfn', label: 'CloudFormation', pattern: 'network', icon: 'cloudformation', sub: 'IaC', variant: 'tile' },
        { id: 'cp', label: 'CodePipeline', pattern: 'network', icon: 'codepipeline', sub: 'CI/CD', variant: 'tile' },
      ],
    },
    {
      id: 'optimize',
      label: 'Optimize',
      pattern: 'storage',
      sub: 'control the spend',
      cols: 2,
      children: [
        { id: 'ce', label: 'Cost Explorer', pattern: 'storage', icon: 'costexplorer', sub: 'analyse', variant: 'tile' },
        { id: 'sp', label: 'Savings Plans', pattern: 'storage', icon: 'receipt', sub: 'commit', variant: 'tile' },
        { id: 'bud', label: 'Budgets', pattern: 'storage', icon: 'budgets', sub: 'alert', variant: 'tile' },
      ],
    },
    {
      id: 'recover',
      label: 'Recover',
      pattern: 'external',
      sub: 'survive failure',
      cols: 2,
      children: [
        { id: 'bk', label: 'AWS Backup', pattern: 'external', icon: 'backup', sub: 'backups', variant: 'tile' },
        { id: 'dr', label: 'Multi-Region', pattern: 'external', icon: 'globe', sub: 'DR · RTO/RPO', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
