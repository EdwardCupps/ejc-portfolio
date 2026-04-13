'use client'

import { useEffect } from 'react'
import { Principle } from '@/data/principles'

interface PrincipleModalProps {
  principles: Principle[]
  principleIdx: number
  slideIdx: number
  onClose: () => void
  onPrincipleChange: (principleIdx: number, slideIdx: number) => void
  onSlideChange: (idx: number) => void
}

export default function PrincipleModal({ principles, principleIdx, slideIdx, onClose, onPrincipleChange, onSlideChange }: PrincipleModalProps) {
  const principle = principles[principleIdx]
  const total = principle.slides.length
  const isFirst = principleIdx === 0 && slideIdx === 0
  const isLast = principleIdx === principles.length - 1 && slideIdx === total - 1

  function goNext() {
    if (slideIdx < total - 1) {
      onSlideChange(slideIdx + 1)
    } else if (principleIdx < principles.length - 1) {
      onPrincipleChange(principleIdx + 1, 0)
    }
  }

  function goPrev() {
    if (slideIdx > 0) {
      onSlideChange(slideIdx - 1)
    } else if (principleIdx > 0) {
      const prev = principles[principleIdx - 1]
      onPrincipleChange(principleIdx - 1, prev.slides.length - 1)
    }
  }

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [slideIdx, principleIdx, total])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'rgba(26,20,16,0.8)',
          overflowY: 'auto',
          padding: '3rem 1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {/* Modal box */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--warm-wh)',
            maxWidth: '940px',
            width: '100%',
            position: 'relative',
            animation: 'slideUp 0.3s ease',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.75rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.4rem',
              color: 'rgba(244,239,228,0.5)',
              zIndex: 5,
              transition: 'color 0.2s',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* Principle tabs */}
          <div style={{ display: 'flex', background: 'var(--ink)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {principles.map((p, i) => (
              <button
                key={i}
                onClick={() => onPrincipleChange(i, 0)}
                style={{
                  flex: 1,
                  padding: '0.9rem 1rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${i === principleIdx ? p.accentColor : 'transparent'}`,
                  cursor: 'pointer',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: i === principleIdx ? 'var(--warm-wh)' : 'rgba(244,239,228,0.3)',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {p.num}
              </button>
            ))}
          </div>

          {/* Header */}
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--warm-wh)',
              padding: 'clamp(2rem, 3.5vw, 3.5rem) clamp(1.75rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem)',
              position: 'relative',
              overflow: 'hidden',
              borderTop: `3px solid ${principle.accentColor}`,
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                border: '40px solid rgba(200,136,42,0.08)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                fontStyle: 'italic',
                fontSize: '3.5rem',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.1)',
                marginBottom: '1rem',
              }}
            >
              {principle.num}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                fontSize: 'clamp(1.5rem, 2.25vw, 2.25rem)',
                lineHeight: 1.12,
                color: 'var(--warm-wh)',
                marginBottom: '0.75rem',
              }}
            >
              {principle.title}
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(244,239,228,0.55)',
                lineHeight: 1.75,
                maxWidth: '58ch',
              }}
            >
              {principle.tagline}
            </p>
          </div>

          {/* Slide nav bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--cream)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            {/* Prev */}
            <button
              onClick={goPrev}
              disabled={isFirst}
              aria-label="Previous"
              style={{
                width: '3rem',
                height: '3rem',
                flexShrink: 0,
                border: 'none',
                borderRight: '1px solid var(--rule)',
                background: 'none',
                cursor: isFirst ? 'default' : 'pointer',
                color: 'var(--muted)',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isFirst ? 0.25 : 1,
                transition: 'all 0.18s',
              }}
            >
              ←
            </button>

            {/* Slide indicator */}
            <div
              style={{
                flex: 1,
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '0 1.5rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--terra)',
                  flexShrink: 0,
                }}
              >
                {pad(slideIdx + 1)} / {pad(total)}
              </span>
              <span style={{ width: '1px', height: '1rem', background: 'var(--rule)', flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                  fontSize: '0.95rem',
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '40ch',
                }}
              >
                {principle.slides[slideIdx].label}
              </span>
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              disabled={isLast}
              aria-label="Next"
              style={{
                width: '3rem',
                height: '3rem',
                flexShrink: 0,
                border: 'none',
                borderLeft: '1px solid var(--rule)',
                background: 'none',
                cursor: isLast ? 'default' : 'pointer',
                color: 'var(--muted)',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isLast ? 0.25 : 1,
                transition: 'all 0.18s',
              }}
            >
              →
            </button>
          </div>

          {/* Slide content */}
          <div
            className="slide-content"
            style={{ padding: 'clamp(2rem, 3.5vw, 3.5rem) clamp(1.75rem, 4vw, 4rem)', minHeight: '440px' }}
            dangerouslySetInnerHTML={{ __html: principle.slides[slideIdx].body }}
            key={slideIdx}
          />
        </div>
      </div>
    </>
  )
}
