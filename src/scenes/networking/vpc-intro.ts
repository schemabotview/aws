import type { Scene } from '../../render-engine'

// §1 what-is-networking — the frame for Course 5. With ground, identity, compute and storage in
// place, we need the wiring that connects everything. It starts with the VPC (Virtual Private Cloud):
// your own private, isolated, software-defined network inside a single Region. You give it an IP range
// in CIDR notation (10.0.0.0/16 ≈ 65k private addresses), and everything network-attached — EC2, RDS,
// load balancers — lives inside it with a private IP. It's isolated by default: nothing in or out
// until you allow it. Drawn as nesting: AWS ⊃ Region ⊃ Your VPC ⊃ {the resources that live inside}.
export const vpcIntro: Scene = {
  id: 'vpc-intro',
  padding: 0.16,
  nodes: [
    {
      id: 'aws',
      label: 'AWS Cloud',
      pattern: 'external',
      icon: 'awscloud',
      sub: 'global',
      children: [
        {
          id: 'region',
          label: 'Region',
          pattern: 'network',
          sub: 'your chosen Region',
          children: [
            {
              id: 'vpc',
              label: 'Your VPC',
              pattern: 'group',
              icon: 'vpc',
              sub: '10.0.0.0/16 · isolated private network',
              cols: 2,
              children: [
                { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'compute', variant: 'tile' },
                { id: 'rds', label: 'RDS', pattern: 'storage', icon: 'rds', sub: 'database', variant: 'tile' },
              ],
            },
          ],
        },
      ],
    },
  ],
  edges: [],
}
