import type { Section } from '../types'

export const payAsYouGo: Section = {
  id: 'pay-as-you-go',
  title: 'What it costs',
  scene: 'cost-model',
  slide: `## What it costs

The other frame over the whole map: the cost model is **pay-as-you-go** — the superpower and the trap in one.

### The model
- **No upfront, no contracts** (by default) — pay per second of compute, per GB stored, per request
- Turn something **off** and you **stop paying** for it — that's the whole appeal

### The trap every beginner hits
- A resource that's **running but idle still bills you**, silently, every hour — a forgotten test server costs all month
- So **cost awareness is an engineering skill**: **tag** resources, set **budgets**, wire **billing alarms** (Course 10)

### For learning
- A generous **free tier** covers most exploration — follow along without fear
- But remember: on AWS, **the bill itself is a design constraint** you architect around`,
  narration:
    "The other idea framing the whole map is the cost model, pay-as-you-go, and it's the superpower and the trap in one. There's no upfront purchase and no long contract by default: you pay per second of compute, per gigabyte of storage, per request — and the moment you turn something off, you stop paying for it. That's the appeal, and it's real. But it has a flip side that catches every beginner and plenty of seasoned teams: a resource that's running but sitting idle still costs money, every hour, silently. A server you spun up to test and forgot about will quietly bill you all month long. So cost awareness becomes a genuine engineering skill — tagging your resources so you know what each one is for, setting budgets, and wiring up billing alarms so a runaway cost wakes you up instead of surprising you thirty days later; we'll build exactly that in the governance course. For learning, there's good news: a generous free tier covers most of what you'll do while exploring, so you can follow along without fear of a bill. But always keep the mindset that on AWS the bill itself is a design constraint you architect around — the cheapest architecture and the best architecture are often the same one. And that completes the whole map of the ground floor: what the cloud is, its service and deployment models, where it physically runs, how you reach it, and the two ideas — shared responsibility and pay-as-you-go — that frame all of it. The next course turns to the single most important of the things you own: who is allowed to touch any of it. That's identity and access management.",
}
