import type { Section } from '../types'

export const rolesAssume: Section = {
  id: 'roles-assume',
  title: 'Roles & AssumeRole',
  scene: 'roles-assume',
  slide: `## Roles & AssumeRole

A **role** is a set of permissions **anyone trusted can borrow** — for a short time, with no permanent keys.

### How it works
- A role has **two parts**: a **permissions policy** (what it can do) + a **trust policy** (who may assume it)
- A trusted principal calls **\`sts:AssumeRole\`** → **STS** issues **temporary credentials** that **auto-expire** (minutes–hours)

### Why this is the modern default
- **No long-lived keys to leak** — creds are short-lived and minted on demand
- **Services carry roles** — an EC2 instance profile / a Lambda execution role acts *as* the role, keys never touch your code
- **Cross-account & federation** — assume a role in another account to operate there; external users assume a role to get in

This is why *"software uses roles, not keys."* One more guardrail sits **above** all of this — the boundary.`,
  narration:
    "So here is how a role actually works, and it is genuinely one of the most elegant ideas in AWS. Think of a role as a set of permissions that sits there, belonging to no one in particular, that any trusted party is allowed to temporarily borrow. A role is defined by two policies. One is its permissions policy — the ordinary identity policy we just discussed, describing what the role can do. The other is special, and it is called the trust policy: it names who is allowed to assume this role in the first place. So a role says, in effect, here is what I can do, and here is who is permitted to become me. When a trusted principal wants to use the role, it makes a call named sts:AssumeRole — STS being the Security Token Service — and in return, STS mints a fresh set of temporary security credentials that carry the role's permissions and that automatically expire after a short window, anywhere from a few minutes to a few hours. After that, they are useless. Now step back and see why this pattern has become the default for almost everything. First, there are no long-lived keys sitting around to be leaked, because the credentials are short-lived and generated on demand — even if one leaked, it would expire almost immediately. Second, and this is the big one, AWS services carry roles: you attach a role to an EC2 instance through what is called an instance profile, or to a Lambda function as its execution role, and the service automatically assumes that role and receives rotating temporary credentials, so your application code makes AWS calls with proper permissions without you ever putting a single access key into it. That eliminates the most common serious credential leak there is. Third, roles are how cross-account access works — an identity in one account assumes a role in another to operate there — and how federation works, where a user authenticated by an external system assumes a role to get temporary access to AWS. This is the concrete reason behind the rule we stated earlier: software should use roles, never embedded long-lived keys. There is one more piece of the permissions picture, a guardrail that sits above everything we have described — the permission boundary.",
}
