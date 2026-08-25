import type { Section } from '../types'

export const messaging: Section = {
  id: 'messaging',
  title: 'Messaging — SQS, SNS & EventBridge',
  scene: 'messaging',
  slide: `## Messaging — SQS, SNS & EventBridge

The glue of serverless: let components talk **without depending on each other directly** — decoupling.

### SQS — a queue (point-to-point)
- A producer drops messages; **one consumer** pulls them at its own pace
- **Buffers** load spikes and survives a slow or down consumer — work waits safely in the queue

### SNS — a topic (pub/sub, fan-out)
- One **publish** is delivered to **many subscribers** at once — one-to-many
- Subscribers can be Lambda, SQS queues, HTTP endpoints, email — each gets its own copy

### EventBridge — an event bus (routing)
- Events flow onto a **bus**; **rules** match on content and **route** each to the right targets
- Deep AWS-service integration + scheduled events — the backbone of event-driven architectures

**Pick by shape:** buffer work → **SQS** · notify many → **SNS** · route by event content → **EventBridge**. Often combined (e.g. SNS → SQS fan-out).`,
  narration:
    "Once you have more than one function, they need to talk to each other, and the serverless way to do that is not to have them call each other directly — that couples them together, so if one is slow or down, it drags the other with it. Instead you put a messaging service in between, which decouples the producer of work from the consumer of it. There are three to know, and the key is that each has a different shape. The first is SQS, Simple Queue Service, and it's a queue. A producer drops messages into the queue, and a consumer pulls them off and processes them at its own pace. That's point-to-point: one message, one consumer. The magic of a queue is buffering and resilience — if a sudden spike dumps ten thousand messages in, they sit safely in the queue and the consumer works through them steadily instead of being overwhelmed; and if the consumer crashes, the messages wait patiently until it comes back. Nothing is lost, and the two sides never have to be up at the same time. The second is SNS, Simple Notification Service, and it's a pub/sub topic. Here the shape is one-to-many: a publisher sends a single message to a topic, and SNS fans it out, delivering a copy to every subscriber at once. Those subscribers can be Lambda functions, SQS queues, HTTP endpoints, or email and SMS. So SNS is what you reach for when one event needs to notify several independent things simultaneously — an order is placed, and you want to update inventory, email the customer, and kick off shipping, all in parallel. The third is EventBridge, and it's an event bus with routing. Events from your applications or from AWS services themselves flow onto a bus, and you write rules that match on the content of each event and route it to the right targets. It's the most flexible of the three — it understands events from dozens of AWS services natively, it can run things on a schedule, and its content-based routing makes it the backbone of a serious event-driven architecture. So how do you choose? Match the shape to your need: use SQS when you want to buffer work and have one consumer process it reliably; use SNS when one thing happens and many subscribers each need to know; and use EventBridge when you want to route events to different targets based on what the event actually contains. And you often combine them — a classic pattern is SNS fanning out into several SQS queues, one per downstream system. Messaging handles fire-and-forget hand-offs between components. But some processes are a sequence of steps that must happen in order, with branching and error handling — and coordinating those is a job for Step Functions, which is next.",
}
