import type { Section } from '../types'

export const whatIsServerless: Section = {
  id: 'what-is-serverless',
  title: 'What is serverless?',
  scene: 'what-is-serverless',
  slide: `## What is serverless?

Compute (Course 3) ran your code on servers you sized and scaled. **Serverless removes the server from view.**

### You write a function — AWS runs everything
- **No servers** to provision, patch, or manage — you hand AWS the code
- **Automatic scaling** from zero to thousands of concurrent runs, in seconds
- **Pay per use** — billed per request and per millisecond; **idle costs nothing**
- **Built-in HA** — runs across AZs by default, no cluster to design

### AWS Lambda is the canonical serverless compute
- Ideal for **event-driven, bursty, or unpredictable** work — the opposite trade-off to a 24/7 EC2 fleet
- The rest of the course wires Lambda to the services it reacts to and talks to

**The shift:** from *renting a server and keeping it running* to *handing over a function and paying only when it runs.*`,
  narration:
    "Welcome to serverless. Back in the compute course, you learned to run your code on servers — EC2 instances that you choose, size, patch, and scale, usually behind a load balancer and an auto-scaling group. That model is powerful, but it always leaves you holding a server. Serverless is the model that removes the server from view entirely. The idea is simple and, the first time you really get it, a little bit magical: you write just a function — a small piece of code that does one job — and you hand it to AWS, and AWS takes care of absolutely everything around it. It provides the runtime your code executes in, it gives your function an identity and a network, and it runs your code whenever something triggers it. You never provision a machine, you never patch an operating system, you never write scaling logic. And there are four things worth pinning down about what that buys you. First, no servers — there is genuinely no instance for you to manage, nothing to keep patched or secured at the OS level. Second, automatic scaling — your function scales from zero, meaning nothing running at all, up to thousands of concurrent executions in seconds, and back down again, with no configuration from you. Third, and this is the one that changes how you think about cost: you pay per use. You're billed per request and per millisecond of execution, and when your code isn't running, you pay nothing at all — there is no idle server quietly costing you money between requests. And fourth, high availability is built in — your function runs across multiple Availability Zones automatically, so you don't design a cluster to survive a failure. The canonical serverless compute service on AWS, and the star of this course, is AWS Lambda. Lambda shines exactly where a permanently-running EC2 fleet is the wrong shape: work that is event-driven, that comes in bursts, or that is unpredictable — reacting to a file upload, handling an API request, processing a message off a queue. It's the opposite trade-off to a server that runs twenty-four seven. So the shift to hold in your head is this: we're moving from renting a server and keeping it running, to handing over a function and paying only when it actually runs. Over the rest of the course we'll open up how a Lambda function works, how events reach it, and how you wire it together with the other services to build whole applications. We start next by looking inside the function itself.",
}
