import type { Section } from '../types'

export const threatDetection: Section = {
  id: 'threat-detection',
  title: 'Threat detection — the detective controls',
  scene: 'threat-detection',
  slide: `## Threat detection — the detective controls

The outermost layer: **assume something gets through**, so watch continuously and catch it. Each service watches a different thing.

### The detectors
- **GuardDuty** — continuously analyses logs (VPC flow, DNS, CloudTrail) for **malicious activity & anomalies**
- **Inspector** — scans **EC2, container images, and Lambda** for known software **vulnerabilities (CVEs)**
- **Macie** — scans **S3** to discover and classify **sensitive data** (PII, secrets)

### Aggregate & investigate
- **Security Hub** — collects findings from all of them into **one dashboard**, and checks against **compliance standards** (CIS, PCI…)
- **Detective** — takes a finding and **graphs the surrounding activity** to find the root cause
- Findings can auto-trigger response (EventBridge → Lambda / Security Hub automations)

### Preventive vs detective
- The earlier layers are **preventive** (stop it happening); these are **detective** (catch what slips through)
- You need both — prevention fails silently, detection tells you

**Rule of thumb:** turn on GuardDuty + Security Hub everywhere (cheap, high-signal); add Inspector, Macie, Detective as your surface grows.`,
  narration:
    "We've reached the outermost layer of the onion, and it rests on a humbling assumption: that despite every preventive control, something will eventually get through — a misconfiguration, a stolen credential, a novel attack. So this layer is about detection: watching everything continuously so that when something bad happens, you find out fast instead of reading about it months later. These are called detective controls, and AWS gives you a handful, each watching a different surface. The first and most important is GuardDuty. GuardDuty continuously analyses your account's activity logs — VPC flow logs, DNS queries, CloudTrail management events — using threat intelligence and machine learning to spot malicious or anomalous behaviour: an instance suddenly talking to a known crypto-mining server, credentials being used from an unusual country, reconnaissance scanning. You just switch it on and it watches, with nothing to deploy. The second is Inspector, which scans for vulnerabilities — known security flaws, the CVEs — in your EC2 instances, your container images in ECR, and your Lambda functions, and it does it continuously, so when a new vulnerability is disclosed you find out which of your resources are affected. The third is Macie, and it's about sensitive data: Macie scans your S3 buckets and uses machine learning to discover and classify things like personally identifiable information — names, credit card numbers, credentials — so you know if sensitive data is sitting somewhere it shouldn't, or exposed. Now, three separate tools generating findings could be overwhelming, so two services tie it together. Security Hub is the aggregator: it pulls the findings from GuardDuty, Inspector, Macie, and more into a single dashboard, deduplicates and prioritises them, and continuously checks your environment against compliance standards like the CIS benchmarks or PCI. It's your single pane of glass for security posture. And Detective is the investigator: when you have a suspicious finding, Detective automatically pulls together all the related activity and visualises it as a graph, so you can trace what actually happened — which resource, which identity, what sequence of events — and get to the root cause quickly. The key mental distinction for this whole section is preventive versus detective. Every earlier layer — encryption, secrets, the perimeter — is preventive: it tries to stop bad things from happening. This layer is detective: it catches what slips through, because prevention fails silently, and detection is what actually tells you. You want both. A good starting posture is to turn on GuardDuty and Security Hub across all your accounts — they're inexpensive and high-signal — and add Inspector, Macie, and Detective as your footprint grows. That completes the internal security layers. The last piece faces your customers rather than your infrastructure: managing the identities of the users who sign in to your application. That's Cognito, next.",
}
