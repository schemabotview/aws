import type { Course } from '../types'
import { whatIsCompute } from './01-what-is-compute'
import { spectrum } from './02-spectrum'
import { ec2Anatomy } from './03-ec2-anatomy'
import { ec2Pricing } from './04-ec2-pricing'
import { loadBalancing } from './05-load-balancing'
import { autoScaling } from './06-auto-scaling'
import { containers } from './07-containers'
import { choosing } from './08-choosing'

// Course 3 — where code runs. The control ↔ convenience spectrum: frame it, go deep on EC2 (the
// workhorse), then make it elastic (ELB + Auto Scaling) and portable (containers), and close on how
// to choose. Lambda is named as the convenience end but built in Course 7 `serverless`. Built one
// reviewed section at a time (see COURSE-PLAN.md). One section = one slide.
export const compute: Course = {
  id: 'compute',
  title: 'EC2, Auto Scaling & containers',
  sections: [
    whatIsCompute,
    spectrum,
    ec2Anatomy,
    ec2Pricing,
    loadBalancing,
    autoScaling,
    containers,
    choosing,
  ],
}
