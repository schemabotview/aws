import type { Scene } from '../../render-engine'

// §7 choosing-storage — the finale. Pull back to §1's three shapes, now as a decision board: match
// the shape to the ACCESS PATTERN. Block (EBS) when one server needs a fast local disk it controls;
// File (EFS) when many servers share one filesystem; Object (S3) for any amount of data addressable
// over HTTP, durable and cheap. Mirrors compute §8's decision board (and §1's 3-way board) — same
// scene-level cols:3, each shape carrying its "pick when" trigger. Mature systems use all three.
export const choosingStorage: Scene = {
  id: 'choosing-storage',
  padding: 0.2,
  nodes: [
    { id: 'block', label: 'Block · EBS', pattern: 'storage', icon: 'ebs', sub: 'one server · fast local disk' },
    { id: 'file', label: 'File · EFS', pattern: 'storage', icon: 'efs', sub: 'many servers · shared files' },
    { id: 'object', label: 'Object · S3', pattern: 'storage', icon: 's3', sub: 'HTTP data at scale · backups' },
  ],
  edges: [],
}
