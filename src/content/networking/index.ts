import type { Course } from '../types'
import { whatIsNetworking } from './01-what-is-networking'
import { subnets } from './02-subnets'
import { routing } from './03-routing'
import { securityGroupsNacls } from './04-security-groups-nacls'
import { requestPath } from './05-request-path'
import { connecting } from './06-connecting'
import { edge } from './07-edge'
import { choosingNetworking } from './08-choosing-networking'

// Course 5 — the wiring that connects it all. Build your private network (VPC, subnets, routing),
// secure & trace traffic through it (SG/NACL, the request path), then reach beyond one VPC and out to
// the global edge (peering/TGW/VPN/Direct Connect/PrivateLink; Route 53/CloudFront). Greenfield: no
// studio prior art, narration authored fresh (see COURSE-PLAN.md). Built one reviewed section at a time.
export const networking: Course = {
  id: 'networking',
  title: 'VPC & the edge',
  sections: [
    whatIsNetworking,
    subnets,
    routing,
    securityGroupsNacls,
    requestPath,
    connecting,
    edge,
    choosingNetworking,
  ],
}
