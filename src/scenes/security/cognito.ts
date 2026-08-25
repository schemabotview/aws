import type { Scene } from '../../render-engine'

// §6 cognito — the one layer that faces your CUSTOMERS rather than your infrastructure. IAM (Course 2)
// is for your workforce and AWS resources; Cognito is for the end users who sign in to YOUR application,
// potentially millions of them. It has two halves. USER POOLS handle authentication — sign-up and
// sign-in, a managed user directory, MFA, and social/enterprise login — and on success issue the user a
// JWT token your API validates (the API Gateway authorizer from serverless §4). IDENTITY POOLS handle
// authorization to AWS — they exchange that token for TEMPORARY AWS credentials scoped by an IAM role,
// so the user's app can talk directly to AWS services like S3. Drawn as the sign-in flow: user → User
// Pool → (your API) and → Identity Pool → temp creds → AWS services.
export const cognito: Scene = {
  id: 'cognito',
  padding: 0.16,
  nodes: [
    { id: 'user', label: 'Customer', pattern: 'user', icon: 'usercheck', sub: "your app's end user" },
    { id: 'userpool', label: 'Cognito User Pool', pattern: 'service', icon: 'cognito', sub: 'authenticate — sign-in · MFA · social · issues a JWT' },
    { id: 'app', label: 'Your API', pattern: 'network', icon: 'apigateway', sub: 'validates the JWT (API Gateway authorizer)' },
    { id: 'idpool', label: 'Cognito Identity Pool', pattern: 'service', icon: 'key', sub: 'swap the JWT → temporary AWS credentials' },
    { id: 'awssvc', label: 'AWS services', pattern: 'storage', icon: 's3', sub: 'S3 etc. · scoped by an IAM role' },
  ],
  // Sign in at the User Pool → a JWT for your API; federate at the Identity Pool → temp creds for AWS.
  edges: [
    { source: 'user', target: 'userpool' },
    { source: 'userpool', target: 'app' },
    { source: 'userpool', target: 'idpool' },
    { source: 'idpool', target: 'awssvc' },
  ],
}
