import type { Scene } from '../../render-engine'

// §3 routing — what actually makes a subnet public or private is its ROUTE TABLE (rules: destination
// → target). Every table has a built-in local route (VPC range stays local, so subnets can talk). To
// reach the internet you need a gateway. The Internet Gateway (IGW) is the VPC's door to the internet;
// a subnet is PUBLIC exactly when its table routes 0.0.0.0/0 → IGW. Private subnets omit that route
// (nothing reaches in), but their workloads still need OUTBOUND access — so a NAT Gateway, sitting in
// a public subnet, gives outbound-only internet: private routes 0.0.0.0/0 → NAT → IGW. Drawn bottom→
// top (flow: 'BT') so the internet sits at the TOP and outbound arrows point UP, and the NAT Gateway
// is drawn INSIDE the public subnet (where it truly lives) — which also keeps every edge between
// adjacent layers, so nothing crosses the NAT's row. The PRIVATE path is single-arrowed (outbound-
// only — the NAT's whole point); the PUBLIC subnet's link to the IGW and the gateway↔internet link
// are bidirectional (a public subnet accepts inbound and sends outbound) — double vs single IS the lesson.
export const routing: Scene = {
  id: 'routing',
  flow: 'BT',
  padding: 0.14,
  nodes: [
    { id: 'internet', label: 'Internet', pattern: 'external', icon: 'globe', sub: 'the public internet' },
    { id: 'igw', label: 'Internet Gateway', pattern: 'network', icon: 'cloud', sub: "the VPC's door to the internet" },
    {
      id: 'pub',
      label: 'Public subnet',
      pattern: 'external',
      icon: 'globe',
      sub: 'route 0.0.0.0/0 → IGW',
      cols: 3,
      children: [
        { id: 'alb', label: 'Load balancer', pattern: 'network', icon: 'elb', sub: 'public entry', variant: 'tile' },
        { id: 'nat', label: 'NAT Gateway', pattern: 'network', icon: 'network', sub: 'outbound only', variant: 'tile' },
        { id: 'bastion', label: 'Bastion', pattern: 'user', icon: 'terminal', sub: 'admin SSH', variant: 'tile' },
      ],
    },
    {
      id: 'priv',
      label: 'Private subnet',
      pattern: 'service',
      icon: 'shieldcheck',
      sub: 'route 0.0.0.0/0 → NAT',
      cols: 3,
      children: [
        { id: 'db', label: 'Database', pattern: 'storage', icon: 'rds', sub: 'RDS', variant: 'tile' },
        { id: 'app', label: 'App', pattern: 'service', icon: 'ec2', sub: 'EC2', variant: 'tile' },
        { id: 'cache', label: 'Cache', pattern: 'network', icon: 'elasticache', sub: 'ElastiCache', variant: 'tile' },
      ],
    },
  ],
  edges: [
    // Private app reaches out via the NAT, which forwards to the IGW (single arrows = outbound-only);
    // the public load balancer is two-way through the IGW. So the full private chain app → nat → igw →
    // internet reads, and the NAT + LB edges converge on the IGW.
    { source: 'app', target: 'nat' },
    { source: 'nat', target: 'igw' },
    { source: 'alb', target: 'igw', bidirectional: true },
    { source: 'igw', target: 'internet', bidirectional: true },
  ],
}
