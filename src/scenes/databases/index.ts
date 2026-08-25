import type { Scene } from '../../render-engine'
import { managedDb } from './managed-db'
import { sqlVsNosql } from './sql-vs-nosql'
import { rds } from './rds'
import { aurora } from './aurora'
import { dynamodb } from './dynamodb'
import { dbCaching } from './db-caching'
import { choosingDb } from './choosing-db'

// Databases scenes — one per section. Order mirrors the course sections.
export const databasesScenes: Scene[] = [
  managedDb,
  sqlVsNosql,
  rds,
  aurora,
  dynamodb,
  dbCaching,
  choosingDb,
]
