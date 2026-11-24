import { createContext, useCallback, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)

const seedJournal = [
  {
    id: 'seed-1', createdAt: '2026-10-28T21:15:00', spreadId: 'ppf', question: 'Mình nên chú ý điều gì trong tháng tới?',
    cards: [
      { cardId: 'the-hermit', reversed: false, position: 'Quá khứ' },
      { cardId: 'the-star', reversed: false, position: 'Hiện tại' },
      { cardId: 'ace-of-cups', reversed: false, position: 'Tương lai' },
    ],
    note: 'Cảm giác nhẹ nhõm. Có lẽ mình cần cho bản thân thêm hy vọng.',
  },
  {
    id: 'seed-2', createdAt: '2026-11-02T08:40:00', spreadId: 'one', question: 'Thông điệp cho tuần mới?',
    cards: [{ cardId: 'strength', reversed: true, position: 'Thông điệp' }],
    note: '',
  },
]

export function AppProvider({ children }) {
  const [journal, setJournal] = useLocalStorage('mt.journal', seedJournal)
  const [daily, setDaily] = useLocalStorage('mt.daily', [])
  const [user, setUser] = useLocalStorage('mt.user', null)

  const addEntry = useCallback((entry) => {
    const e = { id: `e-${Date.now()}`, createdAt: new Date().toISOString(), note: '', ...entry }
    setJournal((j) => [e, ...j])
    return e
  }, [setJournal])
  const updateNote = useCallback((id, note) => setJournal((j) => j.map((e) => (e.id === id ? { ...e, note } : e))), [setJournal])
  const removeEntry = useCallback((id) => setJournal((j) => j.filter((e) => e.id !== id)), [setJournal])
  const addDaily = useCallback((rec) => setDaily((d) => [rec, ...d.filter((x) => x.date !== rec.date)]), [setDaily])

  const value = useMemo(
    () => ({ journal, addEntry, updateNote, removeEntry, daily, addDaily, user, setUser }),
    [journal, addEntry, updateNote, removeEntry, daily, addDaily, user, setUser],
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
