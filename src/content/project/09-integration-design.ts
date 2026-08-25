import type { Section } from '../types'

export const integrationDesign: Section = {
  id: 'integration-design',
  title: 'Design — payments & events',
  scene: 'payments',
  slide: `## Design — payments & events

What connects the two worlds and moves money **reliably**. Two ideas: **orchestrate** the hard multi-step operation, then **decouple** everything that happens after it.

### Orchestrate — the transfer saga
- A transfer is **distributed & multi-step**: validate → **debit** source → **credit** dest → confirm
- **Step Functions** runs it as a saga — **retries** each step, and **compensates** (rolls back) if one fails, so money is never half-moved *(OLTP correctness, across steps)*

### Decouple — the event fan-out
- On success, emit **transfer.completed** to **EventBridge**, then fan out to consumers that don't block the transfer:
- **SNS** — notify the customer · **SQS** — queue downstream work · **Kinesis** — stream to fraud & analytics (§8)

**Why:** decoupling = each consumer scales & fails independently *(scalable · always-on)*. Next: **securing** the whole thing.`,
  narration:
    "We've designed the two data worlds; now we design what moves money between them and ties them together — the integration layer — and it rests on two ideas. The first is orchestration, for the one operation that absolutely cannot go wrong: a transfer. Moving money sounds simple, but it's actually a distributed, multi-step operation — you validate that the funds and limits are okay, you debit the source account, you credit the destination account, and you confirm. The danger is a failure partway through: if you debit the source but then the credit fails, you've made money vanish. So we run the transfer as a saga, using Step Functions. Step Functions executes the steps as an explicit workflow, retries any step that fails transiently, and — crucially — if a step fails permanently, it runs compensating actions to roll back the earlier steps, so the transfer either fully completes or fully unwinds. That's how we extend the correctness guarantee from the transactional core across a multi-step, distributed operation. The second idea is decoupling, for everything that happens after the transfer succeeds. The moment it completes, we don't want the transfer itself waiting around while we send emails and update analytics. So we emit a single event — transfer dot completed — onto EventBridge, the event bus, and EventBridge fans it out to several consumers that each work independently. SNS notifies the customer, pushing a message out to their devices. SQS queues up downstream work — updating a statement, say — to be processed reliably at its own pace. And Kinesis streams the event into the fraud and analytics pipeline we designed in the previous section, which is exactly where the two worlds connect. The payoff of this fan-out is that each consumer scales and fails on its own — if the email service is slow, transfers still complete and analytics still runs — which is precisely what the scalable and always-on requirements asked for. So: orchestrate the money movement, choreograph everything downstream. With the system fully designed end to end, the next question is how we protect it — securing the bank.",
}
