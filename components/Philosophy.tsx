import FadeIn from './FadeIn'

const pillars = [
  {
    num: '01',
    title: 'Outcomes over outputs.',
    body: 'Features are hypotheses. We measure what changes for customers—not what ships. Roadmaps start with the outcome, the signal, and the bet we\u2019re making.',
    borderColor: 'var(--terra)',
  },
  {
    num: '02',
    title: 'Learn enough to move.',
    body: 'Strong teams reduce risk early through discovery, prototyping, and direct customer insight. At ~70\u201380% confidence, we move, learn, and adjust.',
    borderColor: 'var(--ochre)',
  },
  {
    num: '03',
    title: 'Teams\u2014and craft\u2014win.',
    body: 'The most important product is the team. Clear ownership and high standards matter\u2014and so does craft. I stay close to the work, raise the bar, and lead by example.',
    borderColor: 'var(--teal)',
  },
]

export default function Philosophy() {
  return (
    <section
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
        {pillars.map((pillar, i) => (
          <FadeIn key={i}>
            <div
              style={{
                padding: '2.5rem',
                borderRight: i < pillars.length - 1 ? '1px solid var(--rule)' : 'none',
                borderTop: `3px solid ${pillar.borderColor}`,
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
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.85 }}>
                {pillar.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
