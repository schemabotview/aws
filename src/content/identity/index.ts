import type { Course } from '../types'
import { everyRequest } from './01-every-request'
import { principals } from './02-principals'
import { policies } from './03-policies'
import { policyTypes } from './04-policy-types'
import { rolesAssume } from './05-roles-assume'
import { boundaries } from './06-boundaries'
import { identityCenter } from './07-identity-center'
import { permissionSets } from './08-permission-sets'
import { organizations } from './09-organizations'
import { scps } from './10-scps'

// Course 2 — who may act. The principal → policy → resource model that underpins every later
// service: the IAM gate, principals, policies & evaluation, roles, boundaries, then scaling access
// across an org with Identity Center, permission sets & federation, Organizations, and SCPs.
// Built one reviewed section at a time (see COURSE-PLAN.md). One section = one slide.
export const identity: Course = {
  id: 'identity',
  title: 'IAM, Identity Center & Organizations',
  sections: [
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
  ],
}
