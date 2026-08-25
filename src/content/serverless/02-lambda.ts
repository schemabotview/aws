import type { Section } from '../types'

export const lambda: Section = {
  id: 'lambda',
  title: 'AWS Lambda — the function model',
  scene: 'lambda',
  slide: `## AWS Lambda — the function model

A function reacts to an **event**, AWS runs your **handler**, a **response** comes back. Four things define it.

### The four parts
- **Handler** — the entry point AWS calls, once **per invocation**, with the event payload
- **Runtime** — the language environment: Python, Node.js, Java, Go, Ruby, .NET, or custom
- **Execution role** — the **IAM** identity the function assumes — exactly what it may access (least privilege)
- **Config** — **memory** (128 MB–10 GB, CPU scales with it), **timeout** (≤ 15 min), env vars

### How it runs
- AWS runs your code in an **execution environment** it creates on demand and keeps **warm** to reuse
- **Init code** runs once per environment (DB clients, config); the **handler** runs per invocation
- Scales from **zero to thousands** of concurrent executions; **billed per request + per ms**

**Not for everything:** the 15-minute cap and per-invocation pricing make long-running or sustained-CPU work a job for containers or EC2.`,
  narration:
    "Let's open up a Lambda function and see what it actually is, because once the shape is clear, everything else in this course clicks into place. The lifecycle is the frame: an event arrives, AWS runs your code, and a response goes back. That's it — event, handler, response. Now, a Lambda function is defined by four things, and it's worth knowing each one. The first is the handler. That's the specific function in your code that AWS calls — the entry point — and it gets called once per invocation, once per event, with the event's data handed to it as a payload. The second is the runtime, which is just the language environment your code runs in: Lambda supports Python, Node.js, Java, Go, Ruby, and .NET out of the box, plus custom runtimes if you need something else. The third is the execution role, and this is pure identity from the IAM course: the execution role is the IAM role your function assumes while it runs, and it defines exactly what the function is allowed to do — which S3 bucket it can read, which DynamoDB table it can write. You apply least privilege here, giving the function only the permissions it truly needs. And the fourth is configuration: chiefly the memory you allocate, from 128 megabytes up to about 10 gigabytes — and here's a quirk worth remembering, CPU scales with memory, so if your code is CPU-bound you turn up the memory to get more processor. Configuration also includes the timeout, which has a hard ceiling of fifteen minutes, and any environment variables. Now, how does it actually run? When an event triggers your function, AWS finds or creates something called an execution environment — a small, isolated sandbox with your runtime and your code loaded. Crucially, after your handler finishes, that environment doesn't vanish immediately; AWS keeps it warm for a while and reuses it for the next event. That's why you put expensive one-time setup — opening a database connection, creating an SDK client, loading config — in your initialization code, which runs once when the environment starts, rather than inside the handler, which runs on every single invocation. And because AWS just spins up more of these environments as needed, one function scales from zero to thousands of concurrent executions automatically, and you're billed per request and per millisecond of execution. The flip side of that fifteen-minute cap and per-invocation pricing is that Lambda is the wrong tool for long-running jobs or work that pins the CPU continuously — that kind of thing belongs on the containers or EC2 you met in the compute course. So that's the function itself. The obvious next question is: what are all the things that can trigger it? That's event sources, and it's next.",
}
