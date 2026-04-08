import FadeIn from './FadeIn'

const experience = [
  { company: 'BarnTools', role: 'Head of Product · 2025–2026' },
  { company: 'Mural', role: 'Senior Director of Product Design · 2022–2025' },
  { company: 'Workiva', role: 'Director of UX / Principal UX Designer · 2012–2022' },
  { company: 'Iowa State University', role: 'Asst. Professor of Practice · 2020–Present' },
]

const impact = [
  'Led end-to-end redesign of Mural\u2019s platform (Hana), shipped to full customer base in under a year',
  'Built and led design across multi-product SaaS platforms spanning collaboration, data, and reporting',
  'Developed high-performing design teams, growing multiple designers into senior and leadership roles',
  'Introduced AI-driven workflows into product development lifecycle',
  'Named inventor on 5 patents in UX and product systems',
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '56px',
        background: 'var(--ink)',
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="hero-section"
    >
      {/* decorative pseudo-circles via divs */}
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

      {/* Left column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem) clamp(3rem, 5vw, 5rem) clamp(1.5rem, 6vw, 6rem)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ochre)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--ochre)' }} />
          Product &amp; UX Leadership
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
            fontSize: 'clamp(3.2rem, 5.5vw, 5.5rem)',
            lineHeight: 1.0,
            color: 'var(--warm-wh)',
            marginBottom: '0.5rem',
          }}
        >
          Design.<br />Strategy.<br /><em style={{ fontStyle: 'italic', color: 'var(--ochre-l)' }}>Impact.</em>
        </h1>

        {/* rule + diamond */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.75rem 0' }}>
          <span style={{ display: 'block', height: '1px', background: 'var(--terra)', flex: 1, maxWidth: '3rem' }} />
          <span style={{ width: '8px', height: '8px', background: 'var(--terra)', transform: 'rotate(45deg)', display: 'block' }} />
          <span style={{ display: 'block', height: '1px', background: 'var(--terra)', flex: 1, maxWidth: '3rem' }} />
        </div>

        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(244,239,228,0.6)',
            maxWidth: '40ch',
            lineHeight: 1.85,
            marginBottom: '3rem',
          }}
        >
          Senior product design leader building disciplined teams that ship and learn quickly: leading design across product and engineering to bring clarity, structure, and modern AI-driven workflows to B2B SaaS.
        </p>

        <a
          href="#work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            background: 'var(--terra)',
            color: 'var(--warm-wh)',
            fontSize: '0.72rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
            padding: '0.85rem 1.75rem',
            alignSelf: 'flex-start',
            transition: 'background 0.2s',
          }}
        >
          View Case Studies &nbsp;→
        </a>
      </div>

      {/* Right column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Starburst SVG */}
        <div style={{ width: '100px', height: '100px', marginBottom: '3rem' }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <circle cx="50" cy="50" r="48" stroke="rgba(200,136,42,0.15)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="34" stroke="rgba(200,136,42,0.2)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="8" fill="rgba(200,136,42,0.6)"/>
            <line x1="50" y1="2"  x2="50" y2="18"  stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="50" y1="82" x2="50" y2="98"  stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="2"  y1="50" x2="18" y2="50"  stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="82" y1="50" x2="98" y2="50"  stroke="#C8882A" strokeWidth="1.5" opacity="0.7"/>
            <line x1="15" y1="15" x2="26" y2="26"  stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="74" y1="74" x2="85" y2="85"  stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="85" y1="15" x2="74" y2="26"  stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="15" y1="85" x2="26" y2="74"  stroke="#C8882A" strokeWidth="1" opacity="0.45"/>
            <line x1="31" y1="4"  x2="34" y2="15"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="69" y1="4"  x2="66" y2="15"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="31" y1="96" x2="34" y2="85"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="69" y1="96" x2="66" y2="85"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="4"  y1="31" x2="15" y2="34"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="4"  y1="69" x2="15" y2="66"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="96" y1="31" x2="85" y2="34"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
            <line x1="96" y1="69" x2="85" y2="66"  stroke="#C8882A" strokeWidth="0.75" opacity="0.35"/>
          </svg>
        </div>

        {/* Experience list */}
        <div style={{ marginBottom: '3.5rem' }}>
          {experience.map((item, i) => (
            <FadeIn key={i}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--ochre)',
                    transform: 'rotate(45deg)',
                    marginTop: '0.45rem',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-serif, "DM Serif Display", serif)',
                      fontSize: '1rem',
                      color: 'var(--warm-wh)',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.company}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.15rem' }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Selected Impact */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem' }}>
          <div
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ochre)',
              marginBottom: '1rem',
            }}
          >
            Selected Impact
          </div>
          {impact.map((item, i) => (
            <FadeIn key={i}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    background: 'var(--ochre)',
                    transform: 'rotate(45deg)',
                    marginTop: '0.5rem',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '0.8rem', color: 'rgba(244,239,228,0.55)', lineHeight: 1.65 }}>
                  {item}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </section>
  )
}
