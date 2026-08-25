import type { Scene } from '../../render-engine'

// §6 high-availability — the RECIPE using §5's AZs: run copies of your service in ≥ 2 AZs behind a
// load balancer, so one AZ failing doesn't take you down. The load balancer is a REGIONAL AWS service
// — it lives inside the Region and fans across the AZs — so it sits inside Region ⊃ AWS Cloud, in
// front of the three AZ boxes. Only Users are external; their traffic enters AWS at the LB (that edge
// crosses the AWS/Region border on purpose). Combines flow (LB → AZs) with containment (AWS/Region).
export const multiAz: Scene = {
  id: 'multi-az',
  title: 'Multi-AZ',
  nodes: [
    { id: 'users', label: 'Users', pattern: 'user', sub: 'your traffic' },
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
          sub: 'your service, in 3 AZs',
          children: [
            { id: 'lb', label: 'Load Balancer', pattern: 'network', icon: 'elb', sub: 'spreads traffic', variant: 'tile' },
            {
              id: 'az-a',
              label: 'AZ a',
              pattern: 'group',
              children: [{ id: 'app-a', label: 'App', pattern: 'service', icon: 'ec2', variant: 'tile' }],
            },
            {
              id: 'az-b',
              label: 'AZ b',
              pattern: 'group',
              children: [{ id: 'app-b', label: 'App', pattern: 'service', icon: 'ec2', variant: 'tile' }],
            },
            {
              id: 'az-c',
              label: 'AZ c',
              pattern: 'group',
              children: [{ id: 'app-c', label: 'App', pattern: 'service', icon: 'ec2', variant: 'tile' }],
            },
          ],
          // LB fans across the three AZs (flow inside the Region).
          edges: [
            { source: 'lb', target: 'az-a' },
            { source: 'lb', target: 'az-b' },
            { source: 'lb', target: 'az-c' },
          ],
        },
      ],
    },
  ],
  // External users reach in to the load balancer (crosses the AWS/Region boundary).
  edges: [{ source: 'users', target: 'lb' }],
}
