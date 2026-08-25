import type { Scene } from '../../render-engine'

// §1 analytics-vs-oltp — the frame for Course 8, drawn as two worlds that contrast by their SHAPE. Each
// world is a container carrying its own top→bottom flow, so you read the difference directly. The OLTP
// world (Course 6) is a tight loop: a request hits a database and a response comes straight back, in
// milliseconds, over current data — that's what runs the live app. The OLAP / analytics world is a long
// refinement PIPELINE: data is ingested, stored cheaply in the lake, transformed, analysed, and turned
// into insight — batch or streaming, over all of history. Two worlds side by side (scene cols:2), a
// short 3-step loop next to a long 5-stage pipeline so the shape contrast reads as height. Cards (not
// tiles) keep each box wide enough for its label; the pipeline's five stages are the spine of §2–§8.
export const twoDataWorlds: Scene = {
  id: 'two-data-worlds',
  cols: 2,
  padding: 0.18,
  nodes: [
    {
      id: 'oltp',
      label: 'OLTP · run the app',
      pattern: 'service',
      sub: 'a tight loop · milliseconds',
      children: [
        { id: 'request', label: 'Request', pattern: 'user', icon: 'code', sub: 'one small query' },
        { id: 'db', label: 'Database', pattern: 'service', icon: 'database', sub: 'current data' },
        { id: 'response', label: 'Response', pattern: 'user', icon: 'circlecheck', sub: 'straight back' },
      ],
      edges: [
        { source: 'request', target: 'db' },
        { source: 'db', target: 'response' },
      ],
    },
    {
      id: 'olap',
      label: 'OLAP · understand the data',
      pattern: 'storage',
      sub: 'a refinement pipeline · over all history',
      children: [
        { id: 'ingest', label: 'Ingest', pattern: 'network', icon: 'network', sub: 'collect · batch & stream' },
        { id: 'lake', label: 'Store', pattern: 'storage', icon: 's3', sub: 'the S3 data lake' },
        { id: 'transform', label: 'Transform', pattern: 'service', icon: 'glue', sub: 'clean & catalog · ETL' },
        { id: 'analyze', label: 'Analyze', pattern: 'storage', icon: 'athena', sub: 'query in place / warehouse' },
        { id: 'insight', label: 'Insight', pattern: 'storage', icon: 'quicksight', sub: 'dashboards · ML' },
      ],
      edges: [
        { source: 'ingest', target: 'lake' },
        { source: 'lake', target: 'transform' },
        { source: 'transform', target: 'analyze' },
        { source: 'analyze', target: 'insight' },
      ],
    },
  ],
  edges: [],
}
