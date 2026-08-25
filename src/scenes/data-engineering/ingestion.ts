import type { Scene } from '../../render-engine'

// §3 ingestion-streaming — getting data IN, which happens two ways. BATCH: move data in scheduled bulk
// loads — files and database exports landed periodically. STREAMING: capture data record-by-record as
// it's produced, in real time. The streaming workhorse is Kinesis Data Streams — producers write
// records, the stream shards them for scale, and consumers read in real time; and Kinesis Data Firehose
// is the zero-code delivery arm that buffers a stream and auto-loads it into the S3 lake (or Redshift /
// OpenSearch). Drawn as producers feeding two lanes that both land in the lake: a short batch lane and
// the real-time Kinesis → Firehose lane. (MSK — managed Kafka — is the streaming alternative, a slide
// aside.)
export const ingestion: Scene = {
  id: 'ingestion',
  padding: 0.16,
  nodes: [
    { id: 'producers', label: 'Producers', pattern: 'user', icon: 'code', sub: 'apps · devices · clickstream' },
    { id: 'batch', label: 'Batch load', pattern: 'external', icon: 'layers', sub: 'scheduled bulk · files & DB exports' },
    { id: 'kinesis', label: 'Kinesis Data Streams', pattern: 'network', icon: 'kinesis', sub: 'shards · real-time capture' },
    { id: 'firehose', label: 'Firehose', pattern: 'network', icon: 'firehose', sub: 'buffer & auto-deliver · no code' },
    { id: 'lake', label: 'S3 data lake', pattern: 'storage', icon: 's3', sub: 'the landing zone (or Redshift / OpenSearch)' },
  ],
  // Two ways in — a scheduled batch lane and the real-time Kinesis → Firehose lane — both land in the lake.
  edges: [
    { source: 'producers', target: 'batch' },
    { source: 'producers', target: 'kinesis' },
    { source: 'batch', target: 'lake' },
    { source: 'kinesis', target: 'firehose' },
    { source: 'firehose', target: 'lake' },
  ],
}
