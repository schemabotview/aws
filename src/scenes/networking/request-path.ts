import type { Scene } from '../../render-engine'

// §5 request-path — the capstone: everything assembles into the journey of one user request. A user
// on the internet → in through the Internet Gateway → the Application Load Balancer in a PUBLIC subnet
// (the only tier with a foot in public) → an App server (EC2) in a PRIVATE subnet → the Database
// (RDS), deeper still in private. Drawn top→bottom (inbound) with the app tiers wrapped in their
// SUBNET boxes — so the public/private exposure gradient is visible, not just stated: the LB sits in
// the public subnet, the app + database sit in the private subnet. The classic 3-tier web path (the
// proper version of the original seed `vpc-basics`). Subnet boxes carry no sub (keeps headers clean).
export const requestPath: Scene = {
  id: 'vpc-request-path',
  padding: 0.14,
  nodes: [
    { id: 'user', label: 'User', pattern: 'user', icon: 'globe', sub: 'a request from the internet' },
    { id: 'igw', label: 'Internet Gateway', pattern: 'network', icon: 'cloud', sub: 'enters the VPC' },
    {
      id: 'pub',
      label: 'Public subnet',
      pattern: 'external',
      icon: 'globe',
      cols: 3,
      children: [
        { id: 'nat', label: 'NAT Gateway', pattern: 'network', icon: 'network', sub: 'outbound', variant: 'tile' },
        { id: 'alb', label: 'Load balancer', pattern: 'network', icon: 'elb', sub: 'entry', variant: 'tile' },
        { id: 'bastion', label: 'Bastion', pattern: 'user', icon: 'terminal', sub: 'admin SSH', variant: 'tile' },
      ],
    },
    {
      id: 'priv',
      label: 'Private subnet',
      pattern: 'service',
      icon: 'shieldcheck',
      // The app tier sits above its data tier: the App server fans DOWN to Cache + Database (internal
      // edges → the longest-path layout stacks app over the two data tiles, with full-length arrows).
      children: [
        { id: 'app', label: 'App server', pattern: 'service', icon: 'ec2', sub: 'EC2', variant: 'tile' },
        { id: 'cache', label: 'Cache', pattern: 'network', icon: 'elasticache', sub: 'ElastiCache', variant: 'tile' },
        { id: 'db', label: 'Database', pattern: 'storage', icon: 'rds', sub: 'RDS', variant: 'tile' },
      ],
      edges: [
        { source: 'app', target: 'cache' },
        { source: 'app', target: 'db' },
      ],
    },
  ],
  edges: [
    // The request spine runs straight down the centre: user → igw → alb → app; inside the private
    // subnet the app then fans to its data tier (above). NAT & bastion are public-subnet residents.
    { source: 'user', target: 'igw' },
    { source: 'igw', target: 'alb' },
    { source: 'alb', target: 'app' },
  ],
}
