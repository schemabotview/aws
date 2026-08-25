import type { Section } from '../types'

export const theBrief: Section = {
  id: 'the-brief',
  title: 'The brief — NovaBank on AWS',
  scene: 'brief',
  slide: `## The brief — NovaBank on AWS

The capstone: take everything from Courses 1–10 and **ship one real system** — **NovaBank**, a retail bank on AWS.

### What NovaBank does
- **Accounts & balances** — the transactional core (a ledger that must always be correct)
- **Payments & transfers** — move money between accounts and to other banks
- **Real-time fraud** — score every transaction as it happens, block the bad ones
- **Mobile & web app** — where customers sign in and bank
- **Analytics** — risk, spending insight, and regulatory reporting

### How it must be
- **Secure** — money and personal data; the highest bar (encrypt everything, least privilege)
- **Compliant** — every action auditable; PII handled to regulation
- **Always-on** — customers expect 24/7; survive an AZ *and* a Region failure
- **Scalable** — from launch to millions of customers without a rebuild

### The plan
- **Build** the platform (§2–5) → **secure** it (§6) → **operate** it (§7) → **review** it against Well-Architected (§8)

**This is where it all comes together** — no new services, just the ones you know, composed into a real bank.`,
  narration:
    "Welcome to the capstone. Over ten courses you've learned a huge range of AWS services — compute, storage, networking, databases, serverless, analytics, security, and operations — mostly one service at a time. This final course is different: we're not going to learn any new services at all. Instead, we're going to take everything you already know and compose it into one real, complete system, end to end, the way you actually would on the job. And to make it concrete, we're going to build a bank. Meet NovaBank, a fictional retail bank we'll design on AWS. Banking is the perfect capstone domain, because a bank genuinely needs every single pillar you've learned — there's nowhere to cut corners. Let's lay out the brief, and it comes in two halves. First, what NovaBank does — the capabilities we have to deliver. It needs accounts and balances, which is the transactional core: a ledger that has to be correct to the penny, always. It needs payments and transfers, moving money between accounts and out to other banks. It needs real-time fraud detection, scoring every transaction the instant it happens and blocking the fraudulent ones. It needs a mobile and web app, where millions of customers sign in and manage their money. And it needs analytics — for risk modelling, for customer insight, and for the regulatory reporting that banks are legally required to produce. Each of those capabilities is something we'll build in a later section. The second half of the brief is how NovaBank must be — the non-functional requirements, and for a bank these are not negotiable. It must be secure: it's handling money and deeply personal data, so it faces the highest security bar there is — encrypt everything, least privilege everywhere. It must be compliant: every action has to be auditable, and personal data handled exactly to regulation. It must be always-on: customers expect their bank at three in the morning, so it has to survive not just a server failure, not just an Availability Zone failure, but the loss of an entire Region. And it must be scalable: it should run the same architecture whether it has ten thousand customers or ten million, without a rewrite. These four requirements are what will drive our security and operations work. So here's the plan for the course: first we'll build the platform — the landing zone, the core banking app, payments, and analytics. Then we'll secure it, applying defense in depth to a system that really needs it. Then we'll set up how we operate it day to day. And finally we'll step back and review the whole design against the AWS Well-Architected Framework, the industry's checklist for a system done right. This is where it all comes together. Let's start at the foundation — the landing zone NovaBank sits on.",
}
