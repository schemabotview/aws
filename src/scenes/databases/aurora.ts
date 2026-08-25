import type { Scene } from '../../render-engine'

// §4 aurora — AWS's cloud-native relational engine, and the one idea is that it DECOUPLES compute from
// storage. Where RDS (§3) gave each replica its own disk, an Aurora cluster runs a single WRITER plus
// up to 15 READERS over ONE shared, distributed storage volume — so compute and storage scale
// independently and adding a reader is cheap (no copy of the data). That storage layer keeps SIX
// copies of your data across THREE AZs and self-heals, which is where the durability comes from.
// Drawn as the inverse of §3's fan: writer + readers all CONVERGE downward onto the one shared
// storage box (3 AZs × 2 copies = 6), instead of each carrying its own storage.
export const aurora: Scene = {
  id: 'aurora',
  padding: 0.16,
  nodes: [
    { id: 'app', label: 'App', pattern: 'user', icon: 'code', sub: 'reads + writes' },
    {
      id: 'cluster',
      label: 'Aurora cluster',
      pattern: 'network',
      sub: 'compute decoupled from storage',
      children: [
        { id: 'writer', label: 'Writer', pattern: 'service', icon: 'aurora', sub: 'handles all writes', variant: 'tile' },
        { id: 'reader1', label: 'Reader', pattern: 'service', icon: 'aurora', sub: 'read-only · up to 15', variant: 'tile' },
        { id: 'reader2', label: 'Reader', pattern: 'service', icon: 'aurora', sub: 'low replica lag', variant: 'tile' },
        {
          id: 'storage',
          label: 'Shared storage',
          pattern: 'storage',
          sub: 'distributed · self-healing · auto-grows',
          cols: 3,
          children: [
            { id: 'az-a', label: 'AZ a', pattern: 'storage', icon: 'database', sub: '2 copies', variant: 'tile' },
            { id: 'az-b', label: 'AZ b', pattern: 'storage', icon: 'database', sub: '2 copies', variant: 'tile' },
            { id: 'az-c', label: 'AZ c', pattern: 'storage', icon: 'database', sub: '2 copies', variant: 'tile' },
          ],
        },
      ],
      // Writer + every reader read/write the ONE shared volume — the convergence that defines Aurora.
      edges: [
        { source: 'writer', target: 'storage' },
        { source: 'reader1', target: 'storage' },
        { source: 'reader2', target: 'storage' },
      ],
    },
  ],
  // Writes go to the writer, reads to a reader (edges land on the deep nodes, positioned via cluster).
  edges: [
    { source: 'app', target: 'writer' },
    { source: 'app', target: 'reader1' },
  ],
}
