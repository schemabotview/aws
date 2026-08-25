import type { Section } from '../types'

export const cicd: Section = {
  id: 'cicd',
  title: 'CI/CD — automated delivery',
  scene: 'cicd',
  slide: `## CI/CD — automated delivery

Automate how software **ships**: from a git commit to running in production, with no manual steps.

### The pipeline
- **Source** — a commit to CodeCommit / GitHub **triggers** the pipeline
- **Build** — **CodeBuild** compiles the code and **runs the tests** (continuous **integration**)
- **Deploy** — if tests pass, **CodeDeploy** releases it to the fleet (continuous **delivery/deployment**)
- **CodePipeline** orchestrates the stages end to end, on **every commit**

### Safe releases
- **Rolling** or **blue/green** deploys — ship without downtime, shift traffic gradually
- Automatic **rollback** on failed health checks — a bad release undoes itself
- Add manual **approval** gates before production where you want a human in the loop

### Why it matters
- **Small, frequent, automated** releases are far safer than big manual ones — less to go wrong, easy to trace
- The pipeline is the same every time: **repeatable and auditable** (pairs with IaC)

**In short:** commit → build → test → deploy, automatically — so shipping is routine, not an event.`,
  narration:
    "We've automated creating the infrastructure with Infrastructure as Code; now we automate the other half — shipping the software that runs on it. This is CI/CD, continuous integration and continuous delivery, and it's about taking the path from a developer's commit all the way to running in production and making it fully automated, with no manual steps for a human to get wrong. Picture the pipeline. It starts at source: a developer pushes a code change to a repository — CodeCommit, or more commonly GitHub — and that push automatically triggers the pipeline. No one kicks it off by hand. Next comes build, handled by CodeBuild, which compiles your code, and — this is the continuous integration part — runs your automated test suite. If the tests fail, the pipeline stops right there and the broken code never goes anywhere near production; the team gets told immediately. If the tests pass, the pipeline moves to deploy, handled by CodeDeploy, which releases the new version out to your fleet — your EC2 instances, your ECS services, or your Lambda functions. And tying these stages together, orchestrating the whole flow, is CodePipeline, which runs this sequence automatically on every single commit. Now, a huge part of the value here is safe releases. CodeDeploy doesn't just slam the new version onto every server at once. It can do a rolling deployment, updating a few instances at a time, or a blue/green deployment, where it stands up the new version alongside the old and shifts traffic over gradually — both of which mean you ship with no downtime. And crucially, it watches health checks as it goes, so if the new version starts failing, it automatically rolls back to the previous good version — a bad release undoes itself. For the releases where you want a human to sign off, you can insert a manual approval gate before the production stage. Why does all this matter so much? Because the safest way to ship software is in small, frequent, automated increments. When each release is tiny and goes out through the exact same automated pipeline every time, there's very little that can go wrong, and when something does, it's easy to trace and easy to reverse — the opposite of the terrifying, rare, all-hands manual deployment. And notice how this pairs with the previous section: your infrastructure is code deployed by CloudFormation, and your application is code deployed by the pipeline, so your entire system, top to bottom, is repeatable and auditable. The goal, like with the rest of operations, is to make shipping boring — a routine event that happens many times a day without drama. We've now observed and automated. The next stage of the loop is keeping it all affordable: cost.",
}
