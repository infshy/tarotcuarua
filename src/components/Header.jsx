import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import TurtleLogo from './TurtleLogo'
import { useApp } from '../context/AppContext'

export const NAV = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/trai-bai', label: 'Trải bài Tarot' },
  { to: '/thu-vien', label: 'Thư viện bài' },
  { to: '/hang-ngay', label: 'Tarot mỗi ngày' },
  { to: '/nhat-ky', label: 'Nhật ký' },
  { to: '/kien-thuc', label: 'Kiến thức Tarot' },
]

export default function Header({ onLogin }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const { user, setUser } = useApp()
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); setMenu(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const link = ({ isActive }) =>
    `relative px-1 py-2 text-[13px] tracking-wide transition-colors duration-500 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-500 ${
      isActive ? 'text-plum after:scale-x-100' : 'text-plum/65 hover:text-plum after:scale-x-0 hover:after:scale-x-100'
    }`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'glass shadow-soft' : 'bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between lg:h-[72px]">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Turtle Tarot – Trang chủ">
          <TurtleLogo />
          <span className="font-serif text-lg tracking-[0.14em] text-plum xl:text-xl xl:tracking-[0.18em]">TURTLE <span className="text-gold">TAROT</span></span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Điều hướng chính">
          {NAV.map((n) => (<NavLink key={n.to} to={n.to} end={n.end} className={link}>{n.label}</NavLink>))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            {user ? (
              <>
                <button onClick={() => setMenu((m) => !m)} className="btn-ghost !px-5 !py-2" aria-expanded={menu}>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-lavender text-xs">{user.name[0].toUpperCase()}</span>
                  {user.name}
                </button>
                {menu && (
                  <div className="glass absolute right-0 mt-2 w-48 rounded-2xl p-2 shadow-soft">
                    <Link to="/nhat-ky" className="block rounded-xl px-4 py-2 text-sm hover:bg-lilac/60">Nhật ký của tôi</Link>
                    <button onClick={() => { setUser(null); setMenu(false) }} className="block w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-lilac/60">Đăng xuất</button>
                  </div>
                )}
              </>
            ) : (
              <button onClick={onLogin} className="btn-primary !py-2">Đăng nhập</button>
            )}
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-plum/20 lg:hidden" onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open}>
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-px w-5 bg-plum transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-plum transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-px w-5 bg-plum transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 pb-6 pt-2 lg:hidden" aria-label="Menu di động">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => `rounded-xl px-4 py-3 font-serif text-xl ${isActive ? 'bg-lilac/70' : 'hover:bg-lilac/40'}`}>{n.label}</NavLink>
          ))}
          {user ? (
            <button onClick={() => setUser(null)} className="btn-ghost mt-3">Đăng xuất ({user.name})</button>
          ) : (
            <button onClick={onLogin} className="btn-primary mt-3">Đăng nhập</button>
          )}
        </nav>
      )}
    </header>
  )
}
