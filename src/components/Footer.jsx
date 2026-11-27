import { Link } from 'react-router-dom'
import TurtleLogo from './TurtleLogo'
import { NAV } from './Header'
import { SOCIALS } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-gold/30 bg-gradient-to-b from-transparent to-mist">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <TurtleLogo size={36} />
            <span className="font-serif text-2xl tracking-[0.18em]">TURTLE <span className="text-gold">TAROT</span></span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-plum/65">
            Một góc yên tĩnh để bạn đi chậm lại, như chú rùa, và lắng nghe chính mình qua những lá bài.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-5">Khám phá</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (<li key={n.to}><Link className="text-plum/70 transition hover:text-plum" to={n.to}>{n.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-5">Kết nối</h4>
          <ul className="space-y-2.5 text-sm">
            {SOCIALS.map((s) => (<li key={s}><a href="#top" onClick={(e) => e.preventDefault()} className="text-plum/70 transition hover:text-plum">{s}</a></li>))}
          </ul>
          <p className="mt-5 text-sm text-plum/60">hello@turtletarot.vn</p>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="container-x flex flex-col gap-3 py-6 text-xs leading-relaxed text-plum/55 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">Tarot mang tính chất tham khảo và tự khám phá bản thân, không thay thế tư vấn chuyên môn về y tế, pháp lý, tài chính hay tâm lý.</p>
          <p>© {new Date().getFullYear()} Turtle Tarot</p>
        </div>
      </div>
    </footer>
  )
}
