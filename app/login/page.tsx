'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          border: '60px solid rgba(200,136,42,0.07)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '10%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '40px solid rgba(181,67,42,0.06)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '400px' }}>
        {/* Wordmark */}
        <div
          style={{
            fontWeight: 600,
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--ochre-l)',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Edward Cupps
        </div>

        {/* Starburst */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
            <circle cx="50" cy="50" r="48" stroke="rgba(200,136,42,0.15)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="34" stroke="rgba(200,136,42,0.2)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="8" fill="rgba(200,136,42,0.6)"/>
            <line x1="50" y1="2" x2="50" y2="18" stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="50" y1="82" x2="50" y2="98" stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="2" y1="50" x2="18" y2="50" stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="82" y1="50" x2="98" y2="50" stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="15" y1="15" x2="26" y2="26" stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="74" y1="74" x2="85" y2="85" stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="85" y1="15" x2="74" y2="26" stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="15" y1="85" x2="26" y2="74" stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
          </svg>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: 1.15,
            color: 'var(--warm-wh)',
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          This portfolio is <em style={{ fontStyle: 'italic', color: 'var(--ochre-l)' }}>private.</em>
        </h1>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'rgba(244,239,228,0.5)',
            textAlign: 'center',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          Enter the password to continue.
        </p>

        {/* Rule + diamond */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 auto 2.5rem', maxWidth: '200px' }}>
          <span style={{ display: 'block', height: '1px', background: 'var(--terra)', flex: 1 }} />
          <span style={{ width: '6px', height: '6px', background: 'var(--terra)', transform: 'rotate(45deg)', display: 'block' }} />
          <span style={{ display: 'block', height: '1px', background: 'var(--terra)', flex: 1 }} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false) }}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '0.85rem 1.25rem',
              background: 'rgba(255,255,255,0.06)',
              border: `1px solid ${error ? 'var(--terra)' : 'rgba(255,255,255,0.12)'}`,
              color: 'var(--warm-wh)',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-jost, "Jost", sans-serif)',
              fontWeight: 300,
              letterSpacing: '0.08em',
              outline: 'none',
              transition: 'border-color 0.2s',
              marginBottom: error ? '0.75rem' : '1.5rem',
            }}
          />

          {error && (
            <p
              style={{
                fontSize: '0.78rem',
                color: 'var(--terra-l)',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              background: password ? 'var(--terra)' : 'rgba(181,67,42,0.4)',
              color: 'var(--warm-wh)',
              border: 'none',
              padding: '0.85rem 1.75rem',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontFamily: 'var(--font-jost, "Jost", sans-serif)',
              cursor: password ? 'pointer' : 'default',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Entering...' : 'Enter Portfolio →'}
          </button>
        </form>
      </div>
    </div>
  )
}
