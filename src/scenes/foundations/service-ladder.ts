import type { Scene } from '../../render-engine'

// §2 service-models — the PROGRESSIVE build of §1: same You + AWS Cloud box, but the services are
// now grouped into three bands (SaaS → PaaS → IaaS, most-managed on top), each holding example
// service TILES. Keeping `you` and `aws` identical to §1 is what makes the two scenes rhyme.
export const serviceLadder: Scene = {
  id: 'service-ladder',
  title: 'Service models',
  nodes: [
    { id: 'you', label: 'You', pattern: 'user', sub: 'rent, don’t buy' },
    {
      id: 'aws',
      label: 'AWS Cloud',
      pattern: 'external',
      icon: 'awscloud',
      sub: 'services, in three bands',
      children: [
        {
          id: 'saas',
          label: 'SaaS',
          pattern: 'user',
          sub: 'finished software',
          cols: 4,
          children: [
            { id: 'quicksight', label: 'QuickSight', pattern: 'user', icon: 'quicksight', variant: 'tile' },
            { id: 'connect', label: 'Connect', pattern: 'user', icon: 'connect', variant: 'tile' },
            { id: 'chime', label: 'Chime', pattern: 'user', icon: 'chime', variant: 'tile' },
            { id: 'workmail', label: 'WorkMail', pattern: 'user', icon: 'workmail', variant: 'tile' },
          ],
        },
        {
          id: 'paas',
          label: 'PaaS',
          pattern: 'network',
          sub: 'deploy code',
          cols: 4,
          children: [
            { id: 'beanstalk', label: 'Beanstalk', pattern: 'network', icon: 'beanstalk', variant: 'tile' },
            { id: 'lambda', label: 'Lambda', pattern: 'network', icon: 'lambda', variant: 'tile' },
            { id: 'fargate', label: 'Fargate', pattern: 'network', icon: 'fargate', variant: 'tile' },
            { id: 'rds', label: 'RDS', pattern: 'network', icon: 'rds', variant: 'tile' },
          ],
        },
        {
          id: 'iaas',
          label: 'IaaS',
          pattern: 'service',
          sub: 'rent servers',
          cols: 4,
          children: [
            { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' },
            { id: 'ebs', label: 'EBS', pattern: 'service', icon: 'ebs', variant: 'tile' },
            { id: 'vpc', label: 'VPC', pattern: 'service', icon: 'vpc', variant: 'tile' },
            { id: 's3', label: 'S3', pattern: 'service', icon: 's3', variant: 'tile' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'you', target: 'aws' }],
}
