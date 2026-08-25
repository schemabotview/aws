import type { Section } from '../types'

export const migration: Section = {
  id: 'migration',
  title: 'Migration — getting data into AWS',
  scene: 'migration',
  slide: `## Migration — getting data into AWS

Before the pipeline runs, you often must move **existing** data in — from on-prem or another cloud. Four tools, matched to what you're moving.

### DMS — databases
- **Database Migration Service**: migrate a live DB into **RDS / Aurora** (and between engines)
- **Continuous replication** keeps source and target in sync → cut over with **minimal downtime**

### DataSync — files, online
- Fast, managed transfer of **files (NFS / SMB)** into **S3, EFS, or FSx** over the network

### Snowball — petabytes, offline
- A **rugged physical appliance** AWS ships you: load it, mail it back, data lands in S3
- For when you have **too much data** to move over any reasonable network link

### Storage Gateway — hybrid
- A **local gateway** that gives on-prem apps cloud-backed storage — keep running locally while data lives in AWS

**Rule of thumb:** databases → DMS · files over the wire → DataSync · petabytes offline → Snowball · stay hybrid → Storage Gateway.`,
  narration:
    "There's an assumption baked into everything we've done so far: that the data is already in AWS. But most real projects start with data living somewhere else — in an on-premises data centre, or in another cloud — and getting it in is its own discipline, with four purpose-built tools you should be able to tell apart. The first is DMS, the Database Migration Service, and it's specifically for databases. DMS migrates a live, running database into AWS — typically into RDS or Aurora — and its superpower is continuous replication: it does an initial copy and then keeps streaming changes from the source to the target, so the two stay in sync while your application keeps running. When you're ready, you flip over to the AWS copy with only seconds of downtime. DMS can also move between database engines, say Oracle to PostgreSQL, using an accompanying schema conversion tool. The second is DataSync, and it's for files rather than databases. DataSync is a fast, managed transfer service that moves file data — over NFS or SMB shares — into S3, EFS, or FSx, over the network, handling the throughput, encryption, and verification for you. Reach for it when you have file data and a decent network connection to move it across. The third is Snowball, and it exists for one blunt reason: sometimes you simply have too much data to send over any network in a reasonable amount of time. If you have petabytes to move, even a fast internet link would take months. So AWS physically ships you a Snowball — a rugged, secure storage appliance — you plug it into your network, copy your data onto it locally, and mail it back, and AWS loads it straight into S3. It sounds almost primitive, but for very large volumes, shipping a box is genuinely faster than any wire. The fourth is Storage Gateway, and it's different from the others because it's not a one-time move — it's a hybrid bridge. You run a small gateway appliance in your own data centre, and it presents local storage to your on-premises applications while actually backing that storage with AWS in the cloud. So your existing apps keep reading and writing what looks like local disk, but the data lives in S3 or is backed up to AWS, letting you extend into the cloud gradually without rewriting anything. So the quick decision guide is: databases go through DMS, file data over the network goes through DataSync, enormous volumes go offline via Snowball, and ongoing hybrid access is Storage Gateway. With data flowing in and the whole pipeline built, the final section puts it all together end to end.",
}
