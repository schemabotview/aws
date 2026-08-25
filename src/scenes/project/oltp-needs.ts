import type { Scene } from '../../render-engine'

// oltp-needs — §2 (Phase 1 · Requirements). The transactional core stated as REQUIREMENTS, not AWS
// services (no service tiles here — that's Phase 2). Two bands: THE WORKLOAD (the small, frequent,
// precise operations a bank's core does) and WHAT IT DEMANDS (the non-negotiable properties that
// workload forces — correctness/ACID, strong consistency, low latency, durability, always-on). This is
// the OLTP half of the "two data worlds" framing; §3 olap-needs is its mirror.
export const oltpNeeds: Scene = {
  id: 'oltp-needs',
  padding: 0.16,
  nodes: [
    {
      id: 'workload',
      label: 'The transactional core (OLTP)',
      pattern: 'service',
      icon: 'scale',
      sub: 'small, frequent, precise operations',
      cols: 2,
      children: [
        { id: 'ledger', label: 'Accounts & ledger', pattern: 'service', icon: 'scroll', sub: 'balance to the penny', variant: 'tile' },
        { id: 'payments', label: 'Payments & transfers', pattern: 'service', icon: 'receipt', sub: 'move money between accounts', variant: 'tile' },
        { id: 'balance', label: 'Balance checks', pattern: 'service', icon: 'gauge', sub: 'read your own latest state', variant: 'tile' },
        { id: 'rate', label: 'High transaction rate', pattern: 'service', icon: 'repeat', sub: 'many small reads & writes', variant: 'tile' },
      ],
    },
    {
      id: 'demands',
      label: 'What it demands',
      pattern: 'external',
      icon: 'circlecheck',
      sub: 'the properties the money core forces',
      cols: 3,
      children: [
        { id: 'acid', label: 'Correctness (ACID)', pattern: 'external', icon: 'circlecheck', sub: 'atomic · never lose a cent', variant: 'tile' },
        { id: 'consistency', label: 'Strong consistency', pattern: 'external', icon: 'shieldcheck', sub: 'no stale balance, ever', variant: 'tile' },
        { id: 'latency', label: 'Low latency', pattern: 'external', icon: 'clock', sub: 'instant, sub-second', variant: 'tile' },
        { id: 'durability', label: 'Durability', pattern: 'external', icon: 'lock', sub: 'committed = permanent', variant: 'tile' },
        { id: 'availability', label: 'Always-on 24/7', pattern: 'external', icon: 'globe', sub: 'survive failures', variant: 'tile' },
        { id: 'audit', label: 'Auditable', pattern: 'external', icon: 'scroll', sub: 'every change traceable', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
