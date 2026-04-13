import FadeIn from './FadeIn'

const skills = [
  { label: 'Product & Experience Strategy', pct: 95 },
  { label: 'Design Organization Leadership', pct: 95 },
  { label: 'Lean UX & Dual-Track Discovery', pct: 90 },
  { label: 'AI-Integrated Product Development', pct: 85 },
  { label: 'Design Systems & UI Modernization', pct: 88 },
  { label: 'Executive Alignment & Stakeholder Influence', pct: 85 },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem, 7vw, 7rem) clamp(1.5rem, 6vw, 6rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(3rem, 6vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative circle */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-100px',
          bottom: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '60px solid rgba(200,136,42,0.05)',
          pointerEvents: 'none',
        }}
      />

      {/* Left column */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ochre)',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--ochre)' }} />
          About
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            lineHeight: 1.15,
            color: 'var(--warm-wh)',
            marginBottom: '1.75rem',
          }}
        >
          I transform complex, fragmented systems into coherent, scalable platforms.
        </h2>

        <p style={{ fontSize: '0.9rem', color: 'rgba(244,239,228,0.55)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
          I&rsquo;m a product and design leader with 25+ years of experience, focused on transforming complex, fragmented systems into coherent, scalable platforms. I work at the intersection of design, product, and engineering—leading platform-level experience transformations, modernizing information architecture, and helping teams move from feature delivery to measurable value.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'rgba(244,239,228,0.55)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
          I&rsquo;m at my best in environments where the challenge isn&rsquo;t just usability, but clarity—where products have grown organically and need to be reshaped into something intentional. I bring Lean UX principles, a bias toward measurable outcomes, and a track record of growing designers into leaders who can operate at that same level.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'rgba(244,239,228,0.55)', lineHeight: 1.9 }}>
          Outside of product work, I teach graduate UX methodology at Iowa State University, hold five patents, and have built and led design communities and teams from the ground up.
        </p>
      </div>

      {/* Right column */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <blockquote
          style={{
            fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
            fontStyle: 'italic',
            fontSize: '1.35rem',
            lineHeight: 1.6,
            color: 'var(--ochre-l)',
            marginBottom: '3rem',
            paddingLeft: '1.75rem',
            borderLeft: '2px solid var(--terra)',
            textIndent: '-0.45em',
          }}
        >
          &ldquo;When I&rsquo;m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.&rdquo;
          <cite
            style={{
              display: 'block',
              fontStyle: 'normal',
              fontFamily: 'var(--font-jost, "Jost", sans-serif)',
              fontSize: '0.7rem',
              color: 'rgba(244,239,228,0.3)',
              marginTop: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            — R. Buckminster Fuller
          </cite>
        </blockquote>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {skills.map((skill, i) => (
            <FadeIn key={i}>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                  fontSize: '0.85rem',
                  color: 'rgba(244,239,228,0.6)',
                }}
              >
                {skill.label}
                <span
                  style={{
                    flex: '0 0 5rem',
                    height: '2px',
                    background: 'rgba(255,255,255,0.1)',
                    marginLeft: '1.5rem',
                    position: 'relative',
                    display: 'block',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${skill.pct}%`,
                      background: 'var(--ochre)',
                    }}
                  />
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
