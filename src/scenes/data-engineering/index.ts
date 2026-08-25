import type { Scene } from '../../render-engine'
import { twoDataWorlds } from './two-data-worlds'
import { dataLake } from './data-lake'
import { ingestion } from './ingestion'
import { glue } from './glue'
import { athena } from './athena'
import { redshift } from './redshift'
import { migration } from './migration'
import { analyticsStack } from './analytics-stack'

// Data-engineering scenes — one per section. Order mirrors the course sections.
export const dataEngineeringScenes: Scene[] = [
  twoDataWorlds,
  dataLake,
  ingestion,
  glue,
  athena,
  redshift,
  migration,
  analyticsStack,
]
