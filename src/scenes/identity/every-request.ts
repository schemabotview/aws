import type { Scene } from '../../render-engine'

// §1 every-request — the frame for the whole IAM course. Nothing happens on AWS until a request
// clears the IAM gate. A principal makes a signed API request; IAM is the box every request passes
// through — it AUTHENTICATES (who are you?), then AUTHORIZES (are you allowed?), and emits an
// allow/deny decision (default: implicit deny). Only an allowed request reaches the service. IAM is
// modelled as a container so the two-step check reads as ONE gate; the outer flow (principal → IAM →
// service) stays a simple vertical chain, portrait-friendly.
export const everyRequest: Scene = {
  id: 'every-request',
  nodes: [
    { id: 'principal', label: 'Principal', pattern: 'user', icon: 'scanface', sub: 'an IAM user or role' },
    { id: 'request', label: 'API request', pattern: 'network', icon: 'braces', sub: 'every action is a signed API call' },
    {
      id: 'iam',
      label: 'IAM',
      pattern: 'group',
      icon: 'iam',
      sub: 'the gate on every request',
      flow: 'LR',
      children: [
        { id: 'authn', label: 'Authenticate', pattern: 'service', icon: 'key', sub: 'who are you?', variant: 'tile' },
        { id: 'authz', label: 'Authorize', pattern: 'service', icon: 'shieldcheck', sub: 'are you allowed?', variant: 'tile' },
        { id: 'decision', label: 'Allow / Deny', pattern: 'external', sub: 'default: implicit deny', variant: 'tile' },
      ],
      edges: [
        { source: 'authn', target: 'authz' },
        { source: 'authz', target: 'decision' },
      ],
    },
    { id: 'service', label: 'AWS service', pattern: 'service', icon: 's3', sub: 'S3 · EC2 · … — only if allowed' },
  ],
  edges: [
    { source: 'principal', target: 'request' },
    { source: 'request', target: 'iam' },
    { source: 'iam', target: 'service' },
  ],
}
