export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 3rem',
        background: 'var(--ink)',
      }}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: '0.7rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--ochre-l)',
        }}
      >
        Edward Cupps
      </span>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--terra)',
            display: 'block',
          }}
        />
        <a href="#lead" className="nav-link">Lead</a>
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}
