import type { Section } from '../types'

export const ec2Anatomy: Section = {
  id: 'ec2-anatomy',
  title: 'EC2 — the anatomy of a virtual server',
  scene: 'ec2-anatomy',
  slide: `## EC2 — the anatomy of a virtual server

**EC2** (Elastic Compute Cloud) rents you a **virtual server** — an *instance* — by the second. It's the workhorse of AWS.

### What makes up an instance
- **AMI** (Amazon Machine Image) — the **template** it boots from: OS + pre-installed software (pick one or bake your own)
- **Instance type** — its **size & shape**: vCPU + RAM, tuned per family (\`t\` burstable, \`m\` general, \`c\` compute, \`r\` memory)
- **EBS root volume** — its **disk**, a network-attached block volume that persists (Course 4 goes deep)
- **Key pair** — the **SSH key** for login (the private half stays with *you*)
- **Security group** — its **instance-level firewall**: which ports/sources may reach it (Course 5)

### The mental model
- An instance = **an AMI booted onto a chosen instance type, with a disk, a login key, and a firewall**`,
  narration:
    "EC2 stands for Elastic Compute Cloud, and it is the workhorse of AWS — the service that rents you a virtual server, called an instance, billed by the second. Let's dissect an instance into its parts, because these five names come up constantly and once you know them, launching a server stops being mysterious. First, the AMI, the Amazon Machine Image. This is the template the instance boots from — it bundles the operating system and any pre-installed software into a snapshot. You pick one from a catalog — a plain Linux, a Windows, a pre-built app image — or you bake your own so every server starts identical. The AMI answers what is on the disk when the machine powers on. Second, the instance type, which is the size and shape of the machine — how many virtual CPUs and how much memory it has. AWS groups these into families tuned for different jobs, and the letters are worth recognizing: t types are small and burstable for light workloads, m types are balanced general purpose, c types are compute-optimized for CPU-heavy work, r types are memory-optimized for big in-memory datasets. Choosing the type is choosing the hardware profile. Third, the EBS root volume, which is the instance's disk. EBS is network-attached block storage — a virtual hard drive that lives independently of the instance and persists — and we will go deep on it in the storage course; for now, know it is where the operating system and your data sit. Fourth, the key pair, which is how you log in over SSH. It is a cryptographic key pair where AWS keeps the public half and you hold the private half, and only someone with that private key can get shell access — so guard it. Fifth, the security group, which is the instance's own firewall. It is a set of rules controlling which network ports and which sources are allowed to reach the instance — say, allow web traffic on port 443 from anywhere but SSH only from your office — and it is your first line of network defense, covered fully in networking. So put it together and the model is clean: an EC2 instance is an AMI booted onto a chosen instance type, with an EBS disk, a login key pair, and a security-group firewall. That is what an instance is. The other half of EC2, and the half people underestimate until the bill arrives, is how you pay for it.",
}
