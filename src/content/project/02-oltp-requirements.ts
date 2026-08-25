import type { Section } from '../types'

export const oltpRequirements: Section = {
  id: 'oltp-requirements',
  title: 'Requirements — the transactional core (OLTP)',
  scene: 'oltp-needs',
  slide: `## Requirements — the transactional core

Before choosing a single AWS service, we state **what the bank needs**. NovaBank has **two data worlds**; this is the first — the **transactional core**, or **OLTP**: the live system that moves money, right now.

### The workload
- **Accounts & ledger** — the record of who has what; it must **balance to the penny**
- **Payments & transfers** — move money between accounts and to other banks
- **Balance checks** — a customer reads their own latest state
- **High transaction rate** — many **small, frequent** reads and writes

### What that workload demands
- **Correctness (ACID)** — each transaction is **atomic**: it fully happens or not at all — never lose a cent
- **Strong consistency** — a balance read right after a write sees the write; **no stale data**
- **Low latency** — customers tap and expect an **instant**, sub-second answer
- **Durability** — once money moves, it is **permanent**, survives any failure
- **Always-on 24/7** & **auditable** — a bank at 3am; every change traceable

**This is the OLTP half.** Next: the analytics world (**OLAP**) — the same data, a completely different set of needs.`,
  narration:
    "Now that we know what NovaBank must do and how it must behave, we're going to spend the requirements phase making those needs precise — because the shape of the requirements is what will drive every design decision later. And the single most important thing to notice about a bank is that it has two completely different data worlds, with two completely different sets of needs. This section is the first of them: the transactional core, which the industry calls OLTP, online transaction processing. This is the live bank, the part that moves money right now. Let's start with the workload — what this core actually does. It keeps the accounts and the ledger, the authoritative record of who has how much, and that ledger has to balance to the penny at all times. It processes payments and transfers, moving money between accounts and out to other banks. It answers balance checks, where a customer reads their own latest state. And critically, the character of this work is many small, frequent, precise operations — thousands of tiny reads and writes a second, each touching just a row or two. Now here's the important part: that workload forces a set of non-negotiable properties, and naming them now is the whole point of the requirements phase. First, correctness — what databases call ACID. Every transaction must be atomic: a transfer either fully happens, debiting one account and crediting the other, or it doesn't happen at all; you can never lose a cent to a half-completed operation. Second, strong consistency: the instant a payment lands, a balance read must reflect it — a customer can never see stale money that isn't really there. Third, low latency: people tap their phone and expect an answer in well under a second. Fourth, durability: once money has moved, that fact is permanent — it survives a server dying, a disk failing, anything. And finally, it must be always-on, twenty-four-seven — a bank at three in the morning — and every single change must be auditable, traceable for the regulators. Hold that list in your head, because it points at a very specific kind of technology: a strongly-consistent, highly-available relational database. But we're not choosing it yet. First, the second world — analytics — which takes the very same transaction data and asks something completely different of it.",
}
