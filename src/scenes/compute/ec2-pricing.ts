import type { Scene } from '../../render-engine'

// §4 ec2-pricing — the same instance can cost wildly different amounts depending on HOW you buy it,
// and that is one of the highest-leverage cost skills on AWS. Four ways to pay: On-Demand (per
// second, no commitment, flexible & priciest — spiky work); Spot (AWS's spare capacity, up to ~90%
// off, but reclaimable on 2-min notice — interruptible work); Reserved (commit to a type 1–3 yr for a
// big discount — steady baseline); Savings Plans (commit $/hour 1–3 yr — same discount, more
// flexible). Drawn as a scene-level 2×2 grid (rhymes with foundations §1) — four peer options, no
// flow. Colour-codes the tradeoff: teal = flexible, amber = cheap-but-volatile, blue = committed.
export const ec2Pricing: Scene = {
  id: 'ec2-pricing',
  cols: 2,
  padding: 0.2,
  nodes: [
    { id: 'ondemand', label: 'On-Demand', pattern: 'service', icon: 'gauge', sub: 'per second · no commit · priciest' },
    { id: 'spot', label: 'Spot', pattern: 'external', icon: 'circleslash', sub: '~90% off · reclaimed on 2-min notice' },
    { id: 'reserved', label: 'Reserved', pattern: 'network', icon: 'tag', sub: 'commit 1–3 yr · steady baseline' },
    { id: 'savings', label: 'Savings Plans', pattern: 'network', icon: 'receipt', sub: 'commit $/hr · flexible discount' },
  ],
  edges: [],
}
