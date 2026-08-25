import type { Scene } from '../../render-engine'

// waf-pillars — §12 (Phase 2 · Design finale, and the finale of the whole 11-course arc). Review the
// NovaBank design against the five Well-Architected pillars. Each pillar is a card whose sub is the
// VERDICT — the concrete design evidence + the section that delivered it. Edgeless → vertical stack, so
// it reads as a checklist walked one pillar at a time. Lands the Well-Architected Framework the
// coverage-watch reserved for the capstone.
export const wafPillars: Scene = {
  id: 'waf-pillars',
  padding: 0.16,
  nodes: [
    { id: 'opex', label: 'Operational Excellence', pattern: 'service', icon: 'cloudwatch', sub: 'observe + automate — CloudWatch, IaC, CI/CD (§11)' },
    { id: 'security', label: 'Security', pattern: 'external', icon: 'shieldcheck', sub: 'defense in depth — KMS · WAF · GuardDuty · least-privilege IAM (§10)' },
    { id: 'reliability', label: 'Reliability', pattern: 'network', icon: 'globe', sub: 'Multi-AZ + multi-Region DR + the transfer saga (§7 · §9 · §11)' },
    { id: 'performance', label: 'Performance Efficiency', pattern: 'service', icon: 'gauge', sub: 'right tool per job; serverless scales to zero→N (§7 · §8)' },
    { id: 'cost', label: 'Cost Optimization', pattern: 'storage', icon: 'costexplorer', sub: 'pay-as-you-go · Savings Plans · S3 tiers (§8 · §11)' },
  ],
  edges: [],
}
