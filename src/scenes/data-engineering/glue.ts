import type { Scene } from '../../render-engine'

// §4 glue-etl — the TRANSFORM stage. Raw data in the lake is messy and its structure is unknown, so it
// isn't query-ready. AWS Glue is the serverless engine that fixes both problems, and it does two jobs.
// (1) The Data Catalog: crawlers scan the S3 data and infer a schema — table and column definitions —
// registering them centrally so query engines (Athena, Redshift, EMR) know what's in the lake. (2) ETL:
// serverless Apache Spark jobs that extract raw data, transform it (clean, dedupe, join, reshape), and
// load the result back as curated data — clean, partitioned, columnar Parquet that's fast and cheap to
// query. Drawn as the refining flow: raw S3 → Glue (catalog + ETL) → curated S3.
export const glue: Scene = {
  id: 'glue',
  padding: 0.16,
  nodes: [
    { id: 'raw', label: 'Raw zone (S3)', pattern: 'storage', icon: 's3', sub: 'messy · unknown schema · as-landed' },
    {
      id: 'glue',
      label: 'AWS Glue',
      pattern: 'service',
      icon: 'glue',
      sub: 'serverless · no clusters to run',
      children: [
        { id: 'catalog', label: 'Data Catalog', pattern: 'service', icon: 'scroll', sub: 'crawlers infer & register schema', variant: 'tile' },
        { id: 'etl', label: 'ETL job', pattern: 'service', icon: 'wrench', sub: 'Spark · clean, join, reshape', variant: 'tile' },
      ],
    },
    { id: 'curated', label: 'Curated zone (S3)', pattern: 'storage', icon: 's3', sub: 'clean · partitioned · columnar Parquet · query-ready' },
  ],
  // Refine the lake in place: crawl & catalog it, transform raw into curated, query-ready data.
  edges: [
    { source: 'raw', target: 'glue' },
    { source: 'glue', target: 'curated' },
  ],
}
