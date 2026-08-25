import type { Section } from '../types'

export const analyticsVsOltp: Section = {
  id: 'analytics-vs-oltp',
  title: 'Two data worlds — OLTP vs analytics',
  scene: 'two-data-worlds',
  slide: `## Two data worlds — OLTP vs analytics

The databases of Course 6 **run the app**. Analytics is a second world that exists to **understand the data**.

### OLTP vs OLAP
- **OLTP** (Course 6) — small, fast **transactions** on current data: place an order, log in. Serves the **live app**
- **OLAP / analytics** — huge **scans over history** to find patterns. Serves **insight**: dashboards, reports, ML

### One pipeline, five stages
- **Ingest** — collect data as it's produced (batch loads or real-time streams)
- **Store** — land it cheaply in the **S3 data lake**, in any format
- **Transform** — clean, catalog, and reshape it (ETL)
- **Analyze** — query it in place or load a **warehouse** for heavy queries
- **Insight** — dashboards, reports, and ML on the result

**The rest of the course walks this pipeline** — plus how to *migrate* existing data in. Different world, different tools than OLTP.`,
  narration:
    "Welcome to data engineering, and the first thing to do is draw a line between two different worlds of data, because they look similar but they are built for opposite jobs. Everything you learned in the databases course — RDS, Aurora, DynamoDB — lives in what we call the OLTP world, online transaction processing. That world is about small, fast transactions on current data: place an order, log a user in, update a balance, read one customer's profile. Each operation touches a tiny slice of data and has to be quick, and the whole point is to run the live application. Analytics is a second, separate world, called OLAP, online analytical processing, and it exists for a completely different reason: not to run the app, but to understand the data. Here the questions are big and historical — what were our sales by region over the last three years, which products get abandoned in the cart, what does this user's behaviour predict — and answering them means scanning enormous volumes of data across all of history, not fetching one row. Different job, different shape, and, crucially, different tools — which is what this whole course is about. And the analytics world has a characteristic spine, a pipeline, that the rest of the course follows stage by stage. It starts with ingest: getting data in as it's produced, either in big batches or as real-time streams. Then store: landing all that raw data cheaply and in any format in a data lake, which on AWS means Amazon S3. Then transform: cleaning it up, cataloguing what you have, and reshaping it into something queryable — the classic ETL, extract-transform-load. Then analyze: actually running queries over it, either directly where it sits or by loading it into a specialised data warehouse for heavy analytical queries. And finally insight: turning the results into dashboards, reports, and machine-learning features that people and systems act on. That five-stage pipeline — ingest, store, transform, analyze, insight — is the map for this course, and we'll take it one stage at a time, plus a section on how you migrate existing data into AWS in the first place. So keep the big picture in mind: we've left the transactional world of running the app, and we've entered the analytical world of understanding the data. We begin where all that data lands — the data lake.",
}
