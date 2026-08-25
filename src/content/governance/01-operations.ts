import type { Section } from '../types'

export const operations: Section = {
  id: 'operations',
  title: 'Operations — running what you built',
  scene: 'operate-loop',
  slide: `## Operations — running what you built

Courses 1–9 were about **building**. This course is about **running** — the "Day 2" work that never stops.

### The operate loop
- **Observe** — is it healthy? metrics, logs, and the audit trail (CloudWatch · CloudTrail · Config)
- **Automate** — build & ship repeatably, no click-ops (CloudFormation / CDK · CI/CD)
- **Optimize** — keep the bill under control (right-sizing · Savings Plans · Cost Explorer)
- **Recover** — survive failure without losing data (DR strategies · AWS Backup)

### Why it's a loop
- Operations is **continuous** — you observe, you improve, you observe again
- Extends **shared responsibility** (foundations §8): the *cloud* is AWS's job; **operating your workload well is yours**
- Well-run systems make operations **boring** — automated, measured, and rehearsed

**The rest of the course walks the loop** — observability, audit, IaC, CI/CD, cost, and resilience.`,
  narration:
    "Congratulations — over the first nine courses you've learned to build a complete system on AWS: compute, storage, networking, databases, serverless, analytics, and security. But building a system is only half the story. The other half, the half that never ends, is running it — and that's what this course is about. In the industry people call it Day 2: Day 1 is when you launch, and Day 2 is every day after that, when you have to keep the thing healthy, keep improving it, keep it affordable, and keep it alive through failures. Good operations is what separates a demo from a real production service. And the useful way to think about operations is as a loop — a continuous cycle of four activities wrapped around your running system, that you go around again and again. The first is observe. You cannot manage what you cannot see, so the foundation of operations is visibility: collecting metrics on how your system is performing, gathering logs, and keeping an audit trail of who did what and what changed. On AWS that's CloudWatch, CloudTrail, and Config, and it's where we'll start. The second is automate. Doing things by hand — clicking around the console to create infrastructure, manually copying code to servers — doesn't scale and isn't repeatable, so you automate both sides: your infrastructure becomes code with CloudFormation or the CDK, and your releases become an automated pipeline with CI/CD. The third is optimize, and here that mostly means cost: the cloud's pay-as-you-go model is a gift, but left unwatched the bill creeps up, so you continuously right-size, buy commitment discounts like Savings Plans, and watch spend with Cost Explorer and Budgets. And the fourth is recover: things will fail — a disk, an Availability Zone, occasionally a whole Region — and operations means being ready, with a disaster-recovery strategy and backups, so a failure is a shrug rather than a catastrophe. Now, why a loop and not a checklist? Because operations is never done. You observe, you find something to improve, you automate or optimize it, and then you observe the result — around and around. And this ties directly back to the shared responsibility model from the very first course: AWS runs the cloud itself reliably, but operating your particular workload well — watching it, automating it, controlling its cost, making it resilient — that part is squarely your responsibility. The goal, paradoxically, is to make operations boring: so automated, so well-measured, and so well-rehearsed that nothing is ever a surprise. Over the next sections we'll walk the loop one stage at a time, beginning with observability and the service at its heart, CloudWatch.",
}
