import type { Scene } from '../../render-engine'

// §8 choosing-networking — the finale. Networking has no single spectrum; it's a handful of decisions
// you make designing a network, so the recap is a 2×2 board of the key choices (the exam-judgment
// ones): where to place a resource (public vs private), which firewall (SG vs NACL), how to connect
// VPCs (Peering vs Transit Gateway), and how to reach out (endpoints/PrivateLink vs VPN/Direct
// Connect). Each card poses the question; the sub is the rule of thumb. Mirrors compute §8 / storage §7.
export const choosingNetworking: Scene = {
  id: 'choosing-networking',
  cols: 2,
  padding: 0.2,
  nodes: [
    { id: 'placement', label: 'Public or private?', pattern: 'external', icon: 'network', sub: 'public: LB & bastion · private: the rest' },
    { id: 'firewall', label: 'SG or NACL?', pattern: 'service', icon: 'shieldcheck', sub: 'SG: instance, daily · NACL: subnet, coarse' },
    { id: 'vpc-link', label: 'Peering or Transit GW?', pattern: 'network', icon: 'vpc', sub: 'Peering: 1:1 · Transit Gateway: many (hub)' },
    { id: 'reach', label: 'Reach out how?', pattern: 'user', icon: 'building', sub: 'Endpoints: AWS svcs · VPN/DX: your data center' },
  ],
  edges: [],
}
