import type { Section } from '../types'

export const choosing: Section = {
  id: 'choosing',
  title: 'Choosing your compute',
  scene: 'choosing-compute',
  slide: `## Choosing your compute

Step back to the **whole map**. Choosing compute = **picking your point on the spectrum** for *this* workload.

### A rough decision guide
- Need a **specific OS / kernel / special hardware**, or lifting-and-shifting a legacy app? → **EC2**
- Want **portability & density**, a team that knows Docker/Kubernetes? → **Containers (ECS/EKS)**
- Don't want to manage servers at all, but need long-running services? → **Fargate**
- **Short, event-driven, spiky** functions, scale-to-zero? → **Lambda** *(Course 7)*

### The forces on the axis
- **Up** (convenience): less ops, faster to ship, auto-scaling, pay-per-use
- **Down** (control): legacy needs, special hardware, cost at steady high scale, full OS access

### What carries forward
- Compute is where code runs — but it needs a **place to keep data**. Next course: **\`storage\`** (S3, EBS, EFS)`,
  narration:
    "Let's pull back to the whole map and answer the question the entire course has been building toward: how do you choose your compute? The reframe is simple — choosing compute means picking your point on the spectrum for this particular workload, and different workloads land in different places. Here is a rough but reliable decision guide. If you need a specific operating system or kernel, or specialized hardware like GPUs, or you are lifting and shifting an existing legacy application that expects a real server, you go to EC2 at the base — maximum control. If you want portability and higher density, packing many services efficiently onto your infrastructure, and your team is comfortable with Docker and Kubernetes, you reach for containers with ECS or EKS in the middle. If you like the container model but genuinely do not want to manage any servers, you run those containers on Fargate. And if your workload is short-lived, event-driven, and spiky — reacting to a file upload or an API call, needing to scale to zero when idle — you climb all the way up to Lambda, which is the whole subject of the serverless course later. Step back and feel the forces on the axis. Everything pushing you up is about convenience: less operations work, faster to ship, automatic scaling, pay only for what you use. Everything pulling you down is about control and specific needs: legacy compatibility, special hardware, full operating-system access, and sometimes raw cost efficiency at very steady, very high scale, where a committed EC2 fleet can beat per-request pricing. There is rarely one right answer — there is a right answer for a given workload, and mature systems often mix several points on the spectrum. Now, one thing every one of these compute options has in common: your code runs, it does its work — and then it needs somewhere to keep data. An EC2 instance needs a disk. Your application needs to store files and records that outlive any single server. Compute without storage is a calculator with no memory. So the next course gives your compute a place to put things: storage — S3, EBS, and EFS.",
}
