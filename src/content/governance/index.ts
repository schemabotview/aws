import type { Course } from '../types'
import { operations } from './01-operations'
import { cloudwatch } from './02-cloudwatch'
import { auditConfig } from './03-audit-config'
import { infrastructureAsCode } from './04-infrastructure-as-code'
import { cicd } from './05-cicd'
import { cost } from './06-cost'
import { resilience } from './07-resilience'
import { wellRun } from './08-well-run'

// Course 10 — run what you built (the Operate/Day-2 half). The operate loop: observability (CloudWatch),
// audit & compliance (CloudTrail/Config), infrastructure as code (CloudFormation/CDK), CI/CD, cost
// optimization, and resilience (DR/backup). Migration is Course 8; Organizations is Course 2;
// Well-Architected is Course 11. Greenfield: no studio prior art, narration authored fresh (see
// COURSE-PLAN.md). Built one reviewed section at a time.
export const governance: Course = {
  id: 'governance',
  title: 'Observability, cost, IaC & CI/CD',
  sections: [
    operations,
    cloudwatch,
    auditConfig,
    infrastructureAsCode,
    cicd,
    cost,
    resilience,
    wellRun,
  ],
}
