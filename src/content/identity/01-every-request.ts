import type { Section } from '../types'

export const everyRequest: Section = {
  id: 'every-request',
  title: 'Every request is authorized',
  scene: 'every-request',
  slide: `## Every request is authorized

**IAM** — Identity and Access Management — is the gate **every** AWS request passes through. Get this right and everything else is safe to build on.

### The model in one line
- A **principal** (who) requests an **action** on a **resource** — IAM returns **allow** or **deny**
- The check runs on *every* call, from *every* surface — Console, CLI, SDK, IaC all hit the same API

### Two questions, always
- **Authenticate** — *who are you?* Credentials prove identity
- **Authorize** — *are you allowed?* Policies decide — this course is mostly about the second

### Why it's course 2
- Breaches are overwhelmingly **customer-side**, and almost always **identity mistakes**
- **IAM is free**, global, and the foundation under every other service`,
  narration:
    "In foundations we drew the shared-responsibility line and said the single most important thing you own on AWS is control over who can do what. This entire course is that control, and it has a name: IAM — Identity and Access Management. IAM is the gate that every single AWS request passes through, without exception. When anyone or anything tries to do something on AWS — read a file, launch a server, delete a database — that request is checked against IAM before it's allowed to proceed, and the model is beautifully uniform. A principal, meaning whoever is asking, requests to perform an action on a resource, and IAM returns a verdict: allow, or deny. That is the shape of every interaction. And remember from foundations that all the ways you touch AWS — the console, the CLI, the SDKs, infrastructure as code — funnel down to the same underlying API, which means they are all subject to this same one check. There is no back door. Underneath, IAM is really answering two distinct questions each time. The first is authentication: who are you? That is your credentials proving your identity. The second is authorization: are you allowed to do this particular thing? That is policies being evaluated. This course is mostly about the second question, authorization, because that is where the design work — and the mistakes — live. And here is why identity earns the second slot in the whole series, right after foundations: real-world breaches happen overwhelmingly on the customer's side of the responsibility line, and when you look closely, they are almost always identity mistakes — an over-permissive policy, a leaked key, a resource left open to the world. IAM is free, it is global, and it is the foundation every other service you will ever use sits on top of. So let's walk the model carefully: who is doing the asking, what makes the decision, and what they are trying to touch.",
}
