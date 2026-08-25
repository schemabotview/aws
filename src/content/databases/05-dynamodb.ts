import type { Section } from '../types'

export const dynamodb: Section = {
  id: 'dynamodb',
  title: 'Amazon DynamoDB — serverless NoSQL',
  scene: 'dynamodb',
  slide: `## Amazon DynamoDB — serverless NoSQL

A fully managed **key-value & document** store — nothing to run.

### Serverless — no instances, no AZs
- Create a **table**; AWS runs the servers, replication, patching & scaling
- Consistent **single-digit-ms** reads & writes, tiny to internet-scale

### The partition key does the work
- Every item has a **partition key**; DynamoDB **hashes** it to a **partition**
- **Auto-shards** as data & traffic grow — you scale **out**, not up
- Design around your **access pattern**; joins traded for scale & speed

### Reach & resilience
- **Global Tables** — active-active replication across Regions
- On-demand capacity, PITR, TTL & streams built in

**Great for:** carts, sessions, catalogs, IoT, leaderboards.`,
  narration:
    "Now we cross fully into the NoSQL world with Amazon DynamoDB, which is AWS's flagship there and, in a lot of ways, the philosophical opposite of the relational engines we just covered. The first thing to internalise is that DynamoDB is serverless. There are no instances to choose, no Multi-AZ toggle, no storage to provision, no version to patch. You simply create a table and start reading and writing items, and AWS handles the servers, the replication across Availability Zones, the scaling, all of it, invisibly. And it delivers consistent single-digit-millisecond latency — a few milliseconds per read or write — whether your table holds a few kilobytes or many terabytes and is taking millions of requests a second. The way it pulls that off is the single most important concept to understand about DynamoDB: the partition key. Every item you store has a partition key, and when you write an item, DynamoDB runs that key through a hash function, and the result decides which physical partition — think of it as one slice of storage on one set of servers — the item lives on. When you read by that same key, it hashes again and goes straight to the right partition. As your table grows in size or traffic, DynamoDB automatically adds more partitions and spreads the data across them. That automatic sharding is the whole trick: you scale out across many partitions rather than up to a bigger box, and because any single read targets exactly one partition, performance stays flat no matter how big the table gets. The trade-off, and it's the classic NoSQL trade-off, is that you have to design your table around your access pattern up front — around the key you're going to look things up by — because you don't get the relational world's flexible ad-hoc joins. Get that design right and it's extraordinarily fast and effectively infinite; get it wrong and some queries become awkward. DynamoDB also has a powerful reach story: Global Tables let you replicate a single table across multiple AWS Regions in an active-active setup, so users on different continents each read and write a nearby copy with low latency. And you get niceties like on-demand capacity so you pay per request, point-in-time recovery, automatic item expiry with TTL, and change streams. It shines for workloads with high traffic and a well-understood access pattern — shopping carts, user sessions, product catalogs, IoT device data, gaming leaderboards. With relational and NoSQL both on the table now, the next piece is making either of them faster still: caching.",
}
