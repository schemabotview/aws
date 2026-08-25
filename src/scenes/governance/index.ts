import type { Scene } from '../../render-engine'
import { operateLoop } from './operate-loop'
import { cloudwatch } from './cloudwatch'
import { auditConfig } from './audit-config'
import { iac } from './iac'
import { cicd } from './cicd'
import { cost } from './cost'
import { resilience } from './resilience'
import { governanceBoard } from './governance-board'

// Governance scenes — one per section. Order mirrors the course sections.
export const governanceScenes: Scene[] = [
  operateLoop,
  cloudwatch,
  auditConfig,
  iac,
  cicd,
  cost,
  resilience,
  governanceBoard,
]
