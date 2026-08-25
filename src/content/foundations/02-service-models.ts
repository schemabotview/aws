import type { Section } from '../types'

export const serviceModels: Section = {
  id: 'service-models',
  title: 'Service models — IaaS · PaaS · SaaS',
  scene: 'service-ladder',
  slide: `## Service models — IaaS · PaaS · SaaS

The **service models** describe *how much AWS manages for you* — a ladder where you climb, and manage **less**, the higher you go.

### The three rungs
- **IaaS** — *Infrastructure* as a Service: rent raw **servers, storage, network**; you run the OS, patching, and app (e.g. **EC2**). Most control, most work.
- **PaaS** — *Platform* as a Service: rent a **managed platform**; just deploy your code — AWS runs the servers under it (e.g. **Elastic Beanstalk**, **Lambda**)
- **SaaS** — *Software* as a Service: rent **finished software** and just use it (e.g. **QuickSight**, or non-AWS: Gmail, Slack)

### Why it matters
- Higher up the ladder = **less to manage**, less control — a trade you make per workload
- Recall the value: **rent not buy · elastic · managed** — the models are *how much* "managed" you buy`,
  narration:
    "The first way to classify cloud is by the service model, and the clean way to think about it is a ladder: the higher you climb, the less you have to manage yourself, and the less control you retain — a trade-off you make for each workload. The bottom rung is Infrastructure as a Service, IAAS. Here you rent the raw ingredients — virtual servers, storage, networking — and everything above that is yours to run: the operating system, the patching, the runtime, your application. AWS's core compute service, EC2, is the classic example; it gives you a virtual server and the rest is up to you. Maximum control, maximum responsibility. The middle rung is Platform as a Service, PaaS. Now you rent a managed platform and simply hand it your code; AWS runs the servers, the operating system, and the scaling underneath, invisibly. Elastic Beanstalk works this way, and so, in spirit, does Lambda, which we'll meet in the serverless course — you provide a function, and there's no server for you to think about at all. You give up some control and get a lot of operational burden lifted. The top rung is Software as a Service, SaaS: you rent finished software and just use it, managing nothing but your own data and settings. Outside AWS, think Gmail or Slack; inside AWS, a service like QuickSight for dashboards. The reason this ladder matters is that it names the trade you're constantly making — how much of the stack do you want to own versus hand to AWS. And it connects straight back to the value we described: rent instead of buy, elastic, and managed. The service model is really a dial for exactly how much managed you're buying. That's how much of the stack AWS runs. The second classification cuts a different way — not how much, but where the cloud physically lives. Those are the deployment models.",
}
