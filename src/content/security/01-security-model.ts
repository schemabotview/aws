import type { Section } from '../types'

export const securityModel: Section = {
  id: 'security-model',
  title: 'The security model — defense in depth',
  scene: 'defense-in-depth',
  slide: `## The security model — defense in depth

Security isn't one wall — it's **layers**. Each guards the next, so if one is breached the others still hold.

### The layers, outside in
- **Detection** — watch everything and alert on the abnormal (GuardDuty, Security Hub)
- **Perimeter** — block bad traffic at the edge (Shield DDoS, WAF, firewalls)
- **Identity** — decide *who may act at all* (IAM — Course 2, the innermost gate)
- **Encryption** — scramble the data itself so it's useless if stolen (KMS, TLS)
- **The core** — your data & workloads, the asset every layer protects

### Why layered
- No single control is perfect — **assume any one can fail** and make the next catch it
- This course is the **Protect** half: identity is *who*, security is *what guards the system*
- Extends **shared responsibility** (foundations §8): AWS secures *the cloud*; these layers secure what's *in* it

**The rest of the course walks the layers** — encryption, secrets, the perimeter, threat detection, and customer identity.`,
  narration:
    "This course is about security, and the single most important idea to start with — the one that organizes everything else — is defense in depth. The instinct people have about security is to look for the one wall, the single control that keeps the bad guys out. But real security doesn't work like that, because no single control is ever perfect. Defense in depth means you build multiple independent layers of protection, one inside the next, so that if any one layer is breached or misconfigured, the layers behind it still stand. Picture it as an onion, with your data and workloads at the very centre and rings of protection around them. Let's walk from the outside in. The outermost layer is detection: you assume something will eventually get through, so you watch everything and raise an alert the moment something looks abnormal — that's services like GuardDuty and Security Hub, and we'll cover them near the end. Inside that is the perimeter: the network edge, where you block bad traffic before it ever reaches your application — absorbing denial-of-service floods with Shield, filtering malicious web requests with the WAF, and using firewalls. Inside the perimeter is identity, which is the gate that decides who is even allowed to act — and that's IAM, the entire subject of Course 2, sitting here as one crucial layer of the bigger picture. And inside identity is encryption: you scramble the data itself, both while it's stored and while it moves, so that even if someone gets past everything else, what they find is unreadable — that's KMS and TLS. And at the very core is the thing all of this exists to protect: your data and your workloads. Now here's the framing to hold on to for the whole course. Back in foundations we talked about the shared responsibility model — AWS secures the cloud itself, and you're responsible for security in the cloud. These layers are exactly how you fulfil your side of that bargain. And it's worth being precise about the boundary with identity: Course 2 was about who may act — principals, policies, permissions. This course is about what protects the system around that — encrypting the data, guarding the perimeter, detecting threats, and handling your customers' identities. Over the next sections we'll go through the layers one at a time, starting at the core with the data itself: encryption.",
}
