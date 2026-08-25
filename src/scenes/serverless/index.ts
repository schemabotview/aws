import type { Scene } from '../../render-engine'
import { whatIsServerless } from './what-is-serverless'
import { lambda } from './lambda'
import { eventSources } from './event-sources'
import { apiGateway } from './api-gateway'
import { messaging } from './messaging'
import { stepFunctions } from './step-functions'
import { serverlessStack } from './serverless-stack'

// Serverless scenes — one per section. Order mirrors the course sections.
export const serverlessScenes: Scene[] = [
  whatIsServerless,
  lambda,
  eventSources,
  apiGateway,
  messaging,
  stepFunctions,
  serverlessStack,
]
