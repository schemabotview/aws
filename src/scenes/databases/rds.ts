import type { Scene } from '../../render-engine'

// §3 rds — deep on the managed relational engine. One RDS PRIMARY handles your reads and writes; two
// independent moves fan off it. Multi-AZ HA: a synchronous STANDBY in another AZ that RDS promotes
// automatically if the primary fails (it doesn't serve traffic — it's insurance). Scale reads: one or
// more asynchronous READ REPLICAS your app queries directly to spread read load. Same primitive
// (replication), two different jobs — durability vs throughput. Drawn as App → Region ⊃ primary, the
// primary fanning to standby + two replicas (the sub lines carry the sync/failover vs async/read-only
// split, since a bare fan would make them look alike). Echoes multi-az's containment + fan.
export const rds: Scene = {
  id: 'rds',
  padding: 0.16,
  nodes: [
    { id: 'app', label: 'App', pattern: 'user', icon: 'code', sub: 'your queries' },
    {
      id: 'region',
      label: 'Region',
      pattern: 'network',
      sub: 'RDS across AZs',
      children: [
        { id: 'primary', label: 'RDS primary', pattern: 'service', icon: 'rds', sub: 'writer · reads + writes', variant: 'tile' },
        { id: 'standby', label: 'Standby', pattern: 'service', icon: 'rds', sub: 'Multi-AZ · sync · auto-failover', variant: 'tile' },
        { id: 'replica1', label: 'Read replica', pattern: 'service', icon: 'rds', sub: 'async · read-only', variant: 'tile' },
        { id: 'replica2', label: 'Read replica', pattern: 'service', icon: 'rds', sub: 'async · read-only', variant: 'tile' },
      ],
      // The primary fans to its standby (HA) and read replicas (scale) — one primitive, two jobs.
      edges: [
        { source: 'primary', target: 'standby' },
        { source: 'primary', target: 'replica1' },
        { source: 'primary', target: 'replica2' },
      ],
    },
  ],
  // The app talks to the primary (edge lands on the deep node, positioned via the Region).
  edges: [{ source: 'app', target: 'primary' }],
}
