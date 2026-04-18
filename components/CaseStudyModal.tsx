'use client'

import { useEffect, useRef, useState } from 'react'
import { Case } from '@/data/cases'

interface CaseStudyModalProps {
  caseData: Case
  slideIdx: number
  onClose: () => void
  onSlideChange: (idx: number) => void
}

export default function CaseStudyModal({ caseData, slideIdx, onClose, onSlideChange }: CaseStudyModalProps) {
  const [jumpOpen, setJumpOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const total = caseData.slides.length

  // Keyboard navigation
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (jumpOpen) setJumpOpen(false)
        else onClose()
      }
      if (e.key === 'ArrowRight') onSlideChange(Math.min(slideIdx + 1, total - 1))
      if (e.key === 'ArrowLeft') onSlideChange(Math.max(slideIdx - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [jumpOpen, slideIdx, total, onClose, onSlideChange])

  // Close jump menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setJumpOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

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
          padding: 'calc(3rem + 20px) 1.5rem 3rem',
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
            borderRadius: '1.25rem',
            overflow: 'hidden',
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

          {/* Header */}
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--warm-wh)',
              padding: 'clamp(1.6rem, 2.8vw, 2.8rem) clamp(1.4rem, 3.2vw, 3.2rem) clamp(1.2rem, 2.4vw, 2.4rem)',
              position: 'relative',
              overflow: 'hidden',
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
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ochre)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ fontSize: '0.4rem' }}>◆</span>
              {caseData.tag}
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
              {caseData.title}
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(244,239,228,0.55)',
                lineHeight: 1.75,
                maxWidth: '58ch',
              }}
            >
              {caseData.subtitle}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '3rem',
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                flexWrap: 'wrap',
              }}
            >
              {caseData.meta.map((m, i) => (
                <div key={i} style={{ fontSize: '0.72rem', color: 'rgba(244,239,228,0.45)' }}>
                  <strong
                    style={{
                      display: 'block',
                      color: 'var(--ochre-l)',
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      marginBottom: '0.1rem',
                    }}
                  >
                    {m.v}
                  </strong>
                  {m.l}
                </div>
              ))}
            </div>
          </div>

          {/* Slides nav bar */}
          <div
            ref={navRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--cream)',
              borderBottom: '1px solid var(--rule)',
              position: 'relative',
            }}
          >
            {/* Prev */}
            <button
              onClick={() => onSlideChange(Math.max(slideIdx - 1, 0))}
              disabled={slideIdx === 0}
              aria-label="Previous slide"
              style={{
                width: '3rem',
                height: '3rem',
                flexShrink: 0,
                border: 'none',
                borderRight: '1px solid var(--rule)',
                background: 'none',
                cursor: slideIdx === 0 ? 'default' : 'pointer',
                color: 'var(--muted)',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: slideIdx === 0 ? 0.25 : 1,
                transition: 'all 0.18s',
              }}
            >
              ←
            </button>

            {/* Title button (jump menu trigger) */}
            <button
              onClick={() => setJumpOpen(v => !v)}
              style={{
                flex: 1,
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0 1.5rem',
                transition: 'background 0.18s',
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
                {caseData.slides[slideIdx].label}
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--muted)',
                  flexShrink: 0,
                  transform: jumpOpen ? 'rotate(180deg)' : undefined,
                  transition: 'transform 0.2s',
                }}
              >
                ▼
              </span>
            </button>

            {/* Next */}
            <button
              onClick={() => onSlideChange(Math.min(slideIdx + 1, total - 1))}
              disabled={slideIdx === total - 1}
              aria-label="Next slide"
              style={{
                width: '3rem',
                height: '3rem',
                flexShrink: 0,
                border: 'none',
                borderLeft: '1px solid var(--rule)',
                background: 'none',
                cursor: slideIdx === total - 1 ? 'default' : 'pointer',
                color: 'var(--muted)',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: slideIdx === total - 1 ? 0.25 : 1,
                transition: 'all 0.18s',
              }}
            >
              →
            </button>

            {/* Jump menu dropdown */}
            {jumpOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 50,
                  background: 'var(--warm-wh)',
                  border: '1px solid var(--rule)',
                  borderTop: 'none',
                  boxShadow: '0 8px 24px rgba(26,20,16,0.12)',
                  maxHeight: '320px',
                  overflowY: 'auto',
                }}
              >
                {caseData.slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { onSlideChange(i); setJumpOpen(false) }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem 1.5rem',
                      cursor: 'pointer',
                      borderBottom: i < caseData.slides.length - 1 ? '1px solid var(--rule)' : 'none',
                      width: '100%',
                      textAlign: 'left',
                      background: i === slideIdx ? 'var(--ink)' : 'none',
                      border: 'none',
                      borderBottomWidth: '1px',
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'var(--rule)',
                      transition: 'background 0.15s',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: i === slideIdx ? 'var(--ochre)' : 'var(--terra)',
                        flexShrink: 0,
                        width: '2rem',
                      }}
                    >
                      {pad(i + 1)}
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: i === slideIdx ? 'var(--ochre-l)' : 'var(--muted)',
                      }}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Slide content */}
          <div
            className="slide-content"
            style={{ padding: 'clamp(2rem, 3.5vw, 3.5rem) clamp(1.75rem, 4vw, 4rem)', minHeight: '440px' }}
            dangerouslySetInnerHTML={{ __html: caseData.slides[slideIdx].body }}
            key={slideIdx}
          />
        </div>
      </div>

    </>
  )
}
