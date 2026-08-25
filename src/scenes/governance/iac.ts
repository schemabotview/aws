import type { Scene } from '../../render-engine'

// §4 infrastructure-as-code — the first AUTOMATE stage. Clicking resources together in the console is
// manual, error-prone, and impossible to reproduce; IaC replaces it by declaring your infrastructure
// as a TEMPLATE — a text file you keep in git, review, and version. CloudFormation reads the template
// and provisions everything as a STACK, creating and updating resources to match; it's idempotent, so
// deploying the same template always yields the same infrastructure, in any account or region. The CDK
// lets you write that template in a real programming language instead of YAML. Drawn as the pipeline:
// template/CDK → CloudFormation → a stack of identically-provisioned resources.
export const iac: Scene = {
  id: 'iac',
  padding: 0.15,
  nodes: [
    { id: 'template', label: 'Template / CDK', pattern: 'user', icon: 'filecode', sub: 'declare desired infra · YAML or code · lives in git' },
    { id: 'cfn', label: 'CloudFormation', pattern: 'service', icon: 'cloudformation', sub: 'provisions the stack · idempotent · repeatable' },
    {
      id: 'stack',
      label: 'Stack',
      pattern: 'network',
      sub: 'every resource, provisioned identically each deploy',
      cols: 2,
      children: [
        { id: 'vpc', label: 'VPC', pattern: 'network', icon: 'vpc', variant: 'tile' },
        { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' },
        { id: 'rds', label: 'RDS', pattern: 'service', icon: 'rds', variant: 'tile' },
        { id: 's3', label: 'S3', pattern: 'storage', icon: 's3', variant: 'tile' },
      ],
    },
  ],
  // Declare it once, deploy it anywhere: template → CloudFormation → the same stack every time.
  edges: [
    { source: 'template', target: 'cfn' },
    { source: 'cfn', target: 'stack' },
  ],
}
