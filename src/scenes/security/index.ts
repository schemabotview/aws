import type { Scene } from '../../render-engine'
import { defenseInDepth } from './defense-in-depth'
import { encryption } from './encryption'
import { secrets } from './secrets'
import { perimeter } from './perimeter'
import { threatDetection } from './threat-detection'
import { cognito } from './cognito'
import { securityBoard } from './security-board'

// Security scenes — one per section. Order mirrors the course sections.
export const securityScenes: Scene[] = [
  defenseInDepth,
  encryption,
  secrets,
  perimeter,
  threatDetection,
  cognito,
  securityBoard,
]
