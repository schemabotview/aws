import type { Section } from '../types'

export const securityGroupsNacls: Section = {
  id: 'security-groups-nacls',
  title: 'Security Groups vs NACLs',
  scene: 'vpc-security',
  slide: `## Security Groups vs NACLs

Routing decides where traffic may **go**; firewalls decide what may **pass**. A VPC gives you **two**, at two levels.

### Security Group — the instance firewall
- Wraps a **single resource** (an EC2 instance / its network interface)
- **Stateful** — allow an inbound request and its **response is automatically allowed back** (no return rule)
- **Allow-only** — rules say what's permitted; the rest is implicitly denied. Can reference **other SGs** (web-tier → db-tier)

### Network ACL — the subnet firewall
- Guards the **whole subnet** boundary — applies to everything inside
- **Stateless** — no memory, so you write **both directions** (inbound *and* the outbound return)
- **Allow + Deny**, in numbered order (first match) — the only way to **explicitly block** an IP range

### The order
- An inbound packet clears the subnet's **NACL** → then the instance's **SG** → then reaches the instance. SG is your everyday tool; NACL is a coarse edge guardrail`,
  narration:
    "Routing decides where traffic is allowed to travel; firewalls decide what is actually allowed to pass. Inside a VPC you get two kinds of firewall, operating at two different levels, and telling them apart is one of the most classic AWS questions there is. The first is the security group, and it is a firewall at the instance level — it wraps an individual resource, like a single EC2 instance, or more precisely its network interface. Two things define it. It is stateful, which means it remembers connections: if you allow an inbound request, the response is automatically allowed back out, without you writing a matching return rule. And it is allow-only — you write rules for what is permitted, and everything else is implicitly denied; there is no such thing as a deny rule in a security group. A lovely feature is that you can reference another security group as the source, so you can say allow the web tier's security group to talk to the database tier's security group, without hardcoding any IP addresses. The second firewall is the network ACL, or NACL, and it operates at the subnet level — it guards the boundary of an entire subnet, so its rules apply to everything inside that subnet at once. It differs from the security group on exactly the two points that define it. It is stateless: it has no memory of connections, so for any traffic you must write rules in both directions — an inbound rule to let the request in, and a separate outbound rule to let the response back out. And it supports both allow and deny rules, evaluated in numbered order with the first match winning — which means a NACL is the one place you can explicitly block a specific IP address or range, something a security group simply cannot do. Now trace an inbound packet through both. It arrives at the subnet and first meets the NACL; if the NACL allows it, it proceeds to the instance and meets its security group; and only if that also allows it does the packet finally reach the instance. Two layers of filtering, defense in depth. In practice, the security group is your primary, everyday tool — you will create and tune these constantly — while the NACL is a coarser, secondary guardrail at the subnet edge that most teams leave at its defaults or use only for broad blocks like banning a bad IP range. We have now built a network, carved it into subnets, routed it, and firewalled it. It is time to put it all together and trace a real user request end to end.",
}
