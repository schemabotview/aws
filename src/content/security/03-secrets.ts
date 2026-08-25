import type { Section } from '../types'

export const secrets: Section = {
  id: 'secrets',
  title: 'Secrets — no hard-coded credentials',
  scene: 'secrets',
  slide: `## Secrets — no hard-coded credentials

**Never** put passwords, API keys, or tokens in code or config — they leak into git, logs, and images. **Fetch at runtime instead.**

### The pattern
- The app requests the secret at runtime, authorised by its **IAM role**; the store returns it
- Secrets are **KMS-encrypted** at rest and access is **logged** — no credential ever ships with the code

### Two stores
- **Secrets Manager** — purpose-built: **automatic rotation** (e.g. rotate an RDS password on a schedule), cross-service, richer — small per-secret cost
- **SSM Parameter Store** — config *and* secrets, **simple and cheap**; SecureString params are KMS-encrypted; no built-in rotation

### Choosing
- Need **rotation** or database-credential integration → **Secrets Manager**
- Plain config, feature flags, or cost-sensitive secrets → **Parameter Store**

**Rule of thumb:** secrets that must rotate → Secrets Manager; everything else → Parameter Store. Either way, **fetch, never embed.**`,
  narration:
    "Encryption protects your data, but your application also carries a different kind of sensitive thing: credentials. Database passwords, third-party API keys, access tokens — the secrets your code needs to do its job. And there is one rule here that is close to absolute: never hard-code these into your source code or your configuration files. The reason is that hard-coded secrets leak, reliably and often catastrophically. They get committed into git history where they live forever, they get printed into logs, they get baked into container images and shared. The number of serious breaches that trace back to an API key sitting in a public repository is genuinely staggering. So the pattern you use instead is simple: your application fetches the secret at runtime, from a managed secret store, at the moment it actually needs it. The application authenticates to the store using its IAM role — so its identity, not an embedded password, is what grants access — the store hands back the secret, and that secret was encrypted at rest with KMS and every retrieval is logged. Nothing sensitive ever ships alongside your code. AWS gives you two services for this, and it's worth knowing when to reach for each. The first is Secrets Manager, which is purpose-built for exactly this. Its standout feature is automatic rotation: it can, on a schedule, generate a new database password, update it in both the secret and the database itself, and do it seamlessly, so your credentials change regularly without anyone touching them — which dramatically limits the damage a leaked secret can do. It integrates natively with RDS and other services, and it costs a small amount per secret per month. The second is SSM Parameter Store, part of Systems Manager, which stores configuration values and secrets. Its SecureString parameters are also KMS-encrypted, it's simple, and it's essentially free, but it doesn't do built-in rotation. So how do you choose? If you need rotation, or tight database-credential integration, reach for Secrets Manager. For plain configuration, feature flags, and cost-sensitive secrets where rotation isn't essential, Parameter Store is perfect — and many teams use both. But whichever you pick, the golden rule is the same: fetch your secrets, never embed them. Now, encryption and secrets protect what's on the inside. The next layers face outward — defending the perimeter against attackers on the internet. That's next.",
}
