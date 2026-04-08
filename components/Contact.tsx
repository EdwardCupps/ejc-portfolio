export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--terra)',
        padding: '6rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative circle */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '80px solid rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.25rem',
          position: 'relative',
        }}
      >
        <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
        Get In Touch
        <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
          fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
          lineHeight: 1.1,
          color: 'var(--warm-wh)',
          marginBottom: '1.25rem',
          position: 'relative',
        }}
      >
        Let&rsquo;s talk about<br />what you&rsquo;re building.
      </h2>

      <p
        style={{
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '48ch',
          margin: '0 auto 3rem',
          lineHeight: 1.8,
          position: 'relative',
        }}
      >
        Selectively exploring Director, Senior Director, Head of Product, and VP of Product/UX opportunities at product-led companies where design and strategy are taken seriously.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <a
          href="mailto:ejcupps@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--warm-wh)',
            border: '1px solid var(--ink)',
            padding: '0.85rem 2rem',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            background: 'var(--ink)',
            transition: 'all 0.2s',
          }}
        >
          ✉ &nbsp;Email
        </a>
        <a
          href="https://linkedin.com/in/edwardcupps"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--warm-wh)',
            border: '1px solid rgba(255,255,255,0.35)',
            padding: '0.85rem 2rem',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            transition: 'all 0.2s',
          }}
        >
          ↗ &nbsp;LinkedIn
        </a>
      </div>
    </section>
  )
}
