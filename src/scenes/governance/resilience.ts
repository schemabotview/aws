import type { Scene } from '../../render-engine'

// §7 resilience — the last stage of the loop, RECOVER. HA (foundations §6 / networking) keeps you up
// through an AZ failure within a Region; DISASTER RECOVERY is about surviving the loss of a whole
// Region. Two numbers drive every DR choice: RTO (how fast must you be back?) and RPO (how much data
// can you afford to lose?). AWS gives four strategies along a spectrum from cheap-and-slow to
// expensive-and-instant: Backup & Restore (restore from cross-region backups — RTO hours), Pilot Light
// (data replicated live, core services minimal, scale up on disaster), Warm Standby (a scaled-down full
// copy always running), and Multi-Site Active/Active (a full copy live in both Regions — RTO ~0). AWS
// Backup centralises the backups that underpin the cheap end. Drawn as that spectrum, cheap → instant.
export const resilience: Scene = {
  id: 'resilience',
  padding: 0.15,
  nodes: [
    { id: 'backup', label: 'Backup & Restore', pattern: 'storage', icon: 'backup', sub: 'RTO hours · cheapest' },
    { id: 'pilot', label: 'Pilot Light', pattern: 'service', icon: 'database', sub: 'core minimal, scale up · RTO ~10 min' },
    { id: 'warm', label: 'Warm Standby', pattern: 'service', icon: 'gauge', sub: 'scaled-down copy on · RTO minutes' },
    { id: 'multi', label: 'Multi-Site Active/Active', pattern: 'network', icon: 'globe', sub: 'both Regions live · RTO ~0' },
  ],
  // The DR spectrum: down the ladder = faster recovery (lower RTO/RPO) for more cost.
  edges: [
    { source: 'backup', target: 'pilot' },
    { source: 'pilot', target: 'warm' },
    { source: 'warm', target: 'multi' },
  ],
}
