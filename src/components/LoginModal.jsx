import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import TurtleLogo from './TurtleLogo'

// Đăng nhập giả lập – thay bằng POST /api/auth/login khi có backend
export default function LoginModal({ onClose }) {
  const { setUser } = useApp()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return setErr('Hãy cho Turtle biết tên của bạn.')
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr('Email chưa đúng định dạng.')
    setUser({ name: name.trim(), email })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-plum/40 p-5 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label="Đăng nhập">
      <form onSubmit={submit} onClick={(e) => e.stopPropagation()} className="page-in w-full max-w-sm rounded-3xl border border-gold/40 bg-ivory p-8 shadow-glow">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <TurtleLogo size={44} />
          <h2 className="text-3xl">Chào mừng trở lại</h2>
          <p className="text-sm text-plum/60">Đăng nhập để lưu nhật ký và lịch sử rút bài.</p>
        </div>
        <div className="space-y-3">
          <input className="input" placeholder="Tên của bạn" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
          <input className="input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {err && <p className="mt-3 text-sm text-[#a2566b]" role="alert">{err}</p>}
        <button className="btn-primary mt-6 w-full" type="submit">Đăng nhập</button>
        <button type="button" className="mt-3 w-full text-sm text-plum/55 hover:text-plum" onClick={onClose}>Để sau</button>
        <p className="mt-4 text-center text-[11px] text-plum/40">Chế độ demo – dữ liệu chỉ lưu trên trình duyệt này.</p>
      </form>
    </div>
  )
}
