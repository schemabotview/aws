import type { Scene } from '../../render-engine'

// §4 security-groups-nacls — routing decides where traffic may GO; firewalls decide what may PASS. A
// VPC gives you two, at two levels, and the difference is a classic exam question. NACL = subnet-level
// firewall: STATELESS (write both directions), supports ALLOW + DENY (numbered, first match) — a
// coarse guardrail at the subnet edge. Security Group = instance-level firewall: STATEFUL (return
// traffic auto-allowed), ALLOW-only — your everyday tool. Drawn as the path an INBOUND packet takes:
// it clears the subnet's NACL first, then the instance's SG, and only if both allow does it reach the
// instance. A checkpoint flow (full-width cards) rather than nested boxes, which would hug the child
// and overflow their headers. The SG-vs-NACL comparison table lives in the slide.
export const securityGroupsNacls: Scene = {
  id: 'vpc-security',
  padding: 0.16,
  nodes: [
    { id: 'packet', label: 'Inbound packet', pattern: 'external', icon: 'braces', sub: 'must clear both firewalls' },
    { id: 'nacl', label: 'Network ACL', pattern: 'network', icon: 'shieldcheck', sub: 'subnet firewall · stateless · allow + deny' },
    { id: 'sg', label: 'Security Group', pattern: 'service', icon: 'shieldcheck', sub: 'instance firewall · stateful · allow only' },
    { id: 'ec2', label: 'EC2 instance', pattern: 'service', icon: 'ec2', sub: 'reached only if both allow' },
  ],
  edges: [
    { source: 'packet', target: 'nacl' },
    { source: 'nacl', target: 'sg' },
    { source: 'sg', target: 'ec2' },
  ],
}
