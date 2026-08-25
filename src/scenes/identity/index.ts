import type { Scene } from '../../render-engine'
import { everyRequest } from './every-request'
import { principals } from './principals'
import { policies } from './policies'
import { policyTypes } from './policy-types'
import { rolesAssume } from './roles-assume'
import { boundaries } from './boundaries'
import { identityCenter } from './identity-center'
import { permissionSets } from './permission-sets'
import { organizations } from './organizations'
import { scps } from './scps'

// Identity scenes — one per section. Order mirrors the course sections.
export const identityScenes: Scene[] = [
  everyRequest,
  principals,
  policies,
  policyTypes,
  rolesAssume,
  boundaries,
  identityCenter,
  permissionSets,
  organizations,
  scps,
]
