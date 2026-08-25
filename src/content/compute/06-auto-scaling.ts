import type { Section } from '../types'

export const autoScaling: Section = {
  id: 'auto-scaling',
  title: 'Auto Scaling across AZs',
  scene: 'auto-scaling',
  slide: `## Auto Scaling across AZs

An **Auto Scaling Group (ASG)** automatically **adds and removes** instances to match demand — the "elastic" in EC2 made real.

### How it works
- You set **min / desired / max** instance counts and a **launch template** (which AMI + type to create)
- **Scale out** on a signal (CPU > 70%, request count…) → launch more; **scale in** when it drops → terminate extras
- Spreads new instances **across AZs**, and **replaces** any that fail a health check — self-healing

### ELB + ASG together = elasticity
- The **ASG** changes *how many* servers exist; the **ELB** spreads traffic across whoever is currently healthy
- Pay only for the capacity you need **right now** — scale up for the sale, back down after (the Course 1 promise, delivered)`,
  narration:
    "Auto Scaling is the service that finally delivers on the elastic promise we made all the way back in foundations — the idea that you can summon a thousand servers for an hour and release them. The core construct is the Auto Scaling Group, or ASG. Instead of managing individual instances by hand, you define a group with three numbers: a minimum, a desired, and a maximum count. The minimum is the floor it will never drop below, the maximum is the ceiling it will never exceed, and the desired is where it currently sits. You also give it a launch template that says exactly how to create a new instance — which AMI, which instance type, which security group — so every server it launches is identical. Then you attach scaling policies tied to signals. When average CPU across the group climbs above, say, seventy percent, or the request count spikes, the group scales out — it automatically launches new instances up to the maximum. When the load drops back down, it scales in, terminating the extra instances so you stop paying for them. On top of that, the ASG spreads its instances across multiple Availability Zones automatically, and — this is the self-healing part — if any instance fails its health check or an entire AZ goes dark, the group notices the count is below desired and launches replacements, in a healthy zone, without anyone paging you at three in the morning. Now watch how the load balancer and the Auto Scaling Group click together, because this pairing is the beating heart of elastic, resilient compute on AWS. The Auto Scaling Group controls how many servers exist, growing and shrinking the fleet with demand. The load balancer sits in front and spreads incoming traffic across whichever instances happen to be healthy right now, seamlessly picking up the new ones the ASG launches and letting go of the ones it terminates. Together they mean you pay only for the capacity you actually need at this moment — you scale up for the Black Friday sale and back down that night — which is exactly the promise the cloud made in the very first course, now delivered concretely. So that is EC2, made both resilient and elastic. Let's climb one step up the spectrum, to containers.",
}
