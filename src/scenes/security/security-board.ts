import type { Scene } from '../../render-engine'

// §7 defense-in-depth (finale) — the whole course as one board: the four layers of protection, each
// filled with the services that implement it, so you can pick the right tool by asking "which layer am
// I working on?". Encrypt the data (KMS, ACM, Secrets Manager, Parameter Store); guard the perimeter
// (Shield, WAF, Firewall Manager); detect threats (GuardDuty, Inspector, Macie, Security Hub); and
// identity & access (IAM for your workforce, Cognito for customers). Mirrors the finale decision boards
// of the other courses — a scene-level 2×2 of layer containers, each a tile grid of its services.
export const securityBoard: Scene = {
  id: 'security-board',
  cols: 2,
  padding: 0.2,
  nodes: [
    {
      id: 'encrypt',
      label: 'Encrypt the data',
      pattern: 'service',
      sub: 'useless if stolen · at rest & in transit',
      cols: 2,
      children: [
        { id: 'kms', label: 'KMS', pattern: 'service', icon: 'kms', sub: 'keys · at rest', variant: 'tile' },
        { id: 'acm', label: 'ACM', pattern: 'service', icon: 'acm', sub: 'TLS certs', variant: 'tile' },
        { id: 'sm', label: 'Secrets Mgr', pattern: 'service', icon: 'secretsmanager', sub: 'rotating secrets', variant: 'tile' },
        { id: 'ps', label: 'Param Store', pattern: 'service', icon: 'tag', sub: 'config & secrets', variant: 'tile' },
      ],
    },
    {
      id: 'guard',
      label: 'Guard the perimeter',
      pattern: 'network',
      sub: 'block bad traffic at the edge',
      cols: 2,
      children: [
        { id: 'shield', label: 'Shield', pattern: 'network', icon: 'shield', sub: 'DDoS', variant: 'tile' },
        { id: 'waf', label: 'WAF', pattern: 'network', icon: 'waf', sub: 'bad requests', variant: 'tile' },
        { id: 'fmgr', label: 'Firewall Mgr', pattern: 'network', icon: 'firewallmanager', sub: 'org-wide policy', variant: 'tile' },
      ],
    },
    {
      id: 'detect',
      label: 'Detect threats',
      pattern: 'external',
      sub: 'catch what slips through',
      cols: 2,
      children: [
        { id: 'gd', label: 'GuardDuty', pattern: 'external', icon: 'guardduty', sub: 'threats', variant: 'tile' },
        { id: 'insp', label: 'Inspector', pattern: 'external', icon: 'inspector', sub: 'vulns', variant: 'tile' },
        { id: 'macie', label: 'Macie', pattern: 'external', icon: 'macie', sub: 'PII in S3', variant: 'tile' },
        { id: 'hub', label: 'Security Hub', pattern: 'external', icon: 'securityhub', sub: 'aggregate', variant: 'tile' },
      ],
    },
    {
      id: 'identity',
      label: 'Identity & access',
      pattern: 'user',
      sub: 'who may act — the innermost gate',
      cols: 2,
      children: [
        { id: 'iam', label: 'IAM', pattern: 'user', icon: 'iam', sub: 'workforce (Course 2)', variant: 'tile' },
        { id: 'cognito', label: 'Cognito', pattern: 'user', icon: 'cognito', sub: 'customers', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
