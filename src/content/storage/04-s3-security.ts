import type { Section } from '../types'

export const s3Security: Section = {
  id: 's3-security',
  title: 'S3 — access & protection',
  scene: 's3-security',
  slide: `## S3 — access & protection

S3 is **private by default** — yet famous for leaks when misconfigured. Four layers keep a bucket safe.

### Who can reach it
- **Block Public Access** — a master switch, **on by default**, that overrides any policy trying to make objects public. Leave it on unless you *mean* to host a public site
- **Bucket policy** — a **resource policy** on the bucket (the identity §4 example): *who* may touch it, incl. cross-account. Same IAM evaluation — allow + no explicit deny

### Protecting the data
- **Encryption** — **at rest** every object is encrypted by default (SSE-S3); use **SSE-KMS** for your own keys + audit. **In transit** require **HTTPS/TLS**
- **Versioning** — keep **every version**; a delete just adds a marker, so overwrites & deletes are **recoverable** (pair with MFA-delete)`,
  narration:
    "Cheap, durable storage is worthless if the wrong people can read it — and S3 is genuinely famous for data leaks, not because it is insecure, but because it is easy to misconfigure. So let us be clear on the starting point: S3 is private by default. A brand-new bucket and everything in it is reachable only by the account that owns it; nothing is public unless you deliberately make it so. Four layers keep it that way. The first, and the one that has saved countless companies, is Block Public Access. It is a master switch, turned on by default at both the account and the bucket level, and it overrides any policy that tries to make objects public. Unless you are intentionally hosting a public website, you leave it on, and it prevents the classic leaky-bucket headline. The second layer is access control through policies, and this is exactly the machinery from the identity course, so it should feel familiar. There are two sides. IAM identity policies, attached to a user or role, say what that principal is allowed to do. And the bucket policy — a resource policy attached to the bucket itself — says who is allowed to touch this bucket. That bucket policy is the very example we used back in identity: this bucket may be read by account one-two-three and no one else. Access is granted only when a policy allows it and no explicit deny applies, and cross-account or public access both flow through that bucket policy. The third layer is encryption. At rest, S3 now encrypts every object by default using keys AWS manages; when you want tighter control and an audit trail of who decrypted what, you switch to KMS keys, which we cover in the security course. And in transit, you require HTTPS so data is protected on the wire as well as on disk. The fourth layer is versioning. Turn it on and S3 keeps every version of an object — because a delete simply adds a delete marker instead of destroying anything, and every overwrite is retained, you can recover from an accidental deletion, a bad deploy, or even ransomware. Pair it with MFA-delete for extra protection on the truly critical buckets. Put the four together — private by default, Block Public Access on, least-privilege policies, encryption everywhere, versioning for recovery — and a bucket is genuinely safe. That completes S3, the object-storage star. Now back down to the plainest shape of all: the disk a single server needs — EBS.",
}
