import type { Section } from '../types'

export const highAvailability: Section = {
  id: 'high-availability',
  title: 'High availability across AZs',
  scene: 'multi-az',
  slide: `## High availability across AZs

The core AWS design principle: **spread across AZs so no single data-center failure takes you down.**

### The recipe
- Run your service in **≥ 2 AZs** — if AZ **a** fails, the copies in **b** and **c** keep serving
- A **load balancer** (Course 3/5) spreads traffic across them; a **database** replicates to a standby in another AZ (Course 6)
- This is **Multi-AZ**, and it's the default posture for anything production

### Availability vs. durability
- **Availability** — is it *up*? (Multi-AZ handles this) · **Durability** — is the *data safe*? (replication/backups)
- Beyond one region → **multi-Region** (rarer, more complex)

### Design for failure
- AWS assumes hardware *will* fail; you build so failures are **survivable and routine, not catastrophic**

That's *where* things run and how to make it reliable. Now — *how* do you actually reach it?`,
  narration:
    "Now the recipe that uses those Availability Zones, and it's the single most important design principle on the whole platform: spread your resources across multiple AZs so that no single data-center failure can take your system down. Concretely, instead of running your application on one server in one AZ, you run copies in two or three AZs at once. If Availability Zone a suffers an outage — loses power, catches fire, whatever — the copies in zones b and c keep serving your users, and most never even notice. That's high availability. In practice AWS gives you managed pieces that make it straightforward: a load balancer, which we'll meet in the compute and networking courses, automatically spreads incoming traffic across your instances in every AZ and stops sending it to any that go unhealthy; and a managed database, in the databases course, can replicate to a standby in a second AZ and fail over automatically if the primary's zone dies. This pattern is called Multi-AZ, and it's the default posture for anything you'd run in production — single-AZ is for experiments you can afford to lose. Let me draw one distinction that trips people up, because AWS cares about it. Availability asks: is the service up and responding right now? Multi-AZ protects that. Durability asks a different question: is the data safe from being lost? That's protected by replication and backups — a service like S3 stores your data across multiple AZs to make it extraordinarily durable. Related, but not the same: a system can be briefly unavailable without losing any data. And for the rare cases where you must survive an entire region failing, there's multi-Region architecture — more complex, less common, reserved for the most critical systems. The mindset under all of it is what AWS calls designing for failure: assume from the start that servers and even whole data centers will fail, because at cloud scale they constantly do, and architect so that when they fail it's survivable and routine. That's the where, and how to make it reliable. Now let's turn to how you actually reach into all of this.",
}
