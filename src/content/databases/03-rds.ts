import type { Section } from '../types'

export const rds: Section = {
  id: 'rds',
  title: 'Amazon RDS — Multi-AZ & read replicas',
  scene: 'rds',
  slide: `## Amazon RDS — Multi-AZ & read replicas

RDS runs your relational engine; two features turn one database into a resilient, scalable one.

### Multi-AZ — high availability
- A **synchronous standby** in a second AZ, kept byte-for-byte in step with the primary
- On failure, RDS **fails over automatically** — DNS flips to the standby, usually in a minute or two
- The standby serves **no traffic** — it's insurance for durability, not scale

### Read replicas — scale reads
- **Asynchronous, read-only** copies your app queries directly to spread read load
- Add several, even in other Regions; ideal for read-heavy work (dashboards, reports, feeds)
- Writes still go only to the primary — replicas lag slightly (**eventually consistent**)

**One primitive, two jobs:** replication for *availability* (standby) vs replication for *throughput* (replicas).`,
  narration:
    "Now let's go deeper on Amazon RDS itself, because two of its features are what turn a single database into a production-grade one, and people constantly mix them up. The setup is simple: you have one RDS instance, the primary, and it handles all of your reads and all of your writes. The first feature is Multi-AZ, and it is about high availability. When you enable it, RDS creates a standby copy of your database in a different Availability Zone, and it keeps that standby synchronously replicated — every write to the primary is committed to the standby before it's acknowledged, so the two are always byte-for-byte in step. Here's the key point: that standby serves no traffic at all. You can't read from it. It just sits there, ready. If the primary fails — a hardware fault, an AZ problem, even during maintenance — RDS automatically fails over, flipping the database's DNS name to point at the standby, usually within a minute or two, with no action from you. So Multi-AZ buys you durability and automatic recovery; it does not buy you more performance. The second feature is read replicas, and this one is about scale, specifically scaling reads. A read replica is an asynchronous, read-only copy of your database that your application can query directly. Because the replication is asynchronous, the primary doesn't wait on the replica, so replicas can lag a little behind — they're eventually consistent — which means you use them for reads that can tolerate being a few seconds stale: dashboards, reports, analytics, a busy read-heavy feed. You can add several of them, and you can even place them in other Regions to serve users closer to home. Writes, though, always go to the one primary; replicas never accept writes. So hold on to the contrast, because it's the thing to remember: Multi-AZ is replication for availability — a hidden standby that takes over on failure — while read replicas are replication for throughput — visible copies that soak up read traffic. They're independent, and a serious system often uses both. The catch with all of this is that you're still managing instances and their sizes yourself. That's exactly the limit Aurora removes, and Aurora is next.",
}
