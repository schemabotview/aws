import type { Section } from '../types'

export const aurora: Section = {
  id: 'aurora',
  title: 'Amazon Aurora — shared distributed storage',
  scene: 'aurora',
  slide: `## Amazon Aurora — shared distributed storage

AWS's cloud-native relational engine — **MySQL- and PostgreSQL-compatible**, but re-architected underneath.

### Compute decoupled from storage
- A cluster is one **writer** + up to **15 readers**, all over **one shared storage volume**
- Unlike RDS, readers don't each copy the data — adding a reader is **fast and cheap**
- Compute and storage **scale independently**; failover promotes a reader in seconds

### Storage built for durability
- Data is kept as **6 copies across 3 AZs**, continuously **self-healing**
- Storage **auto-grows** (to 128 TB) — no provisioning disks
- **Aurora Serverless** scales capacity up and down automatically for spiky or unpredictable load

**Why it matters:** RDS-compatible engines with cloud-scale durability, read scaling, and fast failover.`,
  narration:
    "Amazon Aurora is AWS's own cloud-native relational database, and the headline is that it's a drop-in for MySQL and PostgreSQL — the same SQL, the same drivers, the same tools — but AWS rebuilt the entire engine underneath to fit the cloud. The single most important idea, the thing that makes Aurora different from ordinary RDS, is that it decouples compute from storage. In a regular RDS setup, remember, each read replica was a full copy of the database with its very own disk. Aurora doesn't work that way. An Aurora cluster is a set of compute instances — one writer that handles all the writes, and up to fifteen readers that serve read traffic — and all of them sit on top of a single, shared, distributed storage volume. Because the readers don't each carry their own copy of the data, adding a reader is fast and cheap: you're spinning up a compute node that attaches to storage that already exists, not cloning terabytes of data. And compute and storage scale independently — you can grow your read capacity without touching storage, and storage grows on its own without you touching compute. That same decoupling makes failover quick: if the writer dies, Aurora just promotes one of the existing readers to be the new writer, usually in a handful of seconds, because the data is already sitting there in the shared layer. Now that storage layer is the other half of the magic. Aurora automatically keeps six copies of your data spread across three Availability Zones — two copies in each — and it's constantly checking and self-healing, so if a disk or even a whole AZ goes bad, your data is still safe and available with copies to spare. The storage also grows automatically, up to 128 terabytes, so you never provision or resize disks. And if your workload is spiky or hard to predict, Aurora Serverless can scale the compute capacity up and down for you automatically, even down to nothing, so you pay for what you use. Put it together and Aurora gives you a familiar MySQL- or PostgreSQL-compatible database with cloud-scale durability, easy read scaling, and fast failover — which is why it's often the default choice for a new relational workload on AWS. That covers the relational side. Next we cross over to the NoSQL world and AWS's flagship there: DynamoDB.",
}
