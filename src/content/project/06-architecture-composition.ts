import type { Section } from '../types'

export const architectureComposition: Section = {
  id: 'architecture-composition',
  title: 'The architecture — how it composes',
  scene: 'nova-architecture',
  slide: `## The architecture — how it composes

Same diagram, now the **inside**: how the features compose on top of the ground. The edge fans into **two data worlds**, both feed the **event plane**, and **security & operations** underpins all of it.

### The app core (OLTP)
- **ECS/Fargate · Lambda** in the private app subnets — the core banking API
- **Aurora** (accounts & ledger) · **DynamoDB** (sessions) · **ElastiCache** (hot reads)

### Events & analytics — the two worlds
- **Events & integration** — EventBridge · SQS · SNS · Step Functions orchestrate a transfer; **Kinesis** streams every transaction
- **Fraud & analytics (OLAP)** — Kinesis → **S3 lake** → **Glue** → **Athena/Redshift** → **QuickSight**; real-time fraud scoring on the stream

### The base (cross-cutting)
- **Secure** — KMS · Secrets Manager · GuardDuty · Macie · IAM, everywhere
- **Operate** — CloudWatch · CloudTrail · Config · CloudFormation · CodePipeline

**Composes:** compute (3), databases (6), serverless (7), data-engineering (8), security (9), governance (10) — each block is a later section.`,
  narration:
    "Same diagram — now we go inside it. Everything past the front door composes on top of the ground we just laid, and it falls into two data worlds that sit side by side, with a shared foundation underneath. Follow the arrows down from the edge. The first world is the transactional core — the running bank, what databases people call OLTP. In the private application subnets, the core banking API runs on containers, ECS with Fargate, and on Lambda functions for the event-driven pieces. Just beneath it, in the data subnets, sits the state: Aurora holds the accounts and the ledger, the money that has to be correct to the penny; DynamoDB handles high-volume key-value work like sessions; and ElastiCache keeps the hottest reads in memory so the app stays fast. That's the bank doing its job in real time. The second world is fraud and analytics — the understanding-the-data side, what we call OLAP. Every transaction is also streamed, through Kinesis, off to a separate pipeline: it lands in an S3 data lake, Glue catalogs and transforms it, and then Athena queries it directly in place while Redshift serves the heavy warehouse workloads, with QuickSight drawing the dashboards on top. This is where real-time fraud scoring happens — the flagship feature — analyzing the transaction stream as it flows, without ever slowing down the core banking app. Between these two worlds sits the integration plane: EventBridge routing domain events, SQS and SNS carrying and fanning out messages, and Step Functions orchestrating a multi-step operation like a transfer as a reliable workflow. That's how a payment moves and how the fraud pipeline gets fed. And underneath all of it runs the cross-cutting base — the two things that touch every single box above. Security: KMS encrypting data everywhere, Secrets Manager holding credentials, GuardDuty watching for threats, Macie finding exposed personal data, and IAM enforcing least privilege across the board. And operations: CloudWatch for metrics and logs, CloudTrail and Config for the audit and compliance trail, and CloudFormation with CodePipeline so the whole system is defined as code and deployed automatically. So that's NovaBank, whole: a guarded edge, an isolated multi-account landing zone, a transactional core and an analytics pipeline as two worlds, an event plane joining them, and security and operations beneath everything. Every block you see here is a section still to come — from here on, we build it for real, one piece at a time.",
}
