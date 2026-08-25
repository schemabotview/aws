import type { Scene } from '../../render-engine'

// §6 caching — the move that makes any database faster: put an IN-MEMORY cache in front of it. The app
// reads the cache first; a HIT is served from RAM in microseconds and never touches the DB, a MISS
// falls through to the DB and the result is written back to the cache for next time. That cuts latency
// AND offloads read traffic from the database. AWS gives you two: ElastiCache (managed Redis/Memcached)
// in front of a relational DB, and DAX, the purpose-built in-memory accelerator for DynamoDB. Drawn as
// two parallel cache→DB lanes off the app — the hit/miss story lives in the sub lines (the flow engine
// draws a chain, not a conditional, so the words carry the branch).
export const dbCaching: Scene = {
  id: 'db-caching',
  padding: 0.16,
  nodes: [
    { id: 'app', label: 'App', pattern: 'user', icon: 'code', sub: 'read: check cache first' },
    { id: 'cache', label: 'ElastiCache', pattern: 'service', icon: 'elasticache', sub: 'in-memory · hit → µs, skip the DB' },
    { id: 'db', label: 'Database', pattern: 'service', icon: 'rds', sub: 'RDS / Aurora · only on a miss → cache back' },
    { id: 'dax', label: 'DAX', pattern: 'service', icon: 'dax', sub: 'in-memory accelerator for DynamoDB' },
    { id: 'ddb', label: 'DynamoDB', pattern: 'service', icon: 'dynamodb', sub: 'ms → µs on a cache hit' },
  ],
  // Two lanes: ElastiCache fronts a relational DB; DAX fronts DynamoDB. Cache first, DB only on a miss.
  edges: [
    { source: 'app', target: 'cache' },
    { source: 'cache', target: 'db' },
    { source: 'app', target: 'dax' },
    { source: 'dax', target: 'ddb' },
  ],
}
