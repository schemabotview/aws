import type { Scene } from '../../render-engine'

// §1 managed-databases — the frame for Course 6. Your app can run, store files and serve requests;
// now it needs to store and query STRUCTURED data reliably. You could install MySQL/Postgres yourself
// on EC2, but running a production database is a relentless operational job — patching, backups,
// replication + failover, scaling, securing. That is the "undifferentiated heavy lifting" the cloud
// removes. Amazon RDS (and the managed DB family) take it over: you pick an engine, AWS runs it. What
// is left is the part that matters — your schema, queries and data. Drawn as the split: YOU own the
// data design; RDS handles the operational chores.
export const managedDb: Scene = {
  id: 'managed-db',
  padding: 0.18,
  nodes: [
    { id: 'you', label: 'You', pattern: 'user', icon: 'code', sub: 'schema · queries · your data — the part that matters' },
    {
      id: 'rds',
      label: 'Amazon RDS',
      pattern: 'service',
      icon: 'rds',
      sub: 'AWS handles the operational heavy lifting',
      cols: 2,
      children: [
        { id: 'patch', label: 'Patching', pattern: 'service', icon: 'wrench', variant: 'tile' },
        { id: 'backup', label: 'Backups', pattern: 'service', icon: 'layers', variant: 'tile' },
        { id: 'ha', label: 'Multi-AZ HA', pattern: 'service', icon: 'shieldcheck', variant: 'tile' },
        { id: 'scale', label: 'Scaling', pattern: 'service', icon: 'gauge', variant: 'tile' },
      ],
    },
  ],
  edges: [{ source: 'you', target: 'rds' }],
}
