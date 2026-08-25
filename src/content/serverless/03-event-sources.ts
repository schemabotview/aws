import type { Section } from '../types'

export const eventSources: Section = {
  id: 'event-sources',
  title: 'Event sources — how Lambda is triggered',
  scene: 'event-sources',
  slide: `## Event sources — how Lambda is triggered

A function does nothing until something invokes it. Events arrive in **three models**, and the model sets the **retry & error** rules.

### Synchronous — the caller waits
- **API Gateway · ALB · Function URLs · SDK invoke** — caller blocks for the response
- **No automatic retries** — the error returns to the caller, which decides what to do

### Asynchronous — fire and forget
- **S3 · SNS · EventBridge** — the source hands off the event and returns immediately
- Lambda **retries twice** with backoff; persistent failures go to a **dead-letter queue** or destination

### Poll-based — event source mapping
- **SQS · Kinesis · DynamoDB Streams** — Lambda **polls** the source and invokes with **batches**
- Ordering & scaling follow the source (per shard / per message group); report partial batch failures

**Why it matters:** the same code, invoked three ways — but retries, ordering, and error handling differ, so know which model your trigger uses.`,
  narration:
    "A Lambda function just sits there until something invokes it, so the next thing to understand is how events actually reach it — and there are exactly three models. This matters more than it first sounds, because the model isn't just about who calls the function; it determines what happens when the function fails, how retries work, and whether order is preserved. The first model is synchronous invocation. Here the caller invokes your function and waits for the response, holding the line until your code returns a result. This is what API Gateway does when it fronts your function for an HTTP API, and it's also how Application Load Balancers, Function URLs, and direct SDK invokes work. The key property of synchronous invocation is that there are no automatic retries — if your function errors, the error is handed straight back to the caller, and it's the caller's job to decide whether to try again. The second model is asynchronous invocation. Here the source hands the event to Lambda and immediately returns, without waiting for your function to run — it's fire and forget. Services like S3, when a file is uploaded, SNS, and EventBridge invoke asynchronously. Because nobody is waiting, Lambda takes responsibility for reliability: it queues the event internally and, if your function fails, it automatically retries up to two more times with a backoff between attempts. If it still fails after that, the event can be sent to a dead-letter queue or a destination so it isn't silently lost. The third model is poll-based, also called an event source mapping, and it's a little different because here Lambda does the work of fetching. Lambda continuously polls the source on your behalf and then invokes your function with batches of records. This is how SQS queues, Kinesis data streams, and DynamoDB Streams work. With these, ordering and scaling follow the source — for streams, order is preserved per shard and you get one concurrent invocation per shard; for SQS you scale out with the queue depth — and you can report partial batch failures so that the records that did succeed aren't reprocessed. So the takeaway is that it's the same function code, but it can be invoked three different ways, and each way comes with its own contract for retries, ordering, and error handling. When you wire up a trigger, know which model it uses. The most common trigger of all, though, is an HTTP request from the outside world, and that deserves its own section: the API Gateway front door, next.",
}
