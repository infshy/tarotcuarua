import TurtleLogo from './TurtleLogo'

// Loading theo chủ đề rùa: rùa nổi bồng bềnh giữa những vòng sóng
export default function Loader({ label = 'Rùa đang bò chậm rãi, bạn chờ chút nhé…', full = false }) {
  return (
    <div role="status" className={`flex flex-col items-center justify-center gap-5 ${full ? 'min-h-[60vh]' : 'py-24'}`}>
      <div className="relative grid h-24 w-24 place-items-center">
        <span className="ripple absolute inset-2 rounded-full border border-moss/50" />
        <span className="ripple absolute inset-2 rounded-full border border-gold/60" style={{ animationDelay: '1.4s' }} />
        <span className="absolute inset-0 rounded-full bg-sage/40 blur-xl breathe" />
        <div className="swim relative">
          <TurtleLogo size={56} ring={false} />
        </div>
      </div>
      <p className="font-serif text-lg italic text-plum/70">{label}</p>
    </div>
  )
}
