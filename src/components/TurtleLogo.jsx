// Logo rùa nhìn từ trên xuống: mai vàng họa tiết lục giác, ngôi sao Tarot ở tâm mai.
export default function TurtleLogo({ size = 32, ring = true, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden="true">
      {ring && <circle cx="20" cy="20" r="19" fill="none" stroke="#C9AD78" strokeWidth=".8" strokeOpacity=".7" />}

      {/* chân, đuôi, đầu (vẽ trước để mai đè lên) */}
      <g fill="#9DB394">
        <ellipse cx="9.5" cy="14" rx="4.4" ry="2.3" transform="rotate(-35 9.5 14)" />
        <ellipse cx="30.5" cy="14" rx="4.4" ry="2.3" transform="rotate(35 30.5 14)" />
        <ellipse cx="11" cy="28.5" rx="3.5" ry="2.1" transform="rotate(35 11 28.5)" />
        <ellipse cx="29" cy="28.5" rx="3.5" ry="2.1" transform="rotate(-35 29 28.5)" />
        <path d="M18.4 30.5 20 35 21.6 30.5z" />
        <circle cx="20" cy="9" r="3.7" />
      </g>
      <circle cx="18.7" cy="8.2" r=".55" fill="#40334E" />
      <circle cx="21.3" cy="8.2" r=".55" fill="#40334E" />

      {/* mai */}
      <ellipse cx="20" cy="20.5" rx="9.5" ry="11" fill="#C9AD78" />
      <ellipse cx="20" cy="20.5" rx="9.5" ry="11" fill="none" stroke="#40334E" strokeOpacity=".35" strokeWidth=".7" />
      <path d="M20 15.5 24.3 18v5L20 25.5 15.7 23v-5z" fill="#D9C294" stroke="#40334E" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" />
      <path
        d="M20 15.5V10.8M24.3 18l3.9-2.5M24.3 23l3.9 2.5M20 25.5v4.7M15.7 23l-3.9 2.5M15.7 18l-3.9-2.5"
        stroke="#40334E" strokeOpacity=".45" strokeWidth=".7" strokeLinecap="round" fill="none"
      />
      {/* ngôi sao Tarot ở tâm */}
      <path d="M20 17.6l.75 1.95 1.95.75-1.95.75L20 23l-.75-1.95-1.95-.75 1.95-.75z" fill="#E8DDF5" />
    </svg>
  )
}
