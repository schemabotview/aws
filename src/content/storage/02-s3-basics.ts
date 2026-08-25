import type { Section } from '../types'

export const s3Basics: Section = {
  id: 's3-basics',
  title: 'S3 — buckets & objects',
  scene: 's3-basics',
  slide: `## S3 — buckets & objects

**S3** (Simple Storage Service) is object storage built on two nouns: **buckets** and **objects**.

### Buckets & objects
- A **bucket** is a container with a **globally-unique name**, living in **one Region** you choose
- An **object** is a **file + metadata**, stored under a **key** — a string that reads like a path (\`photos/cat.jpg\`), though the namespace is **flat** (the \`/\` is just part of the key)
- Reached over an **HTTP API** (GET/PUT) — **not a disk you mount**. Objects up to **5 TB**

### Why people trust it
- **Virtually unlimited** — store as many objects as you want
- **11 nines of durability** (99.999999999%) — S3 auto-replicates every object across **≥ 3 AZs**, so a whole zone can fail with **no data loss**`,
  narration:
    "S3, the Simple Storage Service, is the service you will reach for most on AWS, and it is built on just two nouns: buckets and objects. A bucket is a container for your data. You create one and give it a name, and that name has to be globally unique across all of AWS — not just your account, everyone's — because it can become part of a web address. The bucket lives in a single Region that you choose, and your objects stay there. An object is simply a file together with its metadata, and you store it under a key. The key is a string that acts like the object's full path — something like photos slash cat dot jpg. Here is the subtle part: the namespace is actually flat. There are no real folders; the slashes are just characters in the key that give you the comforting illusion of folders, and the console renders them that way. Each object can be up to five terabytes. And crucially, you do not mount an S3 bucket like a disk — you talk to it over an HTTP API, doing GETs and PUTs, and every object has a URL. Now, two properties are why people trust S3 with everything. First, it is virtually unlimited — you can keep putting objects in without ever provisioning capacity. Second, and this is the famous number, it offers eleven nines of durability: 99.999999999 percent. Behind the scenes S3 automatically stores copies of every object across at least three Availability Zones, so an entire zone can fail and you lose nothing. Practically, eleven nines means that if you stored ten million objects, you would expect to lose a single one roughly once every ten thousand years. That durability is automatic — you do not configure it. So that is what S3 is and why it is trusted. The next question is the one that shows up on your bill: not all data is accessed equally, and S3 lets you pay far less for the cold stuff. That is storage classes and lifecycle.",
}
