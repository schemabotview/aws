import type { Scene } from '../../render-engine'

// §6 auto-scaling — the "elastic" in EC2, made real, and the payoff of §5's frame. An Auto Scaling
// Group (ASG) automatically ADDS and REMOVES instances to match demand: you set min / desired / max
// and a launch template; it scales out on a signal (CPU > 70%…), scales in when load drops, spreads
// instances across AZs, and replaces any that fail a health check (self-healing). Reuses the §5
// multi-az frame exactly — Users → AWS ⊃ Region ⊃ {Load balancer, AZ fleet} — but now the AZ fleet is
// wrapped in the ASG, which carries the min/desired/max. The pairing IS elasticity: the ASG changes
// HOW MANY instances exist; the ELB spreads traffic across whoever is currently healthy.
export const autoScaling: Scene = {
  id: 'auto-scaling',
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
          sub: 'your auto-scaling fleet',
          children: [
            { id: 'lb', label: 'Load balancer', pattern: 'network', icon: 'elb', sub: 'spreads traffic · health checks', variant: 'tile' },
            {
              id: 'asg',
              label: 'Auto Scaling Group',
              pattern: 'service',
              icon: 'gauge',
              sub: 'min 2 · desired 3 · max 6',
              cols: 3,
              children: [
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
            },
          ],
          // The load balancer fans across the AZ instances the ASG manages (edges land on the
          // deep-nested AZ boxes; layout maps them to the ASG sibling for positioning).
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
