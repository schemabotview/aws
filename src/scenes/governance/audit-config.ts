import type { Scene } from '../../render-engine'

// §3 audit-config — still OBSERVE, but the accountability half: metrics tell you something is wrong;
// these two tell you WHO did it and WHAT changed. CloudTrail is the account's flight recorder — it logs
// every API call (console, CLI, SDK, service-to-service): who, what action, when, from where — an
// immutable audit trail delivered to S3. AWS Config records the configuration STATE of every resource
// over time (so you can see exactly what changed and when), and Config Rules continuously evaluate
// resources against policy — "no public S3 buckets", "volumes must be encrypted" — flagging (and
// optionally auto-remediating) anything non-compliant. Drawn as two bands: the CloudTrail audit chain
// and the Config change/compliance chain.
export const auditConfig: Scene = {
  id: 'audit-config',
  cols: 2,
  padding: 0.16,
  nodes: [
    {
      id: 'trail-lane',
      label: 'CloudTrail · who did what',
      pattern: 'external',
      sub: 'the account audit trail',
      children: [
        { id: 'action', label: 'Any action', pattern: 'user', icon: 'code', sub: 'console · CLI · SDK · service' },
        { id: 'cloudtrail', label: 'CloudTrail', pattern: 'external', icon: 'cloudtrail', sub: 'who · what · when · from where' },
        { id: 'log', label: 'Audit log', pattern: 'storage', icon: 'scroll', sub: 'immutable · delivered to S3' },
      ],
      edges: [
        { source: 'action', target: 'cloudtrail' },
        { source: 'cloudtrail', target: 'log' },
      ],
    },
    {
      id: 'config-lane',
      label: 'Config · what changed & is it compliant',
      pattern: 'service',
      sub: 'resource state over time',
      children: [
        { id: 'change', label: 'Resource change', pattern: 'network', icon: 'gitbranch', sub: 'a config is modified' },
        { id: 'config', label: 'AWS Config', pattern: 'service', icon: 'config', sub: 'records state & history' },
        { id: 'rule', label: 'Config Rule', pattern: 'service', icon: 'shieldcheck', sub: 'evaluate vs policy → compliant? · auto-remediate' },
      ],
      edges: [
        { source: 'change', target: 'config' },
        { source: 'config', target: 'rule' },
      ],
    },
  ],
  edges: [],
}
