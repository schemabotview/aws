import type { Scene } from '../../render-engine'

// §5 availability-zones — the full containment stack in one frame: You → AWS Cloud ⊃ Region ⊃ AZs ⊃
// data centers. Completes the §4→§5 rhyme by zooming all the way in: §4 was AWS ⊃ Regions, here the
// chosen Region opens into its AZs, and each AZ is a subtle 'group' box holding one-or-more DC tiles
// (ap-south-1b shows two → "one (or more) isolated data centers"). Four nested levels + the actor;
// blue Region echoes §4's region tiles, orange DC tiles = discrete data centers.
export const regionAzs: Scene = {
  id: 'region-azs',
  title: 'Availability Zones',
  nodes: [
    { id: 'you', label: 'Your resources', pattern: 'user', sub: 'spread across AZs' },
    {
      id: 'aws',
      label: 'AWS Cloud',
      pattern: 'external',
      icon: 'awscloud',
      sub: 'global',
      children: [
        {
          id: 'region',
          label: 'Region · ap-south-1',
          pattern: 'network',
          sub: '≥ 2 AZs · isolated, yet nearby',
          cols: 2,
          children: [
            {
              id: 'az-a',
              label: 'ap-south-1a',
              pattern: 'group',
              sub: 'own power & network',
              children: [{ id: 'az-a-dc1', label: 'DC', pattern: 'service', variant: 'tile' }],
            },
            {
              id: 'az-b',
              label: 'ap-south-1b',
              pattern: 'group',
              sub: '1+ data centers',
              cols: 2,
              children: [
                { id: 'az-b-dc1', label: 'DC', pattern: 'service', variant: 'tile' },
                { id: 'az-b-dc2', label: 'DC', pattern: 'service', variant: 'tile' },
              ],
            },
            {
              id: 'az-c',
              label: 'ap-south-1c',
              pattern: 'group',
              sub: 'low-latency fibre',
              children: [{ id: 'az-c-dc1', label: 'DC', pattern: 'service', variant: 'tile' }],
            },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'you', target: 'aws' }],
}
