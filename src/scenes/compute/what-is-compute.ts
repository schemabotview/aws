import type { Scene } from '../../render-engine'

// §1 what-is-compute — the frame for Course 3. Compute is simply WHERE YOUR CODE RUNS: the CPU and
// memory that execute your application. The one idea to carry through the whole course: there is no
// single "compute" service — AWS gives you a SPECTRUM of options that trade control for convenience.
// Drawn as a two-node chain: your code flows into Compute, a box previewing the four options as tiles
// (EC2 · Containers · Fargate · Lambda). A 2×2 grid (rhymes with foundations §1) says "a set of
// options, not one button"; §2 puts them in spectrum order. Lambda is greyed into the preview but
// belongs to Course 7.
export const whatIsCompute: Scene = {
  id: 'what-is-compute',
  padding: 0.18,
  nodes: [
    { id: 'code', label: 'Your code', pattern: 'user', icon: 'code', sub: 'your application' },
    {
      id: 'compute',
      label: 'Compute',
      pattern: 'group',
      icon: 'cpu',
      sub: 'a spectrum of options, not one service',
      cols: 2,
      children: [
        { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', sub: 'a virtual server', variant: 'tile' },
        { id: 'containers', label: 'Containers', pattern: 'service', icon: 'ecs', sub: 'ECS / EKS', variant: 'tile' },
        { id: 'fargate', label: 'Fargate', pattern: 'network', icon: 'fargate', sub: 'serverless containers', variant: 'tile' },
        { id: 'lambda', label: 'Lambda', pattern: 'network', icon: 'lambda', sub: 'functions · Course 7', variant: 'tile' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'compute' }],
}
