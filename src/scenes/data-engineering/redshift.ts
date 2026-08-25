import type { Scene } from '../../render-engine'

// §6 redshift — the DATA WAREHOUSE, the analyze stage's heavy-duty end. Where Athena (§5) queries the
// lake ad-hoc and serverless, Amazon Redshift is a provisioned, purpose-built warehouse for fast,
// repeated, highly-concurrent analytical queries over structured data. Two architectural ideas make it
// fast: it's COLUMNAR (stores by column, so an aggregate reads only the columns it needs) and it's MPP
// — massively parallel — a leader node plans each query and splits the work across many compute nodes
// that scan their slices in parallel. You load data into it with the COPY command (bulk, parallel, from
// S3), and Redshift Spectrum lets it also query data left in S3 in place. Drawn as: curated S3 --COPY-->
// the cluster (leader fanning to parallel compute nodes), with an analyst running SQL against it.
export const redshift: Scene = {
  id: 'redshift',
  padding: 0.16,
  nodes: [
    { id: 'analyst', label: 'Analyst / BI', pattern: 'user', icon: 'code', sub: 'heavy, repeated SQL' },
    { id: 'lake', label: 'Curated S3', pattern: 'storage', icon: 's3', sub: 'COPY → bulk parallel load' },
    {
      id: 'redshift',
      label: 'Amazon Redshift · warehouse',
      pattern: 'service',
      icon: 'redshift',
      sub: 'columnar · MPP · + Spectrum queries S3 in place',
      children: [
        { id: 'leader', label: 'Leader node', pattern: 'network', icon: 'network', sub: 'plans & coordinates', variant: 'tile' },
        { id: 'c1', label: 'Compute', pattern: 'service', icon: 'cpu', sub: 'parallel slice', variant: 'tile' },
        { id: 'c2', label: 'Compute', pattern: 'service', icon: 'cpu', sub: 'parallel slice', variant: 'tile' },
        { id: 'c3', label: 'Compute', pattern: 'service', icon: 'cpu', sub: 'parallel slice', variant: 'tile' },
      ],
      // MPP: the leader splits each query across the compute nodes, which scan their slices in parallel.
      edges: [
        { source: 'leader', target: 'c1' },
        { source: 'leader', target: 'c2' },
        { source: 'leader', target: 'c3' },
      ],
    },
  ],
  // Load curated data in with COPY; analysts run heavy SQL against the cluster.
  edges: [
    { source: 'lake', target: 'leader' },
    { source: 'analyst', target: 'leader' },
  ],
}
