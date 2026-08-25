import type { Section } from '../types'

export const resilience: Section = {
  id: 'resilience',
  title: 'Resilience — HA & disaster recovery',
  scene: 'resilience',
  slide: `## Resilience — HA & disaster recovery

**Recover** is the last stage. **HA** keeps you up through an **AZ** failure; **DR** is surviving the loss of a whole **Region**.

### Two numbers drive every DR choice
- **RTO** (Recovery Time Objective) — how **fast** must you be back? (downtime you can tolerate)
- **RPO** (Recovery Point Objective) — how much **data** can you afford to lose? (last good backup)

### Four strategies — cheap & slow → costly & instant
- **Backup & Restore** — restore from cross-region backups on disaster · **RTO hours** · cheapest
- **Pilot Light** — data replicated live, core services minimal; **scale up** on disaster · RTO 10s of min
- **Warm Standby** — a **scaled-down full copy** always running; scale it up · RTO minutes
- **Multi-Site Active/Active** — full copy **live in both Regions** · **RTO ~0** · priciest

### AWS Backup
- **Centralises** backup — one place to set policies, schedules, and cross-region/-account copies across services

**Rule of thumb:** pick the cheapest strategy that still meets your RTO/RPO — most workloads don't need active/active.`,
  narration:
    "The final stage of the operate loop is recover, and it starts by distinguishing two words people often blur together: high availability and disaster recovery. High availability, which we covered back in foundations and networking, is about staying up through the failure of an Availability Zone within a Region — you run across multiple AZs behind a load balancer, and if one AZ dies, the others carry on. Disaster recovery is bigger: it's about surviving the loss of an entire Region, or any catastrophe that takes out your whole primary environment. And before you can choose a DR approach, you have to pin down two numbers, because they drive everything. The first is RTO, the Recovery Time Objective: how quickly must you be back up and running after a disaster? An hour? A minute? The second is RPO, the Recovery Point Objective: how much data can you afford to lose, measured as the time back to your last good copy? Five minutes of data? A whole day? These two numbers — how much downtime and how much data loss your business can tolerate — determine how much you need to spend, because faster recovery and less data loss cost more. AWS frames DR as four strategies along a spectrum from cheap-and-slow to expensive-and-instant. The first and cheapest is Backup and Restore: you simply keep backups copied to another Region, and if disaster strikes, you restore everything and rebuild. It's inexpensive because nothing's running in the second Region, but recovery takes hours. The second is Pilot Light: you keep your core — chiefly your data — continuously replicated and running in a minimal form in the second Region, like the pilot light of a furnace, and on disaster you quickly start up and scale out the rest around it. Recovery drops to tens of minutes. The third is Warm Standby: you keep a scaled-down but fully functional copy of your whole system always running in the second Region, so on disaster you just scale it up to full size and shift traffic — recovery in minutes. And the fourth, the gold standard, is Multi-Site Active/Active: you run a full-scale copy live in both Regions at the same time, serving traffic from both, so if one Region fails the other simply absorbs everything with essentially zero downtime and zero data loss — but you're paying for two full environments. Underpinning the cheaper end is AWS Backup, which centralises backup management: instead of configuring backups service by service, you define policies in one place — schedules, retention, cross-region and cross-account copies — across EBS, RDS, DynamoDB, EFS and more. The rule of thumb is to pick the cheapest strategy that still meets your RTO and RPO, because most workloads genuinely don't need active-active — matching the strategy to what the business actually requires is the whole skill. And with that, we've walked the entire operate loop — observe, automate, optimize, recover. The final section pulls it all together.",
}
