import type { Scene } from '../../render-engine'

// §2 s3-basics — S3 (Simple Storage Service), the star of the course. Object storage built on two
// nouns: BUCKETS and OBJECTS. A bucket is a container with a globally-unique name, living in one
// Region; an object is a file + metadata, addressed by a KEY (a string that reads like a path —
// photos/cat.jpg — though the namespace is flat, the slashes are just part of the key). You reach
// objects over an HTTP API (GET/PUT), not a mounted disk. Capacity is virtually unlimited and
// durability is extreme: S3 auto-replicates across ≥ 3 AZs for eleven 9's. Drawn as app → S3 bucket ⊃
// a listing of keyed objects; the bucket sub carries the headline durability/capacity facts.
export const s3Basics: Scene = {
  id: 's3-basics',
  padding: 0.16,
  nodes: [
    { id: 'app', label: 'Your app', pattern: 'user', icon: 'code', sub: 'GET / PUT over HTTPS' },
    {
      id: 'bucket',
      label: 'S3 bucket',
      pattern: 'storage',
      icon: 's3',
      sub: "11 9's durable · unlimited",
      cols: 2,
      children: [
        { id: 'obj-a', label: 'photos/cat.jpg', pattern: 'network', icon: 'filecode', sub: 'object + metadata · key' },
        { id: 'obj-b', label: 'logs/app.log', pattern: 'network', icon: 'filecode', sub: 'object + metadata · key' },
        { id: 'obj-c', label: 'db-backup.zip', pattern: 'network', icon: 'filecode', sub: 'object + metadata · key' },
      ],
    },
  ],
  edges: [{ source: 'app', target: 'bucket' }],
}
