import type { Section } from '../types'

export const connecting: Section = {
  id: 'connecting',
  title: 'How you connect to AWS',
  scene: 'access-surfaces',
  slide: `## How you connect to AWS

Four ways to touch AWS — the same **API** underneath, at rising levels of automation.

### From clicking to code
- **Console** — the web UI. Great to *explore* and learn; **not** for repeatable production changes (click-ops doesn't scale)
- **CLI** — \`aws s3 ls\`, \`aws ec2 run-instances …\` — scriptable, the everyday admin tool
- **SDK** — call AWS from your app (\`boto3\` in Python, plus JS, Go, Java…) — how *your code* uses AWS services
- **IaC** — **CloudFormation / CDK / Terraform** define your whole stack in files, versioned & repeatable (Course 10)

### The one thing underneath
- All of them call the **same underlying API** — the console is just a pretty front-end over it
- So **every** call, however made, is authorized the same way — by **IAM** (Course 2)

That's *how* you reach AWS. Two ideas **frame** everything on this map — **who's responsible**, and what it **costs**.`,
  narration:
    "You've now placed your resources in the world; how do you actually reach in and create or control them? There are several ways, and they form a ladder from clicking to code, from manual to fully automated. The first rung is the Console, the web-based graphical interface you log into in a browser. It's great for one thing: exploring and learning. You click around, see what services exist, launch a resource and watch what happens — it's how most people take their first steps. But it has a serious limitation you must respect for real work: clicking through the console by hand, click-ops, isn't repeatable, isn't reviewable, and isn't reliably reversible, which makes it a poor way to run anything in production. The second rung is the CLI, the command-line interface — the aws command in your terminal, like aws s3 ls to list your buckets or aws ec2 run-instances to launch a server. Everything the console can do, the CLI can do, but now it's scriptable, so it becomes the everyday tool for administration and automation. The third rung is the SDK, libraries that let your own application code call AWS directly — boto3 for Python, with equivalents for JavaScript, Go, and Java. This is how your running app talks to AWS: how your code uploads a file or writes a record. And the fourth is infrastructure as code — CloudFormation, the CDK, or Terraform — which lets you define your entire setup, every server and bucket and permission, in text files you version in git, review, and deploy repeatably; it's important enough that a later course is devoted to it. Now here's the unifying truth underneath all of them, and it's why they sit on one API box in our map: they all call the exact same underlying AWS API. The console is just a pretty front-end over that API; the CLI and SDK are thin wrappers; IaC generates calls to it. Which means every single one of them, no matter how you interact, is subject to the same authorization check — IAM deciding whether you're allowed to do what you asked, which is the whole subject of the next course. But before we leave the ground floor, step back and look at the entire map, because two ideas frame everything on it: who is responsible for security, and how you pay. Let's close with those.",
}
