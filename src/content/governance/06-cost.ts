import type { Section } from '../types'

export const cost: Section = {
  id: 'cost',
  title: 'Cost — optimizing the spend',
  scene: 'cost',
  slide: `## Cost — optimizing the spend

Pay-as-you-go (foundations §9) is a gift — but unwatched, the bill creeps. Two halves: **pay less**, and **see & control**.

### Pay less — the three levers
- **Right-size** — match instance size to real usage, and **kill idle** resources (the biggest easy win)
- **Savings Plans / Reserved Instances** — commit to **1–3 years** of usage for a big discount (~up to 72%)
- **Spot** — bid on AWS's **spare capacity** for up to **~90% off**; interruptible, so use for fault-tolerant/batch work

### See & control — the tools
- **Cost Explorer** — analyse and **forecast** where the money goes, by service/tag/account
- **Budgets** — set a limit and get **alerted before** you blow through it
- **Cost Anomaly Detection** — ML flags **unexpected spikes**; **Trusted Advisor** suggests savings

### Good practice
- **Tag** everything (team, env, project) so cost is **attributable** — you can't optimize what you can't attribute
- Match the **purchase model to the workload**: steady → commit, spiky → on-demand, interruptible → Spot

**In short:** right-size and commit for steady load, Spot for the interruptible, and watch it with Cost Explorer + Budgets.`,
  narration:
    "The third stage of the operate loop is optimize, and in the cloud that overwhelmingly means cost. Remember from the very first course that AWS is pay-as-you-go — you pay only for what you use — and that's genuinely a gift compared to buying servers up front. But it has a flip side: because spinning up resources is so easy, cost creeps up quietly, and an unwatched account bloats with oversized instances and things nobody remembered to turn off. So cost management has two halves: paying less, and seeing and controlling what you spend. Start with paying less, and there are three big levers. The first, and the one with the biggest easy wins, is right-sizing and eliminating idle resources: so much cloud spend is just instances provisioned far larger than they need to be, and dev environments left running over nights and weekends. Matching size to actual usage and shutting down idle things often cuts the bill dramatically with zero downside. The second lever is commitment discounts. If you have steady, predictable usage — a baseline of compute you know you'll run around the clock — you can commit to it in advance with Savings Plans or Reserved Instances: you promise AWS one or three years of usage, and in return you get a large discount, up to around seventy percent off the on-demand price. The third lever is Spot. AWS always has spare capacity sitting idle, and it sells that at a massive discount — up to about ninety percent off — as Spot instances. The catch is that AWS can reclaim them with two minutes' notice, so Spot is for workloads that can tolerate interruption: batch processing, data crunching, CI jobs, anything fault-tolerant. Now the other half, seeing and controlling. Cost Explorer is your analysis tool — it lets you slice your spend by service, by tag, by account, and forecast where it's heading. Budgets lets you set a spending limit and get alerted before you exceed it, so a runaway cost doesn't surprise you at the end of the month. Cost Anomaly Detection uses machine learning to spot unusual spikes automatically, and Trusted Advisor proactively recommends savings, like idle resources to shut down. And one practice underpins all of this: tag everything — by team, environment, and project — because you cannot optimize or even attribute cost that you can't see broken down. The guiding principle is to match your purchase model to the shape of the workload: commit for your steady baseline, use on-demand for the spiky and unpredictable parts, and use Spot for anything interruptible. Get that matching right and watch it with Cost Explorer and Budgets, and cost stops being a scary surprise and becomes just another thing you operate. The last stage of the loop is making sure the whole system survives failure: resilience and disaster recovery, next.",
}
