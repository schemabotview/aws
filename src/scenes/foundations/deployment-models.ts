import type { Scene } from '../../render-engine'

// §3 deployment-models — the four models are PEERS (no top-level edges → the engine stacks them as a
// labelled list). Each model is now a BAND (container) that shows the same story: an actor (You) and
// the environment(s) it acts upon. Each band carries its own `edges`, so the engine flows You →
// target(s) as a small fan — Public/Private point at one environment, Hybrid/Multi-cloud fan to
// several. Only AWS has an official icon; on-prem / GCP / Azure fall back to their pattern glyphs.
export const deploymentModels: Scene = {
  id: 'deployment-models',
  title: 'Deployment models',
  cols: 2, // four peer bands → 2×2 grid (wide/short) so it fills the landscape pane, labels read big
  nodes: [
    {
      id: 'public',
      label: 'Public',
      pattern: 'external',
      sub: 'shared AWS cloud · multi-tenant',
      flow: 'LR',
      children: [
        { id: 'pub-you', label: 'You', pattern: 'user', variant: 'tile' },
        { id: 'pub-aws', label: 'AWS', pattern: 'service', icon: 'awscloud', sub: 'shared', variant: 'tile' },
      ],
      edges: [{ source: 'pub-you', target: 'pub-aws' }],
    },
    {
      id: 'private',
      label: 'Private',
      pattern: 'network',
      sub: 'single-tenant · in your DC',
      flow: 'LR',
      children: [
        { id: 'priv-you', label: 'You', pattern: 'user', variant: 'tile' },
        { id: 'priv-dc', label: 'Your DC', pattern: 'group', sub: 'AWS Outposts', variant: 'tile' },
      ],
      edges: [{ source: 'priv-you', target: 'priv-dc' }],
    },
    {
      id: 'hybrid',
      label: 'Hybrid',
      pattern: 'storage',
      sub: 'on-prem + AWS, together',
      flow: 'LR',
      children: [
        { id: 'hyb-you', label: 'You', pattern: 'user', variant: 'tile' },
        { id: 'hyb-onprem', label: 'On-prem', pattern: 'group', sub: 'your DC', variant: 'tile' },
        { id: 'hyb-aws', label: 'AWS', pattern: 'service', icon: 'awscloud', sub: 'the cloud side', variant: 'tile' },
      ],
      edges: [
        { source: 'hyb-you', target: 'hyb-onprem' },
        { source: 'hyb-you', target: 'hyb-aws' },
      ],
    },
    {
      id: 'multi',
      label: 'Multi-cloud',
      pattern: 'service',
      sub: 'AWS + others, together',
      flow: 'LR',
      children: [
        { id: 'multi-you', label: 'You', pattern: 'user', variant: 'tile' },
        { id: 'multi-aws', label: 'AWS', pattern: 'service', icon: 'awscloud', variant: 'tile' },
        { id: 'multi-gcp', label: 'GCP', pattern: 'external', variant: 'tile' },
        { id: 'multi-azure', label: 'Azure', pattern: 'network', variant: 'tile' },
      ],
      edges: [
        { source: 'multi-you', target: 'multi-aws' },
        { source: 'multi-you', target: 'multi-gcp' },
        { source: 'multi-you', target: 'multi-azure' },
      ],
    },
  ],
  edges: [],
}
