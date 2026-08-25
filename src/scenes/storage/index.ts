import type { Scene } from '../../render-engine'
import { storageShapes } from './what-is-storage'
import { s3Basics } from './s3-basics'
import { s3Classes } from './s3-classes'
import { s3Security } from './s3-security'
import { ebs } from './ebs'
import { efs } from './efs'
import { choosingStorage } from './choosing-storage'

// Storage scenes — one per section. Order mirrors the course sections.
export const storageScenes: Scene[] = [
  storageShapes,
  s3Basics,
  s3Classes,
  s3Security,
  ebs,
  efs,
  choosingStorage,
]
