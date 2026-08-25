import type { Scene } from '../../render-engine'

// §5 athena — the first way to ANALYZE: query the lake in place. Amazon Athena runs standard SQL
// directly on the data sitting in S3 — nothing is loaded into a database first. It's fully serverless:
// no clusters, you just write a query. It reads the Glue Data Catalog (§4) to know the tables and their
// schema, then scans the underlying S3 files to answer. You pay per amount of data scanned, which is
// exactly why the curated, partitioned, columnar Parquet from Glue matters — it slashes the bytes
// scanned and so the cost. Drawn as the query path: an analyst's SQL goes to Athena, which reads schema
// from the catalog and scans the data in the S3 lake — the data never moves.
export const athena: Scene = {
  id: 'athena',
  padding: 0.16,
  nodes: [
    { id: 'analyst', label: 'Analyst', pattern: 'user', icon: 'code', sub: 'standard SQL' },
    { id: 'catalog', label: 'Glue Data Catalog', pattern: 'service', icon: 'scroll', sub: 'tables & schema — what & where' },
    { id: 'athena', label: 'Athena', pattern: 'service', icon: 'athena', sub: 'serverless SQL · pay per TB scanned' },
    { id: 'lake', label: 'S3 data lake', pattern: 'storage', icon: 's3', sub: 'queried in place — no loading' },
  ],
  // SQL + schema meet in Athena, which scans the data where it already lives.
  edges: [
    { source: 'analyst', target: 'athena' },
    { source: 'catalog', target: 'athena' },
    { source: 'athena', target: 'lake' },
  ],
}
