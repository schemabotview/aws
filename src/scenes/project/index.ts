import type { Scene } from '../../render-engine'
import { brief } from './brief'
import { oltpNeeds } from './oltp-needs'
import { olapNeeds } from './olap-needs'
import { qualityNeeds } from './quality-needs'
import { novaArchitecture } from './nova-architecture'
import { coreApp } from './core-app'
import { analytics } from './analytics'
import { payments } from './payments'
import { secureBank } from './secure-bank'
import { operateBank } from './operate-bank'
import { wafPillars } from './waf-pillars'

// Project (capstone) scenes, by phase. Phase 1 · Requirements: `brief` (§1), `oltpNeeds` (§2 the
// transactional core stated as requirements; olap-needs/quality-needs to come). Phase 2 · Design:
// `novaArchitecture` — the full-system poster SHARED by the two overview sections (§5 the ground, §6
// how it composes); also viewable scene-only at #/nova-architecture.
export const projectScenes: Scene[] = [
  brief,
  oltpNeeds,
  olapNeeds,
  qualityNeeds,
  novaArchitecture,
  coreApp,
  analytics,
  payments,
  secureBank,
  operateBank,
  wafPillars,
]
