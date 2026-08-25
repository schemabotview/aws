import type { Scene } from '../../render-engine'

// §1 what-is-storage — the frame for Course 4. With compute running your code, it needs somewhere to
// keep data. AWS storage comes in THREE fundamental shapes, and choosing well means matching the
// shape to how your app accesses data: BLOCK (a raw disk for one server — EBS), FILE (a shared file
// tree many servers mount — EFS), OBJECT (whole objects addressed by key over HTTP, virtually
// unlimited — S3). Drawn as a scene-level 3-way board (cols: 3): three peers of one category, each an
// AWS service tile + its access pattern. The rest of the course goes deep, starting with S3.
export const storageShapes: Scene = {
  id: 'storage-shapes',
  padding: 0.2,
  nodes: [
    { id: 'block', label: 'Block', pattern: 'storage', icon: 'ebs', sub: 'a raw disk, one server · EBS' },
    { id: 'file', label: 'File', pattern: 'storage', icon: 'efs', sub: 'a shared file tree, many · EFS' },
    { id: 'object', label: 'Object', pattern: 'storage', icon: 's3', sub: 'keys over HTTP, unlimited · S3' },
  ],
  edges: [],
}
