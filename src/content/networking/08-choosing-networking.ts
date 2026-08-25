import type { Section } from '../types'

export const choosingNetworking: Section = {
  id: 'choosing-networking',
  title: 'Designing a network — the decisions',
  scene: 'choosing-networking',
  slide: `## Designing a network — the decisions

No single spectrum here — a network is a handful of **decisions**. These are the levers (and the exam favourites).

### The four calls
- **Placement** — public or private subnet? Only internet-facing things (LB, bastion) go **public**; app servers & databases go **private** by default
- **Firewall** — **Security Group** (instance, stateful, your everyday tool) vs **NACL** (subnet, coarse guardrail, mostly defaults)
- **Connect VPCs** — **Peering** for two; a **Transit Gateway** hub before it becomes a mesh
- **Reach out** — **VPC Endpoints / PrivateLink** for AWS services privately; **VPN** (cheap) or **Direct Connect** (dedicated) for your data center

### You can now build the whole thing
- A VPC · public/private subnets across AZs · routing · two firewalls · the request path · connections out · the edge — a complete, secure production network`,
  narration:
    "Let's pull the whole course together the way you will actually use it — as the handful of decisions you make when you design a network. There are four, plus the edge. The first decision is placement: for each resource, does it go in a public or a private subnet? The rule is simple and worth internalizing — only the things that genuinely must be reached from the internet, your load balancers and the occasional bastion host, belong in a public subnet; everything else, and above all your application servers and your databases, goes in a private subnet by default. Public is the exception, not the rule. The second decision is firewalls: security group or network ACL? Almost always the answer is the security group — it is the instance-level, stateful, allow-only firewall you will configure constantly. You leave network ACLs at their defaults unless you specifically need a coarse, subnet-wide block, like banning a range of IP addresses. The third decision is connecting VPCs: peering or Transit Gateway? For just two VPCs, peering is simple and direct. But the moment you have more than a couple, or you want to fold in your on-premises network, you reach for a Transit Gateway hub, before peering turns into an unmanageable mesh. The fourth decision is how you reach out: to talk to AWS services privately, you use VPC endpoints and PrivateLink; to connect to your own data center, you choose VPN when you want cheap and quick, or Direct Connect when you want dedicated and fast. And wrapping all of it, to get users in quickly from around the world, you put Route 53 and CloudFront at the edge. As always, there is rarely one universally right answer — there is a right answer for a given system, and these are the levers you pull. So step back and see how far you have come. You can now design a VPC, carve it into public and private subnets spread across Availability Zones, route traffic with gateways, protect it with two layers of firewall, trace a user request end to end through it, connect it to other VPCs and to your own data center, and serve it to the whole planet at the edge. That is a complete, secure, production-grade network. Compute runs your code, storage keeps your data, and networking connects and delivers it all. The one thing your application still needs is a proper home for its structured data — somewhere to store it durably and query it fast. That is the next course: databases.",
}
