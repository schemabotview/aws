import type { Section } from '../types'

export const loadBalancing: Section = {
  id: 'load-balancing',
  title: 'Elastic Load Balancing',
  scene: 'load-balancing',
  slide: `## Elastic Load Balancing

One server is a **single point of failure** and a **capacity ceiling**. The fix starts with a **load balancer** in front of many.

### What the ELB does
- Sits in front of a fleet and **spreads incoming traffic** across all of them — one public entry point, many workers behind
- Runs **health checks** — stops sending traffic to any instance that goes unhealthy, so failures are invisible to users
- Spans **multiple AZs** — the Multi-AZ high-availability idea from Course 1, made concrete

### The main types
- **ALB** (Application LB) — HTTP/HTTPS, routes by path/host — for web apps & microservices
- **NLB** (Network LB) — TCP/UDP, ultra-high performance & static IPs — for extreme throughput`,
  narration:
    "A single server has two fatal problems: it is a single point of failure — if it dies, your app is down — and it is a capacity ceiling — when traffic exceeds what one machine can handle, users get slow responses or errors. The solution is to run several servers and put a load balancer in front of them, and on AWS that is Elastic Load Balancing. Picture it as a smart traffic director sitting at the front door. Your users all hit one address — the load balancer — and it distributes each incoming request across a fleet of identical instances behind it. Suddenly you have one public entry point but many workers sharing the load, so no single machine is overwhelmed. The second thing the load balancer does is just as important: it continuously runs health checks against each instance, sending little probes to ask, are you okay. The moment an instance fails a check — it crashed, it hung, it is overloaded — the load balancer stops routing traffic to it and sends everything to the healthy ones instead. Your users never see the failure. And critically, the load balancer operates across multiple Availability Zones, which is where that Multi-AZ high-availability principle from foundations stops being theory and becomes something you actually configure: instances in zone a, b, and c, all behind one balancer, and a whole zone can fail without taking you down. There are two main types worth naming. The Application Load Balancer, the ALB, works at the HTTP level and can route intelligently based on the URL path or hostname — send slash-api to one group, slash-images to another — which makes it the default for web applications and microservices. The Network Load Balancer, the NLB, works at the lower TCP and UDP level for extreme performance and static IP addresses, used when you need to handle enormous throughput with the lowest latency. So the load balancer spreads traffic across your fleet and routes around failures. But it raises a question it does not answer: who actually creates those instances when traffic grows, and removes them when it shrinks? That is the other half of elasticity — Auto Scaling.",
}
