import type { Scene } from '../../render-engine'

// §2 subnets — an empty VPC is one big address space; you divide it into SUBNETS. A subnet is a slice
// of the VPC's CIDR, and the defining rule is that each subnet lives in exactly ONE Availability Zone
// — so subnets are how the network maps onto the physical zones. For HA you put subnets in ≥ 2 AZs.
// The second split is PUBLIC vs PRIVATE: public subnets have a path to the internet (load balancers,
// bastions live here); private subnets do not (app servers, databases live here, shielded). Drawn as
// VPC (cols:2 → two AZ columns), each AZ holding a public subnet over a private subnet — the canonical
// VPC picture. Amber = public/internet-facing; blue = private/shielded.
export const subnets: Scene = {
  id: 'subnets',
  padding: 0.14,
  nodes: [
    {
      id: 'vpc',
      label: 'Your VPC · 10.0.0.0/16',
      pattern: 'group',
      icon: 'vpc',
      sub: 'carved into subnets — one per AZ',
      cols: 2,
      children: [
        {
          id: 'az-a',
          label: 'AZ a',
          pattern: 'network',
          children: [
            { id: 'pub-a', label: 'Public', pattern: 'external', icon: 'globe', sub: '10.0.1.0/24', variant: 'tile' },
            { id: 'priv-a', label: 'Private', pattern: 'service', icon: 'shieldcheck', sub: '10.0.2.0/24', variant: 'tile' },
          ],
        },
        {
          id: 'az-b',
          label: 'AZ b',
          pattern: 'network',
          children: [
            { id: 'pub-b', label: 'Public', pattern: 'external', icon: 'globe', sub: '10.0.3.0/24', variant: 'tile' },
            { id: 'priv-b', label: 'Private', pattern: 'service', icon: 'shieldcheck', sub: '10.0.4.0/24', variant: 'tile' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
