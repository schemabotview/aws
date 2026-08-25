import type { Scene } from '../../render-engine'

// payments — §9 (Phase 2 · Design). The integration design: how money moves reliably BETWEEN the two
// worlds. The detail the overview can't show: the transfer SAGA drawn as a Step Functions workflow
// (validate → debit → credit → confirm/compensate — a distributed multi-step operation made reliable),
// then the EventBridge FAN-OUT that decouples what happens next (SNS notify the customer, SQS queue
// downstream work, Kinesis stream to the §8 analytics/fraud pipeline). Orchestration + choreography.
export const payments: Scene = {
  id: 'payments',
  padding: 0.14,
  nodes: [
    { id: 'request', label: 'Transfer request', pattern: 'service', icon: 'receipt', sub: 'from the core banking app' },
    {
      id: 'saga',
      label: 'Step Functions · the transfer saga',
      pattern: 'service',
      icon: 'stepfunctions',
      sub: 'reliable multi-step · retries & compensation',
      flow: 'LR',
      children: [
        { id: 'validate', label: 'Validate', pattern: 'service', icon: 'shieldcheck', sub: 'funds & limits', variant: 'tile' },
        { id: 'debit', label: 'Debit source', pattern: 'service', icon: 'receipt', sub: 'from account', variant: 'tile' },
        { id: 'credit', label: 'Credit dest', pattern: 'service', icon: 'receipt', sub: 'to account', variant: 'tile' },
        { id: 'confirm', label: 'Confirm / compensate', pattern: 'service', icon: 'circlecheck', sub: 'or roll back', variant: 'tile' },
      ],
      edges: [
        { source: 'validate', target: 'debit' },
        { source: 'debit', target: 'credit' },
        { source: 'credit', target: 'confirm' },
      ],
    },
    { id: 'eb', label: 'EventBridge', pattern: 'service', icon: 'eventbridge', sub: 'emits "transfer.completed"' },

    // Fan-out — decoupled consumers
    { id: 'sns', label: 'SNS', pattern: 'service', icon: 'sns', sub: 'notify the customer (fan-out)' },
    { id: 'sqs', label: 'SQS', pattern: 'service', icon: 'sqs', sub: 'queue downstream work' },
    { id: 'kinesis', label: 'Kinesis', pattern: 'service', icon: 'kinesis', sub: 'stream to fraud & analytics (§8)' },
  ],
  // Orchestrate the saga, then fan the completion event out to three decoupled consumers.
  edges: [
    { source: 'request', target: 'saga' },
    { source: 'saga', target: 'eb' },
    { source: 'eb', target: 'sns' },
    { source: 'eb', target: 'sqs' },
    { source: 'eb', target: 'kinesis' },
  ],
}
