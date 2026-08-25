import type { Section } from '../types'

export const defenseInDepthFinale: Section = {
  id: 'defense-in-depth',
  title: 'Defense in depth — putting it together',
  scene: 'security-board',
  slide: `## Defense in depth — putting it together

The whole course as one board. Pick the tool by asking: **which layer am I working on?**

### Encrypt the data
- **KMS** (keys, at rest) · **ACM** (TLS certs) · **Secrets Manager** (rotating secrets) · **Parameter Store** (config)

### Guard the perimeter
- **Shield** (DDoS) · **WAF** (bad requests) · **Firewall Manager** (org-wide policy)

### Detect threats
- **GuardDuty** (threats) · **Inspector** (vulns) · **Macie** (PII) · **Security Hub** (aggregate & standards)

### Identity & access
- **IAM** — your workforce & services (Course 2) · **Cognito** — your customers

### The mindset
- **Layer** your defenses — assume any one control fails, and make the next catch it
- **Least privilege** everywhere, **encrypt everything**, **turn on detection**, and **automate** the baseline (Firewall Manager, Security Hub)

**Security is not a feature you add — it's layers you build in.** Together with identity (Course 2), this is how you protect a system on AWS.`,
  narration:
    "Let's close the course by putting the whole picture together, because security on AWS only makes sense as a system of layers, not a pile of individual services. Think back to the onion from the very first section, and now fill each layer with the tools we've met. At the core, protecting the data itself, is encryption: KMS manages your keys and encrypts data at rest, ACM gives you TLS certificates for encryption in transit, and Secrets Manager and Parameter Store keep your credentials out of your code. Around that is the perimeter, facing the internet: Shield absorbs denial-of-service floods, the WAF filters malicious web requests, and Firewall Manager enforces those protections across every account. Wrapping everything is detection, because you assume something eventually gets through: GuardDuty watches for malicious activity, Inspector finds software vulnerabilities, Macie finds exposed sensitive data, and Security Hub pulls it all into one dashboard. And running through all of it is identity and access — IAM deciding who among your workforce and services may act, from Course 2, and Cognito handling the identities of your customers. Here's the way to actually use this board in practice: when you face a security question, ask which layer it belongs to, and the right service falls out. Protecting data? That's encryption — KMS. Facing an attack from the internet? That's the perimeter — Shield and WAF. Worried something's already wrong? That's detection — GuardDuty and Security Hub. And the mindset that ties it together is the one we started with: defense in depth. No single control is perfect, so you layer them, and you assume any one of them can fail and design so the next one catches it. Apply least privilege everywhere, encrypt everything by default, turn detection on across all your accounts, and automate the baseline with Firewall Manager and Security Hub so protection is never left to chance. The real lesson of this course is a shift in mindset: security is not a feature you bolt on at the end, it's a set of layers you build in from the start. And together with identity from Course 2, these layers are how you protect a real system on AWS — the Protect half of everything you've learned. From here, the final courses turn to how you operate and run all of this well.",
}
