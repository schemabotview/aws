import type { Section } from '../types'

export const spectrum: Section = {
  id: 'spectrum',
  title: 'The compute spectrum — control ↔ convenience',
  scene: 'compute-spectrum',
  slide: `## The compute spectrum — control ↔ convenience

Every compute choice sits on one axis: **how much do you manage** vs **how much does AWS**.

### More control → more convenience
- **EC2** — a whole virtual server. You own the OS, patching, scaling. **Max control, max work.**
- **Containers (ECS/EKS)** — package your app + its deps; run many per host. Less OS fuss, portable.
- **Lambda** — just a function; **no servers to see at all.** Max convenience, least control. *(Course 7)*

### How to read it
- **Climbing up**, you shed operational burden (patching, capacity) and trade away low-level control
- It maps onto the **service models** from Course 1: EC2 ≈ IaaS, Lambda ≈ the PaaS/serverless end
- **No rung is "best"** — legacy apps & special hardware pull you **down** to EC2; new, spiky, event-driven work pulls you **up**`,
  narration:
    "Here is the spectrum, and it is the mental model that makes all of AWS compute click. Picture a ladder standing upright. At the base sits EC2, which gives you a whole virtual server. You get root access, you choose the operating system, and you are responsible for everything on it — patching it, securing it, scaling it, keeping it healthy. It is the most powerful and flexible option, and also the most work — the solid foundation you build on. Climb up one rung and you reach containers, run by services like ECS and EKS. A container packages your application together with its dependencies into one portable unit, and many containers pack onto each host, so you stop caring about individual servers as much and your app runs the same everywhere. You have shed some of the operating-system burden and gained portability. Climb to the top rung and you reach Lambda, where you hand AWS just a function — a snippet of code — and there is no server for you to see, patch, or scale at all; AWS runs it on demand and you are billed per invocation. Maximum convenience, minimum control, and it is the star of the serverless course later, so here it is just the signpost at the very top. The key insight in reading this ladder is that as you climb, you shed operational burden — patching, capacity planning, scaling — but you give up low-level control in exchange. And notice this maps directly onto the service models from our very first course: EC2 at the base is essentially Infrastructure as a Service, while Lambda at the top is the platform, serverless end. Crucially, no rung is universally best. A legacy application that needs a specific operating system, or a workload that needs specialized hardware, pulls you down toward EC2. A brand-new, spiky, event-driven workload pulls you up toward containers and Lambda. Choosing well means knowing the whole ladder. So let's start at the base, with the most foundational option of all: EC2.",
}
