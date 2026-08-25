import type { Scene } from '../../render-engine'

// §4 policy-types — a policy can attach in TWO places, answering the permission question from two
// directions. Identity policy: on a PRINCIPAL (user/group/role) — what THEY can do. Resource policy:
// on the RESOURCE itself — who may touch IT (and the only way to grant cross-account without a role,
// or to make something public). Two peer boxes, edgeless — the split IS the teaching. Each box shows
// the thing the policy attaches to + the policy doc. Purple = the principal side, green = the resource
// side (rhymes with the storage/data colour).
export const policyTypes: Scene = {
  id: 'policy-types',
  padding: 0.18,
  nodes: [
    {
      id: 'identity-pol',
      label: 'Identity policy',
      pattern: 'user',
      sub: 'on a principal · what THEY can do',
      cols: 2,
      children: [
        { id: 'id-who', label: 'Role / User', pattern: 'user', icon: 'scanface', sub: 'the principal', variant: 'tile' },
        { id: 'id-doc', label: 'Allow read uploads/*', pattern: 'user', icon: 'scroll', sub: 'travels with them', variant: 'tile' },
      ],
    },
    {
      id: 'resource-pol',
      label: 'Resource policy',
      pattern: 'storage',
      sub: 'on the resource · who may touch IT',
      cols: 2,
      children: [
        { id: 'res-what', label: 'S3 bucket', pattern: 'storage', icon: 's3', sub: 'the resource', variant: 'tile' },
        { id: 'res-doc', label: 'Allow acct 123…', pattern: 'storage', icon: 'scroll', sub: 'names who is trusted', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
