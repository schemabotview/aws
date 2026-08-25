import type { Course } from '../types'
import { whatIsServerless } from './01-what-is-serverless'
import { lambda } from './02-lambda'
import { eventSources } from './03-event-sources'
import { apiGateway } from './04-api-gateway'
import { messaging } from './05-messaging'
import { stepFunctions } from './06-step-functions'
import { eventDrivenApp } from './07-event-driven-app'

// Course 7 — compose managed services into event-driven applications. The Lambda function model, how
// events reach it (sync/async/poll), the API Gateway front door, messaging (SQS/SNS/EventBridge),
// Step Functions orchestration, and a composed event-driven finale. Containers are Course 3; streaming
// & analytics are Course 8. Greenfield: no studio prior art, narration authored fresh (see
// COURSE-PLAN.md). Built one reviewed section at a time.
export const serverless: Course = {
  id: 'serverless',
  title: 'Lambda & event-driven integration',
  sections: [
    whatIsServerless,
    lambda,
    eventSources,
    apiGateway,
    messaging,
    stepFunctions,
    eventDrivenApp,
  ],
}
