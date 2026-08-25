import type { Scene } from '../../render-engine'
import { rentedCloud } from './rented-cloud'
import { serviceLadder } from './service-ladder'
import { deploymentModels } from './deployment-models'
import { regions } from './regions'
import { regionAzs } from './region-azs'
import { multiAz } from './multi-az'
import { accessSurfaces } from './access-surfaces'
import { sharedResponsibility } from './shared-responsibility'
import { costModel } from './cost-model'

// Foundations scenes — one per section (no shared map). Order mirrors the course sections.
export const foundationsScenes: Scene[] = [
  rentedCloud,
  serviceLadder,
  deploymentModels,
  regions,
  regionAzs,
  multiAz,
  accessSurfaces,
  sharedResponsibility,
  costModel,
]
