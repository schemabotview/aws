import type { Scene } from '../../render-engine'

// §7 containers — climb to the middle of the spectrum. A container packages your app + ALL its
// dependencies into one portable image that runs the same everywhere (no "works on my machine"). The
// path has three stages: build an IMAGE (Docker) → push it to ECR (AWS's private registry) →
// ORCHESTRATE it (ECS, AWS's simpler one · or EKS, managed Kubernetes) which runs, restarts & scales
// many containers. Then the orthogonal choice that matters most: WHERE they run — on EC2 instances
// you manage, or on Fargate (serverless containers, no servers to manage) which pushes containers
// rightward on the spectrum. Drawn as a vertical path; orchestrator + run-target are 2-tile boxes.
export const containers: Scene = {
  id: 'containers',
  padding: 0.16,
  nodes: [
    { id: 'image', label: 'Container image', pattern: 'service', icon: 'layers', sub: 'app + deps (Docker)' },
    { id: 'ecr', label: 'ECR', pattern: 'storage', icon: 'database', sub: 'private image registry' },
    {
      id: 'orch',
      label: 'Orchestrator',
      pattern: 'group',
      sub: 'runs, restarts & scales',
      cols: 2,
      children: [
        { id: 'ecs', label: 'ECS', pattern: 'service', icon: 'ecs', sub: 'simpler · AWS', variant: 'tile' },
        { id: 'eks', label: 'EKS', pattern: 'service', icon: 'network', sub: 'managed K8s', variant: 'tile' },
      ],
    },
    {
      id: 'runs',
      label: 'Where they run',
      pattern: 'group',
      sub: 'who manages the servers?',
      cols: 2,
      children: [
        { id: 'on-ec2', label: 'On EC2', pattern: 'service', icon: 'ec2', sub: 'you manage', variant: 'tile' },
        { id: 'fargate', label: 'Fargate', pattern: 'network', icon: 'fargate', sub: 'serverless', variant: 'tile' },
      ],
    },
  ],
  edges: [
    { source: 'image', target: 'ecr' },
    { source: 'ecr', target: 'orch' },
    { source: 'orch', target: 'runs' },
  ],
}
