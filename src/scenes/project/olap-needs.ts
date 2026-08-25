import type { Scene } from '../../render-engine'

// olap-needs — §3 (Phase 1 · Requirements). The analytics world stated as REQUIREMENTS, mirroring §2's
// oltp-needs. Same transaction data, a completely different set of needs. Two bands: THE WORKLOAD (the
// questions analytics asks — real-time fraud, insight, reporting, big scans) and WHAT IT DEMANDS (the
// properties that forces — massive scale, stream+batch, read-heavy aggregation, schema-on-read, and the
// deliberate INVERSIONS of OLTP: eventual consistency is fine, storage must be cheap). Pure concepts,
// no AWS service tiles (that's Phase 2). Together §2+§3 are the "two data worlds" the design must serve.
export const olapNeeds: Scene = {
  id: 'olap-needs',
  padding: 0.16,
  nodes: [
    {
      id: 'workload',
      label: 'The analytics world (OLAP)',
      pattern: 'storage',
      icon: 'layers',
      sub: 'the same data — different questions',
      cols: 2,
      children: [
        { id: 'fraud', label: 'Real-time fraud scoring', pattern: 'storage', icon: 'scanface', sub: 'score every txn as it happens', variant: 'tile' },
        { id: 'insight', label: 'Risk & spending insight', pattern: 'storage', icon: 'gauge', sub: 'patterns across customers', variant: 'tile' },
        { id: 'reporting', label: 'Regulatory reporting', pattern: 'storage', icon: 'scroll', sub: 'historical aggregates', variant: 'tile' },
        { id: 'scans', label: 'Big scans & aggregations', pattern: 'storage', icon: 'database', sub: 'read millions of rows at once', variant: 'tile' },
      ],
    },
    {
      id: 'demands',
      label: 'What it demands',
      pattern: 'external',
      icon: 'layers',
      sub: 'the properties analytics forces — the inverse of OLTP',
      cols: 3,
      children: [
        { id: 'scale', label: 'Massive scale', pattern: 'external', icon: 'database', sub: 'petabytes, ever-growing', variant: 'tile' },
        { id: 'streambatch', label: 'Stream and batch', pattern: 'external', icon: 'repeat', sub: 'real-time + overnight', variant: 'tile' },
        { id: 'readheavy', label: 'Read-heavy', pattern: 'external', icon: 'layers', sub: 'aggregate, not row lookups', variant: 'tile' },
        { id: 'schema', label: 'Schema-on-read', pattern: 'external', icon: 'braces', sub: 'raw & varied, structured at query', variant: 'tile' },
        { id: 'eventual', label: 'Eventual consistency OK', pattern: 'external', icon: 'clock', sub: 'seconds-stale is fine', variant: 'tile' },
        { id: 'cheap', label: 'Cheap storage', pattern: 'external', icon: 'tag', sub: 'keep all history, cheaply', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
