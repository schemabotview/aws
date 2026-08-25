import type { Scene } from '../../render-engine'

// analytics — §8 (Phase 2 · Design). The OLAP design realizing §3's requirements. The detail the
// overview can't show: ONE transaction stream splits into TWO lanes with opposite tempos — a SHORT
// real-time fraud lane (Kinesis → score in ms → block) and a LONG batch lane (Kinesis → S3 lake → Glue
// → Athena/Redshift → QuickSight). The two lane lengths literally draw "stream AND batch". Fed by the
// same events the §7 core app produces — the two data worlds, connected.
export const analytics: Scene = {
  id: 'analytics',
  padding: 0.14,
  nodes: [
    { id: 'txns', label: 'Transaction events', pattern: 'service', icon: 'repeat', sub: 'from the core banking app' },
    { id: 'kinesis', label: 'Kinesis', pattern: 'service', icon: 'kinesis', sub: 'the real-time transaction stream' },

    // Fast lane — real-time fraud (the flagship)
    { id: 'fraud', label: 'Fraud scoring', pattern: 'external', icon: 'scanface', sub: 'Lambda · score every txn in ms' },
    { id: 'alert', label: 'Block / alert', pattern: 'external', icon: 'ban', sub: 'stop fraud instantly' },

    // Slow lane — the batch lake → warehouse
    { id: 'lake', label: 'S3 data lake', pattern: 'storage', icon: 's3', sub: 'via Firehose · raw · cheap · all history' },
    { id: 'glue', label: 'Glue', pattern: 'service', icon: 'glue', sub: 'catalog + ETL · schema-on-read' },
    { id: 'query', label: 'Athena / Redshift', pattern: 'storage', icon: 'redshift', sub: 'SQL on S3 · warehouse' },
    { id: 'quicksight', label: 'QuickSight', pattern: 'service', icon: 'quicksight', sub: 'dashboards · regulatory reports' },
  ],
  // One stream, two tempos: a 2-hop real-time lane and a 4-hop batch lane.
  edges: [
    { source: 'txns', target: 'kinesis' },
    { source: 'kinesis', target: 'fraud' },
    { source: 'fraud', target: 'alert' },
    { source: 'kinesis', target: 'lake' },
    { source: 'lake', target: 'glue' },
    { source: 'glue', target: 'query' },
    { source: 'query', target: 'quicksight' },
  ],
}
