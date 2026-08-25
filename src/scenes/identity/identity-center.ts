import type { Scene } from '../../render-engine'

// §7 identity-center — IAM users don't scale to a whole workforce × many accounts. IAM Identity
// Center (formerly AWS SSO) is the clean front door: a person logs in ONCE, sees every account they
// are entitled to, and behind the scenes ASSUMES A ROLE in the target account (temporary creds — the
// same IAM model from §5, delivered centrally). Drawn as a funnel-then-fan: one user → the SSO portal
// → the accounts it unlocks. Purple = the person; teal = the portal (the star); the accounts fan out
// as the boundaries a single login now reaches.
export const identityCenter: Scene = {
  id: 'identity-center',
  padding: 0.16,
  nodes: [
    {
      id: 'user',
      label: 'Workforce user',
      pattern: 'user',
      icon: 'scanface',
      sub: 'one login · MFA once',
    },
    {
      id: 'portal',
      label: 'IAM Identity Center',
      pattern: 'service',
      icon: 'iam',
      sub: 'SSO front door — formerly AWS SSO',
    },
    { id: 'prod', label: 'Prod account', pattern: 'group', icon: 'awscloud', sub: 'assume a role' },
    { id: 'dev', label: 'Dev account', pattern: 'group', icon: 'awscloud', sub: 'assume a role' },
    { id: 'test', label: 'Test account', pattern: 'group', icon: 'awscloud', sub: 'assume a role' },
  ],
  edges: [
    { source: 'user', target: 'portal' },
    { source: 'portal', target: 'prod' },
    { source: 'portal', target: 'dev' },
    { source: 'portal', target: 'test' },
  ],
}
