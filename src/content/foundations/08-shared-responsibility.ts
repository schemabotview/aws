import type { Section } from '../types'

export const sharedResponsibility: Section = {
  id: 'shared-responsibility',
  title: 'Shared responsibility',
  scene: 'shared-responsibility',
  slide: `## Shared responsibility

This one frames the **whole map**: security on AWS is a **partnership** with a precise dividing line.

### AWS secures *of* the cloud
- The **physical** layer — data centers, hardware, the host software, the global network (the *global infrastructure* quadrant)
- The parts you can't see or touch; AWS's side is **rock solid**

### You secure *in* the cloud
- Your **data**, your **IAM** permissions, your **network config**, and patching anything **you** run
- The overwhelming majority of real-world breaches are here — a **public S3 bucket**, a **leaked access key**, an over-permissive policy

### Why it lands here
- It's exactly why **\`identity\` is Course 2** — the most important thing you own is *who can do what*

AWS runs and secures the metal; **you** own and secure what runs on it. One idea left: what it all **costs**.`,
  narration:
    "Look at the whole map for a moment, because this idea applies to every piece of it. Security on AWS is a partnership, governed by a model called shared responsibility that draws a precise line about who secures what — internalizing it now will save you from real incidents. AWS is responsible for security of the cloud: the physical data centers, the servers, the storage and networking hardware, and the underlying host software of the managed services — that whole global-infrastructure quadrant we just toured, everything you can't see or touch. You are responsible for security in the cloud: your data, who you grant access to through IAM, how you configure your network, and, for anything you run yourself, keeping it patched. That line matters enormously, because the overwhelming majority of real-world cloud breaches happen on the customer's side of it — a storage bucket accidentally made public, an access key committed to GitHub, a policy that grants far more than it should. AWS's half is rock solid; the mistakes are almost always in the in-the-cloud half that's yours. And that is precisely why the very next course, the second in the whole series, is about identity and access management — because the single most important thing you own and secure on AWS is control over who can do what. So: AWS runs and secures the metal; you own and secure what runs on top of it. There's just one framing idea left, and it's the one that surprises people on their first bill — what all of this costs.",
}
