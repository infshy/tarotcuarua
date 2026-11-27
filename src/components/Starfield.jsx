import { memo, useMemo } from 'react'

// Nền sao nhẹ – chỉ dùng CSS, không canvas để giữ hiệu năng
function Starfield({ count = 38 }) {
  const stars = useMemo(() => {
    let s = 7
    const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
    return Array.from({ length: count }, () => ({
      x: rnd() * 100, y: rnd() * 100, size: 1.5 + rnd() * 3, delay: rnd() * 6, dur: 3 + rnd() * 4,
    }))
  }, [count])
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-lavender/30 blur-3xl breathe" />
      <div className="absolute -right-32 top-[55%] h-[380px] w-[380px] rounded-full bg-sage/35 blur-3xl breathe" style={{ animationDelay: '3s' }} />
      {stars.map((st, i) => (
        <span key={i} className="twinkle absolute rounded-full bg-gold"
          style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.size, height: st.size, animationDelay: `${st.delay}s`, animationDuration: `${st.dur}s` }} />
      ))}
    </div>
  )
}
export default memo(Starfield)
