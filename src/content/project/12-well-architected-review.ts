import type { Section } from '../types'

export const wellArchitectedReview: Section = {
  id: 'well-architected-review',
  title: 'The Well-Architected review',
  scene: 'waf-pillars',
  slide: `## The Well-Architected review

The finale: judge the whole design honestly against AWS's own checklist — the **Well-Architected Framework**, five pillars. NovaBank was built to pass every one *by design*.

### The five pillars — and NovaBank's evidence
- **Operational Excellence** — observe + automate: CloudWatch, IaC, CI/CD *(§11)*
- **Security** — defense in depth: KMS · WAF · GuardDuty · least-privilege IAM *(§10)*
- **Reliability** — Multi-AZ + multi-Region DR + the transfer saga *(§7 · §9 · §11)*
- **Performance Efficiency** — right tool per job; serverless scales 0→N *(§7 · §8)*
- **Cost Optimization** — pay-as-you-go · Savings Plans · S3 storage tiers *(§8 · §11)*

**That's the capstone — and the course.** From "what is cloud" to a real bank, well-architected end to end. Requirements → Design done; **Implementation** is the hands-on labs.`,
  narration:
    "This is the finale — not just of the capstone, but of the entire course. We've designed a complete bank; now we do what every serious architect does before shipping: step back and review the whole thing honestly against a shared standard. AWS publishes exactly such a standard, the Well-Architected Framework, and it's organised into five pillars. Let's judge NovaBank against each one — and the satisfying part is that because we drove the design from requirements, it was built to pass every pillar by design, not by accident. The first pillar is operational excellence: can you run and improve the system smoothly? Yes — we observe everything with CloudWatch, and we automate everything with infrastructure as code and CI/CD, so changes are safe and repeatable. The second pillar is security, and it's the whole of our defense-in-depth design: encryption everywhere with KMS, the perimeter guarded by WAF and Shield, threats watched by GuardDuty, and least-privilege IAM throughout. The third is reliability: does it stay up and recover? Yes — Multi-AZ for the databases, multi-Region disaster recovery for a whole-Region failure, and the Step Functions saga so even a transfer can't be left half-done. The fourth is performance efficiency: are you using the right tool for each job? Yes — a relational engine for the ledger, key-value for sessions, a cache for hot reads, and serverless components that scale from zero to enormous automatically. And the fifth is cost optimization: pay only for what you use, commit with Savings Plans for the steady baseline, and tier the data lake's storage so cold history costs almost nothing. Five pillars, and a clear design answer for each — that's what well-architected means. And with that, step all the way back. We began this whole journey asking what the cloud even is, and we've arrived at a real, complete, well-architected retail bank, composing every service across all eleven courses. The design is done. What remains is to build it, for real, in the console — and that's the hands-on implementation phase, the labs, where we stand each of these services up service by service. Congratulations — you've architected NovaBank.",
}
