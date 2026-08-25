import type { Scene } from '../../render-engine'

// §5 messaging — the glue that lets serverless components talk without depending on each other
// directly. Three services, three shapes. SQS: a QUEUE — a producer drops messages, one consumer
// pulls them at its own pace (point-to-point, buffered, decoupled). SNS: a pub/sub TOPIC — one publish
// FANS OUT to many subscribers at once (one-to-many). EventBridge: an event BUS — events are ROUTED to
// targets by rules that match on content (many-to-many, content-based). Drawn as three stacked lanes,
// each flowing left→right so the topology is legible: SQS one→one, SNS and EventBridge one→many (the
// fan that distinguishes them from a plain queue).
export const messaging: Scene = {
  id: 'messaging',
  padding: 0.16,
  nodes: [
    {
      id: 'sqs-lane',
      label: 'SQS · queue',
      pattern: 'service',
      sub: 'buffer · one consumer pulls at its pace',
      flow: 'LR',
      children: [
        { id: 'sqs-prod', label: 'Producer', pattern: 'user', icon: 'code', variant: 'tile' },
        { id: 'sqs-q', label: 'Queue', pattern: 'service', icon: 'sqs', variant: 'tile' },
        { id: 'sqs-worker', label: 'Worker', pattern: 'service', icon: 'lambda', variant: 'tile' },
      ],
      edges: [
        { source: 'sqs-prod', target: 'sqs-q' },
        { source: 'sqs-q', target: 'sqs-worker' },
      ],
    },
    {
      id: 'sns-lane',
      label: 'SNS · topic',
      pattern: 'external',
      sub: 'pub/sub · one publish fans out to many',
      flow: 'LR',
      children: [
        { id: 'sns-pub', label: 'Publisher', pattern: 'user', icon: 'code', variant: 'tile' },
        { id: 'sns-topic', label: 'Topic', pattern: 'external', icon: 'sns', variant: 'tile' },
        { id: 'sns-a', label: 'Subscriber', pattern: 'service', icon: 'lambda', variant: 'tile' },
        { id: 'sns-b', label: 'Subscriber', pattern: 'service', icon: 'lambda', variant: 'tile' },
      ],
      edges: [
        { source: 'sns-pub', target: 'sns-topic' },
        { source: 'sns-topic', target: 'sns-a' },
        { source: 'sns-topic', target: 'sns-b' },
      ],
    },
    {
      id: 'eb-lane',
      label: 'EventBridge · bus',
      pattern: 'external',
      sub: 'rules route events to targets by content',
      flow: 'LR',
      children: [
        { id: 'eb-src', label: 'Event', pattern: 'user', icon: 'bell', variant: 'tile' },
        { id: 'eb-bus', label: 'Bus', pattern: 'external', icon: 'eventbridge', variant: 'tile' },
        { id: 'eb-a', label: 'Target', pattern: 'service', icon: 'lambda', variant: 'tile' },
        { id: 'eb-b', label: 'Target', pattern: 'service', icon: 'lambda', variant: 'tile' },
      ],
      edges: [
        { source: 'eb-src', target: 'eb-bus' },
        { source: 'eb-bus', target: 'eb-a' },
        { source: 'eb-bus', target: 'eb-b' },
      ],
    },
  ],
  edges: [],
}
