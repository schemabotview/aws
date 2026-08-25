import type { Section } from '../types'

export const whatIsCloud: Section = {
  id: 'what-is-cloud',
  title: 'What the cloud is',
  scene: 'rented-cloud',
  slide: `## What the cloud is

The **cloud** is simply **someone else's computers, rented by the minute** — and **AWS** is the largest and oldest provider of them.

### The one-sentence version
- AWS runs enormous **data centers** full of servers around the world
- You **rent capacity** — from one small server to thousands — and pay only for what you use, only while you use it
- On top of that, AWS offers ~200 **managed services** you assemble into systems

### This course — the ground floor (the map)
- **What** cloud is: **service models** & **deployment models** (§2–§3)
- **Where** it runs: **Regions & Availability Zones**, Multi-AZ (§4–§6)
- **How** you touch it: Console · CLI · SDK · IaC (§7)
- **Framing** it all: shared responsibility & pay-as-you-go (§8–§9)`,
  narration:
    "Before we touch a single service, let's be clear eyed about what the cloud actually is, because the marketing fog around it hides a genuinely simple idea. The cloud is someone else's computers, rented by the minute instead of bought. That's it. Amazon Web Services — AWS — is the largest and oldest of the big cloud providers, and it runs enormous data centers full of servers all over the world, and lets you rent capacity on them, from a single small server to thousands, paying only for what you use and only for as long as you use it. On top of that rented capacity, AWS layers around two hundred managed services — storage, databases, functions, queues, and far more — that you assemble like building blocks into real systems. This whole first course is a single map of the territory, and we'll light up one piece at a time. There are two ways to classify cloud — service models and deployment models — and we'll start there. Then the where: your resources physically live in Regions and Availability Zones. Then the how: the surfaces you use to reach AWS. And finally the two ideas that frame all of it — who is responsible for security, and how you pay. Get this map in your head and every other service in the platform has somewhere to hang. Let's begin with the first classification — the service models.",
}
