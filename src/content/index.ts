import { foundations } from './foundations'
import { identity } from './identity'
import { compute } from './compute'
import { storage } from './storage'
import { networking } from './networking'
import { databases } from './databases'
import { serverless } from './serverless'
import { dataEngineering } from './data-engineering'
import { security } from './security'
import { governance } from './governance'
import { project } from './project'
import type { Course, Section } from './types'

export const COURSES: Record<string, Course> = {
  [foundations.id]: foundations,
  [identity.id]: identity,
  [compute.id]: compute,
  [storage.id]: storage,
  [networking.id]: networking,
  [databases.id]: databases,
  [serverless.id]: serverless,
  [dataEngineering.id]: dataEngineering,
  [security.id]: security,
  [governance.id]: governance,
  [project.id]: project,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract the recorder drives, so it cannot be a per-repo decision. Re-exported here because
// this module is what the app and the scripts already import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
