import { useState } from 'react'
import { SceneView } from '../render-engine'
import type { Section } from '../content'
import { getScene } from '../scenes'
import { SlidePanel } from './SlidePanel'

// The SECTION view = the final composited output of a slug (course-section): the vertical scene +
// the fixed-right slide, framed by a header/footer that is shared with the captured video (the
// eyebrow + section title up top, GraphL brand + §n/N counter below). Layout is responsive (CSS):
//   landscape (laptop → 4K video)  — scene fills the left, slide is a right column; header/footer
//                                    brand the scene column (title lives in the slide, so it's hidden).
//   portrait  (mobile → reel)      — scene fills the frame, slide is a right drawer toggled by ⟨; the
//                                    header shows the full title card.
// The same chrome renders in the interactive app AND at capture; only the drawer toggle is
// capture-suppressed. Navigation (← / →) and narration (Space) are keyboard-driven — no on-screen
// buttons — and the eyebrow doubles as the "back to catalog" link.
export function SectionView({
  section,
  capture = false,
  eyebrow,
  index = 0,
  total = 0,
  onHome,
}: {
  section: Section
  capture?: boolean // ?capture=1: suppress the (interactive-only) drawer toggle
  eyebrow?: string // header eyebrow (e.g. "AWS · FOUNDATIONS"); also the back-to-catalog link
  index?: number // 0-based position of this section in the course
  total?: number // total sections in the course
  onHome?: () => void // back to the catalog (wired to the eyebrow)
}) {
  const [open, setOpen] = useState(false) // drawer state; only affects the portrait layout
  const scene = getScene(section.scene)
  if (!scene) return <div className="stage stage--missing">no scene: {section.scene}</div>
  return (
    <div className="stage stage--section">
      {/* Header/footer — shared with the captured video. The eyebrow is a button (back to catalog);
          the section title shows on the portrait title card and is hidden in landscape (it headlines
          the slide there). GraphL + §n/N sit along the bottom. */}
      <header className="reel-head">
        {eyebrow && (
          <button className="reel-head__eyebrow" onClick={onHome} aria-label="Back to catalog (Esc)" title="Back to catalog (Esc)">
            {eyebrow}
          </button>
        )}
        <h1 className="reel-head__title">{section.title}</h1>
      </header>
      <footer className="reel-foot">
        <span className="reel-foot__brand">GraphL</span>
        {total > 0 && (
          <span className="reel-foot__count">
            §{index + 1} / {total}
          </span>
        )}
      </footer>
      <div className="scene-area">
        <SceneView scene={scene} focusId={section.focus} />
      </div>
      {/* Drawer toggle — portrait-only affordance to reveal the slide; suppressed at capture. */}
      {!capture && (
        <button
          className="slide-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Hide slide' : 'Show slide'}
        >
          {open ? '›' : '‹'}
        </button>
      )}
      <SlidePanel slide={section.slide} open={open} />
    </div>
  )
}
