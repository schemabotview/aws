import type { Section } from '../types'

export const perimeter: Section = {
  id: 'perimeter',
  title: 'The perimeter — Shield, WAF & Firewall Manager',
  scene: 'perimeter',
  slide: `## The perimeter — Shield, WAF & Firewall Manager

The outward-facing layers: stop bad traffic **at the edge**, before it reaches your app. Incoming traffic is users *and* attackers.

### Shield — DDoS protection
- Absorbs **volumetric floods** (network-layer attacks trying to overwhelm you)
- **Shield Standard** is free and automatic on CloudFront, ALB, Route 53; **Advanced** adds higher-layer defense & support

### WAF — Web Application Firewall
- Inspects each **HTTP request** and blocks malicious ones by **rule**: SQL injection, cross-site scripting, bad IPs
- **Rate-limiting** and **managed rule groups** (AWS/vendor) stop common attacks out of the box
- Attach it to **CloudFront, ALB, or API Gateway**

### Firewall Manager — org-wide policy
- Centrally **sets and enforces** WAF and Shield rules across **every account** in the organization
- So a new account or resource can't accidentally launch without the baseline protections

**The gauntlet:** Shield absorbs the flood → WAF filters the requests → only clean traffic reaches your app.`,
  narration:
    "The layers we've covered so far — encryption and secrets — protect what's on the inside. Now we turn outward, to the perimeter: the defenses that face the internet and stop bad traffic before it ever reaches your application. The thing to keep in mind is that any public endpoint receives a constant mix of legitimate users and attackers, and the perimeter's job is to let the first through while blocking the second. Think of it as a gauntlet that incoming traffic has to run. The first gate is AWS Shield, which defends against DDoS attacks — distributed denial-of-service — where an attacker floods you with a massive volume of traffic trying to overwhelm your systems and knock you offline. Shield absorbs those volumetric floods at the network layer. And the good news is Shield Standard is free and automatically protecting you on services like CloudFront, the Application Load Balancer, and Route 53 — you're already covered against the common attacks. For organizations at high risk there's Shield Advanced, which adds protection at higher layers, cost protection, and access to a response team. The second gate is the WAF, the Web Application Firewall. Where Shield deals with raw traffic volume, the WAF is smarter and looks at the content of each individual HTTP request, and blocks the malicious ones according to rules. It stops classic web attacks like SQL injection, where an attacker tries to smuggle database commands through a form field, and cross-site scripting; it can block known-bad IP addresses; and it can rate-limit a client that's hammering you. You don't have to write all those rules yourself — AWS and security vendors publish managed rule groups that cover the common attack patterns out of the box — and you attach the WAF to CloudFront, an ALB, or API Gateway. So the picture is: Shield absorbs the flood, then the WAF filters what's left request by request, and only clean traffic reaches your app. The third service ties it together at scale: Firewall Manager. In a company with many AWS accounts, you don't want to configure WAF and Shield by hand in each one and hope nobody forgets. Firewall Manager lets you set these protection policies centrally, once, and enforce them across every account in your organization automatically — so a newly created account or a freshly launched load balancer can't accidentally go live without the baseline protections. Together, Shield, WAF, and Firewall Manager are your front door. But no perimeter is perfect, which is why the outermost layer of the onion assumes something eventually gets through — and watches for it. That's threat detection, next.",
}
