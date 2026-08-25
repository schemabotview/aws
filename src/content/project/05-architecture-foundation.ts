import type { Section } from '../types'

export const architectureFoundation: Section = {
  id: 'architecture-foundation',
  title: 'The architecture — the ground',
  scene: 'nova-architecture',
  slide: `## The architecture — the ground

**Requirements done — now we design.** Here is **all of NovaBank on one page** — every service that satisfies them, wired together. We'll read it top-down over two sections. First, the **ground and the front door**: how customers reach the bank, and what the bank sits on.

### The front door (edge · AWS-managed)
- **Route 53 → CloudFront** — DNS and the CDN edge, closest to the customer
- **WAF · Shield** — filter bad web requests, absorb DDoS, *before* traffic reaches you
- **Cognito** — customer sign-in (the customer-facing mirror of IAM)
- **API Gateway** — the single REST front door into the app

### The ground (accounts + network)
- **Organizations** — the bank is split into isolated accounts (Prod · Dev/Test · Security · Log-archive); a hard blast-radius boundary
- **Region · eu-west-1 · Prod** — a **VPC** (\`10.0.0.0/16\`) spanning **2 AZs**, behind the **Internet Gateway**
- **Public** (\`/24\`) — ALB, NAT only · **Private·app** (\`/20\`) — ECS/Lambda · **Private·data** (\`/24\`) — Aurora, cache: **no internet route**
- **Gateway endpoints** (S3 · DynamoDB) keep private traffic off the open internet

**Composes:** Organizations & IAM (Course 2), Regions/AZs (Course 1), VPC & subnets (Course 5), edge & Cognito (Courses 5·9).`,
  narration:
    "The requirements are pinned down — the transactional core, the analytics world, and the quality bar over both — so now we design, mapping every one of those needs onto real AWS services. Here is the whole of NovaBank on a single page — every service we'll use, wired together into one system. Don't try to absorb all of it at once; we're going to read this diagram top to bottom across two sections. In this one we cover the ground and the front door — how a customer actually reaches the bank, and what the bank sits on. Start at the top, with the customer, and follow the path down into the edge layer. This is all AWS-managed, and it lives out in front of everything else. A request first hits Route 53, our DNS, which hands it to CloudFront, the content-delivery edge that sits physically close to the customer. On the way in, two guards are already at work: WAF inspects each web request against a set of rules and drops the malicious ones, and Shield absorbs denial-of-service attacks — both acting before traffic ever reaches our own servers. Customers prove who they are through Cognito, which is the customer-facing mirror of the IAM you learned in the identity course. And every legitimate call funnels through a single front door, API Gateway. That's how you get in. Now look at what all of it rests on — the ground, which is the landing zone. Two pieces. First, the account structure: using AWS Organizations, the bank is split into separate, isolated accounts — Prod for the live workload, a separate Dev and Test account, a dedicated Security account, and an immutable Log-archive — so that a mistake or a breach in one is contained and can't spill into the others. Second, the network. Inside the Prod account, in the eu-west-1 Region, we run a VPC — our own private slice of the AWS network — spanning two Availability Zones so the loss of a whole zone can't take the bank down. Traffic enters through the Internet Gateway into the public subnets, which hold only the internet-facing pieces: the load balancer and the NAT gateway. Everything that matters lives in the private subnets — the application tier, and beneath it the data tier with the databases — and those private subnets have no direct route to the internet at all. Gateway endpoints let them reach services like S3 and DynamoDB over Amazon's own backbone instead of the open internet. So that's the ground and the front door: isolated accounts, a multi-AZ VPC with a sealed data tier, and a guarded edge. In the next section we go inside — the app itself, and how every feature composes on top of this foundation.",
}
