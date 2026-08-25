import type { Section } from '../types'

export const whatIsNetworking: Section = {
  id: 'what-is-networking',
  title: 'What networking is — the VPC',
  scene: 'vpc-intro',
  slide: `## What networking is — the VPC

Ground, identity, compute, storage — now the **wiring** that connects it all. It starts with the **VPC** (Virtual Private Cloud).

### Your own private network
- A VPC is your **private, isolated** slice of AWS — a **software-defined network** you control, living in **one Region**
- You give it an IP range in **CIDR** notation (\`10.0.0.0/16\` ≈ 65,000 private addresses)
- Everything network-attached — **EC2, RDS, load balancers** — lives **inside** a VPC with a private IP

### Isolated by default
- Logically separated from every other customer's network — and from your own other VPCs
- **Nothing gets in or out until you allow it** — the VPC is your private space
- Spans a whole **Region** (reaches every AZ in it); AWS gives you a default VPC, but real builds define their own`,
  narration:
    "We now have the ground beneath us, the identities that may act, the compute that runs our code, and the storage that keeps our data. What is missing is the wiring — the network that connects it all and controls what is allowed to talk to what. That is networking, and on AWS it starts with one foundational thing: the VPC, the Virtual Private Cloud. A VPC is your own private, isolated section of the AWS cloud — a virtual network that you define and fully control, living inside a single Region. The best way to picture it is as your own data-center network, except it is software-defined: you create it with an API call instead of running cables. When you create a VPC, the first thing you give it is an IP address range, written in CIDR notation — something like 10.0.0.0/16, which carves out roughly sixty-five thousand private IP addresses for you to hand out to resources inside. And that is the key idea: everything you launch that sits on a network — your EC2 instances, your databases, your load balancers — lives inside a VPC and receives a private IP from that range. The word that matters most here is isolated. Your VPC is logically separated from every other AWS customer's network, and even from your own other VPCs; by default, nothing gets in and nothing gets out until you explicitly allow it. It is genuinely your private space, and you decide where the doors are. A VPC spans an entire Region and can stretch across all of that Region's Availability Zones — which is exactly what we will do next, when we carve it into subnets. AWS does hand every account a ready-made default VPC so you can start quickly, but any serious deployment defines its own, deliberately. So the VPC is the container that everything network-related lives inside. The first thing you do with that empty network is divide it up — into public and private subnets.",
}
