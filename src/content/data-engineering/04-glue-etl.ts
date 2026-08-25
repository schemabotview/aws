import type { Section } from '../types'

export const glueEtl: Section = {
  id: 'glue-etl',
  title: 'AWS Glue — catalog & ETL',
  scene: 'glue',
  slide: `## AWS Glue — catalog & ETL

The **transform** stage. Raw lake data is messy and its structure is unknown — Glue makes it query-ready. It's **serverless** (no clusters).

### 1 · The Data Catalog
- **Crawlers** scan your S3 data and **infer the schema** — tables, columns, types
- Registered centrally so **Athena, Redshift, and EMR** all know what's in the lake — one shared metadata layer

### 2 · ETL jobs
- Serverless **Apache Spark** that **E**xtracts raw data, **T**ransforms it (clean, dedupe, join, reshape), and **L**oads the result
- Output the refined data as **partitioned, columnar Parquet** — far faster and cheaper to query

### Raw → curated
- A common layout: a **raw zone** (as-landed) and a **curated zone** (clean, query-ready) in the same lake
- Glue Studio (visual) or code; **DataBrew** for no-code cleaning

**Why it matters:** the catalog makes the lake *discoverable*; ETL makes it *usable*. Together they turn a swamp into a queryable lake.`,
  narration:
    "Raw data sitting in the lake has two problems: it's messy — inconsistent, duplicated, full of nulls and odd formats — and its structure is unknown to the tools that want to query it. AWS Glue is the serverless service that solves both, and it's easiest to understand as two distinct jobs. The first job is the Glue Data Catalog. Glue gives you things called crawlers, which you point at your data in S3, and they automatically scan it and infer its schema — working out the tables, the columns, and their data types — and then they register all of that in a central catalog. This is quietly one of the most important pieces in the whole analytics stack, because that catalog becomes the single shared metadata layer that every query engine uses: when Athena, Redshift, or EMR want to run SQL over your lake, they look at the Glue Data Catalog to know what tables exist and what shape they are. Without it, your lake is just an opaque pile of files; with it, the lake is discoverable. The second job is ETL — extract, transform, load. Glue runs serverless Apache Spark jobs, meaning you get a powerful distributed data-processing engine without provisioning or managing any cluster at all; you just submit the job. A Glue ETL job extracts the raw data, transforms it — cleaning it up, removing duplicates, joining datasets together, reshaping it into the form you actually want — and loads the result back out, typically into a curated area of the lake. And a detail that matters a lot for what comes next: you write that curated output in a partitioned, columnar format, usually Parquet, because columnar files are dramatically faster and cheaper to query than raw CSV or JSON. This leads to a common and tidy pattern: your lake has a raw zone, where data lands exactly as it arrived, and a curated zone, where the cleaned, catalogued, query-ready version lives — same S3 lake, two stages of refinement. You can build these jobs visually in Glue Studio, or in code, and there's even DataBrew for no-code cleaning. So the mental model is simple: the catalog makes your lake discoverable, and ETL makes it usable — together they turn what people call a data swamp into a genuinely queryable lake. And now that the data is clean, catalogued, and query-ready, we can actually query it — starting with the tool that reads the lake in place, Athena.",
}
