import type { Section } from '../types'

export const regions: Section = {
  id: 'regions',
  title: 'Regions — the global footprint',
  scene: 'regions',
  slide: `## Regions — the global footprint

"The cloud" is real, physical **data centers**, organized so you can choose *where* your resources run and reach users *fast*.

### Regions
- A **Region** is a physical cluster of data centers in one geography — \`us-east-1\`, \`eu-west-1\`, \`ap-south-1\`
- Almost **everything you create lives in one region you pick**; a global **edge network** (CloudFront) shortens the last mile to users

### Why *where* matters
- **Latency** — pick a region near your users
- **Data residency** — laws (e.g. GDPR) may require data physically stay in a country/region
- **Cost & availability** — prices and *which services exist* differ by region

A region is your top-level home for resources. But a region isn't one building — it's several. Next: **AZs**.`,
  narration:
    "We keep saying the cloud as if it floats overhead, but it's worth grounding: the cloud is real, physical buildings full of humming servers, and AWS has organized those buildings in a specific way you need to understand, because it directly shapes how you design for speed and reliability. The top-level unit is the Region. A Region is a cluster of data centers sitting together in one geographic area, each with a name you'll come to recognize — us-east-1 in Northern Virginia, eu-west-1 in Ireland, ap-south-1 in Mumbai, and dozens more. The Region is the single most important location choice you make, because almost everything you create on AWS lives in one specific region that you pick. And to reach your users fast wherever they are, AWS also runs a large network of edge locations — points of presence in hundreds of cities — where the content delivery network, CloudFront, caches content close to people so the last mile is short. Choosing your region genuinely matters for three concrete reasons. Latency: put your region close to your users so responses are fast. Data residency: laws like GDPR may legally require your data to physically stay within a certain country, and choosing the region is how you comply. And cost and availability: prices vary between regions, and not every service exists in every region — new ones roll out to the big regions first. So the region is your top-level home for resources. But here's the subtlety that unlocks reliable design on AWS: a region is not a single building. It's deliberately made of several isolated pieces, called Availability Zones.",
}
