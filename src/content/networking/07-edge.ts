import type { Section } from '../types'

export const edge: Section = {
  id: 'edge',
  title: 'The edge — DNS & CDN',
  scene: 'edge',
  slide: `## The edge — DNS & CDN

Networking's last piece faces outward: getting the public internet to your app **fast, from anywhere** — via AWS's hundreds of **edge locations**.

### Route 53 — DNS
- Resolves your **domain name** to an address — the phonebook of the internet
- More than lookup: **latency / geo routing** (send users to the nearest deployment) and **health-check failover** (route away from a dead region)

### CloudFront — CDN
- **Caches your content at an edge near the user** — Tokyo users served from a Tokyo edge, milliseconds away
- Fetches from your **origin** (load balancer or S3) only on a **cache miss**, then serves everyone nearby from cache — cuts latency, offloads servers

### Also: Global Accelerator
- For **non-cacheable** traffic (gaming, APIs) — anycast IPs onto AWS's **private backbone** for the fastest path (improves the *route*, not caching)`,
  narration:
    "We have built the network and connected it outward; the last piece of networking faces the other way — how you let the whole public internet reach your application quickly, from anywhere on the planet. This is the edge, and it runs on AWS's edge locations: hundreds of points of presence scattered across the globe, far more numerous than the Regions, and much closer to your users. Two services define it. The first is Route 53, which is DNS — the phonebook of the internet. When a user types your domain name, Route 53 is what translates that name into an address their browser can actually connect to. But it is much more than a lookup table. Route 53 can make intelligent routing decisions: it can send European users to your European deployment and Asian users to your Asian one using latency or geolocation routing, and it can run health checks and automatically route traffic away from a failed Region to a healthy one. It is DNS turned into a global traffic-management tool. The second service is CloudFront, which is a CDN, a content delivery network. Without it, every user in the world fetches from your one Region, which is painfully slow for anyone far away. CloudFront fixes this by caching copies of your content at edge locations close to your users. A visitor in Tokyo gets your images and pages from a Tokyo edge location just milliseconds away, instead of reaching across an ocean to your Region. When the content is not yet cached at that edge — a cache miss — the edge fetches it once from your origin, which is your load balancer or an S3 bucket, and then serves everyone else nearby from the cache. The result is dramatically lower latency for users and far less load on your own servers. So trace the path: a user requests your site, Route 53 resolves the name, usually to a CloudFront distribution, CloudFront serves the content from the nearest edge, and only on a miss does it reach back to your origin in the Region. One more service worth naming briefly is Global Accelerator. Where CloudFront caches your content, Global Accelerator improves the network path itself — it gives you stable anycast IP addresses and pulls user traffic onto AWS's private global backbone at the nearest edge, then carries it across that fast internal network to your application. It is for traffic you cannot cache, like online gaming or APIs, where what you want is the fastest, most reliable route rather than a cache. And that completes networking. You can now stand up a private network, carve and route it, secure it with firewalls, trace a request through it, connect it to other networks, and put it in front of the entire world at the edge. Compute runs your code, storage keeps your data, and networking wires it all together and delivers it. The next thing your application needs is a proper place to store and query structured data — that is databases.",
}
