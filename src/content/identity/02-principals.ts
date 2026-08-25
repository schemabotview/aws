import type { Section } from '../types'

export const principals: Section = {
  id: 'principals',
  title: 'Principals — root, users, roles',
  scene: 'principals',
  slide: `## Principals — root, users, roles

A **principal** is any identity that can make a request. Three kinds — and the difference matters enormously.

### Root user
- The account owner (your sign-up email) — **unlimited, unrestricted** power
- **Lock it away**: enable MFA, never use it for daily work, create other identities instead

### IAM user
- A **long-lived** identity for a person or app — a name, a password and/or **access keys**
- Put users in **groups** (\`Developers\`, \`Admins\`) and attach the policy to the *group*, not each user

### Role
- An identity with **no long-lived credentials** — it's **assumed** to get **temporary** ones
- The modern default: **AWS services** (EC2, Lambda), **cross-account** access, **federated** users

Rule: humans sign in (increasingly via SSO); **software uses roles, never long-lived keys.**`,
  narration:
    "Let's start with the principal — the who. A principal is any identity capable of making a request, and there are three kinds you must be able to tell apart. First is the root user. Every account is born with one, tied to your sign-up email, and it has total, unlimited, unrestricted power — it can do absolutely anything, including things no other identity can, like closing the account or changing billing. Precisely because it is so powerful, the universal best practice is to lock it away: turn on multi-factor authentication for it, and then never use it for day-to-day work. You create other, limited identities for that. Second is the IAM user. This is a long-lived identity representing a specific person or an application — it has a name, and credentials: a password for console sign-in, and or access keys, which are a long-lived key pair that code can use to authenticate. Now an important organizing tool: rather than attaching permissions to each user one by one, you put users into groups — a Developers group, an Admins group — and attach the policies to the group, so everyone in it inherits them. That keeps permissions manageable as your team grows. Third, and increasingly the star of the show, is the role. A role is an identity that has no long-lived credentials of its own. Instead, it is assumed — temporarily taken on — and doing so hands out short-lived credentials that expire. Roles are the modern, preferred way to grant access for three big cases: to AWS services themselves, so that an EC2 instance or a Lambda function can act with permissions without you embedding any keys in it; for cross-account access, letting an identity in one account operate in another; and for federated users, people who sign in through an external identity system. The guiding rule that ties the three together: human beings sign in, more and more through single sign-on, which we'll reach shortly — but software should use roles, never long-lived access keys baked into it. So that is who does the asking. Now, what actually decides whether the answer is yes or no?",
}
