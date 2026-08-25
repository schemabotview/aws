import type { Section } from '../types'

export const olapRequirements: Section = {
  id: 'olap-requirements',
  title: 'Requirements — the analytics world (OLAP)',
  scene: 'olap-needs',
  slide: `## Requirements — the analytics world

The **second** data world. It reads the **same transaction data** as the core — but asks completely different questions, and so demands the **opposite** things. This is **OLAP**: online analytical processing.

### The workload
- **Real-time fraud scoring** — judge every transaction **as it happens**, block the bad ones
- **Risk & spending insight** — patterns *across* millions of customers
- **Regulatory reporting** — historical aggregates the bank must file
- **Big scans & aggregations** — read millions of rows at once, not one row

### What it demands — the inverse of OLTP
- **Massive scale** — petabytes of history, ever-growing
- **Stream *and* batch** — real-time (fraud) **and** overnight (reports)
- **Read-heavy** — aggregate, don't do tiny row lookups
- **Schema-on-read** — raw, varied data; structure applied at query time
- **Eventual consistency is fine** — seconds-stale is fine *(≠ OLTP)*
- **Cheap storage** — keep *all* history, cheaply *(≠ OLTP)*

**Two worlds, two designs.** One data set, opposite needs → the design must serve both. Next: the **non-functional** bar that sits over *both*.`,
  narration:
    "Here is the second data world, and understanding why it's separate is one of the most important ideas in the whole capstone. This world, called OLAP — online analytical processing — reads the very same transaction data the core produces, but it asks completely different questions, and because the questions are different, it demands almost the exact opposite things. Look at the workload first. It does real-time fraud scoring: as each transaction happens, it judges whether it looks fraudulent and blocks the bad ones — that's NovaBank's flagship feature. It does risk and spending insight, finding patterns not within one account but across millions of customers. It produces regulatory reporting, the historical aggregates a bank is legally required to file. And the shape of all this work is big scans and aggregations — reading millions of rows at once to compute a sum or an average — the polar opposite of the core's tiny, single-row operations. Now the demands, and notice how each one inverts what the transactional core needed. It needs massive scale: petabytes of history that only ever grows. It needs both stream and batch — real-time processing for fraud, and big overnight batch jobs for the reports. It's read-heavy, optimized for aggregation rather than pinpoint lookups. It wants schema-on-read: you dump in raw, varied data cheaply and impose structure only when you query it, rather than defining everything up front. And here are the two big inversions. Where the core demanded strong consistency, analytics is perfectly happy with eventual consistency — if the fraud dashboard is a few seconds behind, nobody's harmed. And where the core needed fast, premium storage, analytics needs the cheapest possible storage, because it keeps absolutely everything, forever. So we have two data worlds from one data set: the transactional core that must be correct, consistent, and instant, and the analytics world that must be vast, cheap, and tolerant of staleness. A single system optimized for one would be terrible at the other — which is exactly why, in the design phase, we'll build two different subsystems and connect them. But there's one more layer of requirements, and it sits over both worlds at once: the non-functional bar — secure, compliant, always-on, and scalable. That's next.",
}
