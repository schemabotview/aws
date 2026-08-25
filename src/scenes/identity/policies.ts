import type { Scene } from '../../render-engine'

// §3 policies — how the verdict is decided. A request is checked against every policy that applies,
// and IAM runs a precise, ORDERED logic that's worth memorising: (1) an explicit Deny anywhere wins,
// full stop; (2) else an explicit Allow that matches → allowed; (3) else the default implicit deny —
// nothing is permitted until something grants it. Modelled as a flow: Request → the 3-step Evaluation
// box (its rules flow top→bottom, so precedence reads as order) → one Verdict. Colour carries the
// meaning: Deny in orange (stop), Allow in green (go), default deny in neutral grey.
export const policies: Scene = {
  id: 'policies',
  padding: 0.28,
  nodes: [
    { id: 'request', label: 'Request', pattern: 'network', icon: 'braces', sub: 'principal · action · resource' },
    {
      id: 'eval',
      label: 'Evaluation — deny always wins',
      pattern: 'group',
      icon: 'scroll',
      sub: 'every applicable policy, checked in order',
      flow: 'LR',
      children: [
        { id: 'r1', label: '1 · Explicit Deny?', pattern: 'service', icon: 'ban', sub: 'any Deny → denied, full stop', variant: 'tile' },
        { id: 'r2', label: '2 · Explicit Allow?', pattern: 'storage', icon: 'circlecheck', sub: 'a match → allowed', variant: 'tile' },
        { id: 'r3', label: '3 · Otherwise', pattern: 'external', icon: 'circleslash', sub: 'implicit deny — start closed', variant: 'tile' },
      ],
      edges: [
        { source: 'r1', target: 'r2' },
        { source: 'r2', target: 'r3' },
      ],
    },
    { id: 'verdict', label: 'Allow / Deny', pattern: 'external', sub: 'one verdict returned' },
  ],
  edges: [
    { source: 'request', target: 'eval' },
    { source: 'eval', target: 'verdict' },
  ],
}
