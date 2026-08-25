import type { Section } from '../types'

export const ingestionStreaming: Section = {
  id: 'ingestion-streaming',
  title: 'Ingestion — batch & streaming',
  scene: 'ingestion',
  slide: `## Ingestion — batch & streaming

Getting data **into** the lake happens two ways — pick by **how fresh** the data must be.

### Batch — scheduled bulk
- Move data periodically: file drops, nightly **database exports**, bulk loads
- Simple and cheap; fine when hours-old data is acceptable (reports, warehousing)

### Streaming — real-time, record by record
- **Kinesis Data Streams** — producers write records; the stream is split into **shards** for scale; consumers read within **milliseconds**
- **Kinesis Data Firehose** — the **zero-code** delivery arm: buffers a stream and auto-loads it into **S3, Redshift, or OpenSearch**
- **MSK** (managed Apache Kafka) is the alternative when you want the Kafka ecosystem

### Streams vs Firehose
- **Streams** when you need custom real-time processing (a consumer app / Lambda)
- **Firehose** when you just need the data **delivered** to a store with no code

**Rule of thumb:** batch for periodic bulk; Kinesis for real-time. Firehose to just land it, Streams to react to it.`,
  narration:
    "Now that we know where data lands — the lake — let's look at how it actually gets there. Ingestion happens in two fundamentally different modes, and the choice between them comes down to a single question: how fresh does the data need to be? The first mode is batch ingestion. Here you move data in scheduled bulk loads — a nightly export of your production database, a drop of files every hour, a periodic bulk transfer. Batch is simple, it's cheap, and it's completely fine whenever it's acceptable for your analytics to be working with data that's a few hours old, which covers a huge amount of reporting and warehousing. The second mode is streaming ingestion, and this is for when you need data in real time, captured record by record the instant it's produced — think clickstreams, application logs, IoT sensor readings, live metrics. The workhorse for streaming on AWS is Kinesis Data Streams. The model is: producers write records into the stream continuously, and the stream is divided into units called shards, which is how it scales — more shards, more throughput — and consumers read those records within milliseconds of them arriving. So Kinesis Data Streams is what you reach for when you want to capture and react to events as they happen. Paired with it is Kinesis Data Firehose, and the distinction between the two is worth pinning down. Firehose is the zero-code delivery arm: you point it at a stream and it automatically buffers up the incoming data and loads it, with no code from you, straight into a destination — usually your S3 data lake, but it can also deliver to Redshift or OpenSearch. There's also MSK, which is Amazon's managed Apache Kafka, and that's the option you pick when your team already lives in the Kafka ecosystem and wants that specifically. So how do you choose between Streams and Firehose? Use Kinesis Data Streams when you need to do custom real-time processing on the data as it flows — running it through a consumer application or a Lambda function to transform, aggregate, or alert. Use Firehose when you don't need to process it yourself and you just want the stream reliably delivered and landed in a store. The simple rule to remember: batch for periodic bulk loads, Kinesis for real time; and within Kinesis, Firehose to just land the data, Streams to actively react to it. Once the raw data is in the lake, it's rarely clean or query-ready. Making it so is the transform stage — AWS Glue — which is next.",
}
