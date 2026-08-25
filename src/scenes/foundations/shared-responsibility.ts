import type { Scene } from '../../render-engine'

// §8 shared-responsibility — security is a PARTNERSHIP with a precise dividing line. Two halves: You
// secure IN the cloud (what you put on top), AWS secures OF the cloud (the physical layer it owns).
// No edges — the two boxes and the gap between them ARE the line. Purple You half vs orange AWS half;
// each lists the four things that side owns, in a 2×2 grid.
export const sharedResponsibility: Scene = {
  id: 'shared-responsibility',
  title: 'Shared responsibility',
  nodes: [
    {
      id: 'you',
      label: 'You',
      pattern: 'user',
      sub: 'secure IN the cloud',
      cols: 4,
      children: [
        { id: 'data', label: 'Your data', pattern: 'user', icon: 'database', sub: 'encryption', variant: 'tile' },
        { id: 'iam', label: 'IAM', pattern: 'user', icon: 'iam', sub: 'who can do what', variant: 'tile' },
        { id: 'netcfg', label: 'Network config', pattern: 'user', icon: 'network', sub: 'SGs · VPC', variant: 'tile' },
        { id: 'patch', label: 'Patching', pattern: 'user', icon: 'wrench', sub: 'what you run', variant: 'tile' },
      ],
    },
    {
      id: 'aws',
      label: 'AWS',
      pattern: 'service',
      icon: 'awscloud',
      sub: 'secures OF the cloud',
      cols: 4,
      children: [
        { id: 'dc', label: 'Data centers', pattern: 'service', icon: 'building', sub: 'physical', variant: 'tile' },
        { id: 'hw', label: 'Hardware', pattern: 'service', icon: 'cpu', sub: 'compute · storage', variant: 'tile' },
        { id: 'host', label: 'Host software', pattern: 'service', icon: 'layers', sub: 'hypervisor', variant: 'tile' },
        { id: 'net', label: 'Global network', pattern: 'service', icon: 'globe', sub: 'backbone', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
