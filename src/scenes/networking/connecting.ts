import type { Scene } from '../../render-engine'

// §6 connecting — everything so far lived inside one VPC; real systems reach beyond it. The organizing
// question is always WHAT are you connecting to, and each has AWS options. Another VPC: VPC Peering
// (direct, private, 1:1, non-transitive) or a Transit Gateway (a hub every VPC connects to once).
// Your own data center (hybrid): Site-to-Site VPN (encrypted tunnel over the internet, cheap) or
// Direct Connect (a dedicated private fibre, bypasses the internet). AWS services, privately: VPC
// Endpoints / PrivateLink (reach S3, etc. over private links that never touch the internet). Drawn as
// a fan-out from Your VPC to the three destinations, each carrying its method in the sub.
export const connecting: Scene = {
  id: 'vpc-connecting',
  padding: 0.16,
  nodes: [
    { id: 'vpc', label: 'Your VPC', pattern: 'network', icon: 'vpc', sub: 'reaching beyond one network' },
    { id: 'other-vpc', label: 'Another VPC', pattern: 'network', icon: 'vpc', sub: 'Peering (1:1) · Transit Gateway (hub)' },
    { id: 'onprem', label: 'On-premises', pattern: 'external', icon: 'building', sub: 'VPN (over internet) · Direct Connect (private)' },
    { id: 'services', label: 'AWS services', pattern: 'service', icon: 's3', sub: 'VPC Endpoints / PrivateLink — no internet' },
  ],
  edges: [
    { source: 'vpc', target: 'other-vpc' },
    { source: 'vpc', target: 'onprem' },
    { source: 'vpc', target: 'services' },
  ],
}
