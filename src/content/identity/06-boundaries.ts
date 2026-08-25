import type { Section } from '../types'

export const boundaries: Section = {
  id: 'boundaries',
  title: 'Permission boundaries — the ceiling',
  scene: 'boundaries',
  slide: `## Permission boundaries — the ceiling

A **permission boundary** caps the **maximum** permissions a principal can ever have — no matter what its policies say.

### The mental model
- Effective permissions = **(identity policies) ∩ (boundary)** — the *overlap*, never more than the boundary
- A policy grants \`s3:*\` but the boundary allows only \`s3:GetObject\`? → they get **read only**

### What it's for
- **Safe delegation** — let a team lead create IAM users/roles, but *never* ones more powerful than the boundary you set
- A guardrail **within** an account — SCPs (§10) are the guardrail **across** accounts

### The layered picture
- **Identity + resource policies** grant · **boundaries** cap the principal · **SCPs** cap the whole account — a request must pass **all** applicable layers`,
  narration:
    "The last permissions concept is the permission boundary, and it answers a question that comes up the moment an organization grows: how do you let someone create identities and grant permissions, without letting them accidentally or deliberately grant more power than they themselves should be able to hand out? A permission boundary is a special policy that sets a ceiling — the maximum permissions a principal can ever have, regardless of what its other policies say. The mental model is an intersection. A principal's effective permissions are the overlap between what its identity policies grant and what its boundary allows — and never anything outside the boundary. So if you attach a policy that generously grants full S3 access, but the boundary only permits reading objects, the principal ends up with read-only access, because that is the overlap. The grant cannot exceed the ceiling. What is this actually for? The headline use is safe delegation. Imagine you want to let each team lead create IAM users and roles for their own team, so you are not a bottleneck — but you are nervous about handing out the power to create identities, because someone could create a new user with administrator access and escalate. The solution is to require that everything they create carries a permission boundary you define, capping it. Now they can freely create and manage identities, but none of those identities can ever be more powerful than the boundary allows. It is a guardrail operating within a single account. And that word guardrail is worth holding onto, because there is a bigger one coming that works across entire accounts — service control policies — which we will reach at the end of this course. It is worth seeing the layered picture as a whole: identity and resource policies grant permissions, permission boundaries cap an individual principal, and service control policies, which we will meet shortly, cap an entire account — and a request has to make it past every applicable layer to succeed. That completes how permissions are authored. Now let's scale this up to the reality of a real organization: not one person in one account, but many people needing access across many accounts. That is what IAM Identity Center is for.",
}
