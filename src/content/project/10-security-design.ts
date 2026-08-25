import type { Section } from '../types'

export const securityDesign: Section = {
  id: 'security-design',
  title: 'Design — securing the bank',
  scene: 'secure-bank',
  slide: `## Design — securing the bank

Security isn't one box — it's **defense in depth**: independent layers, each one a control an attacker must defeat. This realizes §4's **secure + compliant** bar across the whole system.

### The layers (outside → in)
- **1 · Perimeter** — **WAF** (web-request rules) · **Shield** (DDoS): block bad traffic before it enters
- **2 · Network** — **private subnets** (no direct internet) · **security groups** (least-open ports)
- **3 · Identity** — **IAM** least privilege · **Cognito** for customers
- **4 · Data** — **KMS** (encrypt at rest) · **ACM/TLS** (in transit) · **Secrets Manager** (no hard-coded creds)
- **5 · Detect & comply** — **GuardDuty** (threats) · **Macie** (PII) · **CloudTrail/Config** (audit) · **Security Hub**

**Why layered:** any single control can fail; depth means one breach isn't game over. Layers 1–4 = **secure**, layer 5 = **compliant** (assume breach). Next: **operating** it.`,
  narration:
    "With the whole system designed, we now design how we protect it — and for a bank, this is where the bar is highest. The key principle is defense in depth: you never rely on a single wall. Instead you build independent layers, so that an attacker has to defeat every one, and the failure of any single control isn't game over. Let's go from the outside in. The first layer is the perimeter. Before traffic even reaches the bank, WAF inspects each web request against a set of rules and drops malicious ones — things like injection attacks — while Shield absorbs distributed denial-of-service floods. Bad traffic is stopped at the door. The second layer is the network, and we already designed most of it in the landing zone: the application and data tiers live in private subnets with no route to the internet, and security groups act as tight per-resource firewalls that open only the exact ports needed. Even if something got past the perimeter, there's very little it can reach. The third layer is identity — who is allowed to do what. IAM enforces least privilege, so every user and every service holds only the permissions it genuinely needs, and Cognito handles customer sign-in at the edge. The fourth layer protects the data itself, the crown jewels. KMS encrypts everything at rest — the Aurora ledger, the S3 lake, every volume — while ACM gives us TLS certificates so everything is encrypted in transit too, and Secrets Manager holds database passwords and API keys so that no credential is ever hard-coded into the application. Those four layers are the secure half of the requirement. The fifth layer is the compliant half, and its mindset is different: assume a breach will eventually happen, and make sure you'd know. GuardDuty continuously watches for threats, Macie scans the data stores to find and flag personal information, CloudTrail records every single action anyone takes as an immutable audit log, Config checks that resources stay within compliance rules, and Security Hub aggregates all of these findings into one place. Layered controls to keep attackers out, plus detection and audit for when they get in — that's how NovaBank meets the secure and compliant bar. The system is designed and protected; the last design question is how we run it day to day, which is operations.",
}
