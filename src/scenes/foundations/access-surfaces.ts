import type { Scene } from '../../render-engine'

// §7 connecting — four ways to touch AWS (Console/CLI/SDK/IaC: a ladder from clicking to code) all
// call the SAME underlying API, authorized by IAM, and thereby reach every AWS service. The four
// surfaces are YOUR client tools, so they sit OUTSIDE AWS and funnel in — crossing the boundary — to
// the AWS API, then IAM, then the services you operate; all AWS-side, inside the AWS Cloud box. The
// box's inner flow (API → IAM → Services) widens it so the API sits centre-top, clear of the header,
// and the convergence arrows land cleanly on it. Distinct lucide glyphs make the four read as four
// different tools; the API uses a neutral endpoint glyph (the container already carries the AWS logo).
export const accessSurfaces: Scene = {
  id: 'access-surfaces',
  title: 'How you connect',
  nodes: [
    { id: 'console', label: 'Console', pattern: 'network', icon: 'monitor', sub: 'web UI', variant: 'tile' },
    { id: 'cli', label: 'CLI', pattern: 'network', icon: 'terminal', sub: 'scriptable', variant: 'tile' },
    { id: 'sdk', label: 'SDK', pattern: 'network', icon: 'code', sub: 'from your code', variant: 'tile' },
    { id: 'iac', label: 'IaC', pattern: 'network', icon: 'filecode', sub: 'CFN · CDK · TF', variant: 'tile' },
    {
      id: 'aws',
      label: 'AWS Cloud',
      pattern: 'external',
      icon: 'awscloud',
      sub: 'one API, guarded by IAM',
      children: [
        { id: 'api', label: 'AWS API', pattern: 'service', icon: 'braces', sub: 'one surface under all', variant: 'tile' },
        { id: 'iam', label: 'IAM', pattern: 'user', icon: 'iam', sub: 'authorizes every call', variant: 'tile' },
        {
          id: 'services',
          label: 'Services',
          pattern: 'group',
          sub: 'what you operate',
          cols: 4,
          children: [
            { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' },
            { id: 's3', label: 'S3', pattern: 'storage', icon: 's3', variant: 'tile' },
            { id: 'lambda', label: 'Lambda', pattern: 'network', icon: 'lambda', variant: 'tile' },
            { id: 'dynamodb', label: 'DynamoDB', pattern: 'network', icon: 'dynamodb', variant: 'tile' },
          ],
        },
      ],
      edges: [
        { source: 'api', target: 'iam' },
        { source: 'iam', target: 'services' },
      ],
    },
  ],
  edges: [
    { source: 'console', target: 'api' },
    { source: 'cli', target: 'api' },
    { source: 'sdk', target: 'api' },
    { source: 'iac', target: 'api' },
  ],
}
