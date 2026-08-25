import type { Section } from '../types'

export const s3Classes: Section = {
  id: 's3-classes',
  title: 'S3 — storage classes & lifecycle',
  scene: 's3-classes',
  slide: `## S3 — storage classes & lifecycle

Not all data is accessed equally. **Storage classes** let you pay far less for colder data — trading **retrieval speed & cost** for **cheaper storage**.

### Hot → cold
- **S3 Standard** — frequent access, millisecond latency, priciest to store, **no retrieval fee**
- **Standard-IA** (Infrequent Access) — cheaper storage, but a **per-GB retrieval fee**; still instant
- **Glacier** — archival; storage is very cheap, restore takes **minutes–hours**
- **Deep Archive** — the coldest, **cheapest storage on AWS**; restore in **~12 h**

### Automate the journey
- **Lifecycle rules** transition & expire objects as they age — *"→ IA after 30 days, → Glacier after 90, delete after 365"* — set once
- **Intelligent-Tiering** — don't know the access pattern? It **auto-moves** objects between tiers, **no retrieval fees**, for a small monitoring fee`,
  narration:
    "Storing everything in one expensive tier is a waste, because not all data is accessed equally — some objects are read constantly, others sit untouched for years. S3 storage classes let you pay far less for the cold stuff, and the tradeoff is always the same: the colder the tier, the cheaper it is to store, but the slower and more expensive it is to get data back. Start at the top, hot. S3 Standard is the default, for frequently accessed data — millisecond access, no fee to retrieve, and the highest storage price. One step cooler is Standard-Infrequent Access, or Standard-IA, for data you do not touch often but need immediately when you do — the storage is noticeably cheaper, but now you pay a small per-gigabyte fee every time you retrieve. Colder still are the Glacier classes, built for archival: storage is extremely cheap, but getting an object back is a restore operation that can take anywhere from milliseconds in the instant tier to minutes or hours in the flexible tier. And at the very bottom is Glacier Deep Archive, the coldest and cheapest storage on AWS, meant for data you are legally required to keep but may never read — restores there take on the order of twelve hours. Now, you rarely sort this by hand. Two features automate it. The first is lifecycle rules: you write a policy on the bucket like move objects to Infrequent Access after thirty days, then to Glacier after ninety, and delete them after a year — and S3 quietly transitions and expires objects as they age, forever, without you touching them. The second, for when you genuinely do not know the access pattern, is Intelligent-Tiering: you put objects in that class and S3 monitors each one and automatically moves it between a frequent, an infrequent, and an archive tier based on how it is actually used, with no retrieval fees, for a tiny monitoring charge. It is hands-off cost optimization. So S3 is durable, unlimited, and now cost-tunable. But cheap, durable storage is worthless if the wrong people can read it — and S3 is famous for exactly that failure mode. Next: how you lock a bucket down.",
}
