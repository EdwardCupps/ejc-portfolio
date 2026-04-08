export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'rgba(255,255,255,0.2)',
        textAlign: 'center',
        padding: '1.75rem',
        fontSize: '0.7rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}
    >
      © {new Date().getFullYear()} &nbsp;<strong style={{ color: 'var(--ochre)', fontWeight: 400 }}>Edward Cupps</strong>&nbsp; · Product &amp; UX Leadership
    </footer>
  )
}
