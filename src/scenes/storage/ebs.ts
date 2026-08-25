import type { Scene } from '../../render-engine'

// §5 ebs — back to the plainest shape: block storage. EBS (Elastic Block Store) gives an EC2 instance
// a VOLUME — a virtual disk it formats and mounts like a physical drive (the root volume from compute
// §3). Key traits: network-attached but SINGLE-AZ (an AZ-scoped resource, one instance at a time), and
// it PERSISTS independently of the instance. The backup story is the SNAPSHOT: a point-in-time,
// incremental copy stored in S3 — which is how a volume's data escapes its single AZ (copy the
// snapshot to another AZ/Region). Drawn as the chain EC2 —attached→ EBS volume —snapshot→ S3.
export const ebs: Scene = {
  id: 'ebs',
  padding: 0.16,
  nodes: [
    { id: 'ec2', label: 'EC2 instance', pattern: 'service', icon: 'ec2', sub: 'one server, one AZ' },
    { id: 'ebs', label: 'EBS volume', pattern: 'storage', icon: 'ebs', sub: 'block disk · single-AZ · persists' },
    { id: 'snap', label: 'Snapshot → S3', pattern: 'storage', icon: 's3', sub: 'point-in-time, incremental · durable' },
  ],
  edges: [
    { source: 'ec2', target: 'ebs' },
    { source: 'ebs', target: 'snap' },
  ],
}
