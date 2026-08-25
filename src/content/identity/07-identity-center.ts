import type { Section } from '../types'

export const identityCenter: Section = {
  id: 'identity-center',
  title: 'IAM Identity Center — one login',
  scene: 'identity-center',
  slide: `## IAM Identity Center — one login

IAM users don't scale to a real workforce. **IAM Identity Center** (formerly AWS SSO) is how humans actually sign in today.

### The problem it solves
- A company has **many people** and **many accounts** — an IAM user per person per account is a nightmare to manage and secure

### How it works
- One **SSO portal**: a user logs in **once** and sees every account + role they're entitled to
- Behind the scenes they **assume a role** in the target account — still the same IAM model, delivered cleanly
- **MFA** central, access **time-bound**, de-provisioning is **one place**

### Where identities come from
- A built-in directory, **or** your existing one **federated** in — the topic of the next section`,
  narration:
    "Everything so far — users, groups, policies, roles — works beautifully for a single account and a handful of identities. But now picture a real company: hundreds of employees, and, as we discussed back in foundations, many separate AWS accounts for production, development, testing, and more. If your only tool were the IAM user, you would be creating a separate user for every person in every account, each with its own password to manage, its own MFA to set up, its own lifecycle to track when someone joins or leaves. That is an operational and security nightmare, and it simply does not scale. IAM Identity Center, which you will still sometimes see called by its old name AWS SSO, is the answer, and it is how humans actually sign in to AWS in any serious organization today. The core idea is single sign-on. Each person logs in one time, to one portal, and is presented with all the accounts and all the roles they are entitled to across the whole organization — they click the one they want and they are in. Notice what is happening underneath: when they enter an account, they are assuming a role there, receiving temporary credentials, exactly the model we just built up. Identity Center is not a new permission system; it is a clean, centralized front door that delivers the same underlying IAM roles without the per-account user sprawl. The benefits are exactly what you would hope: multi-factor authentication is enforced centrally in one place; access is temporary and time-bound rather than standing; and when someone leaves the company, you de-provision them once, centrally, and their access everywhere evaporates — no hunting through dozens of accounts for forgotten users. And where do the identities themselves come from? Identity Center can keep its own built-in directory of users, or — far more commonly in larger companies — it can connect to the identity system you already have, like your corporate directory or a provider such as Okta, and pull those identities in. That connection is called federation, and together with the reusable templates that define access, it is what the next section is about.",
}
