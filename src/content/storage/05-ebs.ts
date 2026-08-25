import type { Section } from '../types'

export const ebs: Section = {
  id: 'ebs',
  title: 'EBS — block storage for EC2',
  scene: 'ebs',
  slide: `## EBS — block storage for EC2

**EBS** (Elastic Block Store) gives an EC2 instance a **volume** — a virtual disk it formats and mounts like a physical drive (the root volume from compute §3).

### What a volume is
- **Network-attached but single-AZ** — an AZ-scoped resource, attached to **one instance at a time**
- **Persists** independently of the instance — survives stop/start; can outlive termination
- **Volume types** trade cost for speed: **gp3** general SSD (default) · **io2** high-IOPS · **st1/sc1** HDD. Resize & retype **live**

### Snapshots — the backup
- A **point-in-time**, **incremental** copy of a volume, stored in **S3** (only changed blocks)
- Restore a new volume, clone environments, or **copy to another AZ/Region** — how a volume's data **escapes its single AZ**`,
  narration:
    "We met EBS briefly in the compute course as the root volume under an EC2 instance; now the full picture. EBS, Elastic Block Store, is block storage — it gives you virtual disks called volumes. A volume attaches to an EC2 instance and, to that instance, looks exactly like a physical hard drive: you format it, put a filesystem on it, mount it, and your operating system and databases live on it. Here is the defining property, and it is the tradeoff against S3: an EBS volume lives in a single Availability Zone. It is network-attached, but it is an AZ-scoped resource, tied to instances in that one zone — within the zone AWS replicates it for durability, but you cannot attach a volume across zones, and by default one volume attaches to one instance at a time. The upside is that it persists independently of the instance: stop and start the server and your data is untouched, and the root volume can even be set to outlive the instance's termination. Volumes come in types that trade cost against performance: gp3, a general-purpose SSD, is the sensible default; io2 is a provisioned-IOPS SSD for demanding databases; and st1 and sc1 are cheaper spinning HDDs for big sequential or cold workloads. You can resize a volume or change its type live, without downtime. Now the backup story, and it is where S3 quietly returns. A snapshot is a point-in-time copy of a volume, and it is stored in S3 — and it is incremental, meaning after the first one, each snapshot saves only the blocks that changed, so it stays cheap. From a snapshot you can create a fresh volume, clone an entire environment, or copy it to another Availability Zone or another Region — and that copy is precisely how you get an EBS volume's data out of its single zone and make it resilient. Snapshots are also what AMIs are built from. So EBS is a private disk for a single server, backed up through S3 snapshots. But what if many servers need to read and write the same files at once? A single-attach block volume cannot do that. That is the job of file storage — EFS.",
}
