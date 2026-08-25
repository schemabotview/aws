import type { Section } from '../types'

export const infrastructureAsCode: Section = {
  id: 'infrastructure-as-code',
  title: 'Infrastructure as Code — CloudFormation & CDK',
  scene: 'iac',
  slide: `## Infrastructure as Code — CloudFormation & CDK

**Automate** starts here: stop clicking in the console. **Declare** your infrastructure as a file, and deploy it repeatably.

### The idea
- Write a **template** describing the resources you want (a VPC, instances, a database, a bucket)
- **CloudFormation** reads it and provisions everything as a **stack** — creating & updating to match
- **Idempotent**: deploy the same template → the same infrastructure, every time, in any account/region

### Why it changes everything
- Infra lives in **git** — versioned, code-reviewed, diffed; roll back by redeploying an old template
- **No click-ops** — no undocumented, hand-built resources nobody can reproduce
- Spin up an identical **dev / staging / prod** from one template

### CloudFormation vs CDK
- **CloudFormation** — the engine; templates in **YAML/JSON**
- **CDK** — write the template in a **real language** (TypeScript, Python…), with loops and abstractions; it synthesises to CloudFormation
- **Terraform** is the popular multi-cloud third-party alternative

**In short:** your infrastructure becomes reviewable, repeatable code — not a pile of console clicks nobody can reproduce.`,
  narration:
    "Now we move into the second part of the operate loop: automation. And the first thing to automate is the creation of your infrastructure itself. Think about how we've implicitly been building things so far — clicking around the console, creating a VPC here, launching an instance there. That's fine for learning, but for a real system it's a disaster: it's manual, so it's slow and error-prone; it's undocumented, so six months later nobody remembers exactly how production was set up; and it's not reproducible, so standing up an identical staging environment means clicking through everything again and hoping you got it the same. Infrastructure as Code fixes all of this by turning your infrastructure into a text file. Instead of clicking, you write a template that declares what you want — a VPC with these subnets, two instances of this type, a database, an S3 bucket — and you hand that template to CloudFormation, which reads it and provisions everything for you as a single unit called a stack. It figures out the order to create things in, wires up the dependencies, and if you change the template and redeploy, it works out the difference and updates just what changed. The crucial property is that it's idempotent: deploying the same template always produces the same infrastructure, whether it's the first time or the hundredth, in this account or a brand-new one. And that unlocks enormous benefits. Your infrastructure now lives in git, right alongside your application code, which means it's version-controlled, it can be code-reviewed before it goes live, you can see a clean diff of exactly what a change will do, and you can roll back simply by redeploying a previous version. There's no more click-ops — no mystery resources someone built by hand that nobody can reproduce. And you can stand up identical development, staging, and production environments from the very same template, which is how you get confidence that what you tested is what you ship. On the tooling: CloudFormation is the underlying engine, and its templates are written in YAML or JSON. If writing large YAML files by hand sounds tedious — and it is — the CDK, the Cloud Development Kit, lets you define your infrastructure in a real programming language like TypeScript or Python, using loops, variables, and reusable components, and it synthesises down to a CloudFormation template under the hood. And it's worth knowing that Terraform is a very popular third-party alternative that does the same job across multiple clouds. The bottom line is that your infrastructure becomes reviewable, repeatable code rather than a fragile pile of console clicks. We've automated creating the infrastructure; next we automate shipping the software that runs on it — CI/CD.",
}
