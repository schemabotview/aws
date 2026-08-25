import type { Section } from '../types'

export const requestPath: Section = {
  id: 'request-path',
  title: 'The request path — end to end',
  scene: 'vpc-request-path',
  slide: `## The request path — end to end

Everything assembles into one picture: the journey of a **single user request** through the VPC.

### The hops
- **User** on the internet makes a request to your app
- In through the **Internet Gateway** — the VPC's door
- Lands on the **Load balancer** in a **public** subnet — the only tier with a foot in public; spreads traffic to healthy app servers
- Forwarded to an **App server** (EC2) in a **private** subnet — shielded, does the work
- Which queries the **Database** (RDS) in a **private** subnet — deeper still, never exposed. The response returns the same way

### Read the whole course in it
- VPC = boundary · public/private subnets = exposure per tier · IGW = entry · route tables carry it · SGs/NACLs gate every hop`,
  narration:
    "Everything we have built now assembles into a single picture, the one you will draw on a whiteboard for the rest of your career: the journey of one user request through a VPC. Follow it. A user out on the internet makes a request to your application — they hit your domain name, which resolves to the address of your load balancer, and that name resolution is the edge, the subject of the very next section. The request arrives at your VPC through the Internet Gateway, the door we attached back in routing. Inside, it lands on the Application Load Balancer, which sits in a public subnet — that is precisely why it is public, because the load balancer has to be reachable from the internet — and the balancer spreads the request across your fleet of healthy app servers. It forwards this one to an app server, an EC2 instance living in a private subnet, shielded from any direct internet access, and the app does its work. To fulfil the request the app needs data, so it queries the database — an RDS instance, also in a private subnet, sitting even deeper and never exposed to the outside world. Then the response travels back out the same path, and the user gets their answer. Now step back and notice that every single concept from this course appears in this one diagram. The VPC is the boundary everything lives in. Public and private subnets place each tier at exactly the right level of exposure — the load balancer public because it must be, the application and the database private because they must not be. The Internet Gateway is the entrance. Route tables are what actually carried the traffic between these tiers. And at every hop, security groups on the instances and network ACLs on the subnets decided what was allowed to pass. This — a public-facing load balancer in front of application servers and a database tucked two layers deep in private subnets — is the standard, secure, three-tier web architecture on AWS, and you can now read it and build it. We have built and secured a network inside a Region. The final piece is getting users to it quickly from anywhere on Earth — the edge: DNS and content delivery.",
}
