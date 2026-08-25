import type { Section } from '../types'

export const encryption: Section = {
  id: 'encryption',
  title: 'Encryption — KMS & TLS',
  scene: 'encryption',
  slide: `## Encryption — KMS & TLS

The innermost layer: protect the **data itself**, so it's useless if stolen — in **both** states.

### At rest — KMS envelope encryption
- **KMS** (Key Management Service) holds your **root key**, which **never leaves** KMS
- **Envelope encryption**: the KMS key encrypts a per-object **data key**; the data key encrypts the data
- **S3, EBS, RDS** (and most services) do this **transparently** — flip it on, KMS controls who can decrypt

### In transit — TLS
- **TLS** encrypts the **connection**, so traffic can't be read or tampered with en route
- **ACM** (Certificate Manager) provisions and **auto-renews** the certificates — free, no manual rotation
- Terminate TLS at **CloudFront / ALB / API Gateway** with an ACM cert

### Why it's the last line
- Even past every other layer, encrypted data is **unreadable without the key** — and KMS **gates the key**
- Key access is **IAM + key policies**, and every use is **logged** (CloudTrail)

**Rule of thumb:** encrypt everything, everywhere — at rest with KMS, in transit with TLS. It's cheap and mostly automatic.`,
  narration:
    "We start at the very core of the onion, with the data itself, and the way you protect data directly is encryption — scrambling it so that even if someone gets their hands on it, it's meaningless without the key. And data lives in two states, so there are two kinds of encryption to think about: data at rest, sitting on a disk, and data in transit, moving across the network. Let's take at rest first, because it introduces the key service, KMS, the Key Management Service. KMS is where your encryption keys are created and, crucially, kept — a root KMS key never leaves the service, it can't be exported, and every use of it is controlled and logged. Now, you might wonder how one key in KMS can efficiently encrypt terabytes of data, and the answer is a clever pattern called envelope encryption, which is worth understanding because it's everywhere in AWS. Instead of encrypting your data directly with the KMS key, the service generates a separate data key, uses that data key to encrypt your actual data, and then uses the KMS root key to encrypt the data key itself. So your data is wrapped by a data key, and the data key is wrapped by the KMS key — an envelope inside an envelope. The beautiful part is that S3, EBS, and RDS all do this for you transparently: you just enable encryption on the bucket or the volume or the database, and behind the scenes KMS and envelope encryption handle everything, with KMS controlling exactly who is allowed to decrypt. Then there's in transit, and here the tool is TLS — the same technology as the padlock in your browser. TLS encrypts the network connection itself, so that as your data travels between a client and a service, nobody in the middle can read it or tamper with it. To use TLS you need certificates, and managing certificates manually — provisioning them, remembering to renew them before they expire — is a classic source of outages. So AWS gives you ACM, the Certificate Manager, which provisions certificates for free and automatically renews them, and you attach them at your public endpoints like CloudFront, an Application Load Balancer, or API Gateway. Here's why encryption is such a powerful last line of defense: even if an attacker somehow gets past detection, past the perimeter, and past identity, what they reach is encrypted data that's unreadable without the key — and the key is locked inside KMS, gated by IAM and key policies, with every single use recorded in CloudTrail. So the rule of thumb is simply to encrypt everything, everywhere: at rest with KMS, in transit with TLS. On AWS it's cheap and largely automatic, so there's rarely a good reason not to. Encryption protects the data, but your application also holds other secrets — database passwords, API keys — and those need protecting too. That's next.",
}
