import type { Section } from '../types'

export const policies: Section = {
  id: 'policies',
  title: 'Policies & the evaluation',
  scene: 'policies',
  slide: `## Policies & the evaluation

A **policy** is a JSON document of **allow/deny** statements. IAM evaluates every one that applies and returns a single verdict.

### What a statement says
- **Effect** (Allow / Deny) · **Action** (\`s3:GetObject\`) · **Resource** (which bucket) · optional **Condition** (from this IP, with MFA)

### The evaluation logic — memorize this
- **1 · Explicit \`Deny\`** anywhere → **denied.** A deny always wins, full stop
- **2 · Explicit \`Allow\`** that matches → **allowed**
- **3 · Otherwise** → **default (implicit) deny.** Nothing is permitted until something grants it

### The consequence
- You build access by **adding Allows**; you carve exceptions with **Denies** that override them
- Start closed, grant deliberately — this is what makes **least privilege** practical`,
  narration:
    "Now the decision itself, which comes down to policies. A policy is a document, written in JSON, containing one or more statements, and each statement is a rule about what is permitted. A single statement has a few key parts: an Effect, which is either Allow or Deny; an Action, like s3 GetObject, naming the specific operation; a Resource, saying which thing it applies to, like one particular storage bucket; and optionally a Condition, an extra constraint such as only from this IP address, or only if multi-factor authentication was used. When a request comes in, IAM gathers every policy that applies to that principal and that resource, and evaluates them together to produce one verdict — and the logic it uses is precise, and worth committing to memory, because it explains every access decision you will ever debug. Step one: if any applicable statement says explicitly Deny, the request is denied, immediately and unconditionally. An explicit deny always wins — nothing can override it. Step two: if there is no explicit deny, IAM looks for an explicit Allow that matches; if one exists, the request is allowed. Step three: if neither applies — no deny, no matching allow — the request is denied by default. This last point is the cornerstone: everything on AWS is implicitly denied until some policy explicitly grants it. You start from nothing and add permissions deliberately. The practical consequence shapes how you work: you build up someone's access by attaching Allow statements for exactly what they need, and when you want to carve out a sharp exception — say, allow broad access but never let anyone delete the audit logs — you use an explicit Deny, knowing it will override any allow. And this default-deny, deny-wins design is exactly what makes least privilege — granting only what is genuinely needed and nothing more — a practical, achievable goal rather than a slogan. So there is the whole model: a principal asks, policies are evaluated, and the resource is touched or the request is blocked. Now let's go one level deeper into how those policies are actually written — the two places a policy can live.",
}
