import type { Scene } from '../../render-engine'

// §5 load-balancing — a single server is a single point of failure AND a capacity ceiling. The fix
// starts with Elastic Load Balancing: users hit ONE public address (the ELB); it spreads each request
// across a fleet of identical instances, health-checks them and routes around any that go unhealthy,
// and spans MULTIPLE AZs — the Course-1 Multi-AZ idea made concrete. Mirrors foundations §6 multi-az:
// the ELB is a REGIONAL service, so it lives inside Region ⊃ AWS Cloud, fanning across the AZ boxes;
// only Users are external, their traffic entering AWS at the load balancer. §6 auto-scaling reuses
// this exact frame, adding the ASG that changes HOW MANY instances sit in those AZs.
export const loadBalancing: Scene = {
  id: 'load-balancing',
  padding: 0.14,
  nodes: [
    { id: 'users', label: 'Users', pattern: 'user', icon: 'globe', sub: 'one public address' },
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
          sub: 'your fleet, across AZs',
          children: [
            { id: 'lb', label: 'Load balancer', pattern: 'network', icon: 'elb', sub: 'spreads traffic · health checks', variant: 'tile' },
            {
              id: 'az-a',
              label: 'AZ a',
              pattern: 'group',
              children: [{ id: 'app-a', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' }],
            },
            {
              id: 'az-b',
              label: 'AZ b',
              pattern: 'group',
              children: [{ id: 'app-b', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' }],
            },
            {
              id: 'az-c',
              label: 'AZ c',
              pattern: 'group',
              children: [{ id: 'app-c', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' }],
            },
          ],
          // The load balancer fans across the three AZs (flow inside the Region).
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
