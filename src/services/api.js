// Lớp truy cập dữ liệu. Hiện dùng mock + localStorage.
// Khi có backend Spring Boot, chỉ cần đổi thân các hàm sang request() bên dưới
// (ví dụ: GET /api/cards, POST /api/readings, GET /api/daily).
import { CARDS, getCard } from '../data/cards'
import { KNOWLEDGE } from '../data/content'

const BASE_URL = import.meta.env.VITE_API_URL || '/api'
// eslint-disable-next-line no-unused-vars
async function request(path, options) {
  const res = await fetch(`${BASE_URL}${path}`, { headers: { 'Content-Type': 'application/json' }, ...options })
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}

const delay = (ms = 450) => new Promise((r) => setTimeout(r, ms))

export const api = {
  async getCards() { await delay(); return CARDS },
  async getCard(id) { await delay(300); return getCard(id) || null },
  async getArticles() { await delay(250); return KNOWLEDGE },
}

// ---- Tiện ích dùng chung cho rút bài ----
export const todayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return Math.abs(h)
}

/** Lá bài gợi ý của ngày – cố định theo ngày (xem trước, trước khi người dùng rút). */
export function cardOfDay(key = todayKey()) {
  const h = hash(key)
  return { cardId: CARDS[h % CARDS.length].id, reversed: h % 5 === 0, date: key }
}

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const drawDeck = () => shuffle(CARDS.map((c) => ({ cardId: c.id, reversed: Math.random() < 0.3 })))
