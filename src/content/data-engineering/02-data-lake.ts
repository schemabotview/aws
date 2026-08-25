import type { Section } from '../types'

export const dataLake: Section = {
  id: 'data-lake',
  title: 'The data lake — S3',
  scene: 'data-lake',
  slide: `## The data lake — S3

The **store** stage. A data lake is one place to land **any data, any format** — cheaply, before you know how you'll use it.

### S3 is the lake
- **Unlimited, durable, pennies per GB** — dump raw data in and keep it all
- Takes **structured** (tables/CSV), **semi-structured** (JSON/logs), and **unstructured** (images/video) alike

### Schema-on-read — the defining idea
- **Lake**: store raw now, impose structure only when you **query** (schema-on-**read**) — flexible, cheap
- **Warehouse**: structure defined **before** loading (schema-on-**write**) — fast, but rigid
- Land everything in the lake; promote the refined, high-value slices into a warehouse

### One store, many engines
- **Athena, Redshift Spectrum, EMR** all read the **same** data in place — no copies per tool
- **Lake Formation** centralises permissions and governance across the lake

**Why it matters:** the lake is the single source of truth; everything downstream reads from it.`,
  narration:
    "The first stage of the pipeline is storage, and it's the foundation everything else sits on, so it's worth getting the mental model exactly right. In the analytics world, the place your data lands is called a data lake, and the whole idea of a lake is that it's a single location where you can dump any data, in any format, cheaply, without having to decide up front how you're going to use it. On AWS, the data lake is Amazon S3 — the object storage you met in the storage course — and it's perfect for this job because it's effectively unlimited, it's extremely durable, and it costs just pennies per gigabyte, so you can afford to keep everything. And by everything, I mean genuinely any shape of data: structured data like database exports and CSV files, semi-structured data like JSON documents and application logs, and completely unstructured data like images, audio, and video. It all goes into the same lake. Now here is the defining concept, and it's the thing that separates a lake from a traditional data warehouse: schema-on-read. In a data lake, you store the raw data as-is right now, and you only impose a structure or schema on it later, at the moment you query it. That's schema-on-read. A data warehouse works the opposite way — schema-on-write — where you must define the structure before you load anything, and every row has to conform. Schema-on-read makes the lake wonderfully flexible and cheap: you never have to model your data in advance or throw away something that doesn't fit, you just land it and figure out the questions later. The trade-off is that a warehouse, having done that structuring work upfront, can answer its queries faster — which is why the common pattern is to land absolutely everything in the lake, and then promote the refined, high-value slices of it into a warehouse for fast repeated querying. We'll get to that warehouse, Redshift, shortly. The last thing to appreciate about the lake is that because all your data sits in one open store, many different analytics engines can read that same data in place, without each one needing its own private copy. Athena can run SQL over it, Redshift can query it, EMR can run big Spark jobs on it — all pointing at the same S3 lake. And to keep that from becoming a security nightmare, AWS Lake Formation lets you define permissions and governance centrally across the whole lake. So the lake is your single source of truth, and everything downstream reads from it. Next we look at how the data actually gets in — ingestion, batch and streaming.",
}
