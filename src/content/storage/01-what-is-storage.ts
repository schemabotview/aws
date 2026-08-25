import type { Section } from '../types'

export const whatIsStorage: Section = {
  id: 'what-is-storage',
  title: 'What storage is — three shapes',
  scene: 'storage-shapes',
  slide: `## What storage is — three shapes

Compute runs your code; then it needs somewhere to **keep data**. AWS storage comes in **three shapes** — match the shape to how your app **accesses** the data.

### Block — a raw disk
- A volume of fixed-size blocks, attached to **one server**, which puts a filesystem on it — a local disk
- **EBS** — the disk under an EC2 instance. Fast, low-level. For boot volumes & databases

### File — a shared file tree
- A **shared filesystem** with folders and paths that **many servers mount** at once over the network
- **EFS** — elastic, grows automatically. For shared content, home dirs, lift-and-shift apps

### Object — keys over HTTP
- Whole **objects** (data + metadata), each addressed by a **key** in a flat namespace, over an **HTTP API** — virtually unlimited
- **S3** — not a disk you mount, an API you call. For backups, media, static sites, data lakes`,
  narration:
    "Compute gives your code a place to run; storage gives it a place to keep data. And on AWS, storage is not one thing — it comes in three fundamental shapes, and the whole skill is matching the shape to how your application actually accesses its data. The first shape is block storage. Think of a raw hard drive: a volume of fixed-size blocks that attaches to a single server, and that server puts a filesystem on it and treats it as a local disk. On AWS this is EBS, Elastic Block Store — the disk that sits under an EC2 instance, the one we met in the compute course. It is fast and low-level, attached to one instance at a time, and it is what you want for a boot volume or the disk under a database. The second shape is file storage. Instead of a raw disk for one machine, this is a shared filesystem — folders and paths — that many servers can mount at the same time over the network, exactly like a shared network drive in an office. On AWS this is EFS, Elastic File System. It grows and shrinks automatically, and it is what you reach for when several instances need to read and write the same files, or when you are lifting and shifting an application that expects a normal filesystem. The third shape is object storage, and it is the one that feels different. Here you do not mount a disk or navigate folders at all. You store whole objects — a blob of data plus its metadata — each addressed by a unique key in a single flat namespace, and you get at them over an HTTP API. Capacity is virtually unlimited and durability is extreme. On AWS this is S3, Simple Storage Service. It is not a disk you attach; it is an API you call, and it is where backups, media files, static websites, logs, and data lakes live. So the rule is simple: one server needing a fast local disk, block, EBS; many servers needing a shared filesystem, file, EFS; anything you want addressable over HTTP at massive scale, object, S3. Most real systems use all three at once. The rest of this course goes deep, and we start with the star, the service you will reach for most often: S3.",
}
