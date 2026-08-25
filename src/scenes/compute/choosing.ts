import type { Scene } from '../../render-engine'

// §8 choosing — the finale. Pull back to the whole map: choosing compute = picking your point on the
// spectrum for THIS workload. Recaps §2's ladder (EC2 at the base → climb for convenience) but now
// each rung carries its decision trigger: EC2 for a specific OS / special hardware / legacy lift-and-
// shift; containers (ECS/EKS) for portability & density; Fargate for containers with no servers to
// manage; Lambda for short, spiky, event-driven, scale-to-zero work (Course 7). Colour groups the
// axis: teal = control (EC2), blue = containers, amber = serverless (Fargate + Lambda). Rarely one
// right answer — a right answer per workload, and mature systems mix rungs.
export const choosing: Scene = {
  id: 'choosing-compute',
  padding: 0.16,
  nodes: [
    {
      id: 'ladder',
      label: 'Choosing your compute',
      pattern: 'group',
      icon: 'gauge',
      sub: 'pick your rung for this workload',
      children: [
        { id: 'lambda', label: 'Lambda', pattern: 'external', icon: 'lambda', sub: 'short · spiky · scale-to-zero (C7)' },
        { id: 'fargate', label: 'Fargate', pattern: 'external', icon: 'fargate', sub: 'containers, no servers to run' },
        { id: 'containers', label: 'Containers', pattern: 'network', icon: 'ecs', sub: 'portability & density · Docker/K8s' },
        { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'specific OS/hardware · legacy lift-and-shift' },
      ],
    },
  ],
  edges: [],
}
