import type { Scene } from '../../render-engine'

// §3 event-sources — how events actually reach a Lambda, which comes in exactly THREE models, and the
// model decides the retry/error semantics. SYNCHRONOUS: the caller invokes and waits for the response
// (API Gateway, ALB, Function URLs) — no automatic retries, the error goes back to the caller.
// ASYNCHRONOUS: the source hands Lambda the event and returns immediately (S3, SNS, EventBridge) —
// Lambda queues it and retries twice on failure, with a dead-letter queue for the rest. POLL-BASED /
// event source mapping: Lambda polls the source and invokes with batches (SQS, Kinesis, DynamoDB
// Streams). Drawn as three labelled source lanes fanning IN to one Lambda — the sub lines carry each
// model's wait/retry behaviour.
export const eventSources: Scene = {
  id: 'event-sources',
  padding: 0.16,
  nodes: [
    {
      id: 'sync',
      label: 'Synchronous',
      pattern: 'network',
      sub: 'caller waits · no auto-retry',
      cols: 2,
      children: [
        { id: 'apigw', label: 'API Gateway', pattern: 'network', icon: 'apigateway', variant: 'tile' },
        { id: 'alb', label: 'ALB', pattern: 'network', icon: 'elb', variant: 'tile' },
      ],
    },
    {
      id: 'async',
      label: 'Asynchronous',
      pattern: 'external',
      sub: 'queued · retries ×2 · DLQ',
      cols: 2,
      children: [
        { id: 's3', label: 'S3', pattern: 'storage', icon: 's3', variant: 'tile' },
        { id: 'sns', label: 'SNS', pattern: 'external', icon: 'sns', variant: 'tile' },
        { id: 'eb', label: 'EventBridge', pattern: 'external', icon: 'eventbridge', variant: 'tile' },
      ],
    },
    {
      id: 'poll',
      label: 'Poll-based',
      pattern: 'service',
      sub: 'Lambda polls · batches of records',
      cols: 2,
      children: [
        { id: 'sqs', label: 'SQS', pattern: 'service', icon: 'sqs', variant: 'tile' },
        { id: 'streams', label: 'DynamoDB Streams', pattern: 'storage', icon: 'dynamodb', variant: 'tile' },
      ],
    },
    { id: 'lambda', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'one function · three ways in' },
  ],
  // Three invocation models all land on the same function; the model sets the retry/error contract.
  edges: [
    { source: 'sync', target: 'lambda' },
    { source: 'async', target: 'lambda' },
    { source: 'poll', target: 'lambda' },
  ],
}
