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

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}

// The slug for a section is `<courseId>-<sectionId>` — section IS the unit (one slide, one
// narration), so no trailing beat index.
export function slugOf(course: Course, section: Section): string {
  return `${course.id}-${section.id}`
}

export function allSections(course: Course): { section: Section; slug: string }[] {
  return course.sections.map((section) => ({ section, slug: slugOf(course, section) }))
}
