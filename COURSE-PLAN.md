# AWS — course plan

> The spine for the AWS content repo. Defines the routing/identifier contract, the course arc, the
> scene inventory, and the build order. Authored **one reviewed slice at a time**: sketch → approve →
> build → verify in-app.

## Identifier & route contract

Two kinds of thing, two routes (hash routing — see `src/App.tsx`):

| Route | Kind | What it shows |
|-------|------|---------------|
| `#/<course-section>` | **slug** (a *section*) | the **composited output**: scene + the **fixed-right** slide panel (+ narration audio in the rendered video) |
| `#/<scene>` | **scene** | the individual diagram on its own |

- **scene** = a declarative react-flow graph (`nodes` + `edges` + `children`); the engine derives
  every position and size via the pure longest-path algorithm — **authors never hand-place nodes**.
  A scene is content-agnostic and can be **shared across many slugs**.
- **slug** = `<courseId>-<sectionId>` = one **section**: a `(scene, focus?, slide, narration)` tuple.
  **One section = one slide.** `slide` is terse markdown for the on-screen panel (the eye);
  `narration` is the flowing spoken script for TTS (the ear). Both are hand-authored in TS for the MVP.
- A bare id resolves to a **section** if it matches a slug, else to a **scene** — slug ids
  (`course-section`) and scene ids never collide, so no prefix is needed.
- **← / →** step through a course's sections in order; `?capture=1` exposes `window.__scene` for the
  headless recorders.

**Naming.** Slugs are `<courseId>-<sectionId>` (e.g. `identity-roles-assume`). Scene ids are short
kebab nouns for the diagram (e.g. `roles-assume`), **not** tied to any one course.

**Two formats, one composition.** Landscape `3840×2160` (4K, 16:9) → YouTube; portrait `1080×1920`
(9:16) → Reels. The slide is fixed to the right — a column beside the scene in landscape, a toggled
drawer in portrait (so the portrait reel capture, drawer closed, is scene-only). The switch is pure
CSS; no JS branching.

## Scene toolkit (engine capability)

The render-engine draws **flow diagrams** laid out by the pure longest-path algorithm, and the
originally-roadmapped board shapes have **landed** as one composable toolkit:

- **Containers** — a `SceneNode` with `children` is a labelled box; the engine lays children out
  inside it and sizes the box to fit (recursive). A container can carry its own `edges` so children
  **flow**, or stay edgeless to **stack**; `cols: N` grids them; `flow: 'LR'` runs the child flow
  left→right. Edges may point at a node nested deep inside another container.
- **Node shapes** — a leaf is a **card** (icon-left rectangle) or, with `variant: 'tile'`, a compact
  icon-over-label **tile**. **No edges → vertical stack**; edges → longest-path flow. `cols: N` on the
  `Scene` itself grids its top-level peers.
- **Icons** — the one `icon` field resolves in priority order: an official **AWS service tile**
  (`aws-react-icons`, registry `render-engine/awsIcons.ts`) → a named **lucide glyph**
  (`render-engine/lucideIcons.ts`) → the pattern's default glyph.
- Node roles come from `patterns` — `service · storage · network · user · external · group`.

Flow runs **top → bottom** (vertical is the one universal shape — it fits the laptop's left column
*and* the mobile portrait frame); `fitView` scales it into whatever area it's given.

## Course arc (the target spine)

The arc is the **architect's build-up**, grouped by the layer of the mental model each course
teaches — the grouping *is* the ordering (adopted from the graphl-studio AWS arc).

| # | id | Title | Stage |
|---|----|-------|-------|
| 1 | `foundations` | The cloud & global infrastructure | Ground |
| 2 | `identity` | IAM, Identity Center & Organizations | Who |
| 3 | `compute` | EC2, Auto Scaling & containers | Run |
| 4 | `storage` | S3, EBS & EFS | Store |
| 5 | `networking` | VPC & the edge | Connect |
| 6 | `databases` | RDS, Aurora & DynamoDB | Model |
| 7 | `serverless` | Lambda & event-driven integration | Compose |
| 8 | `data-engineering` | Lakes, pipelines, analytics & migration | Analyze |
| 9 | `security` | Encryption, detection & protection | Protect |
| 10 | `governance` | Observability, cost, IaC & CI/CD | Operate |
| 11 | `project` | Capstone — ship a real system end to end | Ship |

**Seam rationale (why these cuts):** identity stands alone (course 2) because the principal → policy
→ resource model underpins every later service; `data-engineering` is split from `databases`
(lake/streaming ≠ managed OLTP); `security` (what protects) is separate from `identity` (who may act)
and `governance` (how you run & audit). ML/AI (SageMaker, Bedrock) is deliberately out of the core
arc.

**Coverage watch (RESOLVED — all four now have built homes).** Benchmarked against the 253-section
SAA reference curriculum (`../../Products/aws-content` + `../../Projects/aws`, 14 modules), this arc's
*breadth* is complete — every major service maps to a course. The four reference topics that once had
no clear home have all landed:

- **Well-Architected Framework** (the 5 pillars) → course 11 `project` **§12 well-architected-review**
  (the design-phase finale).
- **DR / backup** (backup-restore, pilot-light, warm-standby, multi-region; AWS Backup) → `governance`
  **§7 resilience** (+ reprised in project §11 operations-design).
- **Cognito** (customer/end-user identity) → `security` **§6 cognito** (+ reprised in the project app core).
- **Migration** (DMS, DataSync, Snowball, Storage Gateway) → `data-engineering` **§7 migration**.

Deliberately lighter than the reference on *depth* (~⅓ the section count): one-slide-per-section,
mental-model-first, video-shaped — not exhaustive exam coverage. Minor omissions accepted: Elastic
Beanstalk, Outposts, AppSync, Global Accelerator.

## Section arcs (what's built / building)

One scene per section (foundations pattern). Slug = `<course>-<section>`; scene id in `code`.

### `foundations` — 9 sections · **DONE** (authored + rendering + recorded)

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | what-is-cloud | `rented-cloud` | 2×2 category grid of service tiles |
| 2 | service-models | `service-ladder` | You + AWS Cloud box, IaaS/PaaS/SaaS bands |
| 3 | deployment-models | `deployment-models` | scene-level 2×2 of LR actor→target bands |
| 4 | regions | `regions` | `AWS ⊃ Regions` |
| 5 | availability-zones | `region-azs` | `You → AWS ⊃ Region ⊃ AZ ⊃ DC` zoom |
| 6 | high-availability | `multi-az` | load balancer fanned across AZs |
| 7 | connecting | `access-surfaces` | four surfaces → `AWS ⊃ (API → IAM → Services)` |
| 8 | shared-responsibility | `shared-responsibility` | two-halves split |
| 9 | pay-as-you-go | `cost-model` | metered-usage → bill → controls chain |

### `identity` — 10 sections · **DONE** (authored + rendering; recording/TTS pending)

Course 2 (IAM, Identity Center & Organizations). Narration ported/adapted from
`../../graphl-studio/aws/src/content/courses/identity.ts` (a single shared `identity-map` scene with
quadrant highlighting) → re-cut here as one scene per section. Three acts:

| # | section | scene | status |
|---|---------|-------|--------|
| 1 | every-request | `every-request` | ✅ built |
| 2 | principals | `principals` | ✅ built |
| 3 | policies | `policies` | ✅ built |
| 4 | policy-types | `policy-types` | ✅ built |
| 5 | roles-assume | `roles-assume` | ✅ built |
| 6 | boundaries | `boundaries` | ✅ built |
| 7 | identity-center | `identity-center` | ✅ built |
| 8 | permission-sets | `permission-sets` | ✅ built |
| 9 | organizations | `organizations` | ✅ built |
| 10 | scps | `scps` | ✅ built |

Acts: **I · IAM model (one account)** §1–6 · **II · Human access at scale** §7–8 · **III ·
Multi-account governance** §9–10.

### `compute` — 8 sections · **DONE** (authored + rendering; recording/TTS pending)

Course 3 (EC2, Auto Scaling & containers — *where code runs*). Narration ported/adapted from
`../../graphl-studio/aws/src/content/courses/compute.ts`. Arc = the **control ↔ convenience
spectrum**: frame it, go deep on EC2 (the workhorse), then make it elastic and portable. Lambda is
named as the convenience end but **built in Course 7 `serverless`**, not here. Built with the same
container/grid/tile + flow toolkit.

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | what-is-compute | `what-is-compute` | `your code → Compute` box previewing the 4 options (2×2) |
| 2 | spectrum | `compute-spectrum` | vertical **ladder** — EC2 at the base, climb up to Lambda (control ↔ convenience) |
| 3 | ec2-anatomy | `ec2-anatomy` | `EC2 instance ⊃ {AMI, instance type, EBS, key pair, security group}` |
| 4 | ec2-pricing | `ec2-pricing` | scene-level 2×2 — On-Demand · Spot · Reserved · Savings Plans |
| 5 | load-balancing | `load-balancing` | ELB fans one entry point across a fleet, spanning AZs |
| 6 | auto-scaling | `auto-scaling` | ASG (min/desired/max) launches across AZs; ELB in front |
| 7 | containers | `containers` | flow: image → ECR → orchestrator → {on EC2 · Fargate} |
| 8 | choosing | `choosing-compute` | decision board — pick a rung by need (recap of the spectrum) |

Acts: **I · The model** §1–2 · **II · EC2, the workhorse** §3–4 · **III · Elastic & portable**
§5–8. Rhymes to lean on: §5 makes Course-1 Multi-AZ concrete; §4 revisits the pay-as-you-go cost
model; §2 maps onto Course-1 service models (EC2 ≈ IaaS). Hands off to Course 4 `storage`.

### `storage` — 7 sections · **DONE** (authored + rendering · greenfield)

Course 4 (S3, EBS & EFS — *where data lives*). **No studio prior art** — the studio arc stops at
compute, so narration + slides are **authored fresh** here (from the AWS domain, not ported). The
spine: one mental model (three *shapes* of storage — block · file · object, matched to access
pattern), then go deep on **S3** (the star), then the **attached** storage that a server needs, then
how to choose. Built with the same container/grid/tile + flow toolkit.

| # | section | scene (proposed) | shape |
|---|---------|------------------|-------|
| 1 | what-is-storage | `storage-shapes` | 3-way board — **Block · File · Object**, each with its access pattern |
| 2 | s3-basics | `s3-basics` | `S3 bucket ⊃ objects` — key→object, virtually unlimited, 11 9's durable |
| 3 | s3-classes | `s3-classes` | a **cost/temperature ladder** — Standard → IA → Glacier → Deep Archive + lifecycle |
| 4 | s3-security | `s3-security` | the layers guarding a bucket — bucket policy · block-public-access · encryption · versioning (ties to identity) |
| 5 | ebs | `ebs` | block: `EC2 —attached→ EBS volume —snapshot→ S3`; single-AZ, persists |
| 6 | efs | `efs` | file: many EC2 across AZs mount one shared **EFS** (fan-in) |
| 7 | choosing-storage | `choosing-storage` | decision board — block vs file vs object by access pattern (recap) |

Acts: **I · The model** §1 · **II · S3, the star** §2–4 · **III · Attached storage & choosing**
§5–7. Rhymes to lean on: §4 revisits identity resource policies (bucket policy = the S3 example from
identity §4); §5 revisits compute §3 (the EBS root volume) and §4's snapshot→S3; §7 mirrors compute
§8's decision board. Hands off to Course 5 `networking`. **Optional 8th:** a `durability` /
backup section (11 9's, AZ-spread, AWS Backup) if §2 feels too dense.

### `networking` — 8 sections · **DONE** (authored + rendering · greenfield)

Course 5 (VPC & the edge — *the wiring that connects it all*). **No studio prior art** — authored
fresh. The spine: build your own private network (the VPC), secure & trace traffic through it, then
reach beyond one VPC and out to the global edge. Homes the reference curriculum's VPC/connectivity +
DNS/CDN/edge domains. Built with the same container/grid/tile + flow toolkit.

| # | section | scene (proposed) | shape |
|---|---------|------------------|-------|
| 1 | what-is-networking | `vpc-intro` | `Region ⊃ VPC (10.0.0.0/16)` — your own isolated private network |
| 2 | subnets | `subnets` | `VPC ⊃ AZ ⊃ {public subnet · private subnet}` — carve it, one per AZ |
| 3 | routing | `routing` | route tables + gateways: private → **NAT** → **IGW** → internet; public → IGW |
| 4 | security-groups-nacls | `vpc-security` | nested firewalls — subnet `[NACL]` ⊃ instance `[SG]`; stateful vs stateless |
| 5 | request-path | `vpc-request-path` | the whole path: `user → IGW → ALB (public) → EC2 (private) → RDS` |
| 6 | connecting | `vpc-connecting` | beyond one VPC — peering · Transit Gateway · VPN/Direct Connect · PrivateLink & endpoints |
| 7 | edge | `edge` | `user → Route 53 (DNS) → CloudFront (CDN edge) → origin`; + Global Accelerator |
| 8 | choosing-networking | `choosing-networking` | decision board — SG vs NACL · public vs private · peering vs TGW vs PrivateLink |

Acts: **I · Your private network** §1–3 · **II · Securing & tracing traffic** §4–5 · **III · Beyond
the VPC & the edge** §6–8. Rhymes to lean on: §1 revisits foundations Regions/AZs; §4 revisits
compute §3 (security group = the instance firewall); §5 is the classic request path (echoes the seed
`vpc-basics`); §8 mirrors compute §8 / storage §7. Hands off to Course 6 `databases`.

### `databases` — 7 sections · **built** (greenfield)

Course 6 (RDS, Aurora & DynamoDB — *give data structure & fast query*). **No studio prior art** —
authored fresh. The spine: why managed databases, then the SQL vs NoSQL split, then deep on the
managed relational engines (RDS, Aurora), the managed NoSQL one (DynamoDB), caching, and how to
choose. Analytics/lakes are **Course 8 `data-engineering`**, not here. Built with the same toolkit.

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | managed-databases | `managed-db` | You → RDS: you keep schema/queries/data, RDS does the ops (patch/backup/HA/scale as a 2×2 grid) |
| 2 | sql-vs-nosql | `sql-vs-nosql` | the split — **Relational (SQL)** (engine vendors) vs **NoSQL** (purpose-built family), two peer bands |
| 3 | rds | `rds` | RDS primary → **Multi-AZ** standby (failover) + **read replicas** (scale reads) — one primitive, two jobs |
| 4 | aurora | `aurora` | writer + readers **converge** onto shared storage, 6 copies across 3 AZs (inverse of §3's fan) |
| 5 | dynamodb | `dynamodb` | serverless NoSQL — partition key → auto-sharded partitions, single-digit ms at any scale; Global Tables |
| 6 | caching | `db-caching` | two lanes — ElastiCache → relational, DAX → DynamoDB; hit/miss in the sub lines |
| 7 | choosing-a-database | `choosing-db` | 2×2 decision board — relational/NoSQL · RDS/Aurora · purpose-built family · then cache |

Acts: **I · The model** §1–2 · **II · Relational** §3–4 · **III · NoSQL, caching & choosing**
§5–7. Rhymes: §1 echoes compute's managed spectrum; §2 echoes storage §1 (match shape to access);
§3's Multi-AZ echoes foundations/networking HA; §7 mirrors compute §8 / storage §7 / networking §8.
Homes RDS, Aurora, DynamoDB, ElastiCache, DAX + DocumentDB/Neptune/Keyspaces (tiled in §2 & §7).
Added AWS icons: DocumentDB, Neptune, Keyspaces, DAX. Hands off to Course 7 `serverless`.

### `serverless` — 7 sections · **built** (greenfield)

Course 7 (Lambda & event-driven integration — *compose managed services into applications*). **No
studio prior art** — authored fresh. The theme is **Compose**: wire Lambda and the integration glue
into event-driven apps. Containers (ECS/EKS/Fargate) are **Course 3 `compute`**, not here; streaming
& analytics (Kinesis) are **Course 8 `data-engineering`**. Cognito stays parked for `security`.
Built with the same toolkit.

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | what-is-serverless | `what-is-serverless` | You → Lambda: write a function, AWS runs everything (no servers · auto-scale 0→N · pay-per-use) |
| 2 | lambda | `lambda` | the function model — `event → Lambda ⊃ (handler · runtime · exec role · config) → response`; scales to zero, per-ms billing |
| 3 | event-sources | `event-sources` | 3 invocation-model lanes fanning into Lambda — **sync** (API GW/ALB), **async** (S3/SNS/EventBridge), **poll** (SQS/streams); each lane's retry contract in the sub |
| 4 | api-gateway | `api-gateway` | canonical request path as a vertical chain — `Client → API Gateway → Lambda → DynamoDB`; (+ Function URLs in slide) |
| 5 | messaging | `messaging` | three stacked LR lanes — **SQS** (one→one queue), **SNS** (one→many fan-out), **EventBridge** (bus routing); the fan distinguishes them |
| 6 | step-functions | `step-functions` | the state machine drawn as a workflow — validate → charge → **Choice** → fulfil/cancel; Standard vs Express in slide |
| 7 | event-driven-app | `serverless-stack` | finale — composed app: sync API path + Lambda→EventBridge→Step Functions + async S3→Lambda; when-serverless in slide |

Acts: **I · The model** §1–2 · **II · Triggers & front door** §3–4 · **III · Compose** §5–7.
Rhymes: §1 echoes compute's Lambda end + databases §1 (You → managed service); §7 is a composed
architecture rather than a decision board. Homes Lambda, API Gateway, SQS, SNS, EventBridge, Step
Functions (+ Function URLs, DynamoDB reprise). Added AWS icons: SQS, SNS, EventBridge, Step Functions.
Hands off to Course 8 `data-engineering`.

### `data-engineering` — 8 sections · **built** (greenfield)

Course 8 (Lakes, pipelines, analytics & migration — *collect data at scale, refine it, get insight*).
**No studio prior art** — authored fresh. The theme is **Analyze**: the OLAP/analytics world, as
opposed to the OLTP databases of Course 6. Owns the data side only — the lake, ingestion/streaming,
ETL, query, warehouse, migration. Messaging/orchestration (SQS/SNS/EventBridge/Step Functions) are
**Course 7 `serverless`**, not here. This is where **Kinesis/streaming** and **migration** (DMS/
DataSync/Snowball/Storage Gateway, parked here in the coverage-watch) land. Built with the same toolkit.

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | analytics-vs-oltp | `two-data-worlds` | the frame — **OLTP** (run the app) vs **OLAP/analytics** (understand the data); pipeline shape *ingest → store → transform → analyze*; batch vs stream |
| 2 | data-lake | `data-lake` | **S3 as the lake** — cheap, unlimited, any format, **schema-on-read**; lake vs warehouse (+ Lake Formation nod) |
| 3 | ingestion-streaming | `ingestion` | data in real-time — **Kinesis Data Streams** (shards) → **Firehose** (managed load to S3/Redshift); batch vs stream (+ MSK nod) |
| 4 | glue-etl | `glue` | **AWS Glue** — the **Data Catalog** (crawlers infer schema) + serverless **Spark ETL** to clean/transform |
| 5 | athena | `athena` | **query the lake in place** — serverless SQL on S3 via the Glue catalog; pay per scan, no loading |
| 6 | redshift | `redshift` | the **data warehouse** — columnar **MPP OLAP** for heavy queries; COPY to load, **Spectrum** to query S3 |
| 7 | migration | `migration` | move existing data to AWS — **DMS** (databases), **DataSync** (files), **Snowball** (petabyte offline), **Storage Gateway** (hybrid) |
| 8 | analytics-stack | `analytics-stack` | finale — end-to-end pipeline (source → ingest → S3 lake → Glue → Athena/Redshift → **QuickSight**) + choosing board (EMR/OpenSearch nods) |

Acts: **I · Two worlds & the lake** §1–2 · **II · Ingest & shape** §3–4 · **III · Analyze, move &
compose** §5–8. Rhymes: §1 echoes databases §2 (match shape to workload — here OLTP vs OLAP); §8
mirrors the composed finale (serverless §7) + the decision boards. Homes S3-lake, Kinesis, Firehose,
Glue, Athena, Redshift, DMS, DataSync, Snowball, Storage Gateway, QuickSight (+ Lake Formation, MSK,
EMR, OpenSearch nods). Added AWS icons: Redshift, Athena, Glue, EMR, Lake Formation, Kinesis, Firehose,
DMS, DataSync, Snowball, Storage Gateway. Engine gained a dynamic container header here (see below).
Hands off to Course 9 `security`.

### `security` — 7 sections · **built** (greenfield)

Course 9 (Encryption, detection & protection — *protect the data, guard the perimeter, detect threats*).
**No studio prior art** — authored fresh (reference: `../../Projects/aws/11-security-services.ipynb`).
Theme **Protect**: what guards the system, as opposed to identity (Course 2, *who may act*). Cognito
lands here (customer identity). Governance owns CloudTrail/Config + DR/backup (Course 10); IAM is
Course 2; Well-Architected is Course 11. Built with the same toolkit.

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | security-model | `defense-in-depth` | the frame — **defense in depth**: layered controls (data · perimeter · detection) on top of identity; extends shared-responsibility (foundations §8) |
| 2 | encryption | `encryption` | protect the data — **KMS** envelope encryption at rest (S3/EBS/RDS) + **TLS/ACM** in transit |
| 3 | secrets | `secrets` | no hard-coded credentials — **Secrets Manager** (rotation) vs **SSM Parameter Store**; app fetches at runtime |
| 4 | perimeter | `perimeter` | guard the front door — **Shield** (DDoS), **WAF** (web-request rules), **Firewall Manager** (org-wide policy) |
| 5 | threat-detection | `threat-detection` | detective controls — **GuardDuty** (threats), **Inspector** (vulns), **Macie** (sensitive data), **Security Hub / Detective** (aggregate & investigate) |
| 6 | cognito | `cognito` | customer identity — **User Pools** (authN/sign-in) + **Identity Pools** (AWS credentials); the customer-facing mirror of IAM |
| 7 | defense-in-depth | `security-board` | finale — the layered-security board (encrypt · guard · detect · identity) + picking the right tool |

Acts: **I · Frame & data** §1–2 · **II · Secrets & perimeter** §3–4 · **III · Detect, customers &
compose** §5–7. Rhymes: §1 extends shared responsibility (foundations §8); §6 Cognito is the
customer-side mirror of Course 2's workforce IAM; §7 mirrors the finale decision boards. Homes KMS,
ACM, Secrets Manager, Parameter Store, Shield, WAF, Firewall Manager, GuardDuty, Inspector, Macie,
Security Hub, Detective, Cognito. Added AWS icons: KMS, ACM, WAF, Shield, Firewall Manager, Secrets
Manager, GuardDuty, Inspector, Macie, Security Hub, Detective, Cognito. §1 uses the layer-board
variant (the nested-onion alternative was prototyped, board chosen); §7 is the 2×2 layer finale. Hands
off to Course 10 `governance`.

### `governance` — 8 sections · **built** (greenfield)

Course 10 (Observability, cost, IaC & CI/CD — *run what you built: observe, automate, optimize,
recover*). **No studio prior art** — authored fresh (references: `../../Projects/aws/12-observability-
and-governance.ipynb` + `13-ha-dr-cost-and-migration.ipynb`). Theme **Operate**: the Day-2 half. Owns
observability, audit/compliance, IaC, CI/CD, cost, and **DR/backup** (parked here in the coverage-
watch). Migration is Course 8; Organizations/SCPs are Course 2; the Well-Architected pillars are
Course 11. Built with the same toolkit.

| # | section | scene | shape |
|---|---------|-------|-------|
| 1 | operations | `operate-loop` | the frame — **Day 2**: you built it (Courses 1–9), now run it; the operate loop (observe → automate → optimize → recover) |
| 2 | cloudwatch | `cloudwatch` | observability — **metrics · logs · alarms · dashboards**; alarm → auto-scale / notify |
| 3 | audit-config | `audit-config` | **CloudTrail** (who did what) + **Config** (what changed & is it compliant) — the account's black box |
| 4 | infrastructure-as-code | `iac` | **CloudFormation / CDK** — declare infra in a template, deploy repeatably; no click-ops |
| 5 | cicd | `cicd` | **CodePipeline → CodeBuild → CodeDeploy** — commit → build → test → deploy automatically |
| 6 | cost | `cost` | optimize spend — **right-size**, commitment discounts (**Savings Plans / RI / Spot**), **Cost Explorer / Budgets** |
| 7 | resilience | `resilience` | HA recap → **DR**: **RTO/RPO** + four strategies (backup-restore → pilot-light → warm-standby → multi-site) + **AWS Backup** |
| 8 | well-run | `governance-board` | finale — the operations board (observe · automate · optimize · recover) + picking the right tool |

Acts: **I · Observe & audit** §2–3 · **II · Automate** §4–5 · **III · Optimize & survive** §6–7 · frame
§1, finale §8. Rhymes: §2 alarms tie to compute auto-scaling; §6 revisits foundations pay-as-you-go §9
+ compute pricing + storage classes; §7 extends HA (foundations §6 / networking); §8 mirrors the finale
boards. Homes CloudWatch, CloudTrail, Config, CloudFormation/CDK, CodePipeline/Build/Deploy, Cost
Explorer, Budgets, Savings Plans/RI/Spot, AWS Backup, Trusted Advisor. Added AWS icons: CloudWatch,
CloudTrail, Config, CloudFormation, CodePipeline/Build/Deploy/Commit, CostExplorer, Budgets, Backup,
Trusted Advisor. Hands off to Course 11 `project`.

### `project` — Capstone · **building** (greenfield)

Course 11 (Capstone — *ship a real system end to end*). **No studio prior art** — authored fresh.
Theme **Ship**: compose everything from Courses 1–10 into one real, well-architected system —
**"NovaBank", a fictional retail bank on AWS** (purely educational; not a real brand). Domain chosen
because banking genuinely needs every pillar — a transactional core, event-driven payments, real-time
fraud analytics, the highest security/compliance bar, and always-on + DR. Real-time fraud analytics is
the flagship feature, not the whole system.

**Shape = a real delivery: Requirements → Design → Implementation**, split cleanly across the two repos
so nothing mixes. The **concept app (`aws`)** owns the *thinking* — **Phase 1 Requirements** (what we
need — the OLTP core, the OLAP analytics world, and the non-functional bar) and **Phase 2 Design** (how
we build it on AWS — the landing zone, the full architecture, and a design deep-dive per subsystem).
**`aws-lab`** owns the *doing* — **Phase 3 Implementation**: build it service-by-service in the real
console (owner-driven creates). One theme per phase; the design deep-dive *designs* a subsystem and the
paired lab *builds* it. The design overview rides the **shared `nova-architecture` poster** (every
service across the ten courses, wired with flow edges; two mirrored AZs with Aurora primary→standby,
DynamoDB as a gateway endpoint). The standalone `landing-zone` subnet diagram was **retired** — its
story is now told against the full poster.

**Phase 1 · Requirements** (concept app — the problem, no AWS services named yet)

| # | section | scene | explains |
|---|---------|-------|----------|
| 1 | the-brief | `brief` ✅ | the frame — NovaBank's 5 capabilities + the requirement bar (**secure · compliant · always-on · scalable**); introduces the two data worlds to come |
| 2 | oltp-requirements | `oltp-needs` | the **transactional** core — accounts, ledger, payments: correctness/ACID, strong consistency, low latency, 24/7 |
| 3 | olap-requirements | `olap-needs` | **analytics & fraud** — real-time scoring + historical insight & regulatory reporting: scale, stream **and** batch, schema-on-read |
| 4 | quality-requirements | `quality-needs` | the **non-functional** bar in depth — secure · compliant (audit/PII) · always-on (**RTO/RPO**, AZ *and* Region) · scalable |

**Phase 2 · Design & Architecture** (concept app — map the requirements onto AWS)

| # | section | scene | designs |
|---|---------|-------|---------|
| 5 | architecture-foundation | `nova-architecture` ✅ | overview 1/2 — *the ground*: the edge (Route 53 · CloudFront · WAF · Shield · Cognito · API GW) + Organizations/accounts + the VPC/subnets landing zone (Courses 1·2·5·9) |
| 6 | architecture-composition | `nova-architecture` ✅ | overview 2/2 — *how it composes*: app core (OLTP) · events · fraud & analytics (OLAP) · the security & ops base (Courses 3·6·7·8·9·10) |
| 7 | oltp-design | `core-app` | transactional deep-dive — request path Client → **Cognito** → **API GW** → **ECS/Lambda** → **Aurora** (Multi-AZ failover) + **DynamoDB** + **ElastiCache** (Courses 3·4·6·7) |
| 8 | olap-design | `analytics` | analytics deep-dive — real-time scoring path vs the batch lake: **Kinesis → S3 lake → Glue → Athena/Redshift → QuickSight** (Course 8) |
| 9 | integration-design | `payments` | event-driven money movement — the transfer **saga**: **EventBridge · SQS · SNS · Step Functions**; **Kinesis** txn stream (Course 7) |
| 10 | security-design | `secure-bank` | defense-in-depth for a bank — **KMS** everywhere, **Secrets Manager**, **WAF/Shield**, **GuardDuty/Macie** (PII/compliance), least-privilege IAM (Course 9) |
| 11 | operations-design | `operate-bank` | run it — **CloudWatch** dashboards, **CloudFormation + CI/CD**, cost controls, **multi-Region DR** (Course 10) |
| 12 | well-architected-review | `waf-pillars` | design finale — review the design against the **5 Well-Architected pillars** (operational excellence · security · reliability · performance · cost); lands WAF, parked here |

**Phase 3 · Implementation** (`aws-lab` — build it for real, service by service; see `aws-lab/CLAUDE.md`)

The **18-lab console-tour arc** under `aws-lab/labs/project/`, owner-driven creates (capture is
read-only; the owner clicks each Create), each lab paired to the design section it realizes:

| act | labs | pairs with |
|-----|------|-----------|
| ground | `organizations-setup` ✅ · `landing-zone-vpc` ✅ | §5 |
| edge | `dns-and-tls` · `cognito-user-pool` · `api-gateway` | §5 |
| app core | `alb-and-ecs` · `aurora-multi-az` · `dynamodb-and-cache` | §7 |
| payments | `events-messaging` · `step-functions-transfer` | §9 |
| analytics | `kinesis-ingestion` · `s3-lake-and-glue` · `athena-and-redshift` | §8 |
| security | `kms-and-secrets` · `threat-detection` | §10 |
| operations | `observability` · `iac-and-cicd` | §11 |
| review | `well-architected-tool` | §12 |

This is the **final course** — completes the 11-course arc. **Built:** the concept app is **complete
through Phases 1–2** — all 12 sections authored + rendering (§1–4 requirements; §5–6 the shared-poster
overview; §7–11 the design deep-dives `core-app`/`analytics`/`payments`/`secure-bank`/`operate-bank`;
§12 `waf-pillars` finale). Each deep-dive maps its requirement onto AWS and shows detail the overview
can't (request path + Multi-AZ, the two analytics lanes, the transfer saga, the defense-in-depth stack,
the operate loop + multi-Region DR). **Phase 3 Implementation** lives in `aws-lab` — 18-lab arc, #1–2
authored (pending capture). **Next:** narration TTS for project, and authoring aws-lab labs #3 onward.

## Build order

1. **Scaffold + render** — engine (layout + patterns), scene/section routes. **DONE.**
2. **Author courses** — one reviewed section at a time: scene in `src/scenes/<course>/`, content in
   `src/content/<course>/`, both registered in their barrels; iterate in-app at `#/<slug>`.
   Foundations, identity, compute, storage, networking, databases, serverless, data-engineering,
   security & governance done. **Project (Course 11 · capstone) is building** — restructured into
   Requirements → Design → Implementation (concept app owns Phases 1–2; `aws-lab` owns Phase 3). §1 +
   §5–6 built; Phase-1 requirements (§2–4) and Phase-2 deep-dives (§7–11) next.
3. **Record** — `npm run record <course>` composes the 4K landscape video (scene + 42% slide column,
   all sections concatenated); `npm run record:reels <course>` composes the portrait reels
   (scene-only 9:16 with baked-in title card). Wired for foundations.
4. **Backlog** — step-2 `capture-shots.mjs` PNG+coords stub (only once beats/floating panels return);
   real TTS regeneration pipeline; extract render-engine to a package; courses 3→11.

## Status

Scaffold + routes + record pipeline done; `tsc` + `vite build` stays clean. Ten courses fully
authored and rendering: **foundations** (9 sections, also recorded — 4K + reels), **identity** (10),
**compute** (8), **storage** (7, greenfield), **networking** (8, greenfield), **databases** (7,
greenfield), **serverless** (7, greenfield), **data-engineering** (8, greenfield), **security**
(7, greenfield), and **governance** (8, greenfield). Narration wavs are being generated (foundations +
compute + storage + identity present; the rest pending).

**Course 11 `project`**, restructured into **Requirements → Design → Implementation**, has its **concept
app complete through Phases 1–2** — all **12 sections** authored + rendering (Phase 1 requirements §1–4;
Phase 2 design §5–12, the shared `nova-architecture` overview + five deep-dives + the WA-review finale).
`tsc`+`vite build` stays clean. **Phase 3 Implementation lives in `aws-lab`** — an 18-lab console-tour
arc (owner-driven creates); labs #1–2 (`organizations-setup`, `landing-zone-vpc`) authored + schema-valid,
pending capture. **Next: project narration TTS, and aws-lab labs #3 onward (the edge trio).**
