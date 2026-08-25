import type { Section } from '../types'

export const auditConfig: Section = {
  id: 'audit-config',
  title: 'CloudTrail & Config — audit and compliance',
  scene: 'audit-config',
  slide: `## CloudTrail & Config — audit and compliance

Metrics say *something's wrong*. These two say **who did it** and **what changed**.

### CloudTrail — who did what
- Logs **every API call** in the account: console, CLI, SDK, service-to-service
- Records **who** (identity), **what** action, **when**, and **from where** — an **immutable** audit trail to S3
- The first thing you open after an incident — "who deleted that bucket?"

### Config — what changed & is it compliant
- Records the **configuration state** of every resource **over time** — a timeline of every change
- **Config Rules** continuously check resources against policy: *no public S3 buckets*, *volumes must be encrypted*
- Flags **non-compliant** resources and can **auto-remediate** them

### CloudWatch vs CloudTrail vs Config
- **CloudWatch** — is it healthy? (metrics & logs) · **CloudTrail** — who did what? (API audit) · **Config** — what changed & compliant? (state)

**Together:** CloudWatch watches behaviour, CloudTrail records actions, Config tracks state — the three lenses of observability.`,
  narration:
    "CloudWatch tells you how your system is behaving, but it doesn't tell you who changed something or whether your setup still meets your rules. For that there are two more services, and they're the accountability half of observability. The first is CloudTrail, and the simplest way to think about it is as your account's flight recorder — its black box. CloudTrail logs every single API call made in your account, and almost everything on AWS is an API call: someone clicking a button in the console, a script running through the CLI, an application using the SDK, even one AWS service calling another. For each of those, CloudTrail records who did it — which IAM identity — what action they took, when, and from what IP address. And that trail is immutable and delivered to an S3 bucket for safekeeping. This is the first thing you reach for when something goes wrong or looks suspicious: someone deleted a production bucket, an instance was launched in a strange region — CloudTrail answers who did what, and when. It's essential for security investigations and for compliance audits. The second service is AWS Config, and where CloudTrail records actions, Config records state. Config continuously tracks the configuration of every resource in your account and keeps a history of it over time, so you can pull up any resource and see exactly what it looked like last week, and precisely when and how it changed. But Config's real power is Config Rules: you define rules that express your policies — no S3 bucket may be public, every EBS volume must be encrypted, every instance must have a particular tag — and Config continuously evaluates all your resources against those rules, flagging anything non-compliant, and it can even automatically remediate the violation, for instance re-enabling encryption or removing public access. So let's nail down the distinction between the three observability services, because they're easy to confuse. CloudWatch answers is it healthy — it's about metrics and logs and performance. CloudTrail answers who did what — it's the audit log of API activity. And Config answers what changed and is it compliant — it's about resource state and policy. You use all three together: CloudWatch watches behaviour, CloudTrail records the actions, and Config tracks the state and enforces the rules. That's observability complete. Now we move from watching the system to automating it — starting with treating your infrastructure itself as code.",
}
