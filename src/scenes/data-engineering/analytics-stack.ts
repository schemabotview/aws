import type { Scene } from '../../render-engine'

// §8 analytics-stack — the finale: the whole course composed into one end-to-end pipeline. Data from
// the sources is ingested (batch or streaming via Kinesis/Firehose), landed in the S3 data lake,
// refined by Glue (catalogued + ETL'd into curated Parquet), and then analysed two ways that rejoin at
// the top: Athena queries the lake in place for ad-hoc work, while curated data is loaded into Redshift
// for heavy repeated queries — and both feed QuickSight for dashboards and insight. This single flow is
// the map of §1–§7. (EMR for big-data Spark and OpenSearch for search/log analytics are the two nods
// that also read the lake — a slide aside.)
export const analyticsStack: Scene = {
  id: 'analytics-stack',
  padding: 0.14,
  nodes: [
    { id: 'sources', label: 'Sources', pattern: 'user', icon: 'database', sub: 'apps · databases · devices · streams' },
    { id: 'ingest', label: 'Ingest', pattern: 'network', icon: 'kinesis', sub: 'batch & streaming (Kinesis / Firehose)' },
    { id: 'lake', label: 'S3 data lake', pattern: 'storage', icon: 's3', sub: 'store any format · schema-on-read' },
    { id: 'glue', label: 'Glue', pattern: 'service', icon: 'glue', sub: 'catalog + ETL → curated Parquet' },
    { id: 'athena', label: 'Athena', pattern: 'service', icon: 'athena', sub: 'query the lake in place · ad-hoc' },
    { id: 'redshift', label: 'Redshift', pattern: 'service', icon: 'redshift', sub: 'warehouse · heavy, repeated' },
    { id: 'quicksight', label: 'QuickSight', pattern: 'storage', icon: 'quicksight', sub: 'dashboards · reports · insight' },
  ],
  // Ingest → lake → refine → analyse (two ways) → visualise: the pipeline end to end.
  edges: [
    { source: 'sources', target: 'ingest' },
    { source: 'ingest', target: 'lake' },
    { source: 'lake', target: 'glue' },
    { source: 'glue', target: 'athena' },
    { source: 'glue', target: 'redshift' },
    { source: 'athena', target: 'quicksight' },
    { source: 'redshift', target: 'quicksight' },
  ],
}
