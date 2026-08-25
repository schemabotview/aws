import type { Scene } from '../../render-engine'

// §2 spectrum — the mental model that makes AWS compute click. Every choice sits on ONE axis: how
// much you manage vs how much AWS does. Framed as a LADDER (rhymes with the deck's "climb the
// spectrum" / service-ladder language): EC2 is the foundation at the BASE — a whole server you own,
// max control, max work — and you climb UP through containers (package once, portable) to Lambda at
// the top (just a function, no servers to see, max convenience — Course 7). Climbing sheds
// operational burden and trades away low-level control; it maps onto Course-1 service models (EC2 ≈
// IaaS, Lambda ≈ serverless). Drawn edgeless so the engine stacks the rungs top→bottom (no arrows —
// it's a static ladder of abstraction, not a directional flow); children are ordered top→base.
export const computeSpectrum: Scene = {
  id: 'compute-spectrum',
  padding: 0.2,
  nodes: [
    {
      id: 'spectrum',
      label: 'The compute spectrum',
      pattern: 'group',
      icon: 'gauge',
      sub: 'climb up for convenience',
      children: [
        { id: 'lambda', label: 'Lambda', pattern: 'external', icon: 'lambda', sub: 'just a function · max convenience · Course 7' },
        { id: 'containers', label: 'Containers', pattern: 'network', icon: 'ecs', sub: 'package once · portable' },
        { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'a whole server · the base · max control' },
      ],
    },
  ],
  edges: [],
}
