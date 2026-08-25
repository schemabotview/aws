import type { Section } from '../types'

export const whatIsCompute: Section = {
  id: 'what-is-compute',
  title: 'What compute is',
  scene: 'what-is-compute',
  slide: `## What compute is

**Compute** is where your code actually **runs** — the CPU and memory that execute your application. With the ground (foundations) and the *who* (identity) set, this is the first thing you *build*.

### The map
- **The spectrum** — a mental model from *most control* (EC2) to *most convenience* (Lambda) (§2)
- **EC2** — rent a virtual server: its anatomy, then how you pay for it (§3–§4)
- **Elasticity** — make it survive load & failure: **ELB + Auto Scaling** (§5–§6)
- **Containers** — package once, run anywhere: **ECS/EKS on EC2 or Fargate** (§7)

### One rule to carry through
- There is **no single "compute" service** — there's a spectrum, and choosing well is the skill (§8)`,
  narration:
    "With the ground floor laid in foundations and the question of who is allowed to do what settled in identity, we finally get to build something — and the first thing you build on is compute. Compute is simply where your code runs: the processors and memory that actually execute your application, do the work, serve the requests. It is the beating heart of almost every system. Now, the single most important thing to understand about compute on AWS is that there is no one compute service. Beginners often go looking for the compute button and get frustrated; instead, AWS gives you a spectrum of compute options, and they trade off along one axis — how much of the underlying machinery you manage yourself versus how much AWS handles for you. This whole course is a map of that spectrum. We will start by laying out the spectrum itself as a mental model. Then we will go deep on EC2, the foundational option — renting a virtual server — looking first at its anatomy and then at the surprisingly important question of how you pay for it. Then we will make that compute elastic and resilient with two services that always travel together, the Elastic Load Balancer and Auto Scaling. Then we will climb the spectrum to containers — packaging your app to run consistently anywhere — and the AWS ways to run them. And we will close by pulling it together into how you actually choose. The through-line to hold onto is that phrase: there is no single compute service, just a spectrum, and choosing the right point on it for a given workload is the real skill. Let's start with the spectrum.",
}
