import type { Section } from '../types'

export const eventDrivenApp: Section = {
  id: 'event-driven-app',
  title: 'The event-driven application',
  scene: 'serverless-stack',
  slide: `## The event-driven application

Every piece composed into one app — **with no server anywhere in it**, each part scaling to zero.

### The picture
- **Sync API**: Client → **API Gateway** → **Lambda** → **DynamoDB** — request in, state out
- The API Lambda **emits an event** to **EventBridge**, whose rule starts a **Step Functions** workflow
- **Async**: an **S3** upload triggers a processing **Lambda** — a second, independent entry point
- Glue it with **SQS/SNS** where you need buffering or fan-out

### When serverless
- **Reach for it:** event-driven, bursty, or unpredictable work; small teams; pay-per-use economics
- **Think twice:** steady high-utilisation load, long-running (> 15 min) or sustained-CPU jobs → containers/EC2
- **Cold starts & the 15-min cap** are the constraints to design around

**The whole course in one line:** hand AWS a function, wire it to the services it reacts to and talks to, and pay only when it runs.`,
  narration:
    "Let's bring the whole course together, because the real power of serverless shows up when the pieces combine. Picture a single application, and notice as we walk it that there is not one server anywhere in the design — every component scales to zero and bills only when it's working. It starts with the synchronous path you already know: a client makes an HTTPS request, API Gateway receives it as the front door, it invokes a Lambda function that runs your business logic, and that function reads and writes application state in DynamoDB. Request in, response out — that's a complete serverless API on its own. But now we make it event-driven. When that Lambda handles something significant — say an order is placed — it doesn't try to do everything itself; it emits a domain event to EventBridge. An EventBridge rule matches that event and kicks off a Step Functions workflow that handles fulfilment — validate, charge, ship — as an orchestrated, observable sequence. Meanwhile, off to the side, there's a completely separate entry point into the same system: a user uploads a file to S3, and that upload asynchronously triggers a different Lambda that processes the file. Two independent triggers, one synchronous and one asynchronous, feeding a system that's all functions and managed services, stitched together with EventBridge — and where you needed buffering or fan-out, you'd drop in SQS or SNS. That's the shape of a modern event-driven application on AWS. So when should you build this way? Reach for serverless when your workload is event-driven, bursty, or unpredictable, when you're a small team that doesn't want to run infrastructure, and when pay-per-use economics fit — you pay nothing when idle, which is transformative for spiky traffic. Think twice when you have steady, high-utilisation load running around the clock, because at constant high usage the per-invocation pricing eventually costs more than a reserved server; or when you have long-running jobs that exceed Lambda's fifteen-minute limit, or work that pins the CPU continuously — those belong on the containers or EC2 from the compute course. And the two constraints to keep in mind and design around are cold starts, that first-invocation latency, and that fifteen-minute ceiling. But when the shape fits, serverless lets a tiny team build and run something that scales enormously with almost no operational burden. And that's the whole course in a single line: you hand AWS a function, you wire it to the services it reacts to and talks to, and you pay only when it actually runs.",
}
