import TurtleLogo from './TurtleLogo'

export default function EmptyState({ title, text, action }) {
  return (
    <div className="card-soft mx-auto flex max-w-md flex-col items-center gap-4 px-8 py-14 text-center">
      <TurtleLogo size={44} className="opacity-80" />
      <h3 className="text-2xl">{title}</h3>
      {text && <p className="text-sm leading-relaxed text-plum/65">{text}</p>}
      {action}
    </div>
  )
}
