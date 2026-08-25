import type { Section } from '../types'

export const athena: Section = {
  id: 'athena',
  title: 'Athena — query the lake in place',
  scene: 'athena',
  slide: `## Athena — query the lake in place

The **analyze** stage, the easy way: run **standard SQL directly on S3** — nothing loaded into a database first.

### Serverless SQL on the lake
- **No infrastructure** — write a query, get results; no clusters to run or size
- Reads the **Glue Data Catalog** for schema, then scans the underlying S3 files
- The data **never moves** — you query it exactly where it lives

### You pay per data scanned
- Billed per **TB scanned**, so cost is driven by how much data each query reads
- **Columnar Parquet + partitioning** (from Glue) cut bytes scanned — often 10×+ cheaper and faster
- Great for **ad-hoc** exploration, occasional queries, log analysis

### Athena vs a warehouse
- **Athena**: zero setup, pay-per-query, best for intermittent / exploratory work
- **Redshift**: provisioned, tuned storage — best for heavy, repeated, concurrent queries (next)

**Rule of thumb:** reach for Athena first — if a query pattern becomes hot and repeated, graduate it to Redshift.`,
  narration:
    "Now the data is clean, catalogued, and query-ready, so let's actually analyze it — and the simplest way to do that on AWS is Amazon Athena. The one-sentence pitch for Athena is that it lets you run standard SQL directly on data sitting in S3, without loading it into a database first. That's a genuinely powerful idea. In the old world, to run SQL over data you had to first load it into a database or warehouse, which meant provisioning that system, defining schemas, and running import jobs. Athena throws that away: your data stays right where it is in the lake, and you just point SQL at it. And it's completely serverless — there is no cluster, no server, nothing to provision or size. You open Athena, you write a query, you get results, and when you're not querying, you're not paying for idle infrastructure. The way it knows how to interpret your files is the Glue Data Catalog from the last section: Athena looks up the table definitions and schema there, then goes and scans the actual files in S3 to answer your query. Now, the pricing model is the thing to really understand, because it shapes how you use Athena well: you pay per amount of data scanned, typically priced per terabyte. That means the cost of a query is driven entirely by how many bytes it has to read. And this is exactly why all that work in the Glue section — writing curated data as partitioned, columnar Parquet — pays off directly: columnar formats let Athena read only the columns your query needs, and partitioning lets it skip whole chunks of data, so a well-organised lake can make the same query scan a tiny fraction of the data and cost ten times less, or more. Athena is fantastic for ad-hoc exploration, for occasional queries, and for things like analysing logs, where you don't want a warehouse running around the clock. The natural comparison is with a data warehouse like Redshift. Athena is zero-setup and pay-per-query, which makes it ideal for intermittent and exploratory work. A warehouse is provisioned and has its storage carefully tuned, which makes it better for heavy, repeated, highly concurrent queries. So a good rule of thumb is to reach for Athena first — it costs nothing when idle and there's no setup — and when a particular query pattern becomes hot, repeated, and performance-critical, that's your signal to graduate it into Redshift. Which is exactly where we go next: the data warehouse.",
}
