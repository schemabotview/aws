import type { Scene } from '../../render-engine'

// §2 cloudwatch — the first stage of the loop, OBSERVE. You can't operate what you can't see, and
// CloudWatch is the eyes: every AWS resource emits METRICS (numeric time-series — CPU, latency,
// request count) and LOGS into CloudWatch, which you view on DASHBOARDS. The active part is ALARMS: you
// set a threshold on a metric, and when it's breached the alarm fires an action — notify the team via
// SNS, or trigger Auto Scaling to add capacity (the exact signal behind compute's auto-scaling). Drawn
// as the observe pipeline: resources → CloudWatch (metrics/logs/dashboards) → alarm → actions.
export const cloudwatch: Scene = {
  id: 'cloudwatch',
  padding: 0.15,
  nodes: [
    {
      id: 'resources',
      label: 'Your resources',
      pattern: 'external',
      sub: 'emit metrics & logs',
      cols: 3,
      children: [
        { id: 'ec2', label: 'EC2', pattern: 'service', icon: 'ec2', variant: 'tile' },
        { id: 'lambda', label: 'Lambda', pattern: 'service', icon: 'lambda', variant: 'tile' },
        { id: 'rds', label: 'RDS', pattern: 'service', icon: 'rds', variant: 'tile' },
      ],
    },
    {
      id: 'cw',
      label: 'CloudWatch',
      pattern: 'service',
      icon: 'cloudwatch',
      sub: 'collect · store · visualise',
      cols: 3,
      children: [
        { id: 'metrics', label: 'Metrics', pattern: 'service', icon: 'gauge', sub: 'CPU · latency · count', variant: 'tile' },
        { id: 'logs', label: 'Logs', pattern: 'service', icon: 'scroll', sub: 'app & system', variant: 'tile' },
        { id: 'dash', label: 'Dashboards', pattern: 'service', icon: 'monitor', sub: 'one glance', variant: 'tile' },
      ],
    },
    { id: 'alarm', label: 'Alarm', pattern: 'external', icon: 'bell', sub: 'threshold breached' },
    { id: 'autoscale', label: 'Auto Scaling', pattern: 'service', icon: 'gauge', sub: 'add capacity automatically' },
    { id: 'notify', label: 'Notify', pattern: 'external', icon: 'sns', sub: 'SNS · alert the team' },
  ],
  // Observe pipeline: resources emit → CloudWatch collects → an alarm on a metric fires actions.
  edges: [
    { source: 'resources', target: 'cw' },
    { source: 'cw', target: 'alarm' },
    { source: 'alarm', target: 'autoscale' },
    { source: 'alarm', target: 'notify' },
  ],
}
