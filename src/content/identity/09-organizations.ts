import type { Section } from '../types'

export const organizations: Section = {
  id: 'organizations',
  title: 'Organizations & OUs',
  scene: 'organizations',
  slide: `## Organizations & OUs

**AWS Organizations** manages **many accounts as one tree** — the backbone of multi-account AWS.

### The structure
- A **management account** at the root, with **member accounts** joined under it
- Group accounts into **Organizational Units (OUs)** — e.g. \`Prod\`, \`Dev\`, \`Sandbox\` — and manage them by group

### Why many accounts (recap from Course 1)
- **Isolation** — a blast radius per account; a mishap in \`Sandbox\` can't reach \`Prod\`
- **Clarity** — separate billing, separate limits, separate teams

### What Organizations gives you
- **Consolidated billing** — one bill, shared volume discounts across all accounts
- **Central governance** — a policy applied to an OU hits **every** account inside it (next: SCPs)`,
  narration:
    "We have now handled identities and human access. The last layer of the identity story zooms all the way out to the accounts themselves, and the service that manages them is AWS Organizations. We have mentioned since the very first course that real teams run many AWS accounts rather than one — production isolated from development isolated from experiments — so that a mistake in one cannot spill into another, and so billing and limits and teams stay cleanly separated. Organizations is the tool that lets you manage that whole fleet of accounts as a single structured tree instead of a pile of disconnected logins. At the root of the tree sits one special account called the management account, and every other account joins underneath it as a member account. To keep things organized as the number grows, you group accounts into Organizational Units, or OUs — you might have a Prod OU holding your production accounts, a Dev OU for development, a Sandbox OU for free experimentation — and you can then manage each group as a unit rather than account by account. What does bringing accounts into an Organization actually buy you? Two big things, plus a third we will expand on next. The first is consolidated billing: instead of a separate invoice per account, you get one combined bill for the whole organization, and because your usage is pooled, you automatically qualify for volume discounts that individual accounts could not reach on their own. The second is central governance: you can apply a policy to an entire OU and have it take effect across every account inside it at once, which is how you enforce rules consistently without visiting each account. And Organizations is also the foundation for higher-level tools like Control Tower, which automates the setup of a well-governed multi-account environment, a so-called landing zone — that is a topic for the governance course later in the series. So you have one tree of accounts, billed together and governed centrally. The single sharpest governance tool that Organizations puts in your hands is the service control policy, and it deserves its own moment.",
}
