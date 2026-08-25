import type { Scene } from '../../render-engine'

// §2 data-lake — the STORE stage, and the foundation of the whole analytics world. A data lake is a
// single place to land ANY data in ANY format — structured tables, semi-structured JSON/logs, raw
// unstructured images/video — cheaply and without deciding its schema up front. On AWS the lake IS
// Amazon S3: unlimited, durable, and pennies per GB. The defining idea is SCHEMA-ON-READ: you dump raw
// data in now and impose structure only when you query it later (the opposite of a warehouse's
// schema-on-write). Because everything lands in one open store, MANY analytics engines can read the
// same data in place. Drawn as the lake as a hub: any-format inputs fan IN to the S3 lake, many engines
// fan OUT — with Lake Formation governing access across it.
export const dataLake: Scene = {
  id: 'data-lake',
  padding: 0.16,
  nodes: [
    {
      id: 'inputs',
      label: 'Any data, any format',
      pattern: 'external',
      sub: 'no schema decided up front',
      cols: 3,
      children: [
        { id: 'structured', label: 'Structured', pattern: 'service', icon: 'database', sub: 'tables · CSV', variant: 'tile' },
        { id: 'semi', label: 'Semi-structured', pattern: 'external', icon: 'braces', sub: 'JSON · logs', variant: 'tile' },
        { id: 'unstructured', label: 'Unstructured', pattern: 'storage', icon: 'layers', sub: 'images · video', variant: 'tile' },
      ],
    },
    { id: 'lake', label: 'S3 data lake', pattern: 'storage', icon: 's3', sub: 'schema-on-read · unlimited · durable · pennies/GB' },
    {
      id: 'engines',
      label: 'Many engines read it in place',
      pattern: 'service',
      sub: 'governed by Lake Formation',
      cols: 3,
      children: [
        { id: 'athena', label: 'Athena', pattern: 'service', icon: 'athena', sub: 'SQL query', variant: 'tile' },
        { id: 'redshift', label: 'Redshift', pattern: 'service', icon: 'redshift', sub: 'warehouse', variant: 'tile' },
        { id: 'emr', label: 'EMR', pattern: 'service', icon: 'emr', sub: 'big-data / Spark', variant: 'tile' },
      ],
    },
  ],
  // Any-format data lands in the one lake; many engines read the same data in place.
  edges: [
    { source: 'inputs', target: 'lake' },
    { source: 'lake', target: 'engines' },
  ],
}
