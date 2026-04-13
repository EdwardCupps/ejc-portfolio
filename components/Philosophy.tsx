'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'
import { PRINCIPLES } from '@/data/principles'
import PrincipleModal from './PrincipleModal'

export default function Philosophy() {
  const [isOpen, setIsOpen] = useState(false)
  const [principleIdx, setPrincipleIdx] = useState(0)
  const [slideIdx, setSlideIdx] = useState(0)

  function openModal(idx: number) {
    setPrincipleIdx(idx)
    setSlideIdx(0)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section
        id="lead"
        style={{
          background: 'var(--cream)',
          padding: 'clamp(4rem, 7vw, 7rem) clamp(1.5rem, 6vw, 6rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative circle */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '4rem',
            top: '3rem',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid var(--ochre)',
            opacity: 0.12,
            pointerEvents: 'none',
          }}
        />

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
          How I Lead
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.12,
            color: 'var(--ink)',
            marginBottom: '4rem',
          }}
        >
          Three principles I<br /><em style={{ fontStyle: 'italic' }}>lead with.</em>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          {PRINCIPLES.map((pillar, i) => (
            <FadeIn key={i}>
              <div
                style={{
                  padding: '2.5rem',
                  borderRight: i < PRINCIPLES.length - 1 ? '1px solid var(--rule)' : 'none',
                  borderTop: `3px solid ${pillar.accentColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                    fontStyle: 'italic',
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: 'var(--rule)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {pillar.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                    fontSize: '1.25rem',
                    color: 'var(--ink)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {pillar.title}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.85, flex: 1 }}>
                  {pillar.tagline}
                </p>
                <button
                  onClick={() => openModal(i)}
                  style={{
                    marginTop: '1.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: pillar.accentColor,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.65' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1' }}
                >
                  Learn more <span style={{ fontSize: '0.85rem' }}>→</span>
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {isOpen && (
        <PrincipleModal
          principles={PRINCIPLES}
          principleIdx={principleIdx}
          slideIdx={slideIdx}
          onClose={closeModal}
          onPrincipleChange={(pIdx, sIdx) => { setPrincipleIdx(pIdx); setSlideIdx(sIdx) }}
          onSlideChange={setSlideIdx}
        />
      )}
    </>
  )
}
