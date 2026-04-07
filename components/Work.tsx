'use client'

import { useState } from 'react'
import { CASES } from '@/data/cases'
import CaseStudyModal from './CaseStudyModal'
import FadeIn from './FadeIn'

const cardMeta = [
  [
    { label: 'Company', value: 'Mural' },
    { label: 'Timeline', value: '2022–2023' },
    { label: 'My role', value: 'Director' },
  ],
  [
    { label: 'Company', value: 'Mural' },
    { label: 'Timeline', value: '2023' },
    { label: 'My role', value: 'Sr. Director' },
  ],
  [
    { label: 'Company', value: 'Workiva' },
    { label: 'Timeline', value: '2020–2022' },
    { label: 'My role', value: 'Principal UX' },
  ],
  [
    { label: 'Company', value: 'BarnTools' },
    { label: 'Timeline', value: '2025–2026' },
    { label: 'My role', value: 'Head of Product' },
  ],
]

const descriptions = [
  "Led the strategy and rollout of a multi-year transformation of Mural's core platform, guiding the Canvas design team in interpreting and applying the new UI.",
  "Leading Mural's first enterprise AI initiative from zero to a high-profile launch at Microsoft Build 2023 — in under eight weeks, without a dedicated AI team.",
  "Defining UX strategy and co-leading product direction for Workiva's entry into a new regulatory reporting market — one that would account for 10% of company ARR.",
  "Reframing an agtech company's entire product identity — shifting from hardware-centric tools to a software-driven intelligence platform integrating AI, automation, and biosecurity.",
]

export default function Work() {
  const [openCaseIdx, setOpenCaseIdx] = useState<number | null>(null)
  const [slideIdx, setSlideIdx] = useState(0)

  function openCase(idx: number) {
    setOpenCaseIdx(idx)
    setSlideIdx(0)
    document.body.style.overflow = 'hidden'
  }

  function closeCase() {
    setOpenCaseIdx(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section
        id="work"
        style={{
          background: 'var(--warm-wh)',
          padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--terra)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--terra)' }} />
              Selected Work
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.12,
                color: 'var(--ink)',
              }}
            >
              Four stories of impact.
            </h2>
          </div>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--muted)',
              maxWidth: '38ch',
              lineHeight: 1.85,
            }}
          >
            Click any card to walk through the full case study. Add your artifacts, screens, and data as you go.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2px',
            background: 'var(--rule)',
          }}
        >
          {CASES.map((c, i) => (
            <FadeIn key={i}>
              <button
                onClick={() => openCase(i)}
                style={{
                  background: 'var(--warm-wh)',
                  padding: '3rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--cream)'
                  const corner = el.querySelector('.card-corner-el') as HTMLElement | null
                  if (corner) corner.style.borderTopColor = 'var(--sand)'
                  const num = el.querySelector('.case-num-el') as HTMLElement | null
                  if (num) num.style.color = 'var(--ochre)'
                  const arrow = el.querySelector('.card-arrow-el') as HTMLElement | null
                  if (arrow) arrow.style.transform = 'translate(5px, -5px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = 'var(--warm-wh)'
                  const corner = el.querySelector('.card-corner-el') as HTMLElement | null
                  if (corner) corner.style.borderTopColor = 'var(--cream)'
                  const num = el.querySelector('.case-num-el') as HTMLElement | null
                  if (num) num.style.color = 'var(--sand)'
                  const arrow = el.querySelector('.card-arrow-el') as HTMLElement | null
                  if (arrow) arrow.style.transform = 'none'
                }}
              >
                {/* Corner fold */}
                <div
                  className="card-corner-el"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderTop: '48px solid var(--cream)',
                    borderLeft: '48px solid transparent',
                    transition: 'border-top-color 0.2s',
                  }}
                />

                {/* Number */}
                <div
                  className="case-num-el"
                  style={{
                    fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                    fontStyle: 'italic',
                    fontSize: '3.5rem',
                    color: 'var(--sand)',
                    lineHeight: 1,
                    marginBottom: '1.75rem',
                    transition: 'color 0.2s',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Tag */}
                <div
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    marginBottom: '0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.4rem' }}>◆</span>
                  {c.tag}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                    fontSize: '1.5rem',
                    lineHeight: 1.2,
                    marginBottom: '0.75rem',
                    color: 'var(--ink)',
                  }}
                >
                  {c.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '36ch' }}>
                  {descriptions[i]}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '2.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--rule)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    {cardMeta[i].map((m, j) => (
                      <div key={j} style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                        <strong style={{ display: 'block', color: 'var(--ink)', fontWeight: 500, fontSize: '0.8rem' }}>
                          {m.value}
                        </strong>
                        {m.label}
                      </div>
                    ))}
                  </div>
                  <span
                    className="card-arrow-el"
                    style={{ fontSize: '1.25rem', color: 'var(--muted)', transition: 'transform 0.25s ease', display: 'block' }}
                  >
                    ↗
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {openCaseIdx !== null && (
        <CaseStudyModal
          caseData={CASES[openCaseIdx]}
          slideIdx={slideIdx}
          onClose={closeCase}
          onSlideChange={setSlideIdx}
        />
      )}
    </>
  )
}
