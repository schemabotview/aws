import type { Scene } from '../../render-engine'

// §2 sql-vs-nosql — the model split, the frame for the whole course. A managed database (§1) still
// leaves the biggest question: which SHAPE of database? Two families, matched to how your data is
// structured and accessed. RELATIONAL (SQL): a fixed schema of tables & rows, related by keys, queried
// with joins and strong ACID guarantees — scaled UP (a bigger box). NoSQL: a flexible schema of
// key-value items or documents, denormalised for a known access pattern, scaled OUT across many
// machines for fast lookups at any size. Drawn as two peer bands (scene-level cols:2 — the exact rhyme
// with storage §1's shape board), each container previewing the managed engines the course goes deep
// on. The SQL band shows the relational ENGINE vendors you pick on RDS/Aurora (§3–4); the NoSQL band
// shows AWS's purpose-built NoSQL family — DynamoDB (§5) plus DocumentDB, Neptune, Keyspaces (§7 nods).
export const sqlVsNosql: Scene = {
  id: 'sql-vs-nosql',
  cols: 2,
  padding: 0.2,
  nodes: [
    {
      id: 'sql',
      label: 'Relational (SQL)',
      pattern: 'service',
      icon: 'database',
      sub: 'fixed schema · tables & rows · joins · ACID · scale up — on RDS & Aurora',
      cols: 2,
      children: [
        { id: 'mysql', label: 'MySQL', pattern: 'service', icon: 'database', variant: 'tile' },
        { id: 'postgres', label: 'PostgreSQL', pattern: 'service', icon: 'database', variant: 'tile' },
        { id: 'mariadb', label: 'MariaDB', pattern: 'service', icon: 'database', variant: 'tile' },
        { id: 'sqlserver', label: 'SQL Server', pattern: 'service', icon: 'database', variant: 'tile' },
      ],
    },
    {
      id: 'nosql',
      label: 'NoSQL',
      pattern: 'storage',
      icon: 'braces',
      sub: 'flexible schema · key-value & documents · scale out · fast lookups',
      cols: 2,
      children: [
        { id: 'dynamodb', label: 'DynamoDB', pattern: 'storage', icon: 'dynamodb', variant: 'tile' },
        { id: 'documentdb', label: 'DocumentDB', pattern: 'storage', icon: 'documentdb', variant: 'tile' },
        { id: 'neptune', label: 'Neptune', pattern: 'storage', icon: 'neptune', variant: 'tile' },
        { id: 'keyspaces', label: 'Keyspaces', pattern: 'storage', icon: 'keyspaces', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
