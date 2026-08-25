import type { Scene } from '../../render-engine'

// §4 regions — the global footprint. Rhymes with §1 (You → AWS Cloud container), but the box now
// holds a grid of REGION tiles instead of service categories: AWS Cloud is a world of Regions and
// you pick ONE for your resources. The chosen region (ap-south-1) is tinted 'service' (orange) so it
// reads as "yours" — and it's the one §5 zooms into to reveal its Availability Zones (the §4→§5
// progressive rhyme: AWS ⊃ Regions, then Region ⊃ AZs).
export const regions: Scene = {
  id: 'regions',
  title: 'Regions',
  // Sparse scene (one actor + a 6-tile box) — extra padding so its tiles don't read oversized next to
  // the denser scenes in the deck.
  padding: 0.28,
  nodes: [
    { id: 'you', label: 'Your resources', pattern: 'user', sub: 'you pick one Region' },
    {
      id: 'aws',
      label: 'AWS Cloud',
      pattern: 'external',
      icon: 'awscloud',
      sub: 'global · dozens of Regions',
      cols: 3,
      children: [
        { id: 'us-east-1', label: 'us-east-1', pattern: 'network', sub: 'N. Virginia', variant: 'tile' },
        { id: 'us-west-2', label: 'us-west-2', pattern: 'network', sub: 'Oregon', variant: 'tile' },
        { id: 'eu-west-1', label: 'eu-west-1', pattern: 'network', sub: 'Ireland', variant: 'tile' },
        { id: 'eu-central-1', label: 'eu-central-1', pattern: 'network', sub: 'Frankfurt', variant: 'tile' },
        { id: 'ap-south-1', label: 'ap-south-1', pattern: 'service', sub: '← your Region', variant: 'tile' },
        { id: 'ap-southeast-1', label: 'ap-southeast-1', pattern: 'network', sub: 'Singapore', variant: 'tile' },
      ],
    },
  ],
  edges: [{ source: 'you', target: 'aws' }],
}
