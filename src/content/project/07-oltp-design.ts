import type { Section } from '../types'

export const oltpDesign: Section = {
  id: 'oltp-design',
  title: 'Design — the transactional core',
  scene: 'core-app',
  slide: `## Design — the transactional core

The first design deep-dive: map the **OLTP requirements** (§2) onto AWS. This is the live request path — a customer taps, money moves — inside the landing-zone VPC.

### The request path
- **Customer → Cognito** — authenticate before anything else *(secure)*
- **→ API Gateway** — the one REST front door
- **→ Core banking API** — **ECS/Fargate** (always-on) + **Lambda** (spiky work), in **private** app subnets across 2 AZs

### The data tier — each store answers one demand
- **Aurora (Multi-AZ)** — relational, **ACID + strong consistency** for the ledger; **primary → standby** with **auto-failover** *(correctness · always-on)*
- **ElastiCache** — in-memory **low-latency** reads *(instant)*
- **DynamoDB** — **high-rate** key-value for sessions *(high transaction rate)*

**Requirement → design:** correctness→Aurora · instant→cache · scale of small writes→DynamoDB · always-on→Multi-AZ + 2-AZ app tier. Next: the **OLAP** design.`,
  narration:
    "With the requirements set and the overall architecture sketched, we start the design deep-dives — and we start where the money is, the transactional core. Our job here is to take the OLTP requirements from earlier — correctness, strong consistency, low latency, durability, always-on — and map each one onto a concrete AWS design. Let's follow a single request, a customer tapping to make a transfer, all the way through. It begins at the customer's app, and the very first stop is Cognito, which authenticates them — we prove who they are before anything else happens, satisfying the secure requirement at the front door. Once authenticated, the request hits API Gateway, the single REST front door into the bank; every call comes through here, which gives us one place to throttle, authorize, and monitor. From there it reaches the core banking API, and this runs on ECS with Fargate — containers that are always on, the steady workhorse for the banking logic — alongside Lambda for spikier, event-driven pieces. Crucially, this tier lives in the private application subnets, spread across two Availability Zones, so it's both unreachable from the internet and able to survive a zone failure. Then comes the data tier, and this is where the mapping gets precise, because each store answers a different demand from the requirements. The ledger — the money itself — lives in Aurora, a relational database that gives us ACID transactions and strong consistency, exactly what correctness demanded. And to satisfy always-on, Aurora runs Multi-AZ: a primary handles reads and writes while a standby in the other Availability Zone is kept in sync, ready to take over automatically in seconds if the primary fails. Alongside it, ElastiCache holds the hottest reads in memory, giving us the instant, sub-second latency customers expect. And DynamoDB handles the very high-rate key-value work, like session data, where we need enormous throughput of tiny operations more than we need relational joins. Step back and you can read the design straight off the requirements: correctness maps to Aurora, instant maps to the cache, the flood of small writes maps to DynamoDB, and always-on maps to Multi-AZ plus a two-zone app tier. That's the transactional core designed. Next we design its mirror image — the analytics world, OLAP.",
}
