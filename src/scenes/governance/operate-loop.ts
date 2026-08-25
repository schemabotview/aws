import type { Scene } from '../../render-engine'

// §1 operations — the frame for Course 10. Courses 1–9 were about BUILDING a system; this course is
// about RUNNING it — the "Day 2" work that never ends. Operations is a continuous loop of four
// activities wrapped around your running system: OBSERVE it (metrics, logs, audit), AUTOMATE it (infra
// and delivery as code), OPTIMIZE it (control the spend), and RECOVER it (survive failure). Drawn as
// that loop as a vertical flow — the running system feeds into the four stages, which are the spine of
// §2–§7 (each stage carries the services that section goes deep on). The loop repeats forever, which is
// the point of Day-2 operations.
export const operateLoop: Scene = {
  id: 'operate-loop',
  padding: 0.15,
  nodes: [
    { id: 'system', label: 'What you built', pattern: 'storage', icon: 'layers', sub: 'Courses 1–9 · your running system — now operate it' },
    { id: 'observe', label: 'Observe', pattern: 'service', icon: 'cloudwatch', sub: 'metrics · logs · audit — CloudWatch · CloudTrail · Config' },
    { id: 'automate', label: 'Automate', pattern: 'service', icon: 'cloudformation', sub: 'infra & delivery as code — CloudFormation · CI/CD' },
    { id: 'optimize', label: 'Optimize', pattern: 'service', icon: 'costexplorer', sub: 'control the spend — Cost Explorer · Savings Plans' },
    { id: 'recover', label: 'Recover', pattern: 'service', icon: 'backup', sub: 'survive failure — DR strategies · AWS Backup · then loop ↺' },
  ],
  // The operate loop: observe → automate → optimize → recover, forever — the spine of §2–§7.
  edges: [
    { source: 'system', target: 'observe' },
    { source: 'observe', target: 'automate' },
    { source: 'automate', target: 'optimize' },
    { source: 'optimize', target: 'recover' },
  ],
}
