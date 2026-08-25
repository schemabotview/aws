import type { Section } from '../types'

export const cognito: Section = {
  id: 'cognito',
  title: 'Cognito — customer identity',
  scene: 'cognito',
  slide: `## Cognito — customer identity

IAM (Course 2) is for **your workforce** and AWS resources. **Cognito** is for **your app's end users** — the customers who sign in, at any scale.

### User Pools — authentication (who you are)
- A managed **user directory**: sign-up, sign-in, password reset, **MFA**, **social & enterprise login** (Google, SAML, OIDC)
- On success, issues a **JWT token**; your API validates it (the **API Gateway authorizer** from serverless §4)

### Identity Pools — authorization to AWS (temporary credentials)
- Exchange that token for **temporary AWS credentials**, scoped by an **IAM role**
- Lets the user's app call AWS services directly — e.g. upload to their own **S3** prefix

### Why not IAM?
- IAM users are for a **known, small** set of staff/services; not for **millions** of customers
- Cognito is built for **application end users** — sign-in UX, federation, and scale

**In short:** User Pools authenticate your customers and hand out tokens; Identity Pools turn a token into scoped AWS access.`,
  narration:
    "The final piece of the security course faces in a different direction from everything else. So far we've protected your infrastructure and your data. But your application also has users — your customers — who need to sign in, and managing their identities is its own problem, solved by Amazon Cognito. First, let's be crystal clear about why this isn't just IAM. IAM, the whole of Course 2, is for your workforce and your AWS resources — a known, relatively small set of employees, services, and roles inside your account. Cognito is for the end users of the application you build — the potentially millions of customers who sign up and log in to your website or mobile app. You would never create an IAM user for each of your customers; that's simply not what IAM is for. Cognito has two halves, and keeping them straight is the key to understanding it. The first half is User Pools, and User Pools are about authentication — proving who a user is. A User Pool is a fully managed user directory: it handles sign-up and sign-in, password resets, multi-factor authentication, and federated login, so your users can sign in with Google, Facebook, Apple, or a corporate SAML provider instead of yet another password. When a user successfully signs in, the User Pool issues them a JWT — a JSON Web Token — which is a signed proof of identity. Your application's API then validates that token on each request; and if you remember the serverless course, this is exactly what an API Gateway authorizer does — it checks the Cognito token before letting the request through. So User Pools authenticate your customers and hand them a token. The second half is Identity Pools, and these are about authorization to AWS itself — specifically, getting temporary AWS credentials. An Identity Pool takes a token — from your Cognito User Pool, or even directly from Google or Facebook — and exchanges it for short-lived AWS credentials that are scoped by an IAM role. That lets your user's app talk directly to AWS services on their behalf — for example, letting each user upload files straight to their own folder in an S3 bucket, with permissions that ensure they can only touch their own data. So the clean mental split is this: User Pools are authentication — they verify your customers and give out identity tokens; Identity Pools are authorization to AWS — they turn a token into temporary, scoped AWS credentials. Together they let you add secure, scalable sign-in to your application without building any of it yourself. That completes the layers of protection. In the final section, we'll step back and put the whole security picture together and talk about how to choose among all these tools.",
}
