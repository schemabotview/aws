import type { Section } from '../types'

export const availabilityZones: Section = {
  id: 'availability-zones',
  title: 'Availability Zones',
  scene: 'region-azs',
  slide: `## Availability Zones

A **Region** is built from multiple **Availability Zones** — the design that makes AWS reliable.

### What an AZ is
- An **AZ** is one (or more) **isolated data centers** within a region — its **own power, cooling, and networking**
- A region has **≥ 2** (usually 3+); they're **physically separate** (a fire/flood hits one, not all) yet **close enough** for fast, low-latency links

### Why the split exists
- **Isolation of failure** — one AZ can go down without taking the region with it
- **You choose how many AZs** to spread across — the single most important reliability lever on AWS

### Naming
- \`us-east-1a\`, \`us-east-1b\`… = AZs of region \`us-east-1\` (the letter is per-account, so *your* \`1a\` ≠ mine)

AZs are the *ingredient* of reliability. The recipe — spreading a service across them — is next.`,
  narration:
    "Here is the idea that makes AWS reliable, and it's genuinely elegant once it clicks. A region isn't a single data center — if it were, one fire or flood or power failure could wipe out everything in that region at once, which is unacceptable for serious systems. Instead, every AWS region is built from multiple Availability Zones, or AZs. An Availability Zone is one or more discrete data centers within the region, and the key word is discrete: each AZ has its own independent power, its own cooling, and its own networking, in separate physical facilities. Every region has at least two AZs, and most have three or more. Now here's the clever balance AWS struck. The AZs in a region are physically separated — miles apart, far enough that a localized disaster like a fire or flood strikes only one and leaves the others untouched. But they're also close enough, connected by dedicated high-speed private fiber, that data travels between them with very low latency — low enough that your application can treat several AZs as effectively one place while still getting the isolation. Isolated enough to fail independently, close enough to work together — that combination is the whole trick. And the payoff for you as an architect is a lever: you choose how many AZs to spread your resources across, and that's the single most important reliability decision you'll make on AWS. A quick note on naming so it isn't confusing later: AZs append a letter to the region — us-east-1a, us-east-1b, us-east-1c. One subtlety: AWS shuffles those letters per account behind the scenes for load balancing, so your us-east-1a and mine might be different physical zones. It rarely matters, but it's why you shouldn't assume two accounts' zone letters line up. So Availability Zones are the raw ingredient of reliability. The recipe — using several of them to survive a data-center failure — is next.",
}
