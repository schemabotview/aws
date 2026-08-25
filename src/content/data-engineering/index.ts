import type { Course } from '../types'
import { analyticsVsOltp } from './01-analytics-vs-oltp'
import { dataLake } from './02-data-lake'
import { ingestionStreaming } from './03-ingestion-streaming'
import { glueEtl } from './04-glue-etl'
import { athena } from './05-athena'
import { redshift } from './06-redshift'
import { migration } from './07-migration'
import { analyticsStack } from './08-analytics-stack'

// Course 8 — collect data at scale, refine it, get insight (the OLAP/analytics world, vs Course 6's
// OLTP). Walks the pipeline: the S3 data lake, ingestion/streaming (Kinesis/Firehose), Glue ETL +
// catalog, Athena query-in-place, Redshift warehouse, migration (DMS/DataSync/Snowball/Storage
// Gateway), and a composed analytics-stack finale. Messaging/orchestration are Course 7. Greenfield:
// no studio prior art, narration authored fresh (see COURSE-PLAN.md). Built one reviewed section at a time.
export const dataEngineering: Course = {
  id: 'data-engineering',
  title: 'Lakes, pipelines & analytics',
  sections: [
    analyticsVsOltp,
    dataLake,
    ingestionStreaming,
    glueEtl,
    athena,
    redshift,
    migration,
    analyticsStack,
  ],
}
