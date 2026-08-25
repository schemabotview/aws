import type { Section } from '../types'

export const stepFunctions: Section = {
  id: 'step-functions',
  title: 'Step Functions — orchestration',
  scene: 'step-functions',
  slide: `## Step Functions — orchestration

Messaging hands work off. But a **multi-step process** — ordered, branching, needing retries — wants coordination.

### A managed state machine
- You declare the **steps** and the **transitions**; Step Functions runs the workflow
- It **invokes** each step, **waits**, **retries** on failure, and **branches** on a **Choice** state
- It tracks **exactly where every execution is** — visible, auditable, resumable

### Why not just chain Lambdas?
- Lambda-calling-Lambda buries the workflow in code, with no visibility and hand-rolled retries
- Step Functions makes the flow **explicit** — error handling, timeouts, and parallel branches are config, not code

### Two flavours
- **Standard** — long-running (up to 1 year), exactly-once, full audit history — business workflows
- **Express** — high-volume, short (≤ 5 min), cheap — event processing & streaming

**Use it when:** a process is a sequence of steps with order, branching, and failure handling that must be reliable and observable.`,
  narration:
    "Messaging is great for firing off work and forgetting about it, but a lot of real processes aren't a single hand-off — they're a sequence of steps that has to happen in a particular order, with decisions in the middle and proper handling when something fails. Think of processing an order: validate it, charge the card, and then, depending on whether the payment succeeded, either fulfil the order or cancel it and notify the customer. You could write that as one Lambda calling another Lambda calling another, but that approach gets brittle fast — the shape of the workflow is buried inside your code, you can't see where a given order is in the process, and you end up hand-rolling retries and error handling everywhere. This is exactly what AWS Step Functions is for. Step Functions is a managed state machine: instead of coding the coordination, you declare the steps and the transitions between them — this step, then that step, and if this condition is true go here, otherwise go there — and Step Functions runs the whole workflow for you. It invokes each step, it waits for it to finish, it automatically retries a step that fails according to rules you set, it branches at a Choice state based on the data, and, crucially, it tracks exactly where every single execution is at any moment. You get a visual picture of the workflow and a full history of each run, which makes the whole thing observable and auditable in a way that a tangle of Lambdas calling each other never is. The mental shift is that the workflow becomes explicit configuration — the order of steps, the error handling, the timeouts, the parallel branches — rather than logic hidden in application code. There are two flavours to know. Standard workflows are for long-running business processes: they can run for up to a year, they guarantee exactly-once execution, and they keep a full audit history. Express workflows are for high-volume, short-duration work — up to five minutes, much cheaper per run — ideal for event processing and streaming ingestion. So reach for Step Functions whenever you have a process that is a sequence of steps with real ordering, branching, and failure handling that you need to be reliable and to be able to see into. We've now built up every piece of the serverless toolkit — functions, triggers, the API front door, messaging, and orchestration. In the final section, we put them together into a complete event-driven application and talk about when serverless is the right call.",
}
