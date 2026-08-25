import type { Section } from '../types'

export const routing: Section = {
  id: 'routing',
  title: 'Routing — route tables & gateways',
  scene: 'routing',
  slide: `## Routing — route tables & gateways

What actually makes a subnet public or private is its **route table** — rules of *destination → target*.

### The pieces
- Every table has a built-in **local route** — VPC-range traffic stays local, so subnets can talk (always on)
- **Internet Gateway (IGW)** — the VPC's door to the internet. A subnet is **public** exactly when its table routes \`0.0.0.0/0 → IGW\`
- **NAT Gateway** — lives in a **public** subnet; gives private subnets **outbound-only** internet: \`0.0.0.0/0 → NAT\`. Out yes, in **no**

### The two paths out
- **Private** app server: **outbound-only** — \`app → NAT → IGW → internet\` (nothing initiates *in*)
- **Public** load balancer: **two-way** — accepts inbound *and* sends outbound, straight through the \`IGW\``,
  narration:
    "In the last section I said what makes a subnet public or private is its routing — so let us make that concrete. Every subnet is associated with a route table, and a route table is nothing more than a list of rules, each saying: for traffic headed to this destination, send it to this target. Every route table comes with one rule built in that you cannot remove, called the local route: any traffic destined for the VPC's own address range stays inside the VPC. That is what lets all your subnets talk to each other freely, and it is always on. Now, to reach the outside world, you need a gateway. The Internet Gateway — the IGW — is a component you attach to your VPC, and it is the doorway between your private network and the public internet. And here is the precise definition we have been building toward: a subnet is public exactly when its route table has a rule sending 0.0.0.0/0 — which is shorthand for everything, the whole internet — to that Internet Gateway. That single route is the entire difference. Add it and the subnet is public; leave it out and the subnet is private. Private subnets deliberately lack that route, so nothing on the internet can reach in. But there is a catch: your application servers in those private subnets still need to reach out — to download security updates, to call an external API. That is the job of the NAT Gateway. A NAT gateway sits in a public subnet, and your private subnets route their internet-bound traffic, 0.0.0.0/0, to it instead of to the IGW. The NAT lets a private resource start an outbound connection to the internet and receive the response, but it flatly refuses any connection started from the internet coming inward. Outbound, yes; inbound, no. So trace the two paths and the whole picture snaps together. A private app server reaching out goes app, to NAT gateway in the public subnet, to Internet Gateway, to the internet — and back. A public-facing load balancer just goes straight out through the Internet Gateway. Routing decides where traffic is allowed to go. The other half of network security is a firewall deciding what is allowed to pass — and that is security groups and network ACLs.",
}
