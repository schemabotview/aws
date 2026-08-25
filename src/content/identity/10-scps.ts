import type { Section } from '../types'

export const scps: Section = {
  id: 'scps',
  title: 'SCPs — org-wide guardrails',
  scene: 'scps',
  slide: `## SCPs — org-wide guardrails

A **Service Control Policy (SCP)** is a **ceiling on an entire account** — the guardrail that makes multi-account governance real.

### What it does
- Attached to an **OU or account**, it sets the **maximum** permissions **anyone** inside can have — not even root rises above it
- **It grants nothing** — it only **bounds** what identity policies can do (like a permission boundary, but for the whole account)

### The classic guardrails
- "**No one** may operate **outside \`eu-west-1\`**" — data residency, in one policy across every account
- "**Deny** disabling **CloudTrail** or **deleting audit logs**" — protect the record (Course 10)
- "Block services we haven't approved"

### The whole course, in one line
- A request is allowed only if **SCP** ∩ **permission boundary** ∩ an **identity/resource** grant all permit it — and **no** explicit **Deny** appears anywhere`,
  narration:
    "Here is the sharpest tool Organizations gives you: the service control policy, or SCP. An SCP is a guardrail that sets the maximum permissions for an entire account — a ceiling that no one inside that account can rise above, not a regular user, not an administrator, not even the account's root user. You attach it to an OU or to an individual account, and it caps everything beneath it. The single most important thing to understand about an SCP is that it grants nothing. It only bounds. It is exactly like the permission boundary we met earlier, but operating at the level of a whole account rather than a single principal. So permissions still have to be granted the normal way, by identity and resource policies inside the account — the SCP just defines the outer limit of what those grants are even allowed to reach. Let me give you the classic examples, because they make it click. You can write an SCP that says no one in this account may operate outside the eu-west-1 region, full stop — and now, no matter what anyone's individual policies say, every action outside Ireland is blocked, which is a clean way to enforce data-residency law across dozens of accounts at once. You can write one that denies the ability to disable CloudTrail or delete the audit logs, so that even a compromised administrator cannot cover their tracks — we will care a lot about that in the governance course. You can block entire categories of services your company has not approved. These are organization-wide guarantees that hold regardless of the messy details of individual permissions underneath. And now we can assemble the entire mental model of this course into a single sentence, the layered check that every request runs. A request succeeds only if all of these agree: the service control policy permits it, and the permission boundary permits it, and an identity or resource policy actually grants it — and no explicit deny appears at any layer, because a deny anywhere always wins. That is who may do what on AWS, from a single API call all the way up to a policy spanning an entire enterprise. With foundations giving us where things run and this course giving us who may touch them, we are ready to start building. The next course is compute — the services that actually run your work.",
}
