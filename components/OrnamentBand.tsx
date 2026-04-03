export default function OrnamentBand({ startWithDiamond = false }: { startWithDiamond?: boolean }) {
  return (
    <div
      style={{ background: 'var(--terra)', height: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}
    >
      <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
      {startWithDiamond ? (
        <>
          <Dia /><Orb /><Dia /><Orb /><Dia />
        </>
      ) : (
        <>
          <Orb /><Dia /><Orb /><Dia /><Orb />
        </>
      )}
      <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
    </div>
  )
}

function Orb() {
  return <span style={{ width: '8px', height: '8px', background: 'var(--warm-wh)', borderRadius: '50%', flexShrink: 0 }} />
}

function Dia() {
  return <span style={{ width: '8px', height: '8px', background: 'var(--warm-wh)', transform: 'rotate(45deg)', flexShrink: 0 }} />
}
