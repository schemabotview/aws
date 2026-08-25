import type { Course } from '../types'
import { theBrief } from './01-the-brief'
import { oltpRequirements } from './02-oltp-requirements'
import { olapRequirements } from './03-olap-requirements'
import { qualityRequirements } from './04-quality-requirements'
import { architectureFoundation } from './05-architecture-foundation'
import { architectureComposition } from './06-architecture-composition'
import { oltpDesign } from './07-oltp-design'
import { olapDesign } from './08-olap-design'
import { integrationDesign } from './09-integration-design'
import { securityDesign } from './10-security-design'
import { operationsDesign } from './11-operations-design'
import { wellArchitectedReview } from './12-well-architected-review'

// Course 11 — the capstone. Compose everything from Courses 1–10 into one real, well-architected system:
// NovaBank, a fictional retail bank on AWS. Each section is a composed architecture that reuses services
// and calls back to the course that taught them; the finale reviews the design against the 5
// Well-Architected pillars. Greenfield: no studio prior art, narration authored fresh (see
// COURSE-PLAN.md). Built one reviewed section at a time. This is the final course.
export const project: Course = {
  id: 'project',
  title: 'Capstone — NovaBank on AWS',
  sections: [
    // Phase 1 · Requirements
    theBrief,
    oltpRequirements,
    olapRequirements,
    qualityRequirements,
    // Phase 2 · Design (§5–6 the shared-poster overview; §7–12 the deep-dives)
    architectureFoundation,
    architectureComposition,
    oltpDesign,
    olapDesign,
    integrationDesign,
    securityDesign,
    operationsDesign,
    wellArchitectedReview,
  ],
}
