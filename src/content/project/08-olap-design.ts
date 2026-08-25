import type { Section } from '../types'

export const olapDesign: Section = {
  id: 'olap-design',
  title: 'Design — fraud & analytics',
  scene: 'analytics',
  slide: `## Design — fraud & analytics

The OLAP design, realizing §3. The trick: the **same transaction stream** splits into **two lanes with opposite tempos** — exactly the "stream *and* batch" the requirements demanded.

### One source
- **Transaction events** from the core app → **Kinesis**, the real-time stream

### Fast lane — real-time fraud *(the flagship)*
- **Kinesis → fraud scoring** (Lambda) — score **every** transaction in **milliseconds**
- **→ block / alert** — stop the bad ones instantly

### Slow lane — the lake → warehouse *(cheap, vast, tolerant)*
- **→ S3 data lake** (via Firehose) — raw, **cheap**, all history *(schema-on-read)*
- **→ Glue** — catalog + ETL · **→ Athena / Redshift** — SQL on S3 & the warehouse
- **→ QuickSight** — dashboards & regulatory reports

**Requirement → design:** real-time→stream lane · scale & cheap history→S3 lake · heavy queries→Redshift · schema-on-read→Glue. The lane *lengths* draw fast-vs-batch. Next: the **events** that move money between the two worlds.`,
  narration:
    "Now the mirror image: the analytics world, OLAP, designed to satisfy the requirements from earlier. Remember the central tension — this world reads the same data as the core but demands almost the opposite things, and above all it needs both real-time and batch. The design expresses that beautifully, because a single source splits into two lanes that run at completely different tempos. The source is the transaction stream. Every transaction the core banking app commits is also emitted as an event into Kinesis, a service built to carry a high-volume real-time stream. And from Kinesis, the data flows two ways at once. The first lane is the fast one, and it's NovaBank's flagship feature: real-time fraud scoring. As each transaction streams through, a Lambda function scores it in milliseconds — is this pattern suspicious? — and if it looks fraudulent, we block or alert instantly, before the money leaves. Notice this lane is short: stream in, score, act, done, all in the blink of an eye. The second lane is the slow one, the batch analytics pipeline, and it's deliberately the opposite in every way. The same events are buffered by Firehose and dropped into an S3 data lake — raw, in whatever shape they arrive, on the cheapest storage AWS offers, keeping all history forever; that's the cheap-storage and schema-on-read requirements made real. Then Glue catalogs and transforms it, imposing structure only now, at processing time. On top of that, Athena runs SQL queries directly against the lake, and Redshift, the data warehouse, handles the really heavy analytical queries. And finally QuickSight turns the results into the dashboards and the regulatory reports the bank has to produce. Read the design off the requirements once more: real-time maps to the stream lane, massive cheap history maps to the S3 lake, heavy aggregation maps to Redshift, schema-on-read maps to Glue. And the single most elegant thing here is that the two lane lengths literally draw the difference — the short fast lane for fraud, the long pipeline for batch, both from one stream. That's both data worlds designed. What connects them, and moves money reliably in between, is events — and that's next.",
}
