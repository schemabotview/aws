import type { Scene } from '../../render-engine'

// §5 threat-detection — the OUTERMOST layer of the onion: assume something eventually gets through, so
// watch continuously and catch it. These are detective controls, and each watches a different thing.
// GuardDuty continuously analyses logs (VPC flow, DNS, CloudTrail) for malicious activity and anomalies.
// Inspector scans EC2, container images, and Lambda for known software vulnerabilities (CVEs). Macie
// scans S3 to discover and classify sensitive data like PII. All their findings flow into Security Hub,
// which aggregates them into one dashboard and checks against compliance standards; and Detective takes
// a finding and graphs the activity around it to investigate the root cause. Drawn as three detectors
// fanning in to Security Hub, then on to Detective for investigation.
export const threatDetection: Scene = {
  id: 'threat-detection',
  padding: 0.16,
  nodes: [
    { id: 'guardduty', label: 'GuardDuty', pattern: 'external', icon: 'guardduty', sub: 'threats · malicious activity in logs' },
    { id: 'inspector', label: 'Inspector', pattern: 'external', icon: 'inspector', sub: 'vulnerabilities · CVEs in EC2 / images / Lambda' },
    { id: 'macie', label: 'Macie', pattern: 'external', icon: 'macie', sub: 'sensitive data · PII in S3' },
    { id: 'hub', label: 'Security Hub', pattern: 'service', icon: 'securityhub', sub: 'aggregate all findings · check standards · one dashboard' },
    { id: 'detective', label: 'Detective', pattern: 'service', icon: 'detective', sub: 'investigate & root-cause → respond' },
  ],
  // Three detectors watch different surfaces; findings collect in Security Hub; Detective investigates.
  edges: [
    { source: 'guardduty', target: 'hub' },
    { source: 'inspector', target: 'hub' },
    { source: 'macie', target: 'hub' },
    { source: 'hub', target: 'detective' },
  ],
}
