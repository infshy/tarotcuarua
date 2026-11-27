import CardArt, { CardBack } from './CardArt'

/** Lá bài có thể lật 3D. flipped=true → hiện mặt trước. */
export default function TarotCard({ card, reversed = false, flipped = true, onClick, className = '', glow = false, label }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag type={onClick ? 'button' : undefined} onClick={onClick} aria-label={label || card?.name}
      className={`w-full flip ${flipped ? 'flipped' : ''} block aspect-[3/5] text-left ${glow ? 'shadow-glow rounded-2xl' : ''} ${className}`}>
      <div className="flip-inner">
        <div className="flip-face"><CardBack className="h-full w-full" /></div>
        <div className="flip-face flip-back">
          {card && <CardArt card={card} reversed={reversed} className="h-full w-full" />}
        </div>
      </div>
    </Tag>
  )
}
