import type { Section } from '../types'

export const operationsDesign: Section = {
  id: 'operations-design',
  title: 'Design — operating the bank',
  scene: 'operate-bank',
  slide: `## Design — operating the bank

The system is designed, secured — now design how we **run** it. Operations is a loop, not a one-off: **observe → automate → optimize → recover**. It realizes §4's **always-on + scalable** bar day after day.

### Observe — know what it's doing
- **CloudWatch** — metrics · logs · alarms · dashboards; an alarm auto-scales or pages on-call
- **CloudTrail** — the immutable record of every action (the audit half of §10)

### Automate — no click-ops
- **CloudFormation** — the whole stack as code, deployed the same way every time
- **CodePipeline** — commit → build → test → deploy, hands-off and repeatable

### Optimize — cost tracks use
- **Cost Explorer** sees the spend · **Budgets** alert on overrun · **Savings Plans** commit & save

### Recover — survive a whole Region
- Multi-Region DR: a warm **standby Region** + **AWS Backup** point-in-time restore — the **RTO / RPO** promise

**Why a loop:** observe to know, automate to move fast without breaking things, optimize to stay affordable, recover when the worst happens. Next: the finale — **reviewing the design** against the five pillars.`,
  narration:
    "The bank is fully designed and protected; the last design question is how we operate it — how we run it, day after day, without downtime and without the bill running away. Operations isn't a one-time setup, it's a loop with four stages, and NovaBank turns that loop continuously. The first stage is observe: you can't run what you can't see. CloudWatch collects metrics, logs, and traces from every service, raises alarms when something crosses a threshold, and rolls it all up into dashboards — and those alarms aren't just for humans, an alarm on CPU or request latency is exactly what triggers the auto-scaling we designed into the app tier, or pages the on-call engineer. Alongside it, CloudTrail keeps the immutable record of every action taken in the account, which is also the audit trail from our security layer. So we always know what the bank is doing and who did what. The second stage is automate: for a system this important, no one should be clicking around in the console making changes by hand — that's how mistakes and drift creep in. So the entire stack is defined as code in CloudFormation and deployed the same repeatable way every time, and changes ship through CodePipeline, which takes a commit and automatically builds it, runs the tests, and deploys it. Consistent, hands-off, and reversible. The third stage is optimize: because we pay only for what we use, cost is something we actively manage. Cost Explorer shows us where the money is going, Budgets alert us the moment spend heads past a limit, and for the steady baseline load we commit to Savings Plans to get the same capacity for less. Cost tracks use, deliberately. And the fourth stage is recover, which is where the always-on requirement meets its hardest test: what if we lose an entire Region? This is the flagship of the operations design — multi-Region disaster recovery. We run a warm standby in a second Region, ready to take over, and AWS Backup gives us point-in-time restore of the data. Those two together are how we hit our recovery objectives: RTO, how fast we're back, and RPO, how little data we can lose. Observe, automate, optimize, recover — that loop is what keeps NovaBank running. With that, every part of the system is designed. The final section steps back and reviews the whole design against the five pillars of the Well-Architected Framework.",
}
