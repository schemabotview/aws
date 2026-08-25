import type { Section } from '../types'

export const qualityRequirements: Section = {
  id: 'quality-requirements',
  title: 'Requirements — the quality bar (non-functional)',
  scene: 'quality-needs',
  slide: `## Requirements — the quality bar

The two data worlds said *what* NovaBank does. These say **how well** it must do it — the **non-functional** requirements. For a bank they are **not negotiable**, and they sit over **both** worlds at once.

### Secure
- **Encrypt everything** (at rest & in transit) · **least privilege** · **no hard-coded secrets** · **guard the perimeter**

### Compliant
- **Audit every action** · **protect PII** · **immutable logs** · **data residency** (stay in the approved Region)

### Always-on
- Survive an **AZ** *and* a **Region** (multi-Region **DR**) · explicit **RTO/RPO** · **no single point of failure**

### Scalable
- Scale to **millions** · **elastic** (grow *and* shrink) · **one design** at 10k or 10M · **cost tracks use**

**End of requirements.** We now know exactly what to build and how well. Next — **Phase 2: Design** — we map every one of these onto AWS.`,
  narration:
    "The two data worlds told us what NovaBank does. This final requirements section is about how well it has to do it — the non-functional requirements — and for a bank these are every bit as binding as the features themselves. There are four, and the key thing to understand is that they aren't features you build in one place; they sit over the entire system, over both the transactional core and the analytics world at once. The first is secure. NovaBank handles money and deeply personal data, so it faces the highest security bar there is. Concretely that means: encrypt everything, both at rest and in transit; grant least privilege, where every user and every service gets only the access it truly needs; never hard-code a secret like a password or a key; and guard the perimeter, filtering out malicious traffic before it reaches anything. The second is compliant. Every action in the system must be auditable — a permanent record of who did what and when. Personal data, PII, must be found and handled exactly to regulation. The audit logs themselves must be immutable, so they can stand as evidence. And data residency matters: the data has to stay inside the approved Region, legally. The third is always-on. Customers expect their bank at three in the morning, so the system must survive not just a server failure but the loss of an entire Availability Zone, and even the loss of a whole Region — which means real disaster recovery. We state that precisely as RTO and RPO: how fast we must recover, and how much data we can afford to lose. And there must be no single point of failure anywhere. The fourth is scalable. It has to scale to millions of customers, be elastic — growing and, just as importantly, shrinking with demand — and run the very same architecture whether it has ten thousand customers or ten million, with no rewrite, while the cost tracks actual usage. And that completes the requirements phase. We now know exactly what NovaBank must do — the transactional core and the analytics world — and exactly how well it must do it — secure, compliant, always-on, and scalable. With the requirements pinned down, we can finally start designing, and map every single one of these needs onto real AWS services. That's Phase 2: the architecture.",
}
