import type { Section } from '../types'

export const policyTypes: Section = {
  id: 'policy-types',
  title: 'Identity vs resource policies',
  scene: 'policy-types',
  slide: `## Identity vs resource policies

Policies attach in **two places**, answering the permission question from **two directions**.

### Identity policy
- Attached **to a principal** (user, group, or role) — says *what **they** can do*
- "This role may read any object in the \`uploads\` bucket"

### Resource policy
- Attached **to the resource itself** — says *who may touch **it***
- "This bucket may be read by account 123… and no one else" — an **S3 bucket policy**, a KMS key policy, etc.
- The only way to grant access **across accounts** without a role, and to say *public*

### Least privilege in practice
- Prefer **managed policies** AWS maintains; scope actions & resources **narrowly**; add **conditions**
- Start from **zero** and grant deliberately — access is a design, not a pile`,
  narration:
    "Policies attach in two different places, and understanding the two directions clears up a lot of confusion. The first and most common is an identity policy, sometimes called an identity-based policy. This one attaches to a principal — a user, a group, or a role — and it describes what that identity is allowed to do. For example, a policy on a role that says this role may read any object in the uploads bucket. You read it from the actor's point of view: here is what they can do, wherever they go. The second kind is a resource policy, or resource-based policy, and it flips the perspective: it attaches to the resource itself and describes who is allowed to touch it. The classic example is an S3 bucket policy that says this bucket may be read by account one-two-three and by nobody else; key policies on encryption keys work the same way. Resource policies do two things identity policies can't. They are how you grant access across account boundaries without setting up a role to assume — the resource simply names another account as trusted. And they are how you make something genuinely public, like a website bucket that anyone on the internet may read — which is also, notoriously, how buckets get accidentally exposed, so resource policies deserve careful attention. In real systems you often use both together, and a request is permitted when the combination allows it, always subject to that deny-wins rule from a moment ago. Whichever kind you are writing, least privilege is the discipline: lean on the managed policies AWS writes and maintains for common jobs; scope your actions and resources as narrowly as you can rather than reaching for wildcards; and add conditions to tighten further. Start from zero and grant deliberately — think of access as something you design, not a pile you accumulate. That covers what an identity can do. The more powerful idea, the one that makes modern AWS security work, is how a role actually hands out those temporary credentials we keep promising to explain.",
}
