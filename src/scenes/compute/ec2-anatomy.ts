import type { Scene } from '../../render-engine'

// §3 ec2-anatomy — EC2 (Elastic Compute Cloud) is the workhorse: it rents you a virtual server, an
// INSTANCE, by the second. Dissect it into the five parts that come up constantly: an AMI (the boot
// template — OS + software), an instance type (its size & shape — vCPU + RAM), an EBS root volume
// (its disk), a key pair (the SSH login), and a security group (its instance firewall). Mental model:
// an instance = an AMI booted onto a chosen type, with a disk, a login key, and a firewall. Drawn as
// the EC2 box containing the five parts as a vertical card stack (edgeless → the engine stacks them);
// each part is colour-coded by role — disk = storage-green, key = identity-purple, firewall =
// network-blue — so the anatomy reads at a glance. Depth pointers (EBS→Course 4, SG→Course 5) live in
// the subs/slide.
export const ec2Anatomy: Scene = {
  id: 'ec2-anatomy',
  padding: 0.16,
  nodes: [
    {
      id: 'instance',
      label: 'EC2 instance',
      pattern: 'service',
      icon: 'ec2',
      sub: 'a virtual server, rented by the second',
      cols: 2,
      children: [
        { id: 'ami', label: 'AMI', pattern: 'service', icon: 'layers', sub: 'boot template — OS + software' },
        { id: 'type', label: 'Instance type', pattern: 'service', icon: 'cpu', sub: 'size & shape — vCPU + RAM (t/m/c/r)' },
        { id: 'ebs', label: 'EBS root volume', pattern: 'storage', icon: 'ebs', sub: 'the disk — persists (Course 4)' },
        { id: 'key', label: 'Key pair', pattern: 'user', icon: 'key', sub: 'SSH login — you hold the private half' },
        { id: 'sg', label: 'Security group', pattern: 'network', icon: 'shieldcheck', sub: 'the instance firewall (Course 5)' },
      ],
    },
  ],
  edges: [],
}
