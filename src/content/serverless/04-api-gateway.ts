import type { Section } from '../types'

export const apiGateway: Section = {
  id: 'api-gateway',
  title: 'API Gateway — the HTTP front door',
  scene: 'api-gateway',
  slide: `## API Gateway — the HTTP front door

Lambda has no URL of its own. To serve HTTP, put **Amazon API Gateway** in front — the canonical serverless API.

### The request path
- **Client → API Gateway → Lambda → DynamoDB** — front door, function, data
- API Gateway invokes Lambda **synchronously** (the caller waits for the response)

### What the gateway adds
- **Routing** requests to the right function · **auth** (Cognito / IAM / Lambda authorisers)
- **Throttling & quotas**, request **validation**, response **caching**, custom domains, WAF

### Function URLs — the simpler option
- A **built-in HTTPS endpoint** on one function — one toggle, IAM or open auth
- Great for webhooks, internal services, prototypes; **no** routing/throttling/caching

**Rule of thumb:** Function URL for the simplest case; API Gateway for production APIs that need routing, auth, and throttling.`,
  narration:
    "So far our function reacts to events, but the most common thing you'll want is to expose it to the web as an HTTP API — a URL that a browser or a mobile app or another service can call. And here's the catch: a Lambda function has no URL of its own; it's just code waiting for an event. So you put something in front of it that speaks HTTP, and the canonical choice on AWS is Amazon API Gateway. Picture the request path, because this little chain is the backbone of most serverless applications: a client makes an HTTPS request, it hits API Gateway, API Gateway invokes your Lambda function synchronously — meaning it waits for the function to return — your function runs its logic and reads or writes data in a store, and the response travels back out the same way. And notice the data store in that picture is DynamoDB, which is the natural partner here because, like Lambda, it's fully serverless and scales to zero, so the whole stack has no idle servers anywhere. Now, why put a whole service in front of your function instead of just exposing it directly? Because API Gateway does a lot of the tedious, essential work of running a real API for you. It handles routing — mapping different URL paths and methods to different functions. It handles authentication and authorization, integrating with Cognito for user identity, with IAM, or with custom Lambda authorizers. It does throttling and usage quotas to protect your backend from abuse, request validation so malformed calls are rejected before they ever reach your code, response caching, custom domain names, and integration with the web application firewall. It is, in effect, the professional front desk for your serverless API. There is also a lighter-weight option worth knowing: Lambda Function URLs. A Function URL is a built-in HTTPS endpoint that you switch on directly on a single function — one toggle, no extra service, with either IAM authentication or open access. It's perfect for a simple webhook, an internal service, or a quick prototype, but it gives you none of the gateway's routing, throttling, or caching. So the rule of thumb is straightforward: reach for a Function URL when you just need one function on the internet with minimal fuss, and reach for API Gateway when you're building a real production API that needs routing, authentication, and rate limiting. We've now got requests coming in and functions running. Next we look at how serverless components talk to each other behind the front door — messaging and decoupling.",
}
