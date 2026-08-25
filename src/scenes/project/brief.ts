import type { Scene } from '../../render-engine'

// §1 the-brief — the frame for the capstone. We're going to design and build one real system end to end,
// composing everything from Courses 1–10: NovaBank, a fictional retail bank on AWS. The brief has two
// halves. WHAT IT DOES — the capabilities we must deliver: accounts & balances, payments & transfers,
// real-time fraud detection, a mobile/web app, and analytics — each of which a later section builds.
// HOW IT MUST BE — the non-functional requirements a bank lives or dies by: secure, compliant,
// always-on, and scalable — which drive the security and operations sections. Drawn as the two-band
// requirements board; §1 doubles as the capstone's table of contents.
export const brief: Scene = {
  id: 'brief',
  padding: 0.18,
  nodes: [
    {
      id: 'does',
      label: 'What NovaBank does',
      pattern: 'service',
      sub: 'the capabilities to deliver',
      cols: 5,
      children: [
        { id: 'accounts', label: 'Accounts', pattern: 'service', icon: 'aurora', sub: 'balances · ledger', variant: 'tile' },
        { id: 'payments', label: 'Payments', pattern: 'service', icon: 'receipt', sub: 'transfers', variant: 'tile' },
        { id: 'fraud', label: 'Fraud', pattern: 'external', icon: 'guardduty', sub: 'real-time', variant: 'tile' },
        { id: 'app', label: 'Mobile & web', pattern: 'network', icon: 'monitor', sub: 'customer app', variant: 'tile' },
        { id: 'analytics', label: 'Analytics', pattern: 'storage', icon: 'quicksight', sub: 'risk · insight', variant: 'tile' },
      ],
    },
    {
      id: 'mustbe',
      label: 'How it must be',
      pattern: 'network',
      sub: 'the requirements a bank lives by',
      cols: 4,
      children: [
        { id: 'secure', label: 'Secure', pattern: 'service', icon: 'kms', sub: 'encrypt all', variant: 'tile' },
        { id: 'compliant', label: 'Compliant', pattern: 'service', icon: 'config', sub: 'auditable · PII', variant: 'tile' },
        { id: 'alwayson', label: 'Always-on', pattern: 'network', icon: 'globe', sub: 'multi-AZ/Region', variant: 'tile' },
        { id: 'scalable', label: 'Scalable', pattern: 'network', icon: 'gauge', sub: 'millions', variant: 'tile' },
      ],
    },
  ],
  edges: [],
}
