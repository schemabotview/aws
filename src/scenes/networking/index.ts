import type { Scene } from '../../render-engine'
import { vpcIntro } from './vpc-intro'
import { subnets } from './subnets'
import { routing } from './routing'
import { securityGroupsNacls } from './security-groups-nacls'
import { requestPath } from './request-path'
import { connecting } from './connecting'
import { edge } from './edge'
import { choosingNetworking } from './choosing-networking'

// Networking scenes — one per section. Order mirrors the course sections.
export const networkingScenes: Scene[] = [
  vpcIntro,
  subnets,
  routing,
  securityGroupsNacls,
  requestPath,
  connecting,
  edge,
  choosingNetworking,
]
