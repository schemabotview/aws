import type { Scene } from '../render-engine'
import { foundationsScenes } from './foundations'
import { identityScenes } from './identity'
import { computeScenes } from './compute'
import { storageScenes } from './storage'
import { networkingScenes } from './networking'
import { databasesScenes } from './databases'
import { serverlessScenes } from './serverless'
import { dataEngineeringScenes } from './data-engineering'
import { securityScenes } from './security'
import { governanceScenes } from './governance'
import { projectScenes } from './project'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). One scene per section — no shared map. Ids are globally unique across
// courses, so the flat lookup below is unambiguous.
const ALL: Scene[] = [...foundationsScenes, ...identityScenes, ...computeScenes, ...storageScenes, ...networkingScenes, ...databasesScenes, ...serverlessScenes, ...dataEngineeringScenes, ...securityScenes, ...governanceScenes, ...projectScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
