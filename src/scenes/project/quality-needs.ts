import type { Scene } from '../../render-engine'

// quality-needs — §4 (Phase 1 · Requirements, the finale). The NON-FUNCTIONAL bar, in depth. The brief
// (§1) named four qualities as single tiles; here each opens into the concrete requirements it forces.
// These sit over BOTH data worlds (§2 OLTP + §3 OLAP) at once. Scene-level 2×2 grid of the four quality
// boxes; each grids its sub-requirements. Pure concepts (no AWS services — that's Phase 2 design).
export const qualityNeeds: Scene = {
  id: 'quality-needs',
  cols: 2,
  padding: 0.12,
  nodes: [
    {
      id: 'secure',
      label: 'Secure',
      pattern: 'external',
      icon: 'shieldcheck',
      sub: 'money & personal data — the highest bar',
      cols: 2,
      children: [
        { id: 'encrypt', label: 'Encrypt everything', pattern: 'external', icon: 'lock', sub: 'at rest & in transit', variant: 'tile' },
        { id: 'leastpriv', label: 'Least privilege', pattern: 'external', icon: 'usercheck', sub: 'only what each needs', variant: 'tile' },
        { id: 'secrets', label: 'No hard-coded secrets', pattern: 'external', icon: 'key', sub: 'managed & rotated', variant: 'tile' },
        { id: 'perimeter', label: 'Guard the perimeter', pattern: 'external', icon: 'globe', sub: 'block bad traffic', variant: 'tile' },
      ],
    },
    {
      id: 'compliant',
      label: 'Compliant',
      pattern: 'service',
      icon: 'scroll',
      sub: 'auditable to regulation',
      cols: 2,
      children: [
        { id: 'audit', label: 'Audit every action', pattern: 'service', icon: 'scroll', sub: 'who did what, when', variant: 'tile' },
        { id: 'pii', label: 'Protect PII', pattern: 'service', icon: 'scanface', sub: 'find & handle personal data', variant: 'tile' },
        { id: 'immutable', label: 'Immutable logs', pattern: 'service', icon: 'lock', sub: 'evidence can’t be altered', variant: 'tile' },
        { id: 'residency', label: 'Data residency', pattern: 'service', icon: 'globe', sub: 'stay in the approved Region', variant: 'tile' },
      ],
    },
    {
      id: 'availability',
      label: 'Always-on',
      pattern: 'network',
      icon: 'clock',
      sub: 'customers expect 24/7',
      cols: 2,
      children: [
        { id: 'multiaz', label: 'Survive an AZ', pattern: 'network', icon: 'layers', sub: 'no single-zone outage', variant: 'tile' },
        { id: 'dr', label: 'Survive a Region', pattern: 'network', icon: 'globe', sub: 'multi-Region DR', variant: 'tile' },
        { id: 'rtorpo', label: 'RTO / RPO targets', pattern: 'network', icon: 'clock', sub: 'how fast, how much data', variant: 'tile' },
        { id: 'nospof', label: 'No single point of failure', pattern: 'network', icon: 'network', sub: 'redundant everywhere', variant: 'tile' },
      ],
    },
    {
      id: 'scalable',
      label: 'Scalable',
      pattern: 'storage',
      icon: 'gauge',
      sub: 'launch → millions, no rebuild',
      cols: 2,
      children: [
        { id: 'millions', label: 'Scale to millions', pattern: 'storage', icon: 'gauge', sub: 'of customers', variant: 'tile' },
        { id: 'elastic', label: 'Elastic', pattern: 'storage', icon: 'repeat', sub: 'grow & shrink with load', variant: 'tile' },
        { id: 'samedesign', label: 'One design', pattern: 'storage', icon: 'layers', sub: 'same at 10k or 10M', variant: 'tile' },
        { id: 'costscale', label: 'Cost tracks use', pattern: 'storage', icon: 'tag', sub: 'pay for what you run', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
