import type { Section } from '../types'

export const analyticsStack: Section = {
  id: 'analytics-stack',
  title: 'The analytics stack — end to end',
  scene: 'analytics-stack',
  slide: `## The analytics stack — end to end

Every stage composed into one pipeline — from raw source to dashboard.

### The pipeline
- **Sources → Ingest** (batch or **Kinesis/Firehose** streaming) **→ S3 lake** (store any format)
- **→ Glue** (catalog + ETL → curated Parquet) **→ analyze → QuickSight** (dashboards & insight)

### Analyze: pick the engine
- **Athena** — serverless SQL on the lake · ad-hoc, pay-per-scan
- **Redshift** — provisioned warehouse · heavy, repeated, concurrent queries
- **EMR** — managed Spark/Hadoop for big-data processing & ML prep
- **OpenSearch** — search & real-time log/observability analytics

### Choosing
- **Lake (S3) first** — cheap, keep everything, schema-on-read
- **Athena** for exploration → **Redshift** when a workload is hot and repeated → **EMR/OpenSearch** for their special shapes

**The whole course in one line:** land all your data cheaply in the lake, refine it with Glue, and query it with the right engine — batch or real-time, ad-hoc or warehoused.`,
  narration:
    "Let's bring the entire course together into one picture, because data engineering is really about how these stages connect into a single pipeline. It begins with your sources — applications, operational databases, devices, log streams. That data is ingested, either in scheduled batches or in real time through Kinesis and Firehose, and it lands in the S3 data lake, where you can store any format cheaply and impose structure only when you read it. From the lake, Glue does the refining: its crawlers catalogue what's there, and its serverless Spark ETL jobs clean and reshape the raw data into curated, columnar Parquet. Then comes analysis, and here the pipeline forks based on the kind of query. For ad-hoc, exploratory questions, Athena runs SQL directly on the lake, serverless and pay-per-scan. For heavy, repeated, high-concurrency workloads — the dashboards everyone hits — you load the curated data into Redshift, the provisioned warehouse, with its columnar storage and massively parallel processing. And both of those feed the final stage, QuickSight, which turns the results into dashboards and reports that people actually look at. That single flow — sources, ingest, lake, Glue, Athena or Redshift, QuickSight — is the map of everything we've covered. There are two more engines worth knowing as you choose: EMR, which is managed Spark and Hadoop for really large-scale data processing and machine-learning preparation, and OpenSearch, which is built for search and for real-time log and observability analytics. So how do you choose across all of this? Start with the lake — put everything in S3, because it's cheap and you never have to decide up front. Reach for Athena when you're exploring. Graduate a workload to Redshift when it becomes hot and repeated and needs speed at concurrency. And bring in EMR or OpenSearch when your work has their particular shape — big distributed processing, or search and logs. The whole course really does compress into one line: land all your data cheaply in the lake, refine it with Glue, and query it with the right engine for the job — batch or real-time, ad-hoc or warehoused. That's the analytics world, and it's the counterpart to the transactional databases you built in Course 6 — together they're the two halves of working with data on AWS.",
}
