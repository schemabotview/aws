import type { Scene } from '../../render-engine'

// §4 perimeter — the outward-facing layers that defend the edge before traffic reaches your app.
// Incoming traffic is a mix of real users and attackers, and it runs a gauntlet: AWS Shield absorbs
// volumetric DDoS floods at the network layer (Standard is free & automatic); the WAF then inspects
// each HTTP request and blocks the malicious ones by rule — SQL injection, XSS, bad IPs, rate limits —
// so only clean traffic reaches CloudFront / the ALB / API Gateway. Firewall Manager sits alongside,
// setting and enforcing those WAF/Shield policies centrally across every account. Drawn with Shield and
// Firewall Manager as PEERS feeding the WAF (traffic vs policy) so their edges run parallel without
// crossing, then WAF → app.
export const perimeter: Scene = {
  id: 'perimeter',
  padding: 0.16,
  nodes: [
    { id: 'shield', label: 'Shield', pattern: 'network', icon: 'shield', sub: 'absorbs DDoS floods from the internet (network layer)' },
    { id: 'fmgr', label: 'Firewall Manager', pattern: 'service', icon: 'firewallmanager', sub: 'central WAF/Shield policy · every account' },
    { id: 'waf', label: 'WAF', pattern: 'network', icon: 'waf', sub: 'filter bad requests — SQLi · XSS · bad IPs · rate-limit' },
    { id: 'app', label: 'Your app', pattern: 'service', icon: 'cloudfront', sub: 'CloudFront / ALB / API Gateway — clean traffic only' },
  ],
  // Shield (traffic) and Firewall Manager (policy) both meet at the WAF; only clean traffic goes on.
  edges: [
    { source: 'shield', target: 'waf' },
    { source: 'fmgr', target: 'waf' },
    { source: 'waf', target: 'app' },
  ],
}
