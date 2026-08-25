import type { Section } from '../types'

export const wellRun: Section = {
  id: 'well-run',
  title: 'The well-run system',
  scene: 'governance-board',
  slide: `## The well-run system

The whole operate loop as one board. Pick the tool by asking: **which part of the loop am I in?**

### Observe
- **CloudWatch** (metrics & logs) · **CloudTrail** (API audit) · **Config** (state & compliance)

### Automate
- **CloudFormation / CDK** (infra as code) · **CodePipeline** (CI/CD)

### Optimize
- **Cost Explorer** (analyse) · **Savings Plans / Spot** (commit) · **Budgets** (alert)

### Recover
- **AWS Backup** (backups) · **multi-Region DR** (matched to your RTO/RPO)

### The operate mindset
- Operations is a **continuous loop**, not a one-off — automate the boring, measure everything, rehearse failure
- Extends **shared responsibility**: AWS runs the cloud; **running your workload well is yours**
- A well-run system is **boring** — observable, repeatable, affordable, and resilient

**Build it right (Courses 1–9), then run it right (this course) — and in Course 11 you'll ship one end to end.**`,
  narration:
    "Let's close the course by putting the whole operate loop together on one board, because just like security, operations is a system, not a bag of unrelated tools. Recall the loop from the first section and now fill each part with what we've learned. Observe: you watch the system's health with CloudWatch metrics and logs, you keep an audit trail of who did what with CloudTrail, and you track how resources are configured and whether they're compliant with Config. Automate: you define your infrastructure as code with CloudFormation or the CDK, and you ship your software through an automated CI/CD pipeline with CodePipeline, so both your infrastructure and your releases are repeatable and reviewable. Optimize: you keep the bill in check by analysing spend with Cost Explorer, committing to steady usage with Savings Plans and using Spot for interruptible work, and guarding against surprises with Budgets. And recover: you make the system survivable with AWS Backup and a disaster-recovery strategy matched to your RTO and RPO. The way to use this board in practice is the same move as the security board: when an operational question comes up, ask which part of the loop you're in, and the right service is obvious. Need to know why the site is slow? Observe — CloudWatch. Tired of building infrastructure by hand? Automate — CloudFormation. Bill too high? Optimize — Cost Explorer. Worried about a Region going down? Recover — a DR strategy. And the mindset that ties it all together is that operations is a continuous loop, never a one-and-done: you automate the boring and repetitive so humans don't make mistakes, you measure everything so you're never guessing, and you rehearse failure so a real one is routine. This is the other side of the shared responsibility model we've returned to again and again — AWS runs the cloud itself reliably, and running your particular workload well is your job. The paradoxical goal, remember, is to make operations boring: a system that's observable, repeatable, affordable, and resilient simply doesn't generate drama. So step back and see the whole shape of what you've built across these ten courses: you learned to build a system — compute, storage, networking, data, and serverless — to secure it, and now to operate it well. There's one course left, and it's the one that ties everything together: the capstone project, where you'll take all of this and ship a real, complete system on AWS, end to end.",
}
