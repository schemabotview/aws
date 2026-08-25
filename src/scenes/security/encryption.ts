import type { Scene } from '../../render-engine'

// §2 encryption — the innermost layer: protect the data itself, in its two states. AT REST (data on
// disk): AWS uses ENVELOPE ENCRYPTION via KMS — a root KMS key (which never leaves KMS) encrypts a
// per-object DATA KEY, and that data key encrypts your actual data; S3, EBS and RDS do this
// transparently once you enable it. IN TRANSIT (data on the wire): TLS encrypts the connection so
// traffic can't be read or tampered with en route, and ACM provisions and auto-renews the certificates
// that make TLS work. Drawn as two bands side by side (scene cols:2): the KMS envelope chain, and the
// client → TLS → service chain — the two states, both scrambled.
export const encryption: Scene = {
  id: 'encryption',
  cols: 2,
  padding: 0.16,
  nodes: [
    {
      id: 'at-rest',
      label: 'At rest · KMS envelope encryption',
      pattern: 'service',
      sub: 'data on disk, scrambled',
      children: [
        { id: 'kmskey', label: 'KMS key', pattern: 'service', icon: 'kms', sub: 'root key · never leaves KMS' },
        { id: 'datakey', label: 'Data key', pattern: 'service', icon: 'key', sub: 'encrypts the data · itself wrapped by the KMS key' },
        { id: 'stored', label: 'Stored data', pattern: 'storage', icon: 's3', sub: 'S3 · EBS · RDS — encrypted at rest' },
      ],
      edges: [
        { source: 'kmskey', target: 'datakey' },
        { source: 'datakey', target: 'stored' },
      ],
    },
    {
      id: 'in-transit',
      label: 'In transit · TLS',
      pattern: 'network',
      sub: 'data on the wire, scrambled',
      children: [
        { id: 'client', label: 'Client', pattern: 'user', icon: 'globe', sub: 'sends a request' },
        { id: 'tls', label: 'TLS + ACM cert', pattern: 'network', icon: 'acm', sub: 'encrypts the connection · certs auto-renewed' },
        { id: 'service', label: 'Service', pattern: 'service', icon: 'network', sub: 'receives — unreadable en route' },
      ],
      edges: [
        { source: 'client', target: 'tls' },
        { source: 'tls', target: 'service' },
      ],
    },
  ],
  edges: [],
}
