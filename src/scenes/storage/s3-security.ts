import type { Scene } from '../../render-engine'

// §4 s3-security — S3 is PRIVATE BY DEFAULT, yet famous for leaks when people misconfigure it. Four
// layers keep a bucket safe: Block Public Access (a master switch, on by default, that overrides any
// policy trying to make objects public); the Bucket policy (a RESOURCE policy on the bucket — the
// exact identity §4 example, "who may touch it"); Encryption (SSE at rest, TLS in transit); and
// Versioning (keep every version → undo deletes). Drawn as a 2×2 board of guards around the bucket;
// the bucket-policy card is purple to echo identity. Callback: bucket policy = resource policy (§ID4).
export const s3Security: Scene = {
  id: 's3-security',
  padding: 0.18,
  nodes: [
    {
      id: 'bucket',
      label: 'Guarding an S3 bucket',
      pattern: 'group',
      icon: 's3',
      sub: 'private by default — you open it deliberately',
      cols: 2,
      children: [
        { id: 'bpa', label: 'Block Public Access', pattern: 'external', icon: 'shieldcheck', sub: 'on by default — stops leaks' },
        { id: 'policy', label: 'Bucket policy', pattern: 'user', icon: 'scroll', sub: 'who may touch it — resource policy' },
        { id: 'encryption', label: 'Encryption', pattern: 'network', icon: 'key', sub: 'at rest (SSE) · in transit (TLS)' },
        { id: 'versioning', label: 'Versioning', pattern: 'storage', icon: 'layers', sub: 'keep versions · undo deletes' },
      ],
    },
  ],
  edges: [],
}
