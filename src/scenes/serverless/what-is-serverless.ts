import type { Scene } from '../../render-engine'

// §1 what-is-serverless — the frame for Course 7. Compute (Course 3) put your code on servers you size
// and scale; serverless removes the server from view entirely. You write a function; AWS provides the
// runtime, the scaling, the availability, the network — and bills only for the compute your code
// actually uses, nothing while it sits idle. AWS Lambda is the canonical serverless compute. Drawn as
// the deliberate rhyme with databases §1 (You → RDS): You → Lambda, with the things AWS now owns as a
// 2×2 tile grid — no servers, automatic 0→N scaling, pay-per-use, built-in HA. The event-driven
// mechanic (event → handler → response) is held back for §2–3; this section is just the frame.
export const whatIsServerless: Scene = {
  id: 'what-is-serverless',
  padding: 0.18,
  nodes: [
    { id: 'you', label: 'You', pattern: 'user', icon: 'code', sub: 'your function — the part that matters' },
    {
      id: 'lambda',
      label: 'AWS Lambda',
      pattern: 'service',
      icon: 'lambda',
      sub: 'you write a function — AWS runs everything else',
      cols: 2,
      children: [
        { id: 'noservers', label: 'No servers', pattern: 'service', icon: 'cloud', variant: 'tile' },
        { id: 'scale', label: 'Auto-scale 0→N', pattern: 'service', icon: 'gauge', variant: 'tile' },
        { id: 'pay', label: 'Pay per use', pattern: 'service', icon: 'receipt', variant: 'tile' },
        { id: 'ha', label: 'Built-in HA', pattern: 'service', icon: 'shieldcheck', variant: 'tile' },
      ],
    },
  ],
  edges: [{ source: 'you', target: 'lambda' }],
}
