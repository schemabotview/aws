import type { Section } from '../types'

export const efs: Section = {
  id: 'efs',
  title: 'EFS — shared file storage',
  scene: 'efs',
  slide: `## EFS — shared file storage

Where **EBS** gives *one* server a private disk in *one* AZ, **EFS** (Elastic File System) gives **many** servers a **shared file tree across AZs**.

### What EFS is
- A managed **NFS** filesystem — folders & paths, mounted on Linux EC2 as a normal directory
- **Many instances mount it at once**, and it spans **multiple AZs** — regional & highly available (the EBS opposite)
- **Elastic** — grows & shrinks automatically; pay only for what you store. Standard + IA classes with **lifecycle**

### When to reach for it
- Shared web content, home directories, shared container storage, lift-and-shift of POSIX apps
- Windows or HPC instead? → the **FSx** family (FSx for Windows File Server · FSx for Lustre)`,
  narration:
    "The third and final shape is file storage, and on AWS the headline service is EFS, the Elastic File System. The cleanest way to understand it is as the mirror image of EBS. EBS gave a single server a private disk locked to one Availability Zone. EFS gives many servers a shared file system that spans multiple zones. It is a fully managed NFS file system — NFS being the standard network-filesystem protocol — so it presents ordinary folders and paths, and when you mount it on a Linux EC2 instance it simply appears as a normal directory that your applications read and write without knowing anything special is going on. The defining trait is sharing: many instances mount the same EFS at the same time, and because it is a regional resource replicated across several Availability Zones, a whole fleet of web servers spread across zones can all read and write the very same files, with the storage staying available even if a zone fails. It is also elastic in the truest sense — it grows and shrinks automatically as you add and delete files, and you never provision capacity; you pay only for what you are storing. And like S3, it offers a cheaper Infrequent-Access tier with lifecycle policies that move cold files down automatically. When do you reach for EFS? Whenever multiple servers genuinely need to share files: shared web content and content-management systems, user home directories, shared storage for a set of containers, and lifting and shifting an on-premises application that expects a normal POSIX filesystem. One caveat: EFS speaks NFS, which is the Linux world. If you need a Windows file share, or a high-performance file system for computing workloads, AWS offers the FSx family instead — FSx for Windows File Server, which speaks the Windows SMB protocol, and FSx for Lustre for high-performance computing. Same idea of managed shared file storage, different protocols for different worlds. So now you have seen all three shapes in full: object storage in S3, block storage in EBS, and file storage in EFS. Which leaves the question this course has been building toward — for a given workload, which one do you choose?",
}
