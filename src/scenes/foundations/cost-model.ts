import type { Scene } from '../../render-engine'

// §9 pay-as-you-go — the last frame over the whole map. A vertical narrative matching the slide:
// what you pay for (metered per unit) → The bill → how you keep it in check. The bill node carries
// the duality (off = $0, the superpower; idle-but-running still bills, the trap); the cost controls
// (tag · budgets · alarms) are the engineering skill that tames it.
export const costModel: Scene = {
  id: 'cost-model',
  title: 'What it costs',
  padding: 0.28,
  nodes: [
    {
      id: 'meter',
      label: 'Pay-as-you-go',
      pattern: 'network',
      sub: 'no upfront · pay per use',
      cols: 3,
      children: [
        { id: 'compute', label: 'Compute', pattern: 'service', icon: 'cpu', sub: 'per second', variant: 'tile' },
        { id: 'storage', label: 'Storage', pattern: 'storage', icon: 'database', sub: 'per GB', variant: 'tile' },
        { id: 'requests', label: 'Requests', pattern: 'network', icon: 'globe', sub: 'per request', variant: 'tile' },
      ],
    },
    { id: 'bill', label: 'The bill', pattern: 'service', icon: 'receipt', sub: 'off = $0 · idle still bills' },
    {
      id: 'control',
      label: 'Cost controls',
      pattern: 'user',
      sub: 'an engineering skill',
      cols: 3,
      children: [
        { id: 'tags', label: 'Tags', pattern: 'user', icon: 'tag', sub: 'what is it?', variant: 'tile' },
        { id: 'budgets', label: 'Budgets', pattern: 'user', icon: 'gauge', sub: 'a ceiling', variant: 'tile' },
        { id: 'alarms', label: 'Billing alarms', pattern: 'user', icon: 'bell', sub: 'wake you up', variant: 'tile' },
      ],
    },
  ],
  edges: [
    { source: 'meter', target: 'bill' },
    { source: 'bill', target: 'control' },
  ],
}
