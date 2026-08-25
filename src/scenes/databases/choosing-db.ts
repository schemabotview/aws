import type { Scene } from '../../render-engine'

// §7 choosing-a-database — the finale, a DECISION BOARD that recaps the whole course (mirrors compute
// §8 / storage §7 / networking §8). Three linked calls, drawn as four bands in a scene-level 2×2:
// (1) the first cut — relational for joins/ACID/related data, NoSQL for scale + a known access
// pattern; (2) if relational, RDS (pick your engine) vs Aurora (cloud-scale, the usual default for a
// new build); (3) the purpose-built family for special shapes — DocumentDB (documents), Neptune
// (graph), Keyspaces (wide-column), DynamoDB (key-value); (4) then make any of them faster with a
// cache (ElastiCache / DAX). No edges — a board of peers, each tile carrying its "pick when" trigger.
export const choosingDb: Scene = {
  id: 'choosing-db',
  cols: 2,
  padding: 0.2,
  nodes: [
    {
      id: 'first-cut',
      label: '1 · Relational or NoSQL?',
      pattern: 'service',
      sub: 'match the model to your data & access',
      cols: 2,
      children: [
        { id: 'rel', label: 'Relational', pattern: 'service', icon: 'rds', sub: 'joins · ACID · related data', variant: 'tile' },
        { id: 'nosql', label: 'NoSQL', pattern: 'storage', icon: 'dynamodb', sub: 'scale · known access pattern', variant: 'tile' },
      ],
    },
    {
      id: 'rel-choice',
      label: '2 · Relational → which?',
      pattern: 'service',
      sub: 'the managed relational engines',
      cols: 2,
      children: [
        { id: 'rds', label: 'RDS', pattern: 'service', icon: 'rds', sub: 'pick the engine · standard', variant: 'tile' },
        { id: 'aurora', label: 'Aurora', pattern: 'service', icon: 'aurora', sub: 'cloud-scale · usual default', variant: 'tile' },
      ],
    },
    {
      id: 'family',
      label: '3 · Purpose-built',
      pattern: 'storage',
      sub: 'a database per data shape',
      cols: 2,
      children: [
        { id: 'documentdb', label: 'DocumentDB', pattern: 'storage', icon: 'documentdb', sub: 'documents', variant: 'tile' },
        { id: 'neptune', label: 'Neptune', pattern: 'storage', icon: 'neptune', sub: 'graph', variant: 'tile' },
        { id: 'keyspaces', label: 'Keyspaces', pattern: 'storage', icon: 'keyspaces', sub: 'wide-column', variant: 'tile' },
        { id: 'dynamodb', label: 'DynamoDB', pattern: 'storage', icon: 'dynamodb', sub: 'key-value', variant: 'tile' },
      ],
    },
    {
      id: 'faster',
      label: '4 · Then make it fast',
      pattern: 'network',
      sub: 'cache in front of any of them',
      cols: 2,
      children: [
        { id: 'cache', label: 'ElastiCache', pattern: 'network', icon: 'elasticache', sub: 'Redis / Memcached', variant: 'tile' },
        { id: 'dax', label: 'DAX', pattern: 'network', icon: 'dax', sub: 'for DynamoDB', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
