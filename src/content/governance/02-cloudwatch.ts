import type { Section } from '../types'

export const cloudwatch: Section = {
  id: 'cloudwatch',
  title: 'CloudWatch — observability',
  scene: 'cloudwatch',
  slide: `## CloudWatch — observability

**Observe** is the first stage of the loop: you can't operate what you can't see. CloudWatch is the eyes.

### What it collects
- **Metrics** — numeric time-series from every service: CPU, latency, request count, queue depth
- **Logs** — application and system logs, centralised and searchable (Logs Insights to query them)
- **Dashboards** — put the key metrics on one screen

### Alarms make it act
- Set a **threshold** on a metric; when breached, the **alarm** fires an action
- **Notify** the team (via SNS) · **auto-scale** to add capacity · trigger a **Lambda** to remediate
- This alarm → Auto Scaling signal is exactly what drove **elastic scaling** back in compute

### Good practice
- Alarm on **symptoms users feel** (latency, error rate), not just CPU
- Emit **custom metrics** for what matters to *your* app; use **composite alarms** to cut noise

**In short:** metrics + logs tell you *how it's doing*; alarms turn that into *automatic action*.`,
  narration:
    "The loop starts with observe, and the service at the heart of observability on AWS is CloudWatch. The premise is simple and non-negotiable: you cannot operate, debug, or improve a system you can't see, so before anything else you need visibility, and CloudWatch is what gives you eyes on your whole environment. It collects three kinds of things. First, metrics — numeric measurements over time. Nearly every AWS service automatically publishes metrics to CloudWatch: the CPU utilisation of your EC2 instances, the latency and error rate of your load balancer, the number of invocations of your Lambda functions, the depth of your SQS queues. These are time-series, so you can watch them rise and fall and spot trends. Second, logs. CloudWatch Logs is where your application and system logs get centralised, so instead of SSH-ing into individual servers you have all your logs in one searchable place — and CloudWatch Logs Insights lets you run queries across them to find that one error among millions of lines. Third, dashboards, which let you put the handful of metrics you care about onto a single screen so you can see the health of your system at a glance. Now, collecting data is passive — the part that makes CloudWatch operationally powerful is alarms. An alarm watches a metric and compares it to a threshold you define, and when the metric crosses that line, the alarm changes state and fires an action. That action might be to notify your team — the alarm publishes to an SNS topic, which emails or pages whoever's on call. Or it might be to actually fix the problem automatically: an alarm on high CPU can trigger Auto Scaling to add more instances, and if you remember the compute course, that alarm-to-Auto-Scaling signal is precisely the mechanism that made your fleet elastic. An alarm can even trigger a Lambda function to run a remediation script. A couple of practices worth carrying with you: alarm on the symptoms your users actually feel — latency and error rate — rather than only on low-level things like CPU, because users don't care about your CPU, they care whether the site is fast and working. And emit your own custom metrics for the things that matter to your specific application, like orders per minute. So metrics and logs tell you how your system is doing, and alarms turn that knowledge into automatic action. But metrics tell you that something's wrong, not who changed what or whether you're compliant. For that you need the audit trail — CloudTrail and Config — which is next.",
}
