import type { Section } from '../types'

export const permissionSets: Section = {
  id: 'permission-sets',
  title: 'Permission sets & federation',
  scene: 'permission-sets',
  slide: `## Permission sets & federation

Two pieces make Identity Center work at scale: **where identities come from** and **what access they get**.

### Federation — where identities come from
- Don't re-create people; **trust your existing identity provider** (Okta, Entra/AD, Google) via **SAML/OIDC**
- People keep **one corporate login**; joiners/leavers are managed in **one** system of record

### Permission sets — what access they get
- A **reusable template** of permissions (e.g. \`ReadOnly\`, \`Developer\`, \`Admin\`)
- Assign it to a **group** in a **set of accounts** → Identity Center provisions the matching **role** in each
- Change the template once → it updates **everywhere** it's assigned

### It's still the same model
- Federation = authentication (**who**) · permission sets → roles = authorization (**what**) — the Course-2 model, at org scale`,
  narration:
    "Let's name the two pieces that make Identity Center work, because they map cleanly onto the two questions IAM always asks — who are you, and what may you do. The first piece is federation, which handles the who. Rather than re-creating every employee as a fresh identity inside AWS, federation lets AWS trust an identity provider you already run — your corporate directory, Microsoft Entra, Okta, Google — using standard protocols like SAML or OIDC. The practical payoff is enormous: your people keep their single corporate login, the one they already use for email and everything else, and there is exactly one system of record for identity. When someone is hired, they are added there and access flows automatically; when they leave, they are removed there and access is revoked everywhere at once. You are never managing a second, drifting copy of your employee list inside AWS. The second piece is the permission set, which handles the what. A permission set is a reusable template of permissions with a friendly name — think ReadOnly, or Developer, or Admin. You define it once, describing what that level of access can do. Then you assign it: you take a group of people and a set of accounts, and you say this group gets this permission set in these accounts. Behind the scenes, Identity Center provisions a matching IAM role in each of those accounts automatically, and when the person signs in and picks an account, they assume that role. The beauty is the leverage — when you need to adjust what Developer means, you edit the one permission set, and the change propagates to every account and every person it is assigned to, instead of you editing dozens of individual roles by hand. Step back and notice that nothing here replaced the model from earlier in the course; it delivered it at scale. Federation answers authentication — who you are — by trusting your existing provider. Permission sets, realized as roles, answer authorization — what you may do. It is the same principal-policy-resource machinery from the start of this course, just wrapped so it works for a whole workforce across a whole fleet of accounts. Human access is now solved. The final piece of the identity story is governing the accounts themselves — and that is AWS Organizations.",
}
