import type { Scene } from '../../render-engine'

// nova-architecture — the FULL NovaBank reference architecture (scene-only; no paired slide). Every
// service the capstone uses, dropped into its layer AND wired with flow edges (the sketch: Customers →
// Edge, which fans into the two data worlds — the App/OLTP core in the VPC and the OLAP analytics
// pipeline, side by side — both feeding the Events/integration plane below, with Security & operations
// as the full-width base under everything). Bands are containers that grid their services as tiles;
// the scene-level edges make the longest-path engine lay the bands out in that 2-D shape.
export const novaArchitecture: Scene = {
  id: 'nova-architecture',
  padding: 0.06,
  nodes: [
    // Client
    {
      id: 'customers',
      label: 'Customers',
      pattern: 'user',
      icon: 'monitor',
      sub: 'mobile & web banking app',
    },

    // Edge & global (AWS-managed, in front of the VPC)
    {
      id: 'edge',
      label: 'Edge & global · AWS-managed',
      pattern: 'network',
      icon: 'globe',
      cols: 6,
      children: [
        { id: 'route53', label: 'Route 53', pattern: 'network', icon: 'route53', sub: 'DNS', variant: 'tile' },
        { id: 'cloudfront', label: 'CloudFront', pattern: 'network', icon: 'cloudfront', sub: 'CDN edge', variant: 'tile' },
        { id: 'waf', label: 'WAF', pattern: 'external', icon: 'waf', sub: 'web rules', variant: 'tile' },
        { id: 'shield', label: 'Shield', pattern: 'external', icon: 'shield', sub: 'DDoS', variant: 'tile' },
        { id: 'cognito', label: 'Cognito', pattern: 'user', icon: 'cognito', sub: 'customer sign-in', variant: 'tile' },
        { id: 'apigw', label: 'API Gateway', pattern: 'network', icon: 'apigateway', sub: 'REST front door', variant: 'tile' },
      ],
    },

    // World 1 — the transactional core, inside the §2 landing-zone VPC (OLTP). Two mirrored AZ columns
    // make the multi-AZ HA concrete (Aurora primary → standby, NAT & app fleet in each zone).
    {
      id: 'workload',
      label: 'App core · OLTP',
      pattern: 'network',
      icon: 'globe',
      sub: 'Region eu-west-1 · Prod account · behind the IGW',
      children: [
        {
          id: 'vpc',
          label: 'VPC · 10.0.0.0/16',
          pattern: 'network',
          icon: 'vpc',
          sub: 'S3 + DynamoDB gateway endpoints',
          cols: 2,
          children: [
            {
              id: 'az-a',
              label: 'AZ · eu-west-1a',
              pattern: 'group',
              icon: 'layers',
              children: [
                {
                  id: 'public-a', label: 'Public', pattern: 'network', icon: 'globe', sub: '10.0.0.0/24', cols: 2,
                  children: [
                    { id: 'alb-a', label: 'ALB', pattern: 'network', icon: 'elb', sub: 'load balancer', variant: 'tile' },
                    { id: 'nat-a', label: 'NAT', pattern: 'network', icon: 'router', sub: 'egress', variant: 'tile' },
                  ],
                },
                {
                  id: 'app-a', label: 'Private · app', pattern: 'service', icon: 'server', sub: '10.0.16.0/20', cols: 2,
                  children: [
                    { id: 'ecs-a', label: 'ECS · Fargate', pattern: 'service', icon: 'fargate', sub: 'banking API', variant: 'tile' },
                    { id: 'lambda-a', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'handlers', variant: 'tile' },
                  ],
                },
                {
                  id: 'data-a', label: 'Private · data', pattern: 'storage', icon: 'database', sub: '10.0.64.0/24', cols: 2,
                  children: [
                    { id: 'aurora-a', label: 'Aurora', pattern: 'storage', icon: 'aurora', sub: 'primary', variant: 'tile' },
                    { id: 'cache-a', label: 'ElastiCache', pattern: 'storage', icon: 'elasticache', sub: 'primary', variant: 'tile' },
                  ],
                },
              ],
            },
            {
              id: 'az-b',
              label: 'AZ · eu-west-1b',
              pattern: 'group',
              icon: 'layers',
              children: [
                {
                  id: 'public-b', label: 'Public', pattern: 'network', icon: 'globe', sub: '10.0.1.0/24', cols: 2,
                  children: [
                    { id: 'alb-b', label: 'ALB', pattern: 'network', icon: 'elb', sub: 'load balancer', variant: 'tile' },
                    { id: 'nat-b', label: 'NAT', pattern: 'network', icon: 'router', sub: 'egress', variant: 'tile' },
                  ],
                },
                {
                  id: 'app-b', label: 'Private · app', pattern: 'service', icon: 'server', sub: '10.0.32.0/20', cols: 2,
                  children: [
                    { id: 'ecs-b', label: 'ECS · Fargate', pattern: 'service', icon: 'fargate', sub: 'banking API', variant: 'tile' },
                    { id: 'lambda-b', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'handlers', variant: 'tile' },
                  ],
                },
                {
                  id: 'data-b', label: 'Private · data', pattern: 'storage', icon: 'database', sub: '10.0.65.0/24', cols: 2,
                  children: [
                    { id: 'aurora-b', label: 'Aurora', pattern: 'storage', icon: 'aurora', sub: 'standby', variant: 'tile' },
                    { id: 'cache-b', label: 'ElastiCache', pattern: 'storage', icon: 'elasticache', sub: 'replica', variant: 'tile' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // World 2 — fraud & analytics (OLAP)
    {
      id: 'analytics',
      label: 'Fraud & analytics · OLAP',
      pattern: 'storage',
      icon: 's3',
      sub: 'the lake & warehouse',
      children: [
        { id: 's3lake', label: 'S3 data lake', pattern: 'storage', icon: 's3', sub: 'raw · curated', variant: 'tile' },
        { id: 'glue', label: 'Glue', pattern: 'service', icon: 'glue', sub: 'catalog · ETL', variant: 'tile' },
        { id: 'athena', label: 'Athena', pattern: 'service', icon: 'athena', sub: 'SQL on S3', variant: 'tile' },
        { id: 'redshift', label: 'Redshift', pattern: 'storage', icon: 'redshift', sub: 'warehouse', variant: 'tile' },
        { id: 'quicksight', label: 'QuickSight', pattern: 'service', icon: 'quicksight', sub: 'dashboards', variant: 'tile' },
      ],
    },

    // Integration plane — collects both worlds
    {
      id: 'events',
      label: 'Events & integration · payments',
      pattern: 'service',
      icon: 'eventbridge',
      cols: 5,
      children: [
        { id: 'eventbridge', label: 'EventBridge', pattern: 'service', icon: 'eventbridge', sub: 'bus routing', variant: 'tile' },
        { id: 'sqs', label: 'SQS', pattern: 'service', icon: 'sqs', sub: 'queues', variant: 'tile' },
        { id: 'sns', label: 'SNS', pattern: 'service', icon: 'sns', sub: 'fan-out', variant: 'tile' },
        { id: 'sfn', label: 'Step Functions', pattern: 'service', icon: 'stepfunctions', sub: 'transfer workflow', variant: 'tile' },
        { id: 'kinesis', label: 'Kinesis', pattern: 'service', icon: 'kinesis', sub: 'txn stream', variant: 'tile' },
      ],
    },

    // Cross-cutting base
    {
      id: 'security',
      label: 'Security & operations · cross-cutting',
      pattern: 'external',
      icon: 'shieldcheck',
      cols: 5,
      children: [
        { id: 'kms', label: 'KMS', pattern: 'external', icon: 'kms', sub: 'encryption', variant: 'tile' },
        { id: 'secrets', label: 'Secrets Mgr', pattern: 'external', icon: 'secretsmanager', sub: 'credentials', variant: 'tile' },
        { id: 'guardduty', label: 'GuardDuty', pattern: 'external', icon: 'guardduty', sub: 'threats', variant: 'tile' },
        { id: 'macie', label: 'Macie', pattern: 'external', icon: 'macie', sub: 'PII', variant: 'tile' },
        { id: 'iam', label: 'IAM', pattern: 'user', icon: 'iam', sub: 'least privilege', variant: 'tile' },
        { id: 'cloudwatch', label: 'CloudWatch', pattern: 'service', icon: 'cloudwatch', sub: 'metrics · logs', variant: 'tile' },
        { id: 'cloudtrail', label: 'CloudTrail', pattern: 'service', icon: 'cloudtrail', sub: 'audit', variant: 'tile' },
        { id: 'config', label: 'Config', pattern: 'service', icon: 'config', sub: 'compliance', variant: 'tile' },
        { id: 'cfn', label: 'CloudFormation', pattern: 'service', icon: 'cloudformation', sub: 'IaC', variant: 'tile' },
        { id: 'pipeline', label: 'CodePipeline', pattern: 'service', icon: 'codepipeline', sub: 'CI/CD', variant: 'tile' },
      ],
    },
  ],
  // Customers → Edge, which fans into the two worlds (App/OLTP + Analytics/OLAP) side by side; both
  // feed the Events plane; Events lands on the Security & operations base.
  edges: [
    { source: 'customers', target: 'edge' },
    { source: 'edge', target: 'workload' },
    { source: 'edge', target: 'analytics' },
    { source: 'workload', target: 'events' },
    { source: 'analytics', target: 'events' },
    { source: 'events', target: 'security' },
  ],
}
