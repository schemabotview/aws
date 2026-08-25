import type { Scene } from '../../render-engine'

// §2 principals — the "who". Every request is made by a principal, and there are three kinds, all
// living inside one AWS account (the trust boundary). Root: the all-powerful account owner, drawn in
// service-orange to read as special/dangerous — lock it away. IAM users: long-lived human/app
// identities, shown inside a GROUP box to teach the organizing rule (attach policy to the group, not
// each user). Roles: identities with no long-lived keys, ASSUMED for temporary creds — the tiles are
// the things that assume them (an EC2 instance, a Lambda, a cross-account/federated user). Three
// peer children, no edges → the engine stacks them top-to-bottom; portrait-friendly.
export const principals: Scene = {
  id: 'principals',
  padding: 0.28,
  nodes: [
    {
      id: 'account',
      label: 'AWS account',
      pattern: 'group',
      sub: 'one trust boundary · the identities inside it',
      children: [
        {
          id: 'root',
          label: 'Root user',
          pattern: 'service',
          icon: 'key',
          sub: 'the account owner — unlimited power · lock away + MFA',
        },
        {
          id: 'users',
          label: 'IAM users — put them in a group',
          pattern: 'group',
          sub: 'attach the policy once → every member inherits it',
          cols: 3,
          children: [
            { id: 'u-ana', label: 'Ana', pattern: 'user', icon: 'scanface', variant: 'tile' },
            { id: 'u-ben', label: 'Ben', pattern: 'user', icon: 'scanface', variant: 'tile' },
            { id: 'u-cara', label: 'Cara', pattern: 'user', icon: 'scanface', variant: 'tile' },
          ],
        },
        {
          id: 'roles',
          label: 'Roles — assumed, not owned',
          pattern: 'group',
          sub: 'no long-lived keys · assumed → temporary credentials',
          cols: 3,
          children: [
            { id: 'r-ec2', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'a service', variant: 'tile' },
            { id: 'r-lambda', label: 'Lambda', pattern: 'network', icon: 'lambda', sub: 'a service', variant: 'tile' },
            { id: 'r-xacct', label: 'Cross-account', pattern: 'user', icon: 'usercheck', sub: '/ federated', variant: 'tile' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
