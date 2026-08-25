import type { Course } from '../types'
import { whatIsStorage } from './01-what-is-storage'
import { s3Basics } from './02-s3-basics'
import { s3Classes } from './03-s3-classes'
import { s3Security } from './04-s3-security'
import { ebs } from './05-ebs'
import { efs } from './06-efs'
import { choosingStorage } from './07-choosing-storage'

// Course 4 — where data lives. Three shapes of storage (block/file/object), then deep on S3 (the
// star), then the attached storage a server needs (EBS/EFS) and how to choose. Greenfield: no studio
// prior art, narration authored fresh (see COURSE-PLAN.md). Built one reviewed section at a time.
export const storage: Course = {
  id: 'storage',
  title: 'S3, EBS & EFS',
  sections: [
    whatIsStorage,
    s3Basics,
    s3Classes,
    s3Security,
    ebs,
    efs,
    choosingStorage,
  ],
}
