import type { Scene } from '../../render-engine'

// core-app — §7 (Phase 2 · Design). The transactional core DESIGN — the deep-dive that realizes the §2
// OLTP requirements on real AWS services, showing what the overview poster can't: the actual request
// path as a flow, and the Multi-AZ failover that satisfies "always-on". Client → Cognito (authN) → API
// Gateway (front door) → the banking API (ECS/Fargate + Lambda, private subnets) → the data tier:
// Aurora (Multi-AZ, ACID/strong-consistency — primary→standby), ElastiCache (low-latency reads),
// DynamoDB (high-rate key-value). Each store answers a specific OLTP demand from §2.
export const coreApp: Scene = {
  id: 'core-app',
  padding: 0.14,
  nodes: [
    { id: 'client', label: 'Customer', pattern: 'user', icon: 'monitor', sub: 'mobile & web app' },
    { id: 'cognito', label: 'Cognito', pattern: 'user', icon: 'cognito', sub: 'authenticate the customer' },
    { id: 'apigw', label: 'API Gateway', pattern: 'network', icon: 'apigateway', sub: 'the REST front door' },
    {
      id: 'app',
      label: 'Core banking API',
      pattern: 'service',
      icon: 'server',
      sub: 'private app subnets · across 2 AZs',
      cols: 2,
      children: [
        { id: 'ecs', label: 'ECS · Fargate', pattern: 'service', icon: 'fargate', sub: 'the always-on service', variant: 'tile' },
        { id: 'lambda', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'spiky event work', variant: 'tile' },
      ],
    },
    {
      id: 'aurora',
      label: 'Aurora · Multi-AZ',
      pattern: 'storage',
      icon: 'aurora',
      sub: 'ACID · strong consistency · the ledger',
      flow: 'LR',
      children: [
        { id: 'aurora-primary', label: 'Primary', pattern: 'storage', icon: 'aurora', sub: 'reads + writes', variant: 'tile' },
        { id: 'aurora-standby', label: 'Standby', pattern: 'storage', icon: 'aurora', sub: 'sync · auto-failover', variant: 'tile' },
      ],
      edges: [{ source: 'aurora-primary', target: 'aurora-standby' }],
    },
    { id: 'cache', label: 'ElastiCache', pattern: 'storage', icon: 'elasticache', sub: 'low-latency hot reads' },
    { id: 'dynamodb', label: 'DynamoDB', pattern: 'storage', icon: 'dynamodb', sub: 'high-rate key-value · sessions' },
  ],
  // The request path fans, at the app tier, to the three stores — each answering a different OLTP demand.
  edges: [
    { source: 'client', target: 'cognito' },
    { source: 'cognito', target: 'apigw' },
    { source: 'apigw', target: 'app' },
    { source: 'app', target: 'aurora' },
    { source: 'app', target: 'cache' },
    { source: 'app', target: 'dynamodb' },
  ],
}
