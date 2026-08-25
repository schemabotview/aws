import type { Course } from '../types'
import { whatIsCloud } from './01-what-is-cloud'
import { serviceModels } from './02-service-models'
import { deploymentModels } from './03-deployment-models'
import { regions } from './04-regions'
import { availabilityZones } from './05-availability-zones'
import { highAvailability } from './06-high-availability'
import { connecting } from './07-connecting'
import { sharedResponsibility } from './08-shared-responsibility'
import { payAsYouGo } from './09-pay-as-you-go'

// Course 1 — the ground floor: what the cloud is, where it runs, how you reach it, and the two
// ideas (shared responsibility + pay-as-you-go) that frame everything. One section = one slide.
export const foundations: Course = {
  id: 'foundations',
  title: 'The cloud & global infrastructure',
  sections: [
    whatIsCloud,
    serviceModels,
    deploymentModels,
    regions,
    availabilityZones,
    highAvailability,
    connecting,
    sharedResponsibility,
    payAsYouGo,
  ],
}
