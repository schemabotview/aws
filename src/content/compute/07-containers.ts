import type { Section } from '../types'

export const containers: Section = {
  id: 'containers',
  title: 'Containers & orchestration',
  scene: 'containers',
  slide: `## Containers & orchestration

A **container** packages your app **+ all its dependencies** into one portable unit that runs the same everywhere — no "works on my machine."

### The path
- **Image** — build your app + deps into a container image (Docker)
- **ECR** (Elastic Container Registry) — AWS's private **image registry**; push the image here
- **Orchestrator** — runs & schedules many containers, restarts failures, scales them:
  - **ECS** — AWS's own, simpler orchestrator
  - **EKS** — managed **Kubernetes**, the open standard (portable, richer, more complex)

### Where they run — the key choice
- **On EC2** — the containers run on EC2 instances **you manage** (you own the nodes, patching, scaling)
- **Fargate** — **serverless containers**: AWS runs them, **no servers to manage** — you just specify CPU/RAM`,
  narration:
    "Let's climb to the middle of the spectrum: containers. The problem containers solve is one every developer has hit — the app runs perfectly on my machine but breaks in production, because the environments differ in some subtle way, a library version, a system setting. A container fixes this by packaging your application together with everything it needs to run — the code, the runtime, the libraries, the configuration — into one self-contained, portable unit called an image. That image runs identically on your laptop, in test, and in production, because it carries its whole environment with it. The workflow has three stages, and you can see them in the map. First you build your app into a container image, typically using Docker. Second you push that image to a registry, and AWS's managed private registry is ECR, the Elastic Container Registry — think of it as the storage locker your images live in. Third, and this is where the real work is, something has to actually run those containers at scale — launch them, restart them when they crash, spread them across machines, scale them up and down. That job is called orchestration, and AWS gives you two orchestrators. ECS, the Elastic Container Service, is AWS's own home-grown orchestrator; it is simpler to learn and deeply integrated with the rest of AWS. EKS, the Elastic Kubernetes Service, is managed Kubernetes — Kubernetes being the open-source industry standard for container orchestration, which is more powerful and portable across clouds but also more complex. As a rule of thumb: reach for ECS when you want simplicity and you are all-in on AWS, and EKS when you need Kubernetes specifically, often because your team already knows it or you want multi-cloud portability. But there is a second, orthogonal choice that matters even more for how much work you do, and it is about where the containers actually run. Option one is on EC2: the containers run on a cluster of EC2 instances that you own and manage — you are back to patching nodes, sizing the cluster, handling capacity. Option two is Fargate, and this is the one to remember: Fargate is serverless containers. You hand AWS your container and simply declare how much CPU and memory it needs, and AWS finds somewhere to run it — there are no servers for you to provision, patch, or scale at all. Fargate takes containers and pushes them rightward on our spectrum, toward the convenience end, by removing the server management entirely. So now you have seen the whole spectrum, from a raw EC2 instance you control completely, through containers, to serverless Fargate. Which leaves exactly one question: with all these options, how do you actually choose?",
}
