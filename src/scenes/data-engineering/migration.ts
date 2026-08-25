import type { Scene } from '../../render-engine'

// §7 migration — before any of this pipeline runs, you often have to get EXISTING data into AWS, from
// on-premises systems or another cloud. Four purpose-built tools, matched to what you're moving. DMS
// (Database Migration Service): migrate a live database into RDS/Aurora with continuous replication and
// minimal downtime. DataSync: fast, online transfer of files (NFS/SMB) into S3/EFS. Snowball: a rugged
// physical appliance AWS ships you — load petabytes offline and mail it back, for when the network is
// too slow. Storage Gateway: a hybrid bridge — on-prem apps keep using local storage while it's backed
// by the cloud. Drawn as a 2×2 decision board — each tool a card carrying what it moves and when.
export const migration: Scene = {
  id: 'migration',
  cols: 2,
  padding: 0.2,
  nodes: [
    { id: 'dms', label: 'DMS', pattern: 'service', icon: 'dms', sub: 'live databases → RDS / Aurora · replicate, minimal downtime' },
    { id: 'datasync', label: 'DataSync', pattern: 'network', icon: 'datasync', sub: 'files (NFS / SMB) → S3 / EFS · fast online transfer' },
    { id: 'snowball', label: 'Snowball', pattern: 'storage', icon: 'snowball', sub: 'petabytes offline · ship an appliance when the network is too slow' },
    { id: 'gateway', label: 'Storage Gateway', pattern: 'network', icon: 'storagegateway', sub: 'hybrid · on-prem apps use cloud-backed storage' },
  ],
  edges: [],
}
