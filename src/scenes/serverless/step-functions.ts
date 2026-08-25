import type { Scene } from '../../render-engine'

// §6 step-functions — orchestration. Messaging (§5) is fire-and-forget hand-offs between components;
// but some processes are an ordered SEQUENCE of steps with branching, retries and error handling, and
// coordinating that in application code (a Lambda calling a Lambda calling a Lambda) gets brittle fast.
// AWS Step Functions is a managed STATE MACHINE: you declare the steps and the transitions, and it
// runs the workflow — invoking each step, waiting, retrying on failure, branching on a Choice, and
// tracking exactly where every execution is. Drawn as the state machine itself: a flow of steps with a
// Choice fanning to two outcomes (validate → charge → paid? → fulfil / cancel).
export const stepFunctions: Scene = {
  id: 'step-functions',
  padding: 0.16,
  nodes: [
    { id: 'order', label: 'Order placed', pattern: 'user', icon: 'bell', sub: 'starts an execution' },
    {
      id: 'sm',
      label: 'Step Functions · state machine',
      pattern: 'service',
      icon: 'stepfunctions',
      sub: 'ordered steps · retries · error handling · branching',
      children: [
        { id: 'validate', label: 'Validate', pattern: 'service', icon: 'lambda', sub: 'step 1', variant: 'tile' },
        { id: 'charge', label: 'Charge', pattern: 'service', icon: 'lambda', sub: 'step 2 · retry on error', variant: 'tile' },
        { id: 'choice', label: 'Paid?', pattern: 'network', icon: 'gitbranch', sub: 'Choice state', variant: 'tile' },
        { id: 'fulfil', label: 'Fulfil', pattern: 'service', icon: 'lambda', sub: 'on success', variant: 'tile' },
        { id: 'cancel', label: 'Cancel', pattern: 'service', icon: 'lambda', sub: 'on failure', variant: 'tile' },
      ],
      // The workflow: a sequence into a Choice that branches to two outcomes.
      edges: [
        { source: 'validate', target: 'charge' },
        { source: 'charge', target: 'choice' },
        { source: 'choice', target: 'fulfil' },
        { source: 'choice', target: 'cancel' },
      ],
    },
  ],
  // An event starts an execution of the state machine.
  edges: [{ source: 'order', target: 'validate' }],
}
