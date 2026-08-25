import type { Scene } from '../../render-engine'

// §6 boundaries — the last permissions concept: a permission boundary caps the MAXIMUM permissions a
// principal can ever have, no matter what its identity policies grant. The mental model is an
// INTERSECTION: effective permissions = (identity policies) ∩ (boundary). Drawn as a fan-IN — the
// broad grant and the capping ceiling both point down into the overlap, so the ∨ shape IS the
// teaching. Purple = the grant side; amber = the boundary/ceiling (a guardrail); the effective set
// lands as the narrower, permitted result.
export const boundaries: Scene = {
  id: 'boundaries',
  padding: 0.2,
  nodes: [
    {
      id: 'granted',
      label: 'Identity policy',
      pattern: 'user',
      icon: 'scroll',
      sub: 'grants s3:* — broad',
    },
    {
      id: 'boundary',
      label: 'Permission boundary',
      pattern: 'external',
      icon: 'gauge',
      sub: 'the ceiling — allows only s3:GetObject',
    },
    {
      id: 'effective',
      label: 'Effective permissions',
      pattern: 'service',
      icon: 'circlecheck',
      sub: 'the overlap → s3:GetObject only',
    },
  ],
  edges: [
    { source: 'granted', target: 'effective' },
    { source: 'boundary', target: 'effective' },
  ],
}
