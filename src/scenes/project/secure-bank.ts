import type { Scene } from '../../render-engine'

// secure-bank — §10 (Phase 2 · Design). Security design as DEFENSE IN DEPTH, realizing §4's secure +
// compliant bar. Not a request flow — layered controls, drawn as stacked bands from the outside in:
// perimeter → network → identity → data → detect & comply. Each layer is a control the attacker must
// pass; the last band is the compliant half (audit + PII + threat detection). Echoes security §1's
// defense-in-depth board. Pure layer board (edgeless → vertical stack).
export const secureBank: Scene = {
  id: 'secure-bank',
  padding: 0.1,
  nodes: [
    {
      id: 'perimeter',
      label: '1 · Perimeter — block before entry',
      pattern: 'external',
      icon: 'shield',
      cols: 2,
      children: [
        { id: 'waf', label: 'WAF', pattern: 'external', icon: 'waf', sub: 'web-request rules', variant: 'tile' },
        { id: 'shield', label: 'Shield', pattern: 'external', icon: 'shield', sub: 'DDoS protection', variant: 'tile' },
      ],
    },
    {
      id: 'network',
      label: '2 · Network — sealed by design',
      pattern: 'network',
      icon: 'vpc',
      cols: 2,
      children: [
        { id: 'private', label: 'Private subnets', pattern: 'network', icon: 'network', sub: 'no direct internet', variant: 'tile' },
        { id: 'sg', label: 'Security groups', pattern: 'network', icon: 'shieldcheck', sub: 'least-open ports', variant: 'tile' },
      ],
    },
    {
      id: 'identity',
      label: '3 · Identity — who may act',
      pattern: 'user',
      icon: 'usercheck',
      cols: 2,
      children: [
        { id: 'iam', label: 'IAM', pattern: 'user', icon: 'iam', sub: 'least privilege', variant: 'tile' },
        { id: 'cognito', label: 'Cognito', pattern: 'user', icon: 'cognito', sub: 'customer sign-in', variant: 'tile' },
      ],
    },
    {
      id: 'data',
      label: '4 · Data — protect the crown jewels',
      pattern: 'external',
      icon: 'lock',
      cols: 3,
      children: [
        { id: 'kms', label: 'KMS', pattern: 'external', icon: 'kms', sub: 'encrypt at rest', variant: 'tile' },
        { id: 'acm', label: 'ACM / TLS', pattern: 'external', icon: 'acm', sub: 'encrypt in transit', variant: 'tile' },
        { id: 'secrets', label: 'Secrets Manager', pattern: 'external', icon: 'secretsmanager', sub: 'no hard-coded creds', variant: 'tile' },
      ],
    },
    {
      id: 'comply',
      label: '5 · Detect & comply — assume breach',
      pattern: 'service',
      icon: 'scroll',
      cols: 5,
      children: [
        { id: 'guardduty', label: 'GuardDuty', pattern: 'service', icon: 'guardduty', sub: 'threat detection', variant: 'tile' },
        { id: 'macie', label: 'Macie', pattern: 'service', icon: 'macie', sub: 'find PII', variant: 'tile' },
        { id: 'cloudtrail', label: 'CloudTrail', pattern: 'service', icon: 'cloudtrail', sub: 'audit every action', variant: 'tile' },
        { id: 'config', label: 'Config', pattern: 'service', icon: 'config', sub: 'compliance rules', variant: 'tile' },
        { id: 'securityhub', label: 'Security Hub', pattern: 'service', icon: 'securityhub', sub: 'aggregate findings', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
