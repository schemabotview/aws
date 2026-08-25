import type { Scene } from '../../render-engine'

// §2 lambda — inside the function. A Lambda is defined by four things: the HANDLER (the entry point AWS
// calls per invocation), the RUNTIME (the language environment — Python, Node, Java, Go…), the
// EXECUTION ROLE (the IAM identity that decides what the function may touch), and its CONFIGURATION
// (memory, timeout ≤15 min, env vars). The lifecycle is event → handler → response: an event triggers
// the function, AWS runs your handler in a warm-reusable execution environment, and returns the result.
// It scales from zero to thousands of concurrent runs and bills per millisecond. Drawn as the flow
// event → Lambda ⊃ (the four parts as a 2×2) → response.
export const lambda: Scene = {
  id: 'lambda',
  padding: 0.16,
  nodes: [
    { id: 'event', label: 'Event', pattern: 'external', icon: 'bell', sub: 'a trigger fires' },
    {
      id: 'fn',
      label: 'Lambda function',
      pattern: 'service',
      icon: 'lambda',
      sub: 'scales 0→N concurrent · billed per ms',
      cols: 2,
      children: [
        { id: 'handler', label: 'Handler', pattern: 'service', icon: 'code', sub: 'entry point · per invocation', variant: 'tile' },
        { id: 'runtime', label: 'Runtime', pattern: 'service', icon: 'cpu', sub: 'Python · Node · Java · Go', variant: 'tile' },
        { id: 'role', label: 'Execution role', pattern: 'service', icon: 'key', sub: 'IAM · what it may access', variant: 'tile' },
        { id: 'config', label: 'Config', pattern: 'service', icon: 'gauge', sub: 'memory · timeout ≤15 min · env', variant: 'tile' },
      ],
    },
    { id: 'response', label: 'Response', pattern: 'external', icon: 'circlecheck', sub: 'result returned' },
  ],
  // The lifecycle: an event triggers the function, the handler runs, a response comes back.
  edges: [
    { source: 'event', target: 'fn' },
    { source: 'fn', target: 'response' },
  ],
}
