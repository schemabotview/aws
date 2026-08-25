import type { Section } from '../types'

export const redshift: Section = {
  id: 'redshift',
  title: 'Redshift — the data warehouse',
  scene: 'redshift',
  slide: `## Redshift — the data warehouse

The **analyze** stage's heavy end. Amazon Redshift is a provisioned warehouse for **fast, repeated, concurrent** analytical queries.

### Two ideas make it fast
- **Columnar** — stores data by column, so an aggregate reads only the columns it needs (not whole rows)
- **MPP** (massively parallel) — a **leader node** plans each query and splits it across many **compute nodes** that scan in parallel

### Getting data in & out
- **COPY** — the bulk, parallel load command, usually **from S3** (load curated Parquet fast)
- **Spectrum** — query data left **in S3 in place** from Redshift, no load — extends the warehouse to the lake
- **Distribution & sort keys** tune how rows are spread and ordered across nodes for speed

### Redshift vs Athena
- **Redshift**: provisioned, tuned, loaded — best for **dashboards & heavy repeated** queries at high concurrency
- **Athena**: serverless, pay-per-scan — best for **ad-hoc / occasional** queries on the lake

**Rule of thumb:** exploratory or intermittent → Athena; hot, repeated, concurrent workloads → load Redshift.`,
  narration:
    "Athena is perfect for querying the lake occasionally, but when you have analytical queries that run constantly — powering a dashboard that hundreds of people hit, or heavy reports that run again and again — you want a purpose-built data warehouse, and on AWS that's Amazon Redshift. Unlike Athena, Redshift is provisioned: you run a cluster, and in exchange for managing it you get a system tuned to answer big analytical queries fast, at high concurrency, over and over. Two architectural ideas are what make it fast, and they're worth understanding. The first is that Redshift is columnar. A normal transactional database stores data row by row, which is great when you want a whole record, but analytical queries usually want one or two columns across millions of rows — sum this, average that. A columnar store keeps each column together, so when you ask for the total of a sales column, Redshift reads just that column and skips all the others entirely. The second idea is MPP, massively parallel processing. A Redshift cluster has a leader node and a set of compute nodes. When you send a query, the leader node makes a plan and splits the work across all the compute nodes, each of which scans its own slice of the data at the same time, and then the results are combined. So a query that would crawl on a single machine is divided and conquered across many. Getting data in is done with the COPY command, which does a bulk, parallel load — and you almost always COPY from S3, pulling your curated Parquet from the lake into the warehouse quickly. And there's a lovely bridge back to the lake called Redshift Spectrum: it lets a Redshift query reach out and read data that's still sitting in S3, in place, without loading it first — so you can join a huge historical table in the lake against the hot data you've loaded into the warehouse. To get the most out of the cluster you also choose distribution keys, which control how rows are spread across the compute nodes, and sort keys, which control how they're ordered — both tuned so the parallel machinery does the least work. Now, Redshift versus Athena is the classic decision of this course. Redshift is provisioned, tuned, and loaded, which makes it the right home for dashboards and heavy, repeated queries with lots of concurrent users. Athena is serverless and pay-per-scan, which makes it right for ad-hoc and occasional queries straight on the lake. The rule of thumb: start exploratory and intermittent work in Athena, and when a workload becomes hot, repeated, and concurrency-heavy, load it into Redshift. That completes the core pipeline — ingest, store, transform, analyze. Before we compose it all together, there's one more essential topic: getting your existing data into AWS in the first place. That's migration, next.",
}
