import { AWS_ICONS } from './awsIcons'
import { LUCIDE_ICONS } from './lucideIcons'
import type { PatternStyle } from './patterns'

// The leading glyph for a node, in priority order: the official AWS service tile when `icon` names one
// (rendered in a small rounded frame so the square logo sits cleanly); else a named lucide glyph from
// LUCIDE_ICONS (e.g. icon: 'terminal') tinted in the pattern accent; else the pattern's default glyph.
export function NodeIcon({ icon, pattern, size = 26 }: { icon?: string; pattern: PatternStyle; size?: number }) {
  const Aws = icon ? AWS_ICONS[icon] : undefined
  if (Aws) {
    return (
      <span style={{ flex: 'none', display: 'inline-flex', borderRadius: 6, overflow: 'hidden', lineHeight: 0 }}>
        <Aws size={size + 4} />
      </span>
    )
  }
  const Lucide = (icon ? LUCIDE_ICONS[icon] : undefined) ?? pattern.icon
  return <Lucide size={size} color={pattern.color} strokeWidth={1.75} style={{ flex: 'none' }} />
}
