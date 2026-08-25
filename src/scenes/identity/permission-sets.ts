import type { Scene } from '../../render-engine'

// §8 permission-sets — the two pieces that make Identity Center work, mapping onto IAM's two eternal
// questions. Federation answers WHO: trust an existing identity provider (Okta/Entra/Google) instead
// of re-creating people. Permission set answers WHAT: a reusable permissions template (ReadOnly /
// Developer / Admin) assigned to a group across a set of accounts. Identity Center combines them and
// provisions a matching IAM role in each account, assumed on sign-in — the same §5 model, at org
// scale. Drawn as a fan-in → chain: {who, what} → Identity Center → the provisioned role. Amber =
// the external IdP; teal = the template; the role lands in purple as the delivered identity.
export const permissionSets: Scene = {
  id: 'permission-sets',
  padding: 0.16,
  nodes: [
    {
      id: 'idp',
      label: 'Identity provider',
      pattern: 'external',
      icon: 'globe',
      sub: 'who you are — federation',
    },
    {
      id: 'pset',
      label: 'Permission set',
      pattern: 'service',
      icon: 'layers',
      sub: 'what you may do — a template',
    },
    {
      id: 'center',
      label: 'IAM Identity Center',
      pattern: 'group',
      icon: 'iam',
      sub: 'assigns the set to a group × accounts',
    },
    {
      id: 'role',
      label: 'Provisioned role',
      pattern: 'user',
      icon: 'usercheck',
      sub: 'one per account · assumed on sign-in',
    },
  ],
  edges: [
    { source: 'idp', target: 'center' },
    { source: 'pset', target: 'center' },
    { source: 'center', target: 'role' },
  ],
}
