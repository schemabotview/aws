import type { Scene } from '../../render-engine'

// §7 edge — the opposite direction from §6: letting the whole public internet reach you FAST, from
// anywhere, via AWS's hundreds of edge locations. Two services. Route 53 = DNS (the phonebook):
// resolves your domain, and can route smartly (latency/geo, health-check failover). CloudFront = CDN:
// caches your content at an edge near the user, fetching from your origin only on a miss — cutting
// latency and offloading servers. Drawn as the edge path a request takes: user → Route 53 (resolve) →
// CloudFront (cached edge) → origin (your app from §5). Global Accelerator (anycast backbone for
// non-cacheable traffic) rides in the slide. Grouped to teach the key contrast: Route 53 + CloudFront
// are GLOBAL / edge services (outside any Region, near the user), while the Origin is back in YOUR
// Region — so the cache-miss arrow visibly reaches from the global edge into your Region. (No AZ box:
// edge services don't live in a Region/AZ; only the origin does.)
export const edge: Scene = {
  id: 'edge',
  padding: 0.14,
  nodes: [
    { id: 'user', label: 'User', pattern: 'user', icon: 'globe', sub: 'anywhere on Earth' },
    {
      id: 'global-edge',
      label: 'Global edge',
      pattern: 'external',
      icon: 'globe',
      cols: 3,
      children: [
        { id: 'dns', label: 'Route 53', pattern: 'network', icon: 'route53', sub: 'DNS', variant: 'tile' },
        { id: 'cdn', label: 'CloudFront', pattern: 'network', icon: 'cloudfront', sub: 'CDN edge', variant: 'tile' },
        { id: 'ga', label: 'Global Accel.', pattern: 'network', icon: 'gauge', sub: 'anycast', variant: 'tile' },
      ],
    },
    {
      id: 'region',
      label: 'Your Region',
      pattern: 'network',
      icon: 'vpc',
      cols: 3,
      children: [
        { id: 'app', label: 'App server', pattern: 'service', icon: 'ec2', sub: 'EC2', variant: 'tile' },
        { id: 'origin', label: 'Origin · LB', pattern: 'network', icon: 'elb', sub: 'on a cache miss', variant: 'tile' },
        { id: 'db', label: 'Database', pattern: 'storage', icon: 'rds', sub: 'RDS', variant: 'tile' },
      ],
    },
  ],
  edges: [
    // Content spine down the centre: user → CloudFront (served from the nearest edge) → the Origin
    // (your load balancer, §5) on a cache miss. Route 53 & Global Accelerator are edge peers; the app
    // & database are the origin's neighbours in your Region.
    { source: 'user', target: 'cdn' },
    { source: 'cdn', target: 'origin' },
  ],
}
