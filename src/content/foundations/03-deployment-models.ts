import type { Section } from '../types'

export const deploymentModels: Section = {
  id: 'deployment-models',
  title: 'Deployment models',
  scene: 'deployment-models',
  slide: `## Deployment models

The **deployment models** describe *where* the cloud runs and *who shares it*.

### The four
- **Public** — the shared **AWS cloud**, multi-tenant, on demand. The default, and this course's focus
- **Private** — cloud infra dedicated to **one tenant**; on AWS, **Outposts** / **Dedicated Hosts** put AWS hardware in *your* data center
- **Hybrid** — **on-prem + AWS** working together (a migration path, or keeping some data local for latency/compliance)
- **Multi-cloud** — using **AWS + others** (GCP, Azure) together — for resilience, negotiating leverage, or best-of-breed

### Why it matters
- Real enterprises are rarely "all public cloud" overnight — **hybrid** is the common reality during migration
- Data-residency, latency, and existing investments drive the choice`,
  narration:
    "The second classification is the deployment model, and it answers a different question: where does the cloud physically run, and who are you sharing it with? There are four to know. The first and most common is the public cloud. This is the shared AWS cloud as most people picture it: AWS owns and operates the data centers, many customers run on the same underlying hardware — that's what multi-tenant means — and you spin resources up and down on demand. It's the default, it's what this entire course focuses on, and it's where the elasticity and pay-as-you-go economics are strongest. The second is the private cloud, where cloud infrastructure is dedicated to a single tenant — just you — rather than shared. On AWS, this shows up as services like Outposts and Dedicated Hosts, which actually place AWS-managed hardware inside your own data center, giving you the AWS experience on single-tenant equipment, often for strict compliance or latency reasons. The third, and the one that describes most large real-world companies today, is hybrid: running on-premises infrastructure and AWS together, connected, as one environment. Hybrid is usually the honest reality during a migration — you don't move a twenty-year-old company to the cloud overnight — and it's also chosen deliberately when some data or system needs to stay local for latency or legal reasons while everything else runs in AWS. The fourth is multi-cloud: deliberately using AWS alongside other providers like Google Cloud or Azure. Companies do this for resilience against a single provider's outage, for negotiating leverage, or to use the best individual service from each. Why does this classification matter to you as a learner? Because it sets expectations for how cloud actually gets adopted — rarely a clean, instant switch to all-public-cloud, and much more often a hybrid journey shaped by data residency, latency, and the investments a company already has. So those are the two ways to classify cloud — by how much is managed, and by where it lives. Now let's get concrete about the physical where: AWS's global infrastructure.",
}
