import type { Scene } from '../../render-engine'

// §10 scps — the course capstone. A Service Control Policy is a ceiling on an ENTIRE account: attached
// to an OU/account, it caps the maximum permissions anyone inside can have (not even root rises above
// it). Like a permission boundary (§6), but for a whole account — and it GRANTS NOTHING, it only
// bounds. The section climaxes on the whole-course sentence: a request succeeds only if the SCP AND
// the boundary AND an identity/resource grant all permit it, with no explicit Deny anywhere. Drawn as
// a vertical GAUNTLET — the request must pass through every layer, top to bottom, to reach Allowed.
// This renders cleanly (a flow chain, like §1) and reads as "clear every ceiling in turn". Amber SCP =
// the new hero guardrail; the two ceilings bound, the policy grants, and only then is it Allowed.
export const scps: Scene = {
  id: 'scps',
  padding: 0.14,
  nodes: [
    { id: 'req', label: 'Request', pattern: 'user', icon: 'braces', sub: 'a principal wants to act' },
    { id: 'scp', label: 'Service Control Policy', pattern: 'external', icon: 'ban', sub: 'account ceiling — grants nothing, only bounds' },
    { id: 'boundary', label: 'Permission boundary', pattern: 'group', icon: 'gauge', sub: 'the principal ceiling (§6)' },
    { id: 'grant', label: 'Identity / resource policy', pattern: 'service', icon: 'scroll', sub: 'the actual Allow' },
    { id: 'allowed', label: 'Allowed', pattern: 'service', icon: 'circlecheck', sub: 'only if every layer permits · no Deny anywhere' },
  ],
  edges: [
    { source: 'req', target: 'scp' },
    { source: 'scp', target: 'boundary' },
    { source: 'boundary', target: 'grant' },
    { source: 'grant', target: 'allowed' },
  ],
}
