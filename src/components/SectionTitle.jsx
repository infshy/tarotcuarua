import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, sub, align = 'center', className = '' }) {
  return (
    <Reveal className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="h-display text-4xl sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-plum/70 leading-relaxed">{sub}</p>}
    </Reveal>
  )
}
