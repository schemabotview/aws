import type { Course } from '../types'
import { securityModel } from './01-security-model'
import { encryption } from './02-encryption'
import { secrets } from './03-secrets'
import { perimeter } from './04-perimeter'
import { threatDetection } from './05-threat-detection'
import { cognito } from './06-cognito'
import { defenseInDepthFinale } from './07-defense-in-depth'

// Course 9 — protect the data, guard the perimeter, detect threats (the Protect half, vs Course 2's
// identity/who-may-act). Defense in depth, encryption (KMS/TLS), secrets, the perimeter (Shield/WAF),
// threat detection (GuardDuty/Inspector/Macie), Cognito customer identity, and a layered finale.
// Governance (CloudTrail/Config, DR/backup) is Course 10. Greenfield: no studio prior art, narration
// authored fresh (see COURSE-PLAN.md). Built one reviewed section at a time.
export const security: Course = {
  id: 'security',
  title: 'Encryption, detection & protection',
  sections: [
    securityModel,
    encryption,
    secrets,
    perimeter,
    threatDetection,
    cognito,
    defenseInDepthFinale,
  ],
}
