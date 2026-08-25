import type { Section } from '../types'

export const ec2Pricing: Section = {
  id: 'ec2-pricing',
  title: 'EC2 — purchase options',
  scene: 'ec2-pricing',
  slide: `## EC2 — purchase options

The **same instance** can cost wildly different amounts depending on *how you buy it*. This is real money and a real skill.

### The four ways to pay
- **On-Demand** — pay per second, no commitment. **Flexible, most expensive.** For spiky/short/unpredictable work
- **Spot** — bid on AWS's **spare capacity**, up to ~**90% off** — but it can be **reclaimed with 2 min notice**. For fault-tolerant, interruptible work (batch, CI, big data)
- **Reserved Instances** — commit to a type for **1–3 years** for a big discount. For **steady, always-on** baseline load
- **Savings Plans** — commit to a **\$/hour** of compute for 1–3 yrs; more **flexible** than RIs, similar discount

### The strategy
- Cover your **steady baseline** with Savings Plans/Reserved, handle **spikes** with On-Demand, run **interruptible** work on Spot
- Recall Course 1: **an idle instance still bills** — right-size and turn off`,
  narration:
    "Here is something that surprises people: the exact same instance — same type, same performance — can cost dramatically different amounts depending purely on how you purchase it. There are four ways to pay, and knowing them is genuinely one of the highest-leverage cost skills on AWS. The first is On-Demand. You pay by the second with zero commitment, start and stop whenever you like. It is the most flexible and the most expensive per hour, and it is the right choice for short-lived, spiky, or unpredictable workloads, and for anything you are just experimenting with. The second is Spot. Here you tap into AWS's spare, unused capacity at a massive discount — often up to ninety percent off the On-Demand price. The catch is right there in the name: AWS can reclaim that capacity whenever it needs it, giving your instance just a two-minute warning before shutting it down. So Spot is perfect for fault-tolerant, interruptible work that can pick up where it left off — big data processing, batch jobs, continuous integration runners, rendering — and completely wrong for, say, your primary database. The third is Reserved Instances. You commit to a specific instance type in a specific region for a one- or three-year term, and in exchange you get a large discount, up to around seventy percent. This is for your steady, always-on baseline — the servers you know you will be running around the clock for years. The fourth, and the more modern flavor of commitment, is Savings Plans. Instead of committing to a specific instance type, you commit to spending a certain dollar amount per hour on compute for one or three years, and you get a similar discount but with far more flexibility — you can change instance types and even move between EC2, Fargate, and Lambda while keeping the discount. The winning strategy combines them: cover your predictable baseline load with Savings Plans or Reserved Instances for the deep discount, absorb your variable spikes with On-Demand, and run your interruptible batch work on cheap Spot. And never forget the lesson from foundations — an instance that is running but idle still bills you every hour, so right-size your instances and turn off what you do not need. Alright: you can now run a single server, and pay for it intelligently. But a single server is a single point of failure and cannot handle a traffic surge. The next idea is how you run many, resiliently.",
}
