import type { Scene } from '../../render-engine'

// §5 dynamodb — AWS's flagship NoSQL, and the mental model is the opposite of the relational engines.
// It is SERVERLESS: no instances, no AZs, no storage to provision — you create a table and it scales
// itself. The core primitive is the PARTITION KEY: DynamoDB hashes each item's key to decide which
// underlying PARTITION stores it, and it adds partitions as the table grows. That auto-sharding is how
// it delivers single-digit-millisecond reads and writes at any scale — you scale OUT by partitioning,
// not by replicas over shared storage (§3/§4). GLOBAL TABLES extend that to multi-Region, active-
// active. Drawn as App → table ⊃ (partition key → partitions), with Global Tables as the multi-Region
// capability the table replicates into.
export const dynamodb: Scene = {
  id: 'dynamodb',
  padding: 0.16,
  nodes: [
    { id: 'app', label: 'App', pattern: 'user', icon: 'code', sub: 'get / put by key' },
    {
      id: 'table',
      label: 'DynamoDB table',
      pattern: 'service',
      icon: 'dynamodb',
      sub: 'serverless · single-digit-ms at any scale',
      children: [
        { id: 'pkey', label: 'Partition key', pattern: 'service', icon: 'key', sub: 'hashed → picks a partition', variant: 'tile' },
        {
          id: 'partitions',
          label: 'Partitions',
          pattern: 'storage',
          sub: 'auto-sharded · scales out',
          cols: 3,
          children: [
            { id: 'p1', label: 'Partition', pattern: 'storage', icon: 'braces', sub: 'items', variant: 'tile' },
            { id: 'p2', label: 'Partition', pattern: 'storage', icon: 'braces', sub: 'items', variant: 'tile' },
            { id: 'p3', label: 'Partition', pattern: 'storage', icon: 'braces', sub: 'items', variant: 'tile' },
          ],
        },
      ],
      // The key routes each item to a partition — the auto-sharding that gives horizontal scale.
      edges: [{ source: 'pkey', target: 'partitions' }],
    },
    { id: 'global', label: 'Global Tables', pattern: 'network', icon: 'dynamodb', sub: 'multi-Region · active-active' },
  ],
  // App reads/writes by key; the table replicates into other Regions via Global Tables.
  edges: [
    { source: 'app', target: 'pkey' },
    { source: 'table', target: 'global' },
  ],
}
