import type { Scene } from '../../render-engine'

// §4 api-gateway — the HTTP front door. A Lambda needs something in front of it to speak HTTP to the
// outside world, and the canonical pairing is Amazon API Gateway: it takes the incoming request,
// handles routing, authentication, throttling, validation and caching, and invokes your function
// synchronously (§3). The function runs your logic and reads/writes a data store — DynamoDB is the
// natural serverless partner (scales to zero like Lambda). This four-node request path — Client → API
// Gateway → Lambda → DynamoDB — is THE canonical serverless API. (Function URLs are the simpler
// built-in alternative when you don't need the gateway's features — a slide aside.) Drawn as a clean
// vertical chain, portrait-friendly.
export const apiGateway: Scene = {
  id: 'api-gateway',
  padding: 0.16,
  nodes: [
    { id: 'client', label: 'Client', pattern: 'user', icon: 'globe', sub: 'HTTPS request' },
    { id: 'apigw', label: 'API Gateway', pattern: 'network', icon: 'apigateway', sub: 'routing · auth · throttling · caching' },
    { id: 'lambda', label: 'Lambda', pattern: 'service', icon: 'lambda', sub: 'your handler runs (synchronous)' },
    { id: 'ddb', label: 'DynamoDB', pattern: 'storage', icon: 'dynamodb', sub: 'serverless data store' },
  ],
  // The canonical serverless API request path — front door → function → data.
  edges: [
    { source: 'client', target: 'apigw' },
    { source: 'apigw', target: 'lambda' },
    { source: 'lambda', target: 'ddb' },
  ],
}
