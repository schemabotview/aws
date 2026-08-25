import type { Course } from '../types'
import { managedDatabases } from './01-managed-databases'
import { sqlVsNosql } from './02-sql-vs-nosql'
import { rds } from './03-rds'
import { aurora } from './04-aurora'
import { dynamodb } from './05-dynamodb'
import { caching } from './06-caching'
import { choosingADatabase } from './07-choosing-a-database'

// Course 6 — give data structure & fast query. Why managed databases, the SQL vs NoSQL split, deep on
// the managed relational engines (RDS, Aurora), the managed NoSQL one (DynamoDB), caching, and how to
// choose. Analytics/lakes are Course 8. Greenfield: no studio prior art, narration authored fresh
// (see COURSE-PLAN.md). Built one reviewed section at a time.
export const databases: Course = {
  id: 'databases',
  title: 'RDS, Aurora & DynamoDB',
  sections: [
    managedDatabases,
    sqlVsNosql,
    rds,
    aurora,
    dynamodb,
    caching,
    choosingADatabase,
  ],
}
