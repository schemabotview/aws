import type { Section } from '../types'

export const subnets: Section = {
  id: 'subnets',
  title: 'Subnets — public & private, across AZs',
  scene: 'subnets',
  slide: `## Subnets — public & private, across AZs

An empty VPC is one big address space. You divide it into **subnets** — and place them deliberately.

### One subnet, one AZ
- A subnet is a **slice of the VPC's CIDR** (\`10.0.1.0/24\`), and each subnet lives in **exactly one AZ**
- So subnets map your network onto the physical zones — put them in **≥ 2 AZs** for high availability (the Multi-AZ idea, at the network layer)

### Public vs private
- **Public subnet** — has a path to the internet. Put the **front door** here: load balancers, bastion hosts
- **Private subnet** — no direct path in from the internet. Put **workloads** here: app servers &, above all, **databases** — shielded
- The standard pattern: across AZs, a **public + private** pair each — data sits **two layers deep**`,
  narration:
    "A brand-new VPC is just one big block of address space. The first thing you do with it is divide it up into subnets. A subnet is simply a slice of the VPC's IP range — if your VPC is 10.0.0.0/16, a subnet might be 10.0.1.0/24, a smaller chunk of that. And here is the defining rule, the one that matters most: each subnet lives in exactly one Availability Zone. It cannot span zones. That means subnets are precisely how your network maps onto the physical Availability Zones we learned about in foundations — and it is why, for high availability, you always create subnets in at least two different AZs, so that if a whole zone fails, you still have working subnets in another. It is the Multi-AZ idea again, now expressed at the network layer. The second distinction is just as important: public versus private subnets. What actually makes a subnet public or private is its routing, which we will nail down in the next section, but conceptually it comes down to one thing — does it have a path to the internet. A public subnet does. It is where you put internet-facing resources: your load balancer, which needs to accept traffic from the world, and things like a bastion host. Resources here can have public IP addresses. A private subnet has no direct path in from the internet. This is where your actual workloads belong — your application servers and, most importantly, your databases — so that they are shielded, invisible and unreachable from the outside. They can still reach out when they need to, through a NAT gateway we will meet next, but nobody out on the internet can reach in. The pattern you will see in essentially every well-built AWS network is this: across two or three Availability Zones, a public subnet and a private subnet in each. The public subnets hold the front door — the load balancer — and the private subnets hold the application and the database behind it. Your data ends up sitting two layers deep, which is defense in depth done at the network level. Now, what actually turns a subnet public or private, and how traffic finds its way in and out, comes down to routing — route tables and gateways.",
}
