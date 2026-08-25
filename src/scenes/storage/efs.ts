import type { Scene } from '../../render-engine'

// §6 efs — the last shape: file storage. Where EBS (§5) gives ONE server a private disk in ONE AZ,
// EFS (Elastic File System) gives MANY servers a shared file tree ACROSS AZs. It's a managed NFS
// filesystem: mount it on Linux EC2 and it appears as a normal directory; a whole fleet across AZs
// reads/writes the same files. Elastic (grows/shrinks automatically, pay per use), regional & highly
// available. Drawn as a fan-IN — three EC2 in different AZs all mount one EFS — the exact inverse of
// EBS's one-to-one single-AZ chain. FSx (Windows/Lustre) is the slide aside.
export const efs: Scene = {
  id: 'efs',
  padding: 0.16,
  nodes: [
    { id: 'ec2-a', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'AZ-a', variant: 'tile' },
    { id: 'ec2-b', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'AZ-b', variant: 'tile' },
    { id: 'ec2-c', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'AZ-c', variant: 'tile' },
    { id: 'efs', label: 'EFS file system', pattern: 'storage', icon: 'efs', sub: 'shared NFS · multi-AZ · elastic' },
  ],
  edges: [
    { source: 'ec2-a', target: 'efs' },
    { source: 'ec2-b', target: 'efs' },
    { source: 'ec2-c', target: 'efs' },
  ],
}
