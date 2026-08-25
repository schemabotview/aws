import type { Scene } from '../../render-engine'
import { whatIsCompute } from './what-is-compute'
import { computeSpectrum } from './spectrum'
import { ec2Anatomy } from './ec2-anatomy'
import { ec2Pricing } from './ec2-pricing'
import { loadBalancing } from './load-balancing'
import { autoScaling } from './auto-scaling'
import { containers } from './containers'
import { choosing } from './choosing'

// Compute scenes — one per section. Order mirrors the course sections.
export const computeScenes: Scene[] = [
  whatIsCompute,
  computeSpectrum,
  ec2Anatomy,
  ec2Pricing,
  loadBalancing,
  autoScaling,
  containers,
  choosing,
]
