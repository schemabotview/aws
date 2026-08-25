import type { Scene } from '../../render-engine'

// §3 secrets — the rule is simple and absolute: never hard-code credentials (database passwords, API
// keys, tokens) in your code or config, because they leak — into git, logs, images. Instead the app
// FETCHES them at runtime from a managed store, authorised by its IAM role, and the secret is KMS-
// encrypted at rest. Two stores: Secrets Manager (purpose-built — automatic rotation, cross-service,
// a bit pricier) and SSM Parameter Store (config + secrets, simple and cheap, no built-in rotation).
// Drawn as the runtime-fetch pattern: the app pulls from one of the two stores, then connects
// downstream with what it fetched — nothing hard-coded.
export const secrets: Scene = {
  id: 'secrets',
  padding: 0.16,
  nodes: [
    { id: 'app', label: 'App / Lambda', pattern: 'user', icon: 'code', sub: 'fetch at runtime — nothing hard-coded' },
    { id: 'secretsmanager', label: 'Secrets Manager', pattern: 'service', icon: 'secretsmanager', sub: 'passwords & API keys · auto-rotation · KMS' },
    { id: 'paramstore', label: 'Parameter Store', pattern: 'service', icon: 'tag', sub: 'config & secrets · simple · cheap' },
    { id: 'downstream', label: 'RDS / APIs', pattern: 'storage', icon: 'rds', sub: 'connect with the fetched secret' },
  ],
  // Pull the secret from a managed store (IAM-gated), then reach downstream with it — nothing baked in.
  edges: [
    { source: 'app', target: 'secretsmanager' },
    { source: 'app', target: 'paramstore' },
    { source: 'secretsmanager', target: 'downstream' },
    { source: 'paramstore', target: 'downstream' },
  ],
}
