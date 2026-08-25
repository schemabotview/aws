import type { Scene } from '../../render-engine'

// §7 event-driven-app — the finale: everything from the course composed into one event-driven
// application, with no server anywhere in it. The synchronous path is §4's canonical API: Client → API
// Gateway → Lambda → DynamoDB. That API Lambda also EMITS a domain event to EventBridge (§5), whose
// rule starts a Step Functions fulfilment workflow (§6). And a second, asynchronous entry point shows
// a different trigger (§3): an S3 upload invokes a processing Lambda. Every box scales to zero and
// bills per use — the whole point of going serverless. Drawn as the composed flow (two entry points,
// a branch at the API Lambda into data + events, orchestration downstream).
export const serverlessStack: Scene = {
  id: 'serverless-stack',
  padding: 0.14,
  nodes: [
    { id: 'client', label: 'Client', pattern: 'user', icon: 'globe', sub: 'HTTPS request' },
    { id: 'apigw', label: 'API Gateway', pattern: 'network', icon: 'apigateway', sub: 'front door' },
    { id: 'fn', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'API handler' },
    { id: 'ddb', label: 'DynamoDB', pattern: 'storage', icon: 'dynamodb', sub: 'application state' },
    { id: 'eb', label: 'EventBridge', pattern: 'external', icon: 'eventbridge', sub: 'emits domain events' },
    { id: 'sfn', label: 'Step Functions', pattern: 'service', icon: 'stepfunctions', sub: 'fulfilment workflow' },
    { id: 's3', label: 'S3 upload', pattern: 'storage', icon: 's3', sub: 'async trigger' },
    { id: 'ingest', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'process the file' },
  ],
  // Sync API path + an event fan to orchestration, plus a second async entry point — all serverless.
  edges: [
    { source: 'client', target: 'apigw' },
    { source: 'apigw', target: 'fn' },
    { source: 'fn', target: 'ddb' },
    { source: 'fn', target: 'eb' },
    { source: 'eb', target: 'sfn' },
    { source: 's3', target: 'ingest' },
  ],
}
