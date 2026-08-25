import type { Scene } from '../../render-engine'

// §1 security-model — the frame for Course 9, drawn as the layer BOARD variant: the layers of defense
// in depth as a top-to-bottom stack, outermost first. Security on AWS is not a single wall; it's
// independent layers of control, each guarding the next, so a breach of one is caught by the rest.
// Detection watches everything (GuardDuty); the Perimeter blocks bad traffic at the edge (Shield, WAF);
// Identity decides who may act (IAM, Course 2); Encryption scrambles the data (KMS, TLS); and the core
// is your data & workloads. Each layer names the services §2–§6 go deep on. Extends shared
// responsibility (foundations §8). No edges — a labelled stack of peers, read outer → inner.
export const defenseInDepth: Scene = {
  id: 'defense-in-depth',
  padding: 0.16,
  nodes: [
    { id: 'detection', label: 'Detection', pattern: 'external', icon: 'guardduty', sub: 'outermost · watch & alert on everything — GuardDuty, Security Hub' },
    { id: 'perimeter', label: 'Perimeter', pattern: 'network', icon: 'waf', sub: 'block bad traffic at the edge — Shield · WAF · firewalls' },
    { id: 'identity', label: 'Identity', pattern: 'user', icon: 'iam', sub: 'who may act at all — IAM (Course 2)' },
    { id: 'encryption', label: 'Encryption', pattern: 'service', icon: 'kms', sub: 'scramble the data itself — KMS · TLS' },
    { id: 'core', label: 'Your data & workloads', pattern: 'storage', icon: 'database', sub: 'the core — the asset every layer protects' },
  ],
  edges: [],
}
