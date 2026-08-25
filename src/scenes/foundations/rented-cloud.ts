import type { Scene } from '../../render-engine'

// §1 what-is-cloud — the AWS Cloud container holds a 2×2 grid of service categories; each category
// holds a 2×2 grid of real service TILES (icon over label, official AWS icons). Shares the You + AWS
// Cloud motif with §2, which keeps the same box and re-organises the services into IaaS/PaaS/SaaS.
const tile = (id: string, label: string, icon: string, pattern: 'service' | 'storage' | 'network') =>
  ({ id, label, icon, pattern, variant: 'tile' as const })

export const rentedCloud: Scene = {
  id: 'rented-cloud',
  title: 'What the cloud is',
  nodes: [
    { id: 'you', label: 'You', pattern: 'user', sub: 'rent, don’t buy' },
    {
      id: 'aws',
      label: 'AWS Cloud',
      pattern: 'external',
      icon: 'awscloud',
      sub: '~200 managed services',
      cols: 2, // 2×2 grid of categories
      children: [
        {
          id: 'compute',
          label: 'Compute',
          pattern: 'service',
          cols: 2,
          children: [
            tile('ec2', 'EC2', 'ec2', 'service'),
            tile('lambda', 'Lambda', 'lambda', 'service'),
            tile('ecs', 'ECS', 'ecs', 'service'),
            tile('fargate', 'Fargate', 'fargate', 'service'),
          ],
        },
        {
          id: 'storage',
          label: 'Storage',
          pattern: 'storage',
          cols: 2,
          children: [
            tile('s3', 'S3', 's3', 'storage'),
            tile('ebs', 'EBS', 'ebs', 'storage'),
            tile('efs', 'EFS', 'efs', 'storage'),
            tile('glacier', 'Glacier', 'glacier', 'storage'),
          ],
        },
        {
          id: 'database',
          label: 'Databases',
          pattern: 'storage',
          cols: 2,
          children: [
            tile('rds', 'RDS', 'rds', 'storage'),
            tile('dynamodb', 'DynamoDB', 'dynamodb', 'storage'),
            tile('aurora', 'Aurora', 'aurora', 'storage'),
            tile('elasticache', 'ElastiCache', 'elasticache', 'storage'),
          ],
        },
        {
          id: 'network',
          label: 'Networking',
          pattern: 'network',
          cols: 2,
          children: [
            tile('vpc', 'VPC', 'vpc', 'network'),
            tile('cloudfront', 'CloudFront', 'cloudfront', 'network'),
            tile('route53', 'Route 53', 'route53', 'network'),
            tile('apigw', 'API Gateway', 'apigateway', 'network'),
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'you', target: 'aws' }],
}
