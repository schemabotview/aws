import type { Scene } from '../../render-engine'

// §3 s3-classes — not all data is accessed equally, so S3 lets you pay far less for colder data,
// trading retrieval speed/cost for cheaper storage. A temperature ladder: Standard (hot, frequent,
// priciest to store) → Standard-IA (cooler, cheaper, retrieval fee) → Glacier (archive, minutes–hours
// to restore) → Deep Archive (coldest, cheapest, ~12 h restore). Unlike §2's spectrum ladder, this
// one has DIRECTION — LIFECYCLE rules age objects DOWNWARD over time (Standard→IA after 30 days, →
// Glacier after 90…), so the flow arrows are meaningful. Warm→cool colour gradient top→bottom.
// Intelligent-Tiering (auto-tiering, no retrieval fees) lives in the slide.
export const s3Classes: Scene = {
  id: 's3-classes',
  padding: 0.16,
  nodes: [
    {
      id: 'classes',
      label: 'S3 storage classes',
      pattern: 'group',
      icon: 'gauge',
      sub: 'lifecycle ages data downward',
      children: [
        { id: 'standard', label: 'S3 Standard', pattern: 'external', icon: 's3', sub: 'hot · frequent · priciest to store' },
        { id: 'ia', label: 'Standard-IA', pattern: 'service', icon: 's3', sub: 'cooler · cheaper · retrieval fee' },
        { id: 'glacier', label: 'Glacier', pattern: 'network', icon: 'glacier', sub: 'archive · minutes–hours to restore' },
        { id: 'deep', label: 'Deep Archive', pattern: 'network', icon: 'glacier', sub: 'coldest · cheapest · ~12 h restore' },
      ],
      edges: [
        { source: 'standard', target: 'ia' },
        { source: 'ia', target: 'glacier' },
        { source: 'glacier', target: 'deep' },
      ],
    },
  ],
  edges: [],
}
