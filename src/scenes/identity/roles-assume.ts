import type { Scene } from '../../render-engine'

// §5 roles-assume — the elegant core of modern AWS access. A role is a set of permissions that
// belongs to no one and that any TRUSTED party can borrow for a short time. It is defined by TWO
// policies: a trust policy (WHO may assume it) + a permissions policy (WHAT it can do). A trusted
// principal calls sts:AssumeRole → STS checks the trust policy and mints TEMPORARY credentials that
// carry the permissions policy and auto-expire. Drawn as a vertical borrow-chain (portrait-friendly):
// trusted principal → the role (its two policies side by side) → STS → short-lived creds. Purple =
// the principal/trust side; the creds land in external-amber as the minted, expiring token.
export const rolesAssume: Scene = {
  id: 'roles-assume',
  padding: 0.16,
  nodes: [
    {
      id: 'borrower',
      label: 'Trusted principal',
      pattern: 'user',
      icon: 'scanface',
      sub: 'a service, or a cross-account user',
    },
    {
      id: 'role',
      label: 'IAM role',
      pattern: 'group',
      icon: 'iam',
      sub: 'borrowed, not owned — two policies define it',
      cols: 2,
      children: [
        { id: 'trust', label: 'Trust policy', pattern: 'user', icon: 'shieldcheck', sub: 'WHO may assume it', variant: 'tile' },
        { id: 'perms', label: 'Permissions policy', pattern: 'service', icon: 'scroll', sub: 'WHAT it can do', variant: 'tile' },
      ],
    },
    {
      id: 'sts',
      label: 'AWS STS',
      pattern: 'service',
      icon: 'key',
      sub: 'mints creds via sts:AssumeRole',
    },
    {
      id: 'creds',
      label: 'Temporary credentials',
      pattern: 'external',
      icon: 'tag',
      sub: "the role's permissions · auto-expiring",
    },
  ],
  edges: [
    { source: 'borrower', target: 'role' },
    { source: 'role', target: 'sts' },
    { source: 'sts', target: 'creds' },
  ],
}
