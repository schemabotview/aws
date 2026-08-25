import type { Section } from '../types'

export const connecting: Section = {
  id: 'connecting',
  title: 'Connecting beyond one VPC',
  scene: 'vpc-connecting',
  slide: `## Connecting beyond one VPC

Everything so far lived inside **one** VPC. Real systems reach beyond it — the question is always **what** you connect to.

### Another VPC
- **VPC Peering** — a direct, private, **1:1** link (private IPs, no internet). Simple, but **non-transitive** → a mesh at scale
- **Transit Gateway** — a **hub** every VPC (and on-prem) connects to **once**; it routes between them all. Hub-and-spoke, not a tangle

### Your data center (hybrid)
- **Site-to-Site VPN** — an **encrypted tunnel over the internet**. Quick & cheap, but subject to internet variability
- **Direct Connect** — a **dedicated private fibre** into AWS. Bypasses the internet → consistent low latency, higher cost/setup

### AWS services, privately
- **VPC Endpoints / PrivateLink** — reach S3, DynamoDB, and more over **private links that never touch the internet** (often a compliance must)`,
  narration:
    "Everything we have built so far lives inside a single VPC. But real systems almost never stay in one VPC — they connect to other networks, and AWS gives you a specific tool for each kind of connection. The trick is to always ask one question first: what am I connecting to? There are three answers. The first is another VPC. You have two options. VPC Peering creates a direct, private, one-to-one link between two VPCs, so their resources talk to each other over private IP addresses without ever touching the internet. It is simple, but it has a catch: peering is non-transitive, meaning if A peers with B and B peers with C, A still cannot reach C. So connecting many VPCs by peering becomes an unmanageable mesh of point-to-point links. The scalable answer is the Transit Gateway: a central hub that every VPC — and your on-premises network too — connects to just once, and the hub routes traffic between all of them. It turns a tangle of connections into clean hub-and-spoke. The second thing you connect to is your own data center — this is hybrid cloud, and again you get two options that trade cost against quality. Site-to-Site VPN builds an encrypted tunnel over the public internet between your data center and your VPC; it is quick to set up and inexpensive, but it rides the public internet, so its performance varies. Direct Connect is a dedicated, private physical fibre connection running from your premises straight into AWS, bypassing the internet entirely — you get consistent low latency and high bandwidth, at the cost of more money and weeks of setup. A common pattern is to run a cheap VPN as an automatic backup to a Direct Connect link. The third thing you connect to is AWS services themselves, but privately. By default, when a resource in your VPC calls a service like S3, that call goes out to a public endpoint over the internet. VPC Endpoints, powered by a technology called PrivateLink, let your VPC reach AWS services over private connections that never leave the AWS network — which is more secure and is frequently required for compliance. So: peering or Transit Gateway for other VPCs, VPN or Direct Connect for your data center, and endpoints or PrivateLink for private access to services. That is how you connect out privately. The final piece of networking is the opposite direction — how you let the whole public internet reach you, quickly, from anywhere on Earth. That is the edge.",
}
