import type { Scene } from '../../render-engine'

// §9 organizations — zoom all the way out to the accounts themselves. AWS Organizations manages a
// whole fleet of accounts as one structured TREE instead of a pile of disconnected logins: a
// management account at the root, member accounts joined under it, grouped into Organizational Units
// (Prod / Dev / Sandbox) so you govern them by group. Drawn as nesting — the Organization box holds
// the root account (orange, special, like the root user) then the OU boxes, each gridding its member
// accounts. Edgeless → the engine stacks them, so the hierarchy reads top-to-bottom (portrait-safe).
export const organizations: Scene = {
  id: 'organizations',
  padding: 0.14,
  nodes: [
    {
      id: 'org',
      label: 'AWS Organizations',
      pattern: 'group',
      icon: 'gitbranch',
      sub: 'many accounts, one tree',
      children: [
        {
          id: 'mgmt',
          label: 'Management account',
          pattern: 'service',
          icon: 'awscloud',
          sub: 'the root — one consolidated bill',
        },
        {
          id: 'prod-ou',
          label: 'Prod OU',
          pattern: 'group',
          cols: 3,
          children: [
            { id: 'prod-a', label: 'prod-a', pattern: 'network', icon: 'awscloud', variant: 'tile' },
            { id: 'prod-b', label: 'prod-b', pattern: 'network', icon: 'awscloud', variant: 'tile' },
            { id: 'prod-c', label: 'prod-c', pattern: 'network', icon: 'awscloud', variant: 'tile' },
          ],
        },
        {
          id: 'dev-ou',
          label: 'Dev OU',
          pattern: 'group',
          cols: 3,
          children: [
            { id: 'dev-a', label: 'dev-a', pattern: 'network', icon: 'awscloud', variant: 'tile' },
            { id: 'dev-b', label: 'dev-b', pattern: 'network', icon: 'awscloud', variant: 'tile' },
            { id: 'dev-c', label: 'dev-c', pattern: 'network', icon: 'awscloud', variant: 'tile' },
          ],
        },
        {
          id: 'sandbox-ou',
          label: 'Sandbox OU',
          pattern: 'group',
          children: [
            { id: 'sandbox', label: 'sandbox', pattern: 'network', icon: 'awscloud', variant: 'tile' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
