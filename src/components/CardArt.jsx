import { memo, useId } from 'react'

// Bảng màu theo nhóm bài
const THEME = {
  major: { a: '#EFE6F8', b: '#FAF8F3', accent: '#40334E', glow: '#C9B6E4' },
  wands: { a: '#F6E7E4', b: '#FAF8F3', accent: '#7A4E45', glow: '#E7B9A5' },
  cups: { a: '#E4DAF4', b: '#FAF8F3', accent: '#4D3C6B', glow: '#C9B6E4' },
  swords: { a: '#E3EAF2', b: '#FAF8F3', accent: '#3E4B63', glow: '#B7C8DE' },
  pentacles: { a: '#E6EDDF', b: '#FAF8F3', accent: '#43553E', glow: '#B9C7B0' },
}
const GOLD = '#C9AD78'

/* ---------- Biểu tượng nhỏ (vẽ trong khoảng ±22) ---------- */
function Symbol({ kind, accent }) {
  const s = { stroke: accent, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (kind) {
    case 'cup':
      return (<g {...s} fill={GOLD} fillOpacity=".35"><path d="M-13-16H13C13 2 7 9 0 9S-13 2-13-16Z" /><path d="M0 9V17M-8 19H8" fill="none" /></g>)
    case 'wand':
      return (<g {...s} fill="none"><path d="M0-22V22" /><path d="M0-10C-9-12-10-18-8-20M0-2C9-4 10-10 8-12M0 6C-9 4-10-2-8-4" /><circle cx="0" cy="-22" r="2" fill={GOLD} /></g>)
    case 'sword':
      return (<g {...s}><path d="M0-23L4 6H-4Z" fill={GOLD} fillOpacity=".3" /><path d="M-11 8H11M0 8V20" fill="none" /><circle cx="0" cy="22" r="1.8" fill={accent} /></g>)
    case 'coin':
    default:
      return (<g {...s}><circle r="15" fill={GOLD} fillOpacity=".3" /><path d="M0-10L6 8-9-3H9L-6 8Z" fill="none" /></g>)
  }
}

/* ---------- Biểu tượng lớn cho Major Arcana (vẽ trong khoảng ±60) ---------- */
function Motif({ name, accent }) {
  const s = { stroke: accent, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
  const gold = { fill: GOLD, fillOpacity: 0.4 }
  const rays = (n, r1, r2) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2
      return <path key={i} d={`M${Math.cos(a) * r1} ${Math.sin(a) * r1}L${Math.cos(a) * r2} ${Math.sin(a) * r2}`} />
    })
  const star = (n, R, r) =>
    Array.from({ length: n * 2 }, (_, i) => {
      const a = (i / (n * 2)) * Math.PI * 2 - Math.PI / 2
      const rad = i % 2 ? r : R
      return `${i ? 'L' : 'M'}${Math.cos(a) * rad} ${Math.sin(a) * rad}`
    }).join('') + 'Z'

  switch (name) {
    case 'fool':
      return (<g {...s}><circle cx="30" cy="-38" r="11" {...gold} /><path d="M-62 48L-22 -8 0 20 26 -26 62 48Z" {...gold} /><path d="M-62 48H62M-18 -30c8-8 16-6 22 2" /></g>)
    case 'magician':
      return (<g {...s}><path d="M0-34C-10-52-38-52-38-34S-10-16 0-34 38-52 38-34-10-16 0-34Z" /><path d="M0-8V52M-14 16H14" /><circle cx="0" cy="-8" r="4" {...gold} /></g>)
    case 'moon':
      return (<g {...s}><path d="M12-52A52 52 0 1 0 12 52 40 40 0 1 1 12-52Z" {...gold} /><path d="M34-30l2 5 5 2-5 2-2 5-2-5-5-2 5-2ZM42 14l1.5 3.5 3.5 1.5-3.5 1.5L42 24l-1.5-3.5L37 19l3.5-1.5Z" /></g>)
    case 'flower':
      return (<g {...s}>{Array.from({ length: 8 }, (_, i) => (<ellipse key={i} cx="0" cy="-26" rx="10" ry="22" transform={`rotate(${i * 45})`} {...gold} />))}<circle r="10" {...gold} /></g>)
    case 'throne':
      return (<g {...s}><path d="M-34 52V-14H34V52M-44-14H44L0-54Z" {...gold} /><path d="M-18 52V12H18V52M-34 14H34" /></g>)
    case 'keys':
      return (<g {...s}><g transform="rotate(35)"><circle cy="-38" r="10" {...gold} /><path d="M0-28V50M0 34h12M0 44h8" /></g><g transform="rotate(-35)"><circle cy="-38" r="10" /><path d="M0-28V50M0 34h-12M0 44h-8" /></g></g>)
    case 'lovers':
      return (<g {...s}><circle cx="-16" r="34" {...gold} /><circle cx="16" r="34" /><path d="M0 22C-30-4-10-26 0-10 10-26 30-4 0 22Z" fill={accent} fillOpacity=".25" /></g>)
    case 'wheel':
      return (<g {...s}><circle r="48" {...gold} /><circle r="36" /><circle r="9" />{rays(8, 9, 36)}{rays(8, 36, 56)}</g>)
    case 'infinity':
      return (<g {...s}><path d="M0 0C-12-26-48-26-48 0S-12 26 0 0 48-26 48 0 12 26 0 0Z" /><circle cx="0" cy="40" r="14" {...gold} /><path d="M0 26V10" /></g>)
    case 'lantern':
      return (<g {...s}><path d="M0-56V-40M-18-40H18L24-30V28L18 38H-18L-24 28V-30Z" {...gold} /><path d="M0-20c8 10 8 22 0 28-8-6-8-18 0-28Z" fill={GOLD} fillOpacity=".9" /><path d="M-24 50H24" /></g>)
    case 'scales':
      return (<g {...s}><path d="M0-52V52M-16 52H16M-46-30H46" /><path d="M-46-30L-62 6H-30ZM46-30L30 6H62Z" {...gold} /><path d="M-62 6A16 10 0 0 0-30 6M30 6A16 10 0 0 0 62 6" /><circle cy="-56" r="4" {...gold} /></g>)
    case 'hanged':
      return (<g {...s}><path d="M-40-50H40M0-50V-16" /><path d="M0-16L-26 36H26Z" {...gold} /><circle cy="52" r="10" /><path d="M-26 36H26" /></g>)
    case 'rose':
      return (<g {...s}><path d="M0 8V56M0 36c-12-2-16-10-16-16M0 28c12-2 16-10 16-16" /><circle cy="-14" r="30" {...gold} /><circle cy="-14" r="20" /><circle cy="-14" r="10" /><path d="M-58 56H58" /></g>)
    case 'twocups':
      return (<g {...s}><g transform="translate(-30 -22) scale(1.5)"><Symbol kind="cup" accent={accent} /></g><g transform="translate(30 22) scale(1.5)"><Symbol kind="cup" accent={accent} /></g><path d="M-18 -50C20 -50 30 -30 30 -6M30 -6c0 24-30 20-30 44" strokeDasharray="3 5" /></g>)
    case 'chain':
      return (<g {...s}><path d={star(5, 40, 16)} transform="rotate(180)" {...gold} /><circle r="44" /><ellipse cx="-30" cy="58" rx="10" ry="6" /><ellipse cx="-14" cy="58" rx="10" ry="6" /><ellipse cx="2" cy="58" rx="10" ry="6" /></g>)
    case 'tower':
      return (<g {...s}><path d="M-24 56L-18-20H18L24 56ZM-26-20V-34H-14V-28H-6V-34H6V-28H14V-34H26V-20Z" {...gold} /><path d="M-8 4h16v22H-8Z" /><path d="M44-60L22-20H40L18 22" strokeWidth="2.6" stroke={GOLD} /></g>)
    case 'star':
      return (<g {...s}><path d={star(8, 50, 20)} {...gold} /><path d={star(4, 10, 4)} transform="translate(-52 -44)" /><path d={star(4, 8, 3)} transform="translate(54 38)" /><circle r="6" /></g>)
    case 'sun':
      return (<g {...s}><circle r="26" {...gold} />{rays(16, 34, 54)}<circle r="14" /></g>)
    case 'trumpet':
      return (<g {...s}><path d="M-52 18L20-6 38-34 52-20 26 4 6 54Z" {...gold} /><path d="M-60 14L-52 18M18-34L30-52M40-40L56-52M48-26L64-30" /></g>)
    case 'wreath':
      return (<g {...s}><ellipse rx="42" ry="58" strokeDasharray="1 0" />{Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return (<ellipse key={i} cx={Math.cos(a) * 42} cy={Math.sin(a) * 58} rx="6" ry="11" transform={`rotate(${(a * 180) / Math.PI + 90} ${Math.cos(a) * 42} ${Math.sin(a) * 58})`} {...gold} />) })}<path d={star(5, 20, 8)} {...gold} /></g>)
    default:
      return <Symbol kind={name} accent={accent} />
  }
}

// Vị trí các biểu tượng cho lá số 1–10
const L = { l: 80, c: 120, r: 160 }
const PIPS = {
  1: [[120, 195]],
  2: [[120, 135], [120, 255]],
  3: [[120, 120], [120, 195], [120, 270]],
  4: [[L.l, 140], [L.r, 140], [L.l, 250], [L.r, 250]],
  5: [[L.l, 135], [L.r, 135], [120, 195], [L.l, 255], [L.r, 255]],
  6: [[L.l, 125], [L.r, 125], [L.l, 195], [L.r, 195], [L.l, 265], [L.r, 265]],
  7: [[L.l, 125], [L.r, 125], [120, 160], [L.l, 205], [L.r, 205], [L.l, 275], [L.r, 275]],
  8: [[L.l, 120], [L.r, 120], [L.l, 177], [L.r, 177], [L.l, 234], [L.r, 234], [120, 150], [120, 265]],
  9: [[L.l, 115], [L.r, 115], [L.l, 165], [L.r, 165], [120, 195], [L.l, 225], [L.r, 225], [L.l, 275], [L.r, 275]],
  10: [[L.l, 112], [L.r, 112], [L.l, 160], [L.r, 160], [L.l, 208], [L.r, 208], [L.l, 256], [L.r, 256], [120, 136], [120, 280]],
}

// Sao rải nền cố định theo seed
function sprinkle(seed) {
  let x = seed * 9301 + 49297
  const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280)
  return Array.from({ length: 14 }, () => [24 + rnd() * 192, 40 + rnd() * 320, 0.6 + rnd() * 1.4])
}

function CardArt({ card, reversed = false, className = '' }) {
  const uid = useId().replace(/:/g, '')
  const group = card.arcana === 'major' ? 'major' : card.suit
  const t = THEME[group]
  const seed = card.arcana === 'major' ? card.number + 3 : card.number * 7 + group.length
  const isCourt = card.arcana === 'minor' && card.number > 10

  return (
    <svg viewBox="0 0 240 400" className={className} role="img" aria-label={`${card.name}${reversed ? ' (ngược)' : ''}`}
      style={reversed ? { transform: 'rotate(180deg)' } : undefined}>
      <defs>
        <linearGradient id={`bg${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.a} /><stop offset="1" stopColor={t.b} />
        </linearGradient>
        <radialGradient id={`gl${uid}`} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor={t.glow} stopOpacity=".7" /><stop offset="1" stopColor={t.glow} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="236" height="396" rx="16" fill={`url(#bg${uid})`} stroke={GOLD} strokeWidth="1.5" />
      <rect x="12" y="12" width="216" height="376" rx="10" fill="none" stroke={GOLD} strokeOpacity=".6" strokeWidth=".8" />
      {sprinkle(seed).map(([x, y, r], i) => (<circle key={i} cx={x} cy={y} r={r} fill={GOLD} opacity=".45" />))}
      <circle cx="120" cy="195" r="96" fill={`url(#gl${uid})`} />

      <text x="120" y="48" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="20" fill={t.accent} letterSpacing="4">{card.numeral}</text>
      <path d="M96 58H144" stroke={GOLD} strokeWidth=".8" />

      <g transform="translate(120 195)">
        {card.arcana === 'major' && <Motif name={card.motif} accent={t.accent} />}
      </g>
      {card.arcana === 'minor' && !isCourt && PIPS[card.number].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${card.number === 1 ? 3.2 : card.number > 8 ? 0.95 : 1.15})`}>
          <Symbol kind={card.motif} accent={t.accent} />
        </g>
      ))}
      {isCourt && (
        <g>
          <g transform="translate(120 205) scale(3)"><Symbol kind={card.motif} accent={t.accent} /></g>
          <g transform="translate(120 98)" fill={GOLD} fillOpacity=".5" stroke={t.accent} strokeWidth="1.5" strokeLinejoin="round">
            {card.rank === 'Page' && <path d="M-16 8L-10-6 0 2 10-6 16 8Z" />}
            {card.rank === 'Knight' && <path d="M-18 8V-4L0-12 18-4V8Z" />}
            {card.rank === 'Queen' && <path d="M-20 8L-24-8-10-2 0-14 10-2 24-8 20 8Z" />}
            {card.rank === 'King' && <path d="M-22 8L-22-8-11 0 0-14 11 0 22-8 22 8Z" />}
          </g>
        </g>
      )}

      <path d="M96 336H144" stroke={GOLD} strokeWidth=".8" />
      <text x="120" y="360" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="15" fill={t.accent} letterSpacing="2.5">
        {card.name.toUpperCase()}
      </text>
    </svg>
  )
}

export default memo(CardArt)

/* ---------- Mặt sau lá bài ---------- */
export const CardBack = memo(function CardBack({ className = '' }) {
  const uid = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 240 400" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`bk${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B4A72" /><stop offset="1" stopColor="#40334E" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="236" height="396" rx="16" fill={`url(#bk${uid})`} stroke={GOLD} strokeWidth="1.5" />
      <rect x="14" y="14" width="212" height="372" rx="10" fill="none" stroke={GOLD} strokeOpacity=".7" strokeWidth=".8" />
      <rect x="22" y="22" width="196" height="356" rx="6" fill="none" stroke={GOLD} strokeOpacity=".3" strokeWidth=".6" />
      <g transform="translate(120 200)" fill="none" stroke={GOLD} strokeWidth="1">
        <circle r="62" strokeOpacity=".5" />
        <circle r="48" strokeOpacity=".3" strokeDasharray="2 5" />
        <path d="M10-34A34 34 0 1 0 10 34 26 26 0 1 1 10-34Z" fill={GOLD} fillOpacity=".85" stroke="none" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2
          return <circle key={i} cx={Math.cos(a) * 62} cy={Math.sin(a) * 62} r={i % 3 === 0 ? 2.4 : 1.2} fill={GOLD} stroke="none" />
        })}
      </g>
      {[[44, 50], [196, 50], [44, 350], [196, 350]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 7}L${x + 2} ${y - 2} ${x + 7} ${y} ${x + 2} ${y + 2} ${x} ${y + 7} ${x - 2} ${y + 2} ${x - 7} ${y} ${x - 2} ${y - 2}Z`} fill={GOLD} fillOpacity=".8" />
      ))}
    </svg>
  )
})
