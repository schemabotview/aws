import type { Section } from '../types'

export const choosingStorage: Section = {
  id: 'choosing-storage',
  title: 'Choosing your storage',
  scene: 'choosing-storage',
  slide: `## Choosing your storage

Three shapes, one question: which for *this* workload? **Match the shape to the access pattern.**

### A rough decision guide
- **One server** needs a fast, low-latency local disk (boot volume, database)? → **Block · EBS**
- **Many servers** need to read & write the **same files** at once (shared content, home dirs)? → **File · EFS**
- Any amount of data, **addressable over HTTP**, durable & cheap (backups, media, logs, data lakes)? → **Object · S3**

### The through-line
- **S3** is where most bulk data ends up — cheapest, most durable, infinitely scalable
- **EBS & EFS** exist because servers still need real filesystems
- Mature systems use **all three at once** — EC2 on an EBS root volume, sharing uploads via EFS, archiving to S3`,
  narration:
    "Let's pull back to the whole picture and answer the question this course has been building toward: given a workload, which storage do you choose? The reframe is the same one we opened with — you match the shape to how the data is accessed. Reach for block storage, EBS, when a single server needs a fast, low-latency disk that it fully controls: a boot volume, or the files under a database. One instance, one Availability Zone, a raw disk you format and mount. Reach for file storage, EFS, when several servers need to read and write the same files at the same time through an ordinary filesystem: shared web content, user home directories, shared storage for a group of containers, or an app you have lifted from on-premises that expects a normal directory tree. Many instances, spanning zones, a shared POSIX filesystem. And reach for object storage, S3, when you want to keep any amount of data, addressable over HTTP, with extreme durability and no server to attach at all: backups, media files, static websites, logs, and data lakes. S3 is the default answer for just store this durably and cheaply, and it is where the bulk of most companies' data eventually lives, because it is the cheapest, the most durable, and effectively infinite. EBS and EFS exist alongside it because servers still need real filesystems to boot from and to share. And the honest truth is that a mature system uses all three at once, without drama: your application runs on an EC2 instance booting from an EBS root volume, it shares user uploads across a fleet through EFS, and it archives everything, plus its backups and logs, into S3. That is storage — where your data lives. We now have the ground beneath us, the identities that may act, the compute that runs our code, and the storage that keeps our data. The next thing to build is the wiring that connects it all and lets the right traffic in and out — networking: the VPC and the edge.",
}
